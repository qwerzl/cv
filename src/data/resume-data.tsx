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
  name: "Tom Tang",
  initials: "TT",
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
        url: "https://unsplash.com/",
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
      description: "@nuxt/fonts Co-Maintainer",
      start: "2024",
      end: "Present",
    },
    {
      name: "Unsplash Artist",
      description: "Rendering and photography, 460k+ Views",
      start: "2023",
      end: "Present",
    },
    {
      name: "Open Source Contributor",
      description: "Contributing to 10+ open source projects",
      start: "2021",
      end: "Present",
    },
    {
      name: "Hardware Engineer",
      description: "Dealt with ESP32, Arduino, tons of circuits...",
      start: "2023",
      end: "Present",
    },
    {
      name: "Leader at Computerization",
      description: "Leading the Enspire project at SWFLA (Till present, actually)",
      start: "2023",
      end: "2024",
    },
    {
      name: "Co-Leader at Techomedia",
      description: "Organized TEDxSWFLA, Oridebate (School-wide debate competition), and more",
      start: "2023",
      end: "2024",
    },
    {
      name: "Core Member at MoDi",
      description: "Took part in our Shanghai Ancient Architecture Preservation Project - Scanned historical buildings like Xujiahui Cathedral into 3D models",
      start: "2023",
      end: "2024",
    },
  ],

  awards: [
    {
      name: "HiMCM Meritorous",
      description: "Team leader",
    },
    {
      name: "USACO Platinum",
      description: "Algorithms all the way",
    },
    {
      name: "AMC Top 5% Distinction",
      description: "Math!",
    },
    {
      name: "AIME 9 Points",
      description: "Not an award, but pretty proud of it",
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
      description: "Make CAS life great again in SWFLA",
      link: {
        label: "github.com/computerization/enspire",
        href: "https://github.com/computerization/enspire",
      },
    },
    {
      title: "Claw",
      techStack: ["Interactive Arts", "Installation Arts", "Embedded", "ESP32"],
      description:
        "Installation art that reacts to the relationship between Theology, Philosophy and Science",
      link: {
        label: "github.com/qwerzl/claw",
        href: "https://github.com/qwerzl/claw",
      },
    },
    {
      title: "Nuxt Fonts",
      techStack: ["Nuxt.js", "Typescript"],
      description:
        "Plug-and-play web font optimization and configuration for Nuxt apps.",
      link: {
        label: "github.com",
        href: "https://github.com/nuxt/fonts/",
      },
    },
    {
      title: "MindSki",
      techStack: ["Three.js", "EEG", "Game"],
      description: "Skiing game controlled by your mind to reach a level of attention using EEG",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "YAAMRPC",
      techStack: ["C++"],
      description:
        "Yet another Discord Rich Presence tool for Apple Music",
      link: {
        label: "github.com/qwerzl/Yet-Another-AppleMusicRPC",
        href: "https://github.com/qwerzl/Yet-Another-AppleMusicRPC",
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
