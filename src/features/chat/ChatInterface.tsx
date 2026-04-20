import { useState, useEffect, useRef, useCallback } from "react";
import type { Conversation, Message } from "@/types";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

interface ChatInterfaceProps {
  conversation: Conversation;
  cachedMessages: Message[] | null;
  onMessagesCached: (msgs: Message[]) => void;
  unavailableMessage?: string;
}

export default function ChatInterface({ conversation, cachedMessages, onMessagesCached, unavailableMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(
    () => cachedMessages || conversation.initialMessages
  );
  const [isTyping, setIsTyping] = useState(false);
  const [inputEnabled, setInputEnabled] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Cache initial messages on first mount
  useEffect(() => {
    if (!cachedMessages) {
      onMessagesCached(conversation.initialMessages);
    }
  }, [conversation.id]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || !inputEnabled) return;

    setInputValue("");
    setInputEnabled(false);

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", type: "text", content: text };
    setMessages((prev) => [...prev, userMsg]);

    await new Promise((r) => setTimeout(r, 600));
    setIsTyping(true);

    const response = conversation.getBotResponse(text);
    const typingMs = response.type === "experience" ? 2200 : 1400;
    await new Promise((r) => setTimeout(r, typingMs));

    setIsTyping(false);
    const botMsg: Message = { id: `b-${Date.now()}`, role: "bot", ...response };
    setMessages((prev) => {
      const updated = [...prev, botMsg];
      onMessagesCached(updated);
      return updated;
    });
    setInputEnabled(true);
  };

  return (
    <div className="flex flex-col flex-1 h-full min-w-0">
      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
        <div className="max-w-[860px] mx-auto space-y-4">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </div>

      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        disabled={!inputEnabled}
        unavailableMessage={unavailableMessage}
      />
    </div>
  );
}
