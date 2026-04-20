import type { BotResponse, Conversation, ProjectDetail } from "@/types";
import alexaImg from "assets/images/projects/aws-alexa.png";
import vectorImg from "assets/images/projects/vector.jpg";
import exploitImg from "assets/images/projects/exploits.jpg";
import kubeImg from "assets/images/projects/kube.jpg";
import airImg from "assets/images/projects/vector.jpg"; // closest available

const defaultResponses = [
  "Great question! Try asking about my experience, education, skills, or projects.",
  "You can also reach me directly at anantk@alumni.cmu.edu or connect on LinkedIn.",
  "Feel free to ask anything — or click a project in the sidebar to explore my work in depth.",
];
let defaultIdx = 0;
const nextDefault = () => defaultResponses[defaultIdx++ % defaultResponses.length];

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "alexa-prize": {
    name: "Alexa Prize Competition",
    description:
      "Improved the CMU Alexa socialbot's performance using parallelism and threading. Analysed user dialog intents using Snorkel data programming to train without manual annotation.",
    image: alexaImg,
    tags: ["AWS", "Python", "NLP", "Threading", "Snorkel"],
    badge: { label: "Research", color: "#60a5fa", bg: "#1e3a5f" },
    stats: [
      { value: "Top 3", label: "SGC3" },
      { value: "40%", label: "Faster" },
      { value: "CMU", label: "Team" },
    ],
    links: {},
  },
  "vector-web-setup": {
    name: "Vector Web Setup",
    description:
      "An open source browser-based tool to connect and configure the Vector robot via Web Bluetooth — replacing the deprecated proprietary phone app.",
    image: vectorImg,
    tags: ["Node.js", "Web Bluetooth", "BLE", "JavaScript"],
    badge: { label: "Open Source", color: "#4ade80", bg: "#1a3320" },
    stats: [
      { value: "OSS", label: "Open Source" },
      { value: "BLE", label: "Protocol" },
      { value: "DDL", label: "Company" },
    ],
    links: { github: "https://github.com/digital-dream-labs/vector-web-setup" },
  },
  airsign: {
    name: "AirSign — Hand & Gesture Recognition",
    description:
      "Real-time hand detection and gesture recognition from a standard webcam. Tracks 21 hand landmarks to reconstruct air signatures without any specialized hardware.",
    image: airImg,
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    badge: { label: "Open Source", color: "#c084fc", bg: "#2d1a3a" },
    stats: [
      { value: "RT", label: "Real-time" },
      { value: "21", label: "Landmarks" },
      { value: "0ms", label: "Server" },
    ],
    links: { github: "https://github.com/anant-kaushik/airsign" },
  },
  kubernetes: {
    name: "Kubernetes & DevOps Projects",
    description:
      "A series of progressively advanced DevOps projects deploying Spring PetClinic using Docker, Kubernetes, Jenkins CI/CD, Ansible configuration management, and Logstash log aggregation.",
    image: kubeImg,
    tags: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Logstash", "Vagrant"],
    badge: { label: "DevOps", color: "#38bdf8", bg: "#1a2535" },
    stats: [
      { value: "K8s", label: "Orchestration" },
      { value: "CI/CD", label: "Jenkins" },
      { value: "IaC", label: "Ansible" },
    ],
    links: { github: "https://github.com/anant-kaushik" },
  },
  security: {
    name: "Security Research & Systems",
    description:
      "Implemented code-injection and return-oriented-programming (ROP) attacks against real binaries, plus a dynamic memory allocator and a Unix shell with job control — all from CMU's 15-213.",
    image: exploitImg,
    tags: ["C", "x86 Assembly", "ROP", "GDB", "Memory Management"],
    badge: { label: "Systems", color: "#f87171", bg: "#2a1a1a" },
    stats: [
      { value: "ROP", label: "Exploits" },
      { value: "15-213", label: "CMU" },
      { value: "x86", label: "Assembly" },
    ],
    links: {},
  },
};

const makeMainResponse = (msg: string): BotResponse => {
  const q = msg.toLowerCase();
  if (/\b(experience|work|job|career|amazon|digital dream|zerone|gaia|role|history)\b/.test(q))
    return { type: "experience" };
  if (/\b(education|university|degree|school|cmu|carnegie|ipu|study|masters|bachelors)\b/.test(q))
    return { type: "education" };
  if (/\b(skill|tech|stack|language|framework|react|python|java|aws|docker)\b/.test(q))
    return { type: "skills" };
  if (/\b(contact|email|reach|hire|connect|linkedin|github)\b/.test(q))
    return { type: "contact" };
  if (/\b(about|yourself|who|introduce|background)\b/.test(q))
    return { type: "about" };
  if (/\b(project|portfolio|code|open.?source|alexa|vector|airsign|kube)\b/.test(q))
    return {
      type: "text",
      content:
        "I've built projects spanning AI/NLP (Alexa Prize), robotics (Vector Web Setup), gesture recognition (AirSign), DevOps (Kubernetes & Jenkins), and systems security. Click any project in the sidebar to dive deep into it!",
    };
  return { type: "text", content: nextDefault() };
};

const makeProjectResponse = (id: string) => (msg: string): BotResponse => {
  const q = msg.toLowerCase();
  if (/\b(link|github|code|repo|source)\b/.test(q)) {
    const proj = PROJECT_DETAILS[id];
    if (proj?.links?.github)
      return { type: "text", content: `Source code: ${proj.links.github}` };
    return {
      type: "text",
      content: "This project's source isn't public, but I'm happy to discuss any implementation details!",
    };
  }
  if (/\b(tech|stack|tool|language|framework|used|built)\b/.test(q))
    return {
      type: "text",
      content: "The full tech stack is shown on the project card above. Ask me anything specific about the implementation!",
    };
  return { type: "text", content: nextDefault() };
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "main",
    title: "About & Portfolio",
    preview: "Tell me about yourself...",
    icon: "MessageCircle",
    iconBg: "#ffc500",
    iconColor: "#000000",
    initialMessages: [
      { id: "m1", role: "user", type: "text", content: "Tell me about yourself" },
      { id: "m2", role: "bot", type: "about" },
      { id: "m3", role: "user", type: "text", content: "What experience do you have?" },
      { id: "m4", role: "bot", type: "experience" },
    ],
    getBotResponse: makeMainResponse,
  },
  {
    id: "alexa-prize",
    title: "Alexa Prize",
    preview: "How did you improve the CMU chatbot?",
    icon: "Mic",
    iconBg: "#1e3a5f",
    iconColor: "#60a5fa",
    initialMessages: [
      { id: "a1", role: "user", type: "text", content: "Tell me about the Alexa Prize project" },
      { id: "a2", role: "bot", type: "project", projectId: "alexa-prize" },
      { id: "a3", role: "user", type: "text", content: "What was your technical contribution?" },
      {
        id: "a4",
        role: "bot",
        type: "text",
        content:
          "My key contributions:\n\n• Introduced Python threading to parallelize dialog processing steps — cutting response latency by ~40%\n• Used Snorkel data programming to programmatically label thousands of user utterances without manual annotation\n• Integrated the concurrent pipeline into the live CMU socialbot used in Alexa's Socialbot Grand Challenge 3",
      },
    ],
    getBotResponse: makeProjectResponse("alexa-prize"),
  },
  {
    id: "vector-web-setup",
    title: "Vector Web Setup",
    preview: "Tell me about the open source robot tool",
    icon: "Cpu",
    iconBg: "#1a3320",
    iconColor: "#4ade80",
    initialMessages: [
      { id: "v1", role: "user", type: "text", content: "Tell me about Vector Web Setup" },
      { id: "v2", role: "bot", type: "project", projectId: "vector-web-setup" },
      { id: "v3", role: "user", type: "text", content: "Why did you build this?" },
      {
        id: "v4",
        role: "bot",
        type: "text",
        content:
          "Vector robots require a phone app for initial setup, but the official app was being deprecated. As part of my internship at Digital Dream Labs, I built this open source browser tool using Web Bluetooth (BLE) so users could configure their robots without relying on the proprietary app — keeping thousands of robots functional for the community.",
      },
    ],
    getBotResponse: makeProjectResponse("vector-web-setup"),
  },
  {
    id: "airsign",
    title: "AirSign",
    preview: "How does hand gesture recognition work?",
    icon: "Hand",
    iconBg: "#2d1a3a",
    iconColor: "#c084fc",
    initialMessages: [
      { id: "g1", role: "user", type: "text", content: "Tell me about AirSign" },
      { id: "g2", role: "bot", type: "project", projectId: "airsign" },
      { id: "g3", role: "user", type: "text", content: "How does the detection pipeline work?" },
      {
        id: "g4",
        role: "bot",
        type: "text",
        content:
          "AirSign uses MediaPipe Hands to detect 21 hand landmarks in real-time from a webcam. The landmark positions are analyzed each frame to recognize gesture patterns. For air signatures, it tracks the trajectory of the index fingertip across frames and reconstructs the path as a signature stroke — all running locally at ~30fps with no server calls.",
      },
    ],
    getBotResponse: makeProjectResponse("airsign"),
  },
  {
    id: "kubernetes",
    title: "Kubernetes Projects",
    preview: "Walk me through the DevOps stack",
    icon: "Layers",
    iconBg: "#1a2535",
    iconColor: "#38bdf8",
    initialMessages: [
      { id: "k1", role: "user", type: "text", content: "Walk me through your Kubernetes DevOps work" },
      { id: "k2", role: "bot", type: "project", projectId: "kubernetes" },
      { id: "k3", role: "user", type: "text", content: "What did the deployment pipeline look like?" },
      {
        id: "k4",
        role: "bot",
        type: "text",
        content:
          "Full pipeline: code commits trigger Jenkins jobs that build Spring PetClinic artifacts → Docker images are created → Ansible deploys to Vagrant VMs → Kubernetes orchestrates the containers. Logstash forwards application logs to Elasticsearch for aggregation. Ansible Vault encrypts SSH keys for secure, fully automated deployments.",
      },
    ],
    getBotResponse: makeProjectResponse("kubernetes"),
  },
  {
    id: "security",
    title: "Security Research",
    preview: "What security exploits did you work on?",
    icon: "Shield",
    iconBg: "#2a1a1a",
    iconColor: "#f87171",
    initialMessages: [
      { id: "s1", role: "user", type: "text", content: "Tell me about your security and systems work" },
      { id: "s2", role: "bot", type: "project", projectId: "security" },
      { id: "s3", role: "user", type: "text", content: "What did you learn from these projects?" },
      {
        id: "s4",
        role: "bot",
        type: "text",
        content:
          "These CMU 15-213 projects gave me deep understanding of how computers work at the lowest level — stack memory layout, calling conventions, how compilers emit code, and critically how attackers exploit these mechanisms. Understanding how to break systems makes you a significantly better defensive engineer. The malloc lab also gave me strong intuition for memory allocator design trade-offs between utilization and throughput.",
      },
    ],
    getBotResponse: makeProjectResponse("security"),
  },
];
