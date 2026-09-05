import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
  unavailableMessage?: string;
}

export default function ChatInput({ value, onChange, onSend, disabled, unavailableMessage }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-[#27272a] bg-[#09090b] px-4 md:px-6 py-3 flex-shrink-0">
      <div className="flex gap-2 items-center relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={disabled ? "" : "Ask me anything — experience, skills, projects..."}
          className="flex-1 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-2.5 text-sm text-[#fafafa] placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] disabled:opacity-0 transition-all"
        />
        {disabled && unavailableMessage && (
          <p className="absolute inset-y-0 left-0 right-12 flex items-center px-4 text-xs text-[#71717a] pointer-events-none">
            {unavailableMessage}
          </p>
        )}
        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors flex-shrink-0"
        >
          <Send size={15} className="text-black" />
        </button>
      </div>
    </div>
  );
}
