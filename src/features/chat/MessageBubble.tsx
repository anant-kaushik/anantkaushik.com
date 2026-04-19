import type { Message } from "@/types";
import AboutCard from "features/widgets/AboutCard";
import ExperienceList from "features/widgets/ExperienceList";
import EducationList from "features/widgets/EducationList";
import SkillsCard from "features/widgets/SkillsCard";
import ContactCard from "features/widgets/ContactCard";
import ProjectCard from "features/widgets/ProjectCard";

function BotAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-black flex-shrink-0 self-end mb-1">
      AK
    </div>
  );
}

function formatText(content: string) {
  return content.split("\n\n").map((block, i) => {
    const lines = block.split("\n").filter(Boolean);
    const isList = lines.every((l) => l.startsWith("• "));
    if (isList) {
      return (
        <ul key={i} className={`space-y-1.5 ${i > 0 ? "mt-2" : ""}`}>
          {lines.map((line, j) => (
            <li key={j} className="flex gap-2 items-start">
              <span className="text-yellow-400 flex-shrink-0 font-bold leading-relaxed">•</span>
              <span>{line.slice(2)}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className={i > 0 ? "mt-2" : ""}>
        {block}
      </p>
    );
  });
}

function BotTextBubble({ content }: { content: string }) {
  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
      <div className="text-sm text-[#a1a1aa] leading-relaxed">{formatText(content)}</div>
    </div>
  );
}

function BotWidget({ message }: { message: Message }) {
  switch (message.type) {
    case "about":
      return <AboutCard />;
    case "experience":
      return <ExperienceList />;
    case "education":
      return <EducationList />;
    case "skills":
      return <SkillsCard />;
    case "contact":
      return <ContactCard />;
    case "project":
      return <ProjectCard projectId={message.projectId!} />;
    case "text":
    default:
      return <BotTextBubble content={message.content!} />;
  }
}

export default function MessageBubble({ message }: { message: Message }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end">
        <div className="bg-yellow-400 text-black rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-xs shadow-sm">
          <p className="text-sm font-medium">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2.5">
      <BotAvatar />
      <BotWidget message={message} />
    </div>
  );
}
