import data from "data/data";

export default function ExperienceList() {
  const { workexp } = data;

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm w-[360px]">
      {/* Header */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-[#27272a]">
        <p className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">
          Work Experience
        </p>
        <p className="text-[10px] text-[#52525b] mt-0.5">{workexp.length} positions</p>
      </div>

      {/* Scrollable list */}
      <div className="max-h-[380px] overflow-y-auto divide-y divide-[#27272a]">
        {workexp.map((exp, i) => (
          <div key={i} className="flex gap-3 px-4 py-3 hover:bg-[#27272a]/40 transition-colors">
            <a
              href={exp.photoLink.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src={exp.photoLink.src}
                alt={exp.photoLink.alt}
                className="w-8 h-8 rounded-md object-contain bg-white p-0.5"
              />
            </a>
            <div className="min-w-0">
              <p className="text-xs font-medium text-[#fafafa] leading-tight">{exp.title}</p>
              <p className="text-[10px] text-[#71717a] mt-0.5">
                {exp.company || exp.photoLink.alt} · {exp.duration}
              </p>
              <p className="text-[10px] text-[#52525b] mt-1 leading-relaxed line-clamp-2">
                {exp.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
