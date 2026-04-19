import { ExternalLink, Mail } from "lucide-react";
import profile from "assets/images/profile.jpg";
import data from "data/data";

export default function AboutCard() {
  const { name, job, email, workexp, links } = data;
  const current = workexp[0];

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm p-4 w-[320px]">
      {/* Profile row */}
      <div className="flex gap-3 items-center mb-3">
        <img
          src={profile}
          alt={name}
          className="w-14 h-14 rounded-full object-cover flex-shrink-0 ring-2 ring-yellow-400/40"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#fafafa] leading-tight">{name}</p>
          <p className="text-xs text-[#a1a1aa] mt-0.5 leading-tight">{current.title}</p>
          <p className="text-xs text-[#71717a] leading-tight">@ {current.company}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
        Software engineer with a Masters from CMU in Software Engineering. I build scalable
        customer-facing experiences at Amazon, have a background in AI/NLP research, and love
        open source robotics.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {["React", "TypeScript", "Python", "AWS", "NLP"].map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-[#27272a] text-[#a1a1aa] text-[10px] rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <a
          href={links.socials.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#27272a] hover:bg-[#3f3f46] text-[#a1a1aa] hover:text-[#fafafa] text-xs rounded-lg transition-colors"
        >
          <ExternalLink size={10} />
          LinkedIn
        </a>
        <a
          href={links.socials.github.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#27272a] hover:bg-[#3f3f46] text-[#a1a1aa] hover:text-[#fafafa] text-xs rounded-lg transition-colors"
        >
          <ExternalLink size={10} />
          GitHub
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-semibold rounded-lg transition-colors ml-auto"
        >
          <Mail size={10} />
          Contact
        </a>
      </div>
    </div>
  );
}
