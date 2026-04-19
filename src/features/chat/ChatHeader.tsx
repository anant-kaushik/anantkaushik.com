import { Download } from "lucide-react";
import profile from "assets/images/profile.jpg";
import data from "data/data";
import resumePdf from "assets/resume/Resume.pdf";

export default function ChatHeader() {
  return (
    <header className="h-14 flex items-center border-b border-[#27272a] bg-[#09090b] px-6 flex-shrink-0">
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
            {data.workexp[0].title} · {data.workexp[0].company}
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
