import type { SiteData } from "@/types";
import cmu from "assets/images/cmu_dogo.jpg";
import zup from "assets/images/zup.png";
import gaia from "assets/images/gaia_logo.png";
import ipu from "assets/images/ipu_logo.png";
import ddl from "assets/images/ddl.png";
import azm from "assets/images/amazon.png";
import john from "assets/images/john.png";

const ZPUPhotoLink = {
  src: zup,
  alt: "Zerone Microsystems Private Limited",
  link: "http://zeronemicrosystems.com/",
};

const CMUPhotoLink = {
  src: cmu,
  alt: "Carnegie Mellon University",
  link: "https://www.cmu.edu/",
};

const DDLPhotoLink = {
  src: ddl,
  alt: "Digital Dream Labs",
  link: "https://www.digitaldreamlabs.com/",
};

const AmazonPhotoLink = {
  src: azm,
  alt: "Amazon.com",
  link: "https://amazon.com/",
};

const data: SiteData = {
  name: "Anant Kaushik",
  headline: "Software Engineer building AI-powered CX at Amazon",
  bio: "Software Engineer with a Master's in Software Engineering from Carnegie Mellon. I build scalable, customer-facing systems at Amazon, with a research background in AI/NLP and a passion for open source robotics.",
  email: "anantk@alumni.cmu.edu",

  skills: {
    top: [
      {
        title: "Web Development",
        desc: "Developed scalable web applications with the latest frameworks and technologies",
        icon: "flaticon-loading",
      },
      {
        title: "Mobile  Development ",
        desc: "Experienced in Android development using Java. Created multiple applications and SDK's",
        icon: "flaticon-responsive",
      },
    ],
    bottom: [
      {
        title: "System Architecture",
        desc: "Designing end-to-end scalable architecture. Currently studying scable systems and architecture",
        icon: "flaticon-planning",
      },
      {
        title: "Team Management",
        desc: "Experienced in managing team using agile processes like scrum",
        icon: "flaticon-brainstorming",
      },
    ],
  },

  workexp: [
    {
      photoLink: AmazonPhotoLink,
      title: "Software Development Engineer II",
      company: "Amazon",
      duration: "Apr 2025 - Present",
      summary:
        "Partnered with a Principal Engineer to prototype a streaming agentic customer service experience, demoed to the Amazon Stores CEO and recognized with the Amazon One CS Award. Architected a reusable UI framework pairing workflow responses with interactive widgets for in-app issue resolution, driving adoption across multiple CS orgs and $150M+ in annualized cost savings. Built AI-powered internal tooling that cut average development cycle time by 80%, and agentic overnight code-review jobs that flagged 500+ code-quality issues across the team's services.",
    },
    {
      photoLink: AmazonPhotoLink,
      title: "Software Development Engineer I",
      company: "Amazon",
      duration: "Oct 2022 - Mar 2025",
      summary:
        "Launched Message Us, Amazon Stores' primary automated customer service platform, in 4 new international marketplaces. Built customer-facing self-service tools that deflected 64K+ unique contacts from customer service associates. Rebuilt the Customer Service Home Page — the highest-traffic customer-facing surface in CS Home — authoring React/Jotai guidelines and onboarding incoming SDEs. Drove accessibility compliance across the surface to meet EU Accessibility Act (EAA) requirements.",
    },
    {
      photoLink: DDLPhotoLink,
      title: "Software Team Lead",
      company: "Digital Dream Labs",
      duration: "Oct 2021 - Sep 2022",
      summary:
        "Led the cross-functional relaunch of a consumer robot, coordinating changes across mobile app, firmware, and SDK codebases to clear a large preorder backlog and ship to customers on schedule.",
    },
    {
      photoLink: DDLPhotoLink,
      title: "Senior Software Developer",
      company: "Digital Dream Labs",
      duration: "Feb 2021 - Sep 2021",
      summary:
        "Built a Jenkins continuous delivery pipeline automating test, package, and deploy across multiple services, eliminating manual release toil. Open-sourced an npm package (vector-web-setup) adopted by the Vector maker community to save, sign, and distribute custom firmware OTAs.",
    },

    {
      photoLink: CMUPhotoLink,
      title: "Graduate Teaching Assitant",
      company: "Carnegie Mellon University",
      duration: "Aug 2020 - Dec 2020",
      summary:
        "Assisted Babs Carryer in AI Innovation (11654), teaching basics of innovation and starting and building a new venture using AI.",
    },
    {
      photoLink: {
        src: john,
        alt: "The Johns Hopkins University",
        link: "https://www.clsp.jhu.edu/chaval-chat-dialogue-modeling-and-evaluation/",
      },
      title: "Graduate Student Researcher",
      company: "The Johns Hopkins University",
      duration: "June 2020 - Dec 2020",
      summary:
        "2020 Seventh Frederick Jelinek Memorial Summer Workshop is the seventh in a series of six-week-long research workshops on Machine Learning for Speech Language and Computer Vision Technology.",
    },
    {
      photoLink: CMUPhotoLink,
      title: "Graduate Research Assitant",
      company: "Carnegie Mellon University",
      duration: "Apr 2020 - Dec 2020",
      summary:
        "Improved Tartan bot's response time by introducing concurrency. Analysed user dialog intents using data programming",
    },
    {
      photoLink: DDLPhotoLink,
      title: "SDE Intern",
      company: "Digital Dream Labs",
      duration: "May 2020 - Aug 2020",
      summary:
        "Developed an open source web interface to connect and update vector robot",
    },
    {
      photoLink: CMUPhotoLink,
      title: "Graduate Teaching Assitant",
      company: "Carnegie Mellon University",
      duration: "Jan 2020 - May 2020",
      summary:
        "Assisted professor in Entrepreneurship and Innovation in Technology (14815) in Spring 2020. Mentored students on “Apprentice Project” and “Mock Startup” projects. Participated in Investors meeting at Blue Tree Allied angels.",
    },
    {
      photoLink: ZPUPhotoLink,
      title: "Lead Developer",
      company: "Zerone Microsystems",
      duration: "Nov 2018 - May 2019",
      summary:
        "Designed and shipped a BLE Swipe protocol enabling cross-platform iOS↔Android data exchange via a physical swipe gesture, a hardware-free alternative to NFC and 30% faster than the prior version. Led development of the first version of ZeronePay (formerly CardSe), turning a phone into a payment terminal or tap-to-pay card.",
    },
    {
      photoLink: ZPUPhotoLink,
      title: "Senior Developer",
      duration: "Jul - Oct 2018",
      summary:
        "Scaled the Visitor Management System and Guest Management Systems for 50% shorter query time over 10,000 entries. Added analytics dashboard to judge the trends and frequency of guests. Showcased our offerings in Nepal",
    },
    {
      photoLink: ZPUPhotoLink,
      title: "Software Engineer",
      duration: "Jun 2017 - Jul 2018",
      summary:
        "Developed multiple prototypes from the base technology on Android Platform. Created Visitor Management and Guest Management web portals and mobile application. ",
    },
    {
      photoLink: {
        src: gaia,
        alt: "Gaia Smart Cities",
        link: "https://www.gaia.in/index.html",
      },
      title: "Software Engineer Intern",
      company: "Gaia Smart Cities",
      duration: "Jun - Jul 2016",
      summary:
        "Developed an Android application for a prototype smart scale. Mentored fellow developers on Android applications",
    },
  ],

  eduexp: [
    {
      photoLink: CMUPhotoLink,
      university: "Carnegie Mellon University",
      level: "Masters",
      duration: "May 2019 - Dec 2020",
      summary: "Masters in Software Engineering in School of Computer Science",
    },
    {
      photoLink: {
        src: ipu,
        alt: "Guru Gobind Singh Indraprastha University ",
        link: "http://www.ipu.ac.in/",
      },
      university: "Guru Gobind Singh IPU",
      level: "Bachelor's",
      duration: "Aug 2013 - Jul 2017",
      summary:
        "Graduated in first division in Computer Science and Engineering",
    },
  ],

  links: {
    socials: {
      linkedin: {
        href: "https://www.linkedin.com/in/anantkas/",
      },
      github: {
        href: "https://github.com/anant-kaushik",
      },
    },
  },
};

export default data;
