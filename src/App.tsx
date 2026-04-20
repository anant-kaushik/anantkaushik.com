import { useState, useCallback } from "react";
import type { Message } from "@/types";
import { CONVERSATIONS } from "lib/conversations";
import Sidebar from "features/sidebar/Sidebar";
import ChatInterface from "features/chat/ChatInterface";

const CHAT_DISABLED_MESSAGE = "Chat is temporarily unavailable — we're fixing the assistant. Check back soon.";

export default function App() {
  const [activeId, setActiveId] = useState("main");
  const [msgCache, setMsgCache] = useState<Record<string, Message[]>>({});
  const [mainNonce, setMainNonce] = useState(0);

  const handleConversationSelect = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const handleNewChat = useCallback(() => {
    setMsgCache((prev) => {
      const next = { ...prev };
      delete next.main;
      return next;
    });
    setActiveId("main");
    setMainNonce((n) => n + 1);
  }, []);

  const handleMessagesCached = useCallback((conversationId: string, messages: Message[]) => {
    setMsgCache((prev) => ({ ...prev, [conversationId]: messages }));
  }, []);

  const activeConversation = CONVERSATIONS.find((c) => c.id === activeId)!;
  const chatKey = activeId === "main" ? `main-${mainNonce}` : activeId;

  return (
    <div className="flex h-screen bg-[#09090b] overflow-hidden">
      <Sidebar
        conversations={CONVERSATIONS}
        activeId={activeId}
        onSelect={handleConversationSelect}
        onNewChat={handleNewChat}
        newChatDisabled
      />
      <ChatInterface
        key={chatKey}
        conversation={activeConversation}
        cachedMessages={msgCache[activeId] || null}
        onMessagesCached={(msgs) => handleMessagesCached(activeId, msgs)}
        unavailableMessage={CHAT_DISABLED_MESSAGE}
      />
    </div>
  );
}
