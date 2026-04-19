import { ExternalLink, Link2 } from "lucide-react";
import { PROJECT_DETAILS } from "lib/conversations";

export default function ProjectCard({ projectId }: { projectId: string }) {
  const project = PROJECT_DETAILS[projectId];
  if (!project) return null;

  const { name, description, image, tags, badge, stats, links } = project;

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm w-[340px] overflow-hidden">
      {/* Banner image */}
      <div className="relative h-28 bg-[#27272a] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-80"
        />
        {/* Badge */}
        <span
          className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ color: badge.color, background: badge.bg }}
        >
          {badge.label}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-sm font-semibold text-[#fafafa] leading-tight mb-1.5">{name}</p>
        <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-[#27272a] rounded-lg overflow-hidden mb-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#18181b] px-2 py-2 text-center">
              <p className="text-xs font-bold text-yellow-400">{s.value}</p>
              <p className="text-[9px] text-[#52525b] mt-0.5 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#27272a] text-[#a1a1aa] text-[10px] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#27272a] hover:bg-[#3f3f46] text-[#a1a1aa] hover:text-[#fafafa] text-xs rounded-lg transition-colors w-fit"
          >
            <Link2 size={12} />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
