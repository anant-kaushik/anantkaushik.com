import { Mail, ExternalLink, Download, type LucideIcon } from "lucide-react";
import data from "data/data";
import resumePdf from "assets/resume/Resume.pdf";

export default function ContactCard() {
  const { email, links } = data;

  const rows: { icon: LucideIcon; label: string; value: string; href: string }[] = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "linkedin.com/in/anantkas",
      href: links.socials.linkedin.href,
    },
    {
      icon: ExternalLink,
      label: "GitHub",
      value: "github.com/anant-kaushik",
      href: links.socials.github.href,
    },
  ];

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm w-[300px]">
      {/* Header */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-[#27272a]">
        <p className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">
          Get in Touch
        </p>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#27272a]">
        {rows.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#27272a]/60 transition-colors group"
          >
            <div className="w-7 h-7 rounded-md bg-[#27272a] flex items-center justify-center flex-shrink-0">
              <Icon size={13} className="text-[#a1a1aa] group-hover:text-yellow-400 transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] text-[#52525b]">{label}</p>
              <p className="text-xs text-[#a1a1aa] group-hover:text-[#fafafa] truncate transition-colors">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Resume download */}
      <div className="px-4 py-3">
        <a
          href={resumePdf}
          download="Anant_Kaushik_Resume.pdf"
          className="flex items-center justify-center gap-2 w-full py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold rounded-lg transition-colors"
        >
          <Download size={12} />
          Download Resume
        </a>
      </div>
    </div>
  );
}
