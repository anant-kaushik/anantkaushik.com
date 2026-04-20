import { Globe, Smartphone, Layers, Users, type LucideIcon } from "lucide-react";
import data from "data/data";

const ICONS: LucideIcon[] = [Globe, Smartphone, Layers, Users];

const TECH_TAGS = [
  "React", "TypeScript", "Node.js", "Python", "Java",
  "AWS", "Docker", "Kubernetes", "Android", "REST APIs",
];

export default function SkillsCard() {
  const allSkills = [...data.skills.top, ...data.skills.bottom];

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm w-[340px]">
      {/* Header */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-[#27272a]">
        <p className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">Skills</p>
      </div>

      {/* 2×2 grid */}
      <div className="grid grid-cols-2 gap-px bg-[#27272a] border-b border-[#27272a]">
        {allSkills.map((skill, i) => {
          const Icon = ICONS[i];
          return (
            <div key={i} className="bg-[#18181b] p-3">
              <div className="w-7 h-7 rounded-md bg-yellow-400/10 flex items-center justify-center mb-2">
                <Icon size={14} className="text-yellow-400" />
              </div>
              <p className="text-[11px] font-semibold text-[#fafafa] leading-tight mb-1">
                {skill.title}
              </p>
              <p className="text-[10px] text-[#71717a] leading-relaxed line-clamp-3">
                {skill.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tech tags */}
      <div className="px-4 py-3 flex flex-wrap gap-1.5">
        {TECH_TAGS.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-[#27272a] text-[#a1a1aa] text-[10px] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
