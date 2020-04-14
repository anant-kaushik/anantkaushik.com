import cmu from "assets/images/cmu_dogo.jpg";
import zup from "assets/images/zup.png";
import gaia from "assets/images/gaia_logo.png";
import ipu from "assets/images/ipu_logo.png";

const data = {
  name: "Anant Kaushik",
  job: "Masters Student",
  dob: "01 August 1996",
  email: "anantk@cs.cmu.edu",
  skype: "live:anantkaushik.me",

  skills: {
    top: [
      {
        title: "Web Development",
        desc:
          "Developed scalable web applications with the latest frameworks and technologies",
        icon: "flaticon-loading",
      },
      {
        title: "Mobile  Development ",
        desc:
          "Experienced in Android development using Java. Created multiple applications and SDK's",
        icon: "flaticon-responsive",
      },
    ],
    bottom: [
      {
        title: "System Architecture",
        desc:
          "Designing end-to-end scalable architecture. Currently studying scable systems and architecture",
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
      photoLink: {
        src: cmu,
        alt: "Carnegie Mellon University",
        link: "https://www.cmu.edu/",
      },
      title: "Graduate Teaching Assitant",
      company: "Carnegie Mellon University",
      duration: "Jan 2020 - Present",
      summary:
        "Working with Babs Carryer in Entrepreneurship and Innovation in Technology (14815). Mentored students on their “Apprentice Project” and “My Startup” projects.",
    },
    {
      photoLink: {
        src: zup,
        alt: "Zerone Microsystems Private Limited",
        link: "http://www.zup.cash",
      },
      title: "Lead Developer",
      company: "Zerone Microsystems",
      duration: "Nov 2018 - May 2019",
      summary:
        "Led the development of the initial version of ZUP payments. Created the swipe2.0 protcol for faster transfer of information within smartphone (Android and iOS).",
    },
    {
      photoLink: {
        src: zup,
        alt: "Zerone Microsystems Private Limited",
        link: "http://www.zup.cash",
      },
      title: "Senior Developer",
      duration: "Jul - Oct 2018",
      summary:
        "Scaled the Visitor Management System and Guest management Systems for 50% shorter query time. Added analytics dashboard to judge the trends and frequency of guests. Showcased our offerings in Nepal",
    },
    {
      photoLink: {
        src: zup,
        alt: "Zerone Microsystems Private Limited",
        link: "http://www.zup.cash",
      },
      title: "Software Engineer",
      duration: "Jun - Jul 2017",
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
      photoLink: {
        src: cmu,
        alt: "Carnegie Mellon University",
        link: "https://www.cmu.edu/",
      },
      university: "Carnegie Mellon University",
      level: "Masters",
      duration: "May 2019 - Present",
      summary:
        "Pursuing Masters in Software Engineering in School of Computer Science.",
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
