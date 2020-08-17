import cmu from "assets/images/cmu_dogo.jpg";
import zup from "assets/images/zup.png";
import gaia from "assets/images/gaia_logo.png";
import ipu from "assets/images/ipu_logo.png";
import ddl from "assets/images/ddl.png";
import john from "assets/images/john.png";
import ublock from "assets/images/smart_lock.jpg";
import alexa from "assets/images/projects/aws-alexa.png";
import tartan from "assets/images/tartan_social_bot.png";
import jhu from "assets/images/projects/jhu-workshop.jpg";
import exploit from "assets/images/projects/exploits.jpg";
import malloc from "assets/images/projects/malloc.png";
import shell from "assets/images/projects/shell.png";
import cache from "assets/images/projects/cache.jpg";
import ssh from "assets/images/projects/vagrant.png";
import docker from "assets/images/projects/docker.jpg";
import anant from "assets/images/profile.jpg";

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
        src: john,
        alt: "The Johns Hopkins University",
        link:
          "https://www.clsp.jhu.edu/chaval-chat-dialogue-modeling-and-evaluation/",
      },
      title: "Graduate Student Researcher",
      company: "The Johns Hopkins University",
      duration: "June 2020 - Present",
      summary:
        "2020 Seventh Frederick Jelinek Memorial Summer Workshop is the seventh in a series of six-week-long research workshops on Machine Learning for Speech Language and Computer Vision Technology.",
    },
    {
      photoLink: CMUPhotoLink,
      title: "Graduate Research Assitant",
      company: "Carnegie Mellon University",
      duration: "Apr 2020 - Present",
      summary:
        "Improved in Tartan bot response time by introducing parallelism. Analysing user dialog intents using data programming",
    },
    {
      photoLink: {
        src: ddl,
        alt: "Digital Dream Labs",
        link: "https://www.digitaldreamlabs.com/",
      },
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
        "Working with Babs Carryer in Entrepreneurship and Innovation in Technology (14815). Mentored students on their “Apprentice Project” and “My Startup” projects.",
    },
    {
      photoLink: ZPUPhotoLink,
      title: "Lead Developer",
      company: "Zerone Microsystems",
      duration: "Nov 2018 - May 2019",
      summary:
        "Led the development of the initial version of ZUP payments. Created the swipe2.0 protcol for faster transfer of information within smartphone (Android and iOS).",
    },
    {
      photoLink: ZPUPhotoLink,
      title: "Senior Developer",
      duration: "Jul - Oct 2018",
      summary:
        "Scaled the Visitor Management System and Guest management Systems for 50% shorter query time. Added analytics dashboard to judge the trends and frequency of guests. Showcased our offerings in Nepal",
    },
    {
      photoLink: ZPUPhotoLink,
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
      photoLink: CMUPhotoLink,
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

  papers: [
    {
      title: "Ubiquitously controlled personalized smartlock",
      info: "2017 International Conference on I-SMAC",
      image: {
        src: ublock,
        alt: "Smart lock",
      },
      link: "https://ieeexplore.ieee.org/document/8058266",
    },

    {
      title:
        "Tartan: A Two-Tiered Dialog Framework For Multi-Domain Social Chitchat",
      info: "Socialbot Grand Challenge 3",
      image: {
        src: tartan,
        alt: "Tartan Socialbot",
      },
      link:
        "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexaprize/assets/challenge3/proceedings/CMU-Tartan.pdf",
    },
  ],

  mywork: {
    filters: ["Research", "Devops", "Labs", "FrontEnd"],
    projects: [
      {
        image: {
          src: alexa,
          alt: "Alexa prize",
        },
        name: "Alexa Prize Competition",
        info:
          "Improved the CMU Alexa chatbot's performance using parallelism and threading",
        group: ["research"],
        tags: ["aws", "python"],
      },
      {
        image: {
          src: jhu,
          alt: "JSALT 2020",
        },
        name: "Crowdsourced human conversation corpus | JSALT 2020",
        info:
          "Creating a service to collect user and chatbot conversation data.",
        group: ["research"],
        tags: ["aws", "python"],
      },
      {
        image: {
          src: exploit,
          alt: "Security exploits",
        },
        name: "Exploits",
        info:
          "Exploiting security vulnerability via code-injection and return-oriented-programming attacks",
        group: ["labs"],
        tags: ["c"],
      },
      {
        image: {
          src: cache,
          alt: "Cache",
        },
        name: "Cache simulation and optimization",
        info:
          "Simulated hardware cache hits and misses for a trace. Optimized matrix transpose function to reduce cache misses",
        group: ["labs"],
        tags: ["c"],
      },
      {
        image: {
          src: malloc,
          alt: "Memory allocation",
        },
        name: "Dynamic Storage Allocator",
        info:
          "Created my own version of the malloc, free, realloc and calloc functions",
        group: ["labs"],
        tags: ["c"],
      },
      {
        image: {
          src: shell,
          alt: "Linux shell",
        },
        name: "Linux shell",
        info:
          "Created my own version of linux shell that allows job control and I/O redirections",
        group: ["labs"],
        tags: ["c"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Kubernetes and Logstash Petclinic",
        info:
          "Run docker images of spring pet clinic on Kubernetes and use Logstash to save the logs",
        group: ["devops"],
        links: {
          github:
            "https://github.com/anant-kaushik/Petclinic-Kubernetes-and-Logstash",
        },
        tags: ["docker", "vagrant", "kubernetes", "logstash"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Kubernetes Petclinic",
        info: "Run docker images of spring pet clinic on Kubernetes",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/Petclinic-Kubernetes",
        },
        tags: ["docker", "vagrant", "kubernetes"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Nagios",
        info: "Nagios to monitor running virtual machines",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/vagrant-and-nagios",
        },
        tags: ["docker", "vagrant", "nagios"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Jenkins and Ansible Vault Petclinic",
        info:
          "Jenkins job to create pet clinic artifacts, deploy with ansible and use ansible valut to share ssh keys",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/Petclinic-Ansible-Vault",
        },
        tags: ["docker", "vagrant", "jenkins", "ansible"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Jenkins and Ansible Petclinic",
        info:
          "Jenkins job to create pet clinic artifacts and deploy with ansible",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/Petclinic-Jenkins-Ansible",
        },
        tags: ["docker", "vagrant", "jenkins", "ansible"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Jenkins and Sonarqube Petclinic",
        info:
          "Jenkins job to create pet clinic artifacts and static analysis with SonarCube",
        group: ["devops"],
        links: {
          github:
            "https://github.com/anant-kaushik/Petclinic-Jenkins-Sonarqube",
        },
        tags: ["docker", "vagrant", "jenkins", "sonarqube"],
      },
      {
        image: {
          src: docker,
          alt: "docker",
        },
        name: "Docker Petclinic",
        info: "Create and run docker images of spring pet clinic in a VMs",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/Petclinic-docker-vagrant",
        },
        tags: ["docker", "vagrant"],
      },
      {
        image: {
          src: ssh,
          alt: "SSH",
        },
        name: "SSH between two VM's",
        info: "Introduction to virtual machines and vagrant",
        group: ["devops"],
        links: {
          github: "https://github.com/anant-kaushik/Vagrant-and-ssh-vms",
        },
        tags: ["vagrant"],
      },

      {
        image: {
          src: anant,
          alt: "Website",
        },

        name: "Resume Website",
        info: "Creacted this website by converting HTML template to React",
        group: ["frontend"],
        links: {
          github: "https://github.com/anant-kaushik/anantkaushik.com",
        },
        tags: ["react"],
      },
    ],
  },
};

export default data;
