export interface PhotoLink {
  src: string;
  alt: string;
  link?: string;
}

export interface Skill {
  title: string;
  desc: string;
  icon: string;
}

export interface WorkExperience {
  photoLink: PhotoLink;
  title: string;
  company?: string;
  duration: string;
  summary: string;
}

export interface Education {
  photoLink: PhotoLink;
  university: string;
  level: string;
  duration: string;
  summary: string;
}

export interface SiteData {
  name: string;
  headline: string;
  bio: string;
  email: string;
  skills: { top: Skill[]; bottom: Skill[] };
  workexp: WorkExperience[];
  eduexp: Education[];
  links: { socials: { linkedin: { href: string }; github: { href: string } } };
}

export interface ProjectDetail {
  name: string;
  description: string;
  image: string;
  tags: string[];
  badge: { label: string; color: string; bg: string };
  stats: { value: string; label: string }[];
  links: { github?: string };
}

export type MessageType =
  | "text"
  | "about"
  | "experience"
  | "education"
  | "skills"
  | "contact"
  | "project";

export interface Message {
  id: string;
  role: "user" | "bot";
  type: MessageType;
  content?: string;
  projectId?: string;
}

export interface BotResponse {
  type: MessageType;
  content?: string;
  projectId?: string;
}

export interface Conversation {
  id: string;
  title: string;
  preview: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  initialMessages: Message[];
  getBotResponse: (msg: string) => BotResponse;
}
