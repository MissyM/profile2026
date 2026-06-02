// All portfolio content lives here, separate from the UI.
// Edit this file to update the site — components read from it.

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
};

export type SocialLink = {
  label: string;
  href: string;
  // icon key resolved in the UI
  icon: "github" | "mail" | "linkedin";
};

export const profile = {
  name: "Milena Cabrera Patiño",
  role: "Frontend Software Engineer",
  // Short hero tagline
  tagline:
    "I build scalable, high-performance web and hybrid apps with React, Next.js & TypeScript.",
  location: "Popayán, Cauca · Colombia",
  email: "mcabrerapatino@gmail.com",
  github: "https://github.com/MissyM",
  githubHandle: "MissyM",
  // Add your LinkedIn URL here when ready, then it shows up automatically.
  linkedin: "",
  resumeFile: "/Milena-Cabrera-Resume.pdf",
  // Drop a square photo at public/profile.jpg to replace the initials avatar.
  photo: "/profile.jpg",
};

export const summary =
  "Frontend Engineer with 8+ years of experience delivering high-quality web and hybrid applications using React.js, JavaScript, and modern development tooling. Adept at creating scalable, maintainable solutions for fintech, education, and mobility. Proven ability to work across multiple repositories and platforms, delivering cross-functional features with strong attention to performance and UX. Experienced in collaborating with multidisciplinary teams and driving frontend strategy for complex ecosystems.";

export const stats: { value: string; label: string }[] = [
  { value: "8+", label: "Years of experience" },
  { value: "33+", label: "Repositories shipped" },
  { value: "3", label: "LATAM markets (CL · BR · AR)" },
  { value: "3", label: "Domains: fintech · edu · mobility" },
];

export const experience: Experience[] = [
  {
    company: "Mercado Libre — Mercado Pago",
    role: "Software Engineer",
    period: "2023 — 2025",
    location: "Remote",
    highlights: [
      "Led frontend development of React.js flows for Mercado Pago POS devices (datafónos), with interfaces deployed as embedded WebViews in Android using WebKit.",
      "Delivered production-ready features across 33+ repositories, including Bluetooth pairing, amount authorization, user confirmation, and payment capture.",
      "Built dynamic, cross-platform UIs for real-time device communication using React.js and Mercado Pago APIs.",
      "Supported product expansion from Chile to Brazil and Argentina through localized UI/UX and platform adaptability.",
      "Created hardware-in-the-loop testing environments with QA and DevOps for robust validation.",
    ],
  },
  {
    company: "Celerik",
    role: "Middle Software Developer",
    period: "2022 — 2023",
    location: "Remote",
    highlights: [
      "Built a PM assistant chat interface using Microsoft Power Apps and PCF (PowerApps Component Framework) with custom React.js components.",
      "Contributed to the Abacus financial app: created forms, implemented validations, and integrated Axios for RESTful services.",
      "Delivered education-focused React.js and React Native features for a Texas-based museum application.",
      "Handled testing and debugging of a language-learning mobile app.",
      "Developed a public transport route interface for FlowOS using Redux and React.js.",
      "Led the UI development of the Wallie app-store platform using Next.js and Tailwind CSS.",
    ],
  },
  {
    company: "Upwork — Freelance",
    role: "Frontend Developer",
    period: "2020 — 2021",
    location: "Remote",
    highlights: [
      "Built modular section components for a Landing Page Generator.",
      "Performed code reviews across GitHub and GitLab.",
      "Authored Storybook documentation for an open-source UI library.",
    ],
  },
  {
    company: "OmniLatam",
    role: "Jr. Frontend Developer",
    period: "2019 — 2020",
    location: "Bogotá",
    highlights: [
      "Developed Angular-based UI components integrated with backend APIs.",
      "Reviewed and optimized code quality; mentored new developers.",
      "Enhanced feature robustness through bug resolution and UI refinement.",
    ],
  },
  {
    company: "Fundación Universitaria de Popayán",
    role: "Full-stack Web Developer",
    period: "2018 — 2019",
    location: "Popayán",
    highlights: [
      "Built a desktop application for teachers using Electron and Node.js.",
      "Developed and integrated custom API solutions for a Node.js backend.",
      "Created smooth animations and transitions for an enhanced user experience with CSS and React.",
      "Managed the development lifecycle and gathered requirements for product features.",
    ],
  },
  {
    company: "Appsus — Inventory Software",
    role: "Frontend Developer",
    period: "2017 — 2018",
    location: "Remote",
    highlights: [
      "Developed a JavaScript-based point-of-sale application for restaurants.",
      "Created components using a proprietary JavaScript framework and React.",
    ],
  },
  {
    company: "Universidad Remington",
    role: "Professor",
    period: "2016 — 2017",
    location: "Popayán",
    highlights: [
      "Taught Requirements Engineering Process, Application Architecture Planning, and Web Application Development.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux / Redux Toolkit",
      "Next.js",
      "React Native",
      "Node.js",
    ],
  },
  {
    label: "UI & Styling",
    items: ["HTML5", "CSS3", "Sass", "Less", "Tailwind CSS", "MUI", "CSS-in-JS"],
  },
  {
    label: "Build & Tools",
    items: [
      "Webpack",
      "Babel",
      "Vite",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Azure DevOps",
      "Gerrit",
    ],
  },
  {
    label: "Testing",
    items: ["Jest", "React Testing Library", "Storybook"],
  },
  {
    label: "Project Management",
    items: ["Jira", "Trello", "Azure Boards", "Agile (Scrum / Kanban)"],
  },
  {
    label: "Design & Prototyping",
    items: ["Figma", "Sketch"],
  },
  {
    label: "Other",
    items: [
      "PCF (PowerApps)",
      "SSR",
      "REST API integration",
      "Bluetooth / NFC POS",
      "Performance profiling",
      "Security best practices",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Mercado Pago POS (datafónos)",
    blurb:
      "React.js WebView flows running on Android payment terminals — Bluetooth pairing, amount authorization and payment capture — scaled across Chile, Brazil and Argentina.",
    tags: ["React", "WebView", "Android", "Fintech"],
  },
  {
    title: "Wallie App Store",
    blurb:
      "Led UI development of an app-store platform with a fast, modern interface.",
    tags: ["Next.js", "Tailwind CSS", "UI"],
  },
  {
    title: "FlowOS — Transit Routes",
    blurb:
      "Public-transport route interface with real-time state, built for a mobility platform.",
    tags: ["React", "Redux", "Mobility"],
  },
  {
    title: "Museum Experience App",
    blurb:
      "Education-focused features for a Texas-based museum, delivered for web and mobile.",
    tags: ["React", "React Native", "Education"],
  },
  {
    title: "Abacus — Finance",
    blurb:
      "Forms, validations and RESTful integrations for a financial application.",
    tags: ["React", "Axios", "Forms"],
  },
  {
    title: "Teachers Desktop App",
    blurb:
      "Cross-platform desktop application for teachers, backed by a custom Node.js API.",
    tags: ["Electron", "Node.js", "Desktop"],
  },
];

export const education = {
  school: "Universidad del Cauca",
  degree: "B.Sc. Electronic & Telecommunications Engineering",
};

export const languages: { name: string; level: string }[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Professional working" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
