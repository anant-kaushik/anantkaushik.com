import * as Icons from "lucide-react";
import type { Conversation } from "@/types";
import { cn } from "lib/utils";

interface SidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
  onNewChat: () => void;
  newChatDisabled?: boolean;
}

export default function Sidebar({ conversations, activeId, onSelect, onNewChat, newChatDisabled }: SidebarProps) {
  const mainConv = conversations[0];
  const projectConvs = conversations.slice(1);

  return (
    <aside className="w-[260px] h-full flex flex-col bg-[#0d0d0f] border-r border-[#27272a] flex-shrink-0">
      {/* Brand header */}
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-[#27272a]">
        <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-xs">A</span>
        </div>
        <span className="text-sm font-semibold text-[#fafafa] flex-1 min-w-0 truncate">
          Anant Kaushik
        </span>
        <button
          onClick={onNewChat}
          disabled={newChatDisabled}
          className="w-7 h-7 rounded-md bg-[#27272a] hover:bg-[#3f3f46] flex items-center justify-center transition-colors flex-shrink-0 disabled:opacity-40 disabled:hover:bg-[#27272a] disabled:cursor-not-allowed"
          title={newChatDisabled ? "New chat unavailable" : "New chat"}
        >
          <Icons.SquarePen size={13} className="text-[#a1a1aa]" />
        </button>
      </div>

      {/* Conversation list */}
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
        {/* Main conversation */}
        <ConversationItem
          conv={mainConv}
          isActive={activeId === mainConv.id}
          onSelect={onSelect}
        />

        {/* Projects section */}
        <div className="pt-3 pb-1 px-2">
          <p className="text-[10px] font-bold text-[#52525b] tracking-widest uppercase">
            Projects
          </p>
        </div>
        {projectConvs.map((conv) => (
          <ConversationItem
            key={conv.id}
            conv={conv}
            isActive={activeId === conv.id}
            onSelect={onSelect}
          />
        ))}
      </nav>
    </aside>
  );
}

interface ConversationItemProps {
  conv: Conversation;
  isActive: boolean;
  onSelect: (id: string) => void;
}

function ConversationItem({ conv, isActive, onSelect }: ConversationItemProps) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[conv.icon] || Icons.MessageCircle;
  return (
    <button
      onClick={() => onSelect(conv.id)}
      className={cn(
        "w-full flex items-start gap-2.5 px-2.5 py-2 rounded-lg transition-colors text-left",
        isActive ? "bg-[#27272a]" : "hover:bg-[#18181b]"
      )}
    >
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ backgroundColor: conv.iconBg }}
      >
        <Icon size={13} style={{ color: conv.iconColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            "text-xs font-medium truncate",
            isActive ? "text-[#fafafa]" : "text-[#a1a1aa]"
          )}
        >
          {conv.title}
        </p>
        <p className="text-[11px] text-[#52525b] truncate mt-0.5">{conv.preview}</p>
      </div>
    </button>
  );
}
