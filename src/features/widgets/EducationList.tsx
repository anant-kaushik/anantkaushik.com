import data from "data/data";

export default function EducationList() {
  const { eduexp } = data;

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm w-[340px]">
      {/* Header */}
      <div className="px-4 pt-3.5 pb-2.5 border-b border-[#27272a]">
        <p className="text-xs font-semibold text-[#fafafa] uppercase tracking-wider">Education</p>
      </div>

      {/* Entries */}
      <div className="divide-y divide-[#27272a]">
        {eduexp.map((edu, i) => (
          <div key={i} className="flex gap-3 px-4 py-3.5">
            <a
              href={edu.photoLink.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src={edu.photoLink.src}
                alt={edu.photoLink.alt}
                className="w-10 h-10 rounded-md object-contain bg-white p-0.5"
              />
            </a>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#fafafa] leading-tight">{edu.university}</p>
              <p className="text-[10px] text-yellow-400 mt-0.5 font-medium">{edu.level}</p>
              <p className="text-[10px] text-[#71717a] mt-0.5">{edu.duration}</p>
              <p className="text-[10px] text-[#a1a1aa] mt-1.5 leading-relaxed">{edu.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
