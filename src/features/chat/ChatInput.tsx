import { Send } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled: boolean;
}

export default function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-[#27272a] bg-[#09090b] px-6 py-3 flex-shrink-0">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={disabled ? "" : "Ask me anything — experience, skills, projects..."}
          className="flex-1 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-2.5 text-sm text-[#fafafa] placeholder-[#52525b] focus:outline-none focus:border-[#3f3f46] disabled:opacity-0 transition-all"
        />
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
