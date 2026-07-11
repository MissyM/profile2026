// All portfolio content lives here, separate from the UI.
// Edit this file to update the site — components read from it via useLanguage().

export type Locale = "en" | "es";

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

export type Content = {
  profile: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    email: string;
    github: string;
    githubHandle: string;
    // Add your LinkedIn URL here when ready, then it shows up automatically.
    linkedin: string;
    resumeFile: string;
    // Drop a square photo at public/profile.jpg to replace the initials avatar.
    photo: string;
  };
  summary: string;
  stats: { value: string; label: string }[];
  experience: Experience[];
  skillGroups: SkillGroup[];
  projects: Project[];
  education: { school: string; degree: string };
  languages: { name: string; level: string }[];
  nav: {
    about: string;
    experience: string;
    skills: string;
    work: string;
    contact: string;
  };
  hero: {
    badge: string;
    viewWork: string;
    resume: string;
  };
  header: {
    resume: string;
    downloadResume: string;
    toggleMenu: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  languageToggle: {
    switchLabel: string;
  };
  sections: {
    about: string;
    experience: string;
    skills: string;
    work: string;
  };
  about: {
    educationLabel: string;
    languagesLabel: string;
  };
  work: {
    intro: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  footer: {
    builtWith: string;
    emailAria: string;
  };
};

export const content: Record<Locale, Content> = {
  en: {
    profile: {
      name: "Milena Cabrera Patiño",
      role: "Software Engineer",
      tagline:
        "I build scalable, high-performance web and hybrid apps with React, Next.js & TypeScript.",
      location: "Popayán, Cauca · Colombia",
      email: "mcabrerapatino@gmail.com",
      github: "https://github.com/MissyM",
      githubHandle: "MissyM",
      linkedin: "",
      resumeFile: "/Milena_Cabrera_Patino_Resume.pdf",
      photo: "/profile.jpg",
    },
    summary:
      "Frontend Engineer with 5+ years of experience delivering high-quality web and hybrid applications using React.js, JavaScript, and modern development tooling. Adept at creating scalable, maintainable solutions for fintech, education, and mobility. Proven ability to work across multiple repositories and platforms, delivering cross-functional features with strong attention to performance and UX. Experienced in collaborating with multidisciplinary teams and driving frontend strategy for complex ecosystems.",
    stats: [
      { value: "5+", label: "Years of experience" },
      { value: "33+", label: "Repositories shipped" },
      { value: "3", label: "LATAM markets (CL · BR · AR)" },
      { value: "3", label: "Domains: fintech · edu · mobility" },
    ],
    experience: [
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
    ],
    skillGroups: [
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
    ],
    projects: [
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
    ],
    education: {
      school: "Universidad del Cauca",
      degree: "B.Sc. Electronic & Telecommunications Engineering",
    },
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional working" },
    ],
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
    },
    hero: {
      badge: "Available for opportunities",
      viewWork: "View my work",
      resume: "Résumé",
    },
    header: {
      resume: "Resume",
      downloadResume: "Download résumé",
      toggleMenu: "Toggle menu",
    },
    theme: {
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
    },
    languageToggle: {
      switchLabel: "Switch to Spanish",
    },
    sections: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      work: "Selected Work",
    },
    about: {
      educationLabel: "Education",
      languagesLabel: "Languages",
    },
    work: {
      intro:
        "Highlights from production work across fintech, education and mobility. Several products are proprietary, so these are summaries rather than live links.",
    },
    contact: {
      eyebrow: "05 · Contact",
      heading: "Let's build something great",
      subheading:
        "Open to frontend and full-stack opportunities. The fastest way to reach me is email.",
    },
    footer: {
      builtWith: "Built with Next.js & Tailwind.",
      emailAria: "Email",
    },
  },
  es: {
    profile: {
      name: "Milena Cabrera Patiño",
      role: "Ingeniera de Software",
      tagline:
        "Construyo aplicaciones web e híbridas escalables y de alto rendimiento con React, Next.js y TypeScript.",
      location: "Popayán, Cauca · Colombia",
      email: "mcabrerapatino@gmail.com",
      github: "https://github.com/MissyM",
      githubHandle: "MissyM",
      linkedin: "",
      resumeFile: "/Milena_Cabrera_Patino_Resume.pdf",
      photo: "/profile.jpg",
    },
    summary:
      "Ingeniera Frontend con más de 5 años de experiencia entregando aplicaciones web e híbridas de alta calidad usando React.js, JavaScript y herramientas de desarrollo modernas. Hábil en la creación de soluciones escalables y mantenibles para fintech, educación y movilidad. Capacidad comprobada para trabajar en múltiples repositorios y plataformas, entregando funcionalidades multidisciplinarias con especial atención al rendimiento y la experiencia de usuario. Experiencia colaborando con equipos multidisciplinarios y liderando la estrategia frontend en ecosistemas complejos.",
    stats: [
      { value: "5+", label: "Años de experiencia" },
      { value: "33+", label: "Repositorios entregados" },
      { value: "3", label: "Mercados LATAM (CL · BR · AR)" },
      { value: "3", label: "Dominios: fintech · educación · movilidad" },
    ],
    experience: [
      {
        company: "Mercado Libre — Mercado Pago",
        role: "Ingeniera de Software",
        period: "2023 — 2025",
        location: "Remoto",
        highlights: [
          "Lideré el desarrollo frontend de flujos en React.js para dispositivos POS de Mercado Pago (datafónos), con interfaces desplegadas como WebViews embebidos en Android usando WebKit.",
          "Entregué funcionalidades listas para producción en más de 33 repositorios, incluyendo emparejamiento Bluetooth, autorización de montos, confirmación de usuario y captura de pagos.",
          "Construí interfaces dinámicas multiplataforma para comunicación con dispositivos en tiempo real usando React.js y APIs de Mercado Pago.",
          "Apoyé la expansión del producto de Chile a Brasil y Argentina mediante UI/UX localizada y adaptabilidad de la plataforma.",
          "Creé entornos de pruebas hardware-in-the-loop junto con QA y DevOps para una validación robusta.",
        ],
      },
      {
        company: "Celerik",
        role: "Desarrolladora de Software Middle",
        period: "2022 — 2023",
        location: "Remoto",
        highlights: [
          "Construí una interfaz de chat asistente de PM usando Microsoft Power Apps y PCF (PowerApps Component Framework) con componentes personalizados en React.js.",
          "Contribuí a la app financiera Abacus: creé formularios, implementé validaciones e integré Axios para servicios RESTful.",
          "Entregué funcionalidades en React.js y React Native enfocadas en educación para una aplicación de un museo en Texas.",
          "Gestioné las pruebas y depuración de una app móvil de aprendizaje de idiomas.",
          "Desarrollé una interfaz de rutas de transporte público para FlowOS usando Redux y React.js.",
          "Lideré el desarrollo de UI de la plataforma de tienda de aplicaciones Wallie usando Next.js y Tailwind CSS.",
        ],
      },
      {
        company: "Upwork — Freelance",
        role: "Desarrolladora Frontend",
        period: "2020 — 2021",
        location: "Remoto",
        highlights: [
          "Construí componentes modulares de secciones para un generador de landing pages.",
          "Realicé revisiones de código en GitHub y GitLab.",
          "Redacté documentación en Storybook para una librería de UI open-source.",
        ],
      },
      {
        company: "OmniLatam",
        role: "Desarrolladora Frontend Jr.",
        period: "2019 — 2020",
        location: "Bogotá",
        highlights: [
          "Desarrollé componentes de UI basados en Angular integrados con APIs de backend.",
          "Revisé y optimicé la calidad del código; brindé mentoría a nuevos desarrolladores.",
          "Mejoré la robustez de las funcionalidades mediante resolución de errores y refinamiento de UI.",
        ],
      },
      {
        company: "Fundación Universitaria de Popayán",
        role: "Desarrolladora Web Full-stack",
        period: "2018 — 2019",
        location: "Popayán",
        highlights: [
          "Construí una aplicación de escritorio para docentes usando Electron y Node.js.",
          "Desarrollé e integré soluciones de API personalizadas para un backend en Node.js.",
          "Creé animaciones y transiciones fluidas para mejorar la experiencia de usuario con CSS y React.",
          "Gestioné el ciclo de vida de desarrollo y el levantamiento de requisitos para las funcionalidades del producto.",
        ],
      },
      {
        company: "Appsus — Inventory Software",
        role: "Desarrolladora Frontend",
        period: "2017 — 2018",
        location: "Remoto",
        highlights: [
          "Desarrollé una aplicación de punto de venta para restaurantes basada en JavaScript.",
          "Creé componentes usando un framework propietario de JavaScript y React.",
        ],
      },
      {
        company: "Universidad Remington",
        role: "Profesora",
        period: "2016 — 2017",
        location: "Popayán",
        highlights: [
          "Impartí las cátedras de Proceso de Ingeniería de Requisitos, Planeación de Arquitectura de Aplicaciones y Desarrollo de Aplicaciones Web.",
        ],
      },
    ],
    skillGroups: [
      {
        label: "Lenguajes y Frameworks",
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
        label: "UI y Estilos",
        items: ["HTML5", "CSS3", "Sass", "Less", "Tailwind CSS", "MUI", "CSS-in-JS"],
      },
      {
        label: "Compilación y Herramientas",
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
        label: "Pruebas",
        items: ["Jest", "React Testing Library", "Storybook"],
      },
      {
        label: "Gestión de Proyectos",
        items: ["Jira", "Trello", "Azure Boards", "Agile (Scrum / Kanban)"],
      },
      {
        label: "Diseño y Prototipado",
        items: ["Figma", "Sketch"],
      },
      {
        label: "Otros",
        items: [
          "PCF (PowerApps)",
          "SSR",
          "Integración de APIs REST",
          "Bluetooth / NFC POS",
          "Perfilado de rendimiento",
          "Buenas prácticas de seguridad",
        ],
      },
    ],
    projects: [
      {
        title: "Mercado Pago POS (datafónos)",
        blurb:
          "Flujos WebView en React.js ejecutándose en terminales de pago Android — emparejamiento Bluetooth, autorización de montos y captura de pagos — escalados en Chile, Brasil y Argentina.",
        tags: ["React", "WebView", "Android", "Fintech"],
      },
      {
        title: "Wallie App Store",
        blurb:
          "Lideré el desarrollo de UI de una plataforma de tienda de aplicaciones con una interfaz rápida y moderna.",
        tags: ["Next.js", "Tailwind CSS", "UI"],
      },
      {
        title: "FlowOS — Rutas de Tránsito",
        blurb:
          "Interfaz de rutas de transporte público con estado en tiempo real, construida para una plataforma de movilidad.",
        tags: ["React", "Redux", "Movilidad"],
      },
      {
        title: "App de Experiencia de Museo",
        blurb:
          "Funcionalidades enfocadas en educación para un museo en Texas, entregadas para web y móvil.",
        tags: ["React", "React Native", "Educación"],
      },
      {
        title: "Abacus — Finanzas",
        blurb:
          "Formularios, validaciones e integraciones RESTful para una aplicación financiera.",
        tags: ["React", "Axios", "Formularios"],
      },
      {
        title: "App de Escritorio para Docentes",
        blurb:
          "Aplicación de escritorio multiplataforma para docentes, respaldada por una API personalizada en Node.js.",
        tags: ["Electron", "Node.js", "Escritorio"],
      },
    ],
    education: {
      school: "Universidad del Cauca",
      degree: "Ing. Electrónica y Telecomunicaciones",
    },
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Profesional" },
    ],
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      work: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para nuevas oportunidades",
      viewWork: "Ver mi trabajo",
      resume: "CV",
    },
    header: {
      resume: "CV",
      downloadResume: "Descargar CV",
      toggleMenu: "Abrir menú",
    },
    theme: {
      switchToLight: "Cambiar a tema claro",
      switchToDark: "Cambiar a tema oscuro",
    },
    languageToggle: {
      switchLabel: "Cambiar a inglés",
    },
    sections: {
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      work: "Proyectos Destacados",
    },
    about: {
      educationLabel: "Educación",
      languagesLabel: "Idiomas",
    },
    work: {
      intro:
        "Aspectos destacados de trabajo en producción en fintech, educación y movilidad. Varios productos son propietarios, por lo que estas son descripciones y no enlaces en vivo.",
    },
    contact: {
      eyebrow: "05 · Contacto",
      heading: "Construyamos algo grandioso",
      subheading:
        "Abierta a oportunidades frontend y full-stack. La forma más rápida de contactarme es por correo electrónico.",
    },
    footer: {
      builtWith: "Construido con Next.js y Tailwind.",
      emailAria: "Correo electrónico",
    },
  },
};
