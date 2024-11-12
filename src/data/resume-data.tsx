import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, UnsplashIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Weicheng Tang",
  initials: "WT",
  location: "Shanghai, China",
  locationLink: "https://www.google.com/maps/place/Shanghai",
  avatarUrl: "https://avatars.githubusercontent.com/u/46770502?v=4",
  personalWebsiteUrl: "https://qwerzl.me",
  contact: {
    email: "me@qwerzl.me",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/qwerzl",
        icon: GitHubIcon,
      },
      {
        name: "Unsplash",
        url: "https://unsplash.com/@qwerzl",
        icon: UnsplashIcon,
      },
    ],
  },
  education: [
    {
      school: "Shanghai World Foreign Language Academy",
      degree: "IB Diploma Programme",
      start: "2022",
      end: "2025",
    },
  ],

  skills: [
    "JavaScript",
    "TypeScript",
    "Visual arts",
    "Vue/Nuxt",
    "Interactive Media",
    "GraphQL",
    "Embedded Devices",
  ],

  extracurriculars: [
    {
      name: "Nuxt.js Member",
      description: "A team developing open-source website frameworks used by millions including Google, OpenAI and NASA.",
      start: "2024",
      end: "Present",
      link: "https://github.com/nuxt"
    },
    {
      name: "Unsplash Artist",
      description: "Rendering and photography, 550k+ Views",
      start: "2023",
      end: "Present",
      link: "https://unsplash.com/@qwerzl"
    },
    {
      name: "Open Source Contributor",
      description: "Contributing to 10+ open source projects",
      start: "2021",
      end: "Present",
      link: "https://github.com/qwerzl"
    },
    {
      name: "Hardware Engineer",
      description: "Dealt with ESP32, Arduino, tons of circuits...",
      start: "2023",
      end: "Present",
      link: "https://github.com/qwerzl"
    },
    {
      name: "Leader at Computerization",
      description: "Leading the Enspire project at SWFLA (Till present, actually)",
      start: "2023",
      end: "2024",
      link: "https://github.com/computerization"
    },
    {
      name: "Co-Leader at Techomedia",
      description: "Organized TEDxSWFLA, Oridebate (School-wide debate competition), and more",
      start: "2023",
      end: "2024",
      link: "",
    },
    {
      name: "Core Member at MoDi",
      description: "Took part in our Shanghai Ancient Architecture Preservation Project - Scanned historical buildings like Xujiahui Cathedral into 3D models",
      start: "2023",
      end: "2024",
      link: "",
    },
  ],

  awards: [
    {
      name: "HiMCM Meritorous",
      description: "The High School Mathematical Contest in Modeling. Team leader.",
      link: "https://www.comap.com/contests/himcm-midmcm"
    },
    {
      name: "USACO Platinum",
      description: "USA Computing Olympiad. Platinum is the highest stage.",
      link: "https://usaco.org/"
    },
    {
      name: "AMC Top 5% Distinction",
      description: "American Math Competition. Math!",
      link: "https://maa.org/student-programs/amc/"
    },
    {
      name: "AIME 9 Points",
      description: "American Invitational Mathematics Examination.",
      link: "https://maa.org/maa-invitational-competitions/"
    }
  ],

  projects: [
    {
      title: "Enspire",
      techStack: [
        "Computerization",
        "TypeScript",
        "Nuxt.js",
      ],
      description: "On-Campus Information Management System for club leaders",
      link: {
        label: "github.com/computerization/enspire",
        href: "https://github.com/computerization/enspire",
      },
    },
    {
      title: "MindSki",
      techStack: ["Three.js", "EEG", "Game"],
      description: "Skiing game to help players understand and train their ability to concentrate using EEG Devices",
      link: {
        label: "ski.qwerzl.me",
        href: "https://ski.qwerzl.me",
      },
    },
    {
      title: "Claw",
      techStack: ["Interactive Arts", "Installation Arts", "Embedded", "ESP32"],
      description:
        "Installation art that reacts to the relationship between Theology, Philosophy and Science",
      link: {
        label: "untitled.lol/portfolio/claw/",
        href: "https://untitled.lol/portfolio/claw/",
      },
    },
    {
      title: "Nuxt Fonts",
      techStack: ["Nuxt.js", "Typescript"],
      description:
        "Plug-and-play web font optimization and configuration for Nuxt apps.",
      link: {
        label: "github.com/nuxt/fonts/",
        href: "https://github.com/nuxt/fonts/",
      },
    },
    {
      title: "Docusaurus",
      techStack: ["React", "Typescript"],
      description:
        "Created a few pull requests",
      link: {
        label: "docusaurus.io",
        href: "https://docusaurus.io/",
      },
    },
  ],
} as const;
