import { Download, Menu } from "lucide-react";
import profile from "assets/images/profile.jpg";
import data from "data/data";
import resumePdf from "assets/resume/Resume.pdf";

interface ChatHeaderProps {
  onOpenSidebar?: () => void;
}

export default function ChatHeader({ onOpenSidebar }: ChatHeaderProps) {
  return (
    <header className="h-14 flex items-center border-b border-[#27272a] bg-[#09090b] px-4 md:px-6 flex-shrink-0">
      <button
        onClick={onOpenSidebar}
        aria-label="Open menu"
        className="w-8 h-8 -ml-1 mr-1 rounded-md hover:bg-[#18181b] flex items-center justify-center transition-colors flex-shrink-0 md:hidden"
      >
        <Menu size={18} className="text-[#a1a1aa]" />
      </button>

      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="relative flex-shrink-0">
          <img
            src={profile}
            alt={data.name}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#09090b]" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#fafafa] truncate">{data.name}</p>
          <p className="text-xs text-[#71717a] truncate">
            {data.headline}
          </p>
        </div>
      </div>

      <a
        href={resumePdf}
        download="Anant_Kaushik_Resume.pdf"
        className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold rounded-lg transition-colors flex-shrink-0"
      >
        <Download size={13} />
        Resume
      </a>
    </header>
  );
}
