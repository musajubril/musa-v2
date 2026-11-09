export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  tagline?: string;
  category?: string;
  status?: string;
  featured?: boolean;
  version?: string;
  author?: string;
  description: string;
  targetUsers?: string;
  tech: string[];
  features?: string[];
  badges?: string[];
  stats?: {
    testCoverage?: string;
    typeSafety?: string;
    bundleFormats?: string;
  };
  links?: {
    npm?: string;
    live?: string;
    githubPackage?: string;
    githubWebsite?: string;
  };
  image: string;
  year?: string;
  role?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  status?: string;
  description: string;
  highlights?: string[];
  tech: string[];
}

export interface ExperienceRegisterItem {
  index: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Musa Jubril",
    preferredName: "Musa",
    location: "Ikeja, Lagos, Nigeria",
    title: "Full-Stack Software Developer",
    headline:
      "Frontend-focused Full-Stack Developer building scalable web applications with Angular, React, Next.js, Node.js and MongoDB.",
    yearsExperience: "5+",
    angularExperience: "3+",
    availability: "Available for Select Projects & Roles",
    bio: "Frontend-focused Full-Stack Developer with 5+ years of experience building scalable web applications. Strong expertise in Angular, React, TypeScript, Next.js, Express.js, MongoDB and modern UI development. Experienced in delivering production-ready features, AI-assisted workflows and user-focused interfaces.",
    education: {
      institution: "Lagos State University",
      degree: "Bachelor of Science in Computer Science",
      startYear: "2020",
      endYear: "2024",
    },
    contact: {
      email: "musa4jubril@gmail.com",
      github: "https://github.com/musajubril",
      linkedin: "https://www.linkedin.com/in/musa-jubril/",
      twitter: "https://twitter.com",
    },
  },
  skillsList: [
    "ANGULAR",
    "TYPESCRIPT",
    "EXPRESS",
    "NEXT.JS",
    "TAILWIND CSS",
    "POSTGRESQL",
    "REACT",
    "NODEJS",
    "AWS",
    "MONGODB",
    "DOCKER",
    "REDIS",
  ],
  architecturePillars: [
    {
      index: "01",
      title: "Frontend Architecture",
      description:
        "Modular reactive systems, micro-frontends, design systems, and responsive layouts. Scalable TypeScript codebases with robust state management.",
      tags: ["ANGULAR", "REACT", "NEXT.JS", "TAILWIND CSS", "NGRX / REDUX"],
    },
    {
      index: "02",
      title: "Backend & API Systems",
      description:
        "High-throughput RESTful APIs, Node.js, Express, MongoDB Mongoose schema design, PostgreSQL relational models, JWT authentication, and secure access boundaries.",
      tags: ["NODE.JS", "EXPRESS", "MONGODB", "POSTGRESQL", "JWT"],
    },
    {
      index: "03",
      title: "Real-Time & Integration",
      description:
        "Intelligent document extraction with AWS Textract, background worker queues with BullMQ, event messaging, and automated n8n pipeline orchestration.",
      tags: ["AWS TEXTRACT", "BULLMQ", "N8N", "REDIS", "WEBSOCKETS"],
    },
    {
      index: "04",
      title: "DevOps & Infrastructure",
      description:
        "Containerization with Docker, Ubuntu Linux production systems, proxy routing with Ngrok, reverse proxies, and continuous delivery pipelines.",
      tags: ["DOCKER", "LINUX (UBUNTU)", "NGROK", "GIT", "NGINX"],
    },
  ],
  projects: [
    {
      id: "mongoose-tenant-shield",
      name: "mongoose-tenant-shield",
      type: "Open-Source Security Package",
      tagline:
        "Enterprise-grade Multi-Tenant Data Isolation for Single-Database SaaS Architectures",
      category: "Open Source & Security",
      status: "NPM v1.0.1",
      featured: true,
      version: "1.0.1",
      author: "Musa Jubril",
      year: "2026",
      role: "Creator, Lead Architect & Maintainer",
      description:
        "A zero-boilerplate security library for Node.js that leverages AsyncLocalStorage and Mongoose hooks to guarantee invisible, bulletproof multi-tenant database isolation without manual query filtering.",
      targetUsers:
        "SaaS engineers, backend architects & enterprise Node.js teams",
      metrics:
        "Published on npm v1.0.1 // 37 Vitest Tests // < 0.05ms Overhead",
      tech: [
        "Node.js",
        "TypeScript",
        "Express",
        "Mongoose",
        "Next.js 14",
        "Tailwind CSS",
        "tsup",
        "Vitest",
      ],
      features: [
        "Automatic query scoping without manual query pollution",
        "Aggregation pipeline hoisting ($match placed at index 0)",
        "Active cross-tenant spoofing detection and auto-sanitization",
        "Chainable .bypassShield() for super-admin system queries",
        "Configurable strict mode with MissingTenantError",
        "Live interactive documentation and serverless sandbox simulator on Vercel",
      ],
      badges: [
        "NPM v1.0.1",
        "AsyncLocalStorage",
        "TypeScript Strict",
        "MIT License",
      ],
      links: {
        npm: "https://www.npmjs.com/package/mongoose-tenant-shield",
        live: "https://mongoose-tenant-shield.vercel.app/",
        githubPackage: "https://github.com/musajubril/mongoose-tenant-shield",
        githubWebsite:
          "https://github.com/musajubril/mongoose-tenant-shield-website",
      },
      stats: {
        testCoverage: "37 / 37 automated tests passing",
        typeSafety: "Thread-safe AsyncLocalStorage context",
        bundleFormats: "Zero query latency overhead (< 0.05ms)",
      },
      image: "/images/mongoose-tenant-shield-showcase.jpg",
      githubUrl: "https://github.com/musajubril/mongoose-tenant-shield",
      liveUrl: "https://mongoose-tenant-shield.vercel.app/",
      npmUrl: "https://www.npmjs.com/package/mongoose-tenant-shield",
    },
    {
      id: "express-mongoose-rest-builder",
      name: "express-mongoose-rest-builder",
      type: "NPM Package & Framework",
      tagline: "Declarative REST API framework and query builder for Express & Mongoose",
      category: "Open Source & Backend Framework",
      status: "NPM v1.0.2",
      featured: true,
      version: "1.0.2",
      author: "Musa Jubril",
      year: "2026",
      role: "Creator & Core Author",
      description:
        "An open-source, high-performance REST API framework and query builder for Express and Mongoose that generates fully-typed CRUD routers, bracket-notation filters, declarative population, and automated soft-delete.",
      targetUsers: "Backend engineers, API architects & Node.js teams",
      metrics: "Published on NPM v1.0.2 // 28 Vitest Tests // Zero 'any' Types",
      tech: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Next.js 14",
        "Tailwind CSS",
        "tsup",
        "Vitest",
        "Vercel",
      ],
      features: [
        "One-line RESTful router generator for any Mongoose schema",
        "Bracket-notation query string translation to MongoDB operators ($gte, $in, $regex)",
        "Custom declarative 'Fetch' JSON population syntax",
        "Nested dot-notation field projection (e.g. seller.name)",
        "Automatic soft-delete enforcement via immutable baseFilter",
        "Interactive 3-in-1 Next.js API simulator & documentation portal on Vercel",
      ],
      badges: [
        "NPM v1.0.2",
        "TypeScript Strict",
        "MIT License",
        "Next.js 14",
      ],
      links: {
        npm: "https://www.npmjs.com/package/express-mongoose-rest-builder",
        live: "https://express-mongoose-rest-builder.vercel.app/",
        githubPackage: "https://github.com/musajubril/express-mongoose-rest-builder",
        githubWebsite: "https://github.com/musajubril/express-mongoose-rest-builder-website",
      },
      stats: {
        testCoverage: "28 automated tests passing",
        typeSafety: "100% strict generics (0 any types)",
        bundleFormats: "Dual CJS & ESM hybrid",
      },
      image: "/images/express-rest-builder-showcase.jpg",
      githubUrl: "https://github.com/musajubril/express-mongoose-rest-builder",
      liveUrl: "https://express-mongoose-rest-builder.vercel.app/",
      npmUrl: "https://www.npmjs.com/package/express-mongoose-rest-builder",
    },
    {
      id: "easysch",
      name: "EASYSCH",
      type: "School Management SaaS",
      status: "Live MVP",
      featured: true,
      year: "2024",
      role: "Lead Full-Stack Architect",
      description:
        "A comprehensive multi-tenant school management platform built for Nigerian private institutions. Features automated grade broadsheets, student & teacher portals, debtor tracking, and role-based bursar workflows.",
      targetUsers: "Low and mid-tier private schools",
      metrics: "Active in 2+ Schools // Full Fee & Result Automation",
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
      features: [
        "Student & Teacher Management",
        "Bursar Financial Dashboard",
        "Debtor Tracking & Billing",
        "Automated Report Cards & Broadsheets",
        "Role-Based Access Control",
        "School Slug Multi-tenancy",
      ],
      image: "/images/easysch-showcase.jpg",
    },
    {
      id: "mithaq",
      name: "Mithaq (مِيثَاق)",
      type: "Relationship Sanctuary SaaS",
      tagline:
        "A quiet digital sanctuary for intentional connection & marriage compatibility",
      category: "Full-Stack Web App & AI",
      status: "Live Production",
      featured: true,
      year: "2025 — 2026",
      role: "Lead Full-Stack Architect",
      description:
        "A premium relationship reflection platform designed for couples seeking intentionality, shared growth, and emotional transparency. Built on a 'Modern Epistolary' design system with Socket.io real-time partner sync, Gemini AI conversation synthesis, and automated PDF covenant generation.",
      targetUsers: "Intentional couples, pre-marital partners & counselors",
      metrics: "Live on Vercel // Real-Time Socket Sync // Gemini AI Syntheses",
      tech: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Socket.io",
        "Gemini AI",
        "MongoDB",
        "Mongoose",
        "Puppeteer",
        "Framer Motion",
        "Tailwind CSS",
      ],
      features: [
        "Intelligent multi-path reflection journey across 200+ alignment dimensions",
        "Real-time partner sync and simultaneous reveal via Socket.io",
        "Google Gemini AI 'Shared Sanctuary' conversational synthesis",
        "Dynamically generated 'Charter of Intention' PDF via serverless Puppeteer",
        "No-line 'Modern Epistolary' editorial design with Noto Serif typography",
        "Secure end-to-end private reflection journals with NextAuth",
      ],
      badges: [
        "Next.js 15",
        "Socket.io",
        "Gemini AI",
        "React 19",
      ],
      links: {
        live: "https://our-mithaq.vercel.app/",
        githubPackage: "https://github.com/musajubril/Mithaq",
      },
      stats: {
        testCoverage: "Real-time bidirectional sync",
        typeSafety: "Strict TypeScript + Zod schema validation",
        bundleFormats: "Automated PDF export engine",
      },
      image: "/images/mithaq-showcase.jpg",
      githubUrl: "https://github.com/musajubril/Mithaq",
      liveUrl: "https://our-mithaq.vercel.app/",
    },
    {
      id: "peng",
      name: "Peng",
      type: "Marriage-First Event Platform",
      status: "Public Beta",
      featured: true,
      year: "2023",
      role: "Frontend Engineer",
      description:
        "A modern event management platform specifically designed to streamline wedding planning workflows, RSVP coordination, seating logistics, and celebration timelines.",
      targetUsers: "Event Planners & Couples",
      metrics: "Real-time RSVP sync // TanStack Router integration",
      tech: ["React", "TanStack Router", "Tailwind CSS", "TypeScript"],
      features: [
        "Interactive Seating & Guest Logistics",
        "Multi-stage Wedding Timeline",
        "Real-Time RSVP Tracker",
        "Custom Invitations Management",
      ],
      image: "/images/peng-showcase.jpg",
    },
    {
      id: "ai-cbt",
      name: "AI JAMB CBT",
      type: "Educational Assessment Platform",
      status: "Production Ready",
      featured: true,
      year: "2023",
      role: "Full-Stack Developer",
      description:
        "An offline-capable computer-based testing engine with Gemini AI-powered question synthesis, administrative curriculum editor, and instant timing analytics.",
      targetUsers: "Secondary school students & test centers",
      metrics: "Offline-First Engine // 5,000+ Question Bank",
      tech: ["Express.js", "MongoDB", "Gemini AI", "Node.js"],
      features: [
        "Offline-Capable Exam Engine",
        "AI Question Generation & Hints",
        "Curriculum Admin Editor",
        "Subject-by-subject Score Breakdown",
      ],
      image: "/images/cbt-showcase.jpg",
    },
  ] as ProjectItem[],
  experienceRegister: [
    {
      index: "01",
      company: "CHB TECHNOLOGIES",
      role: "Full Stack Software Engineer",
      period: "2023 — Present",
      location: "Switzerland · Remote",
      description:
        "Architecting enterprise cloud solutions and SaaS modules using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Leading end-to-end delivery of intelligent document automation pipelines, optimizing high-throughput data layers, and engineering modular Angular UI architectures that reduced page load times by ~35%.",
      highlights: [
        "Developed full-stack web solutions using the MEAN stack, improving system modularity, maintainability, and code reusability across enterprise modules.",
        "Architected scalable UI components in Angular and optimized frontend performance, reducing page load times by ~35%.",
        "Engineered end-to-end intelligent document processing pipelines integrating AWS Textract OCR, asynchronous background queues, and automated multi-field table data extraction.",
        "Implemented modular backend microservices and RESTful APIs with Express.js and Node.js, improving endpoint throughput, response times, and API reliability.",
        "Optimized MongoDB schema designs and aggregation pipelines, accelerating query execution and data retrieval speeds for large-scale enterprise records.",
        "Designed configurable business workflow systems, including automated document validator engines with dynamic due-date delay logic and custom rich-text Quill editor extensions.",
        "Collaborated closely with cross-functional product, UX, and engineering teams to deploy feature-rich, customer-facing business solutions.",
      ],
      tags: [
        "ANGULAR",
        "NODE.JS",
        "EXPRESS",
        "MONGODB",
        "TYPESCRIPT",
        "AWS TEXTRACT",
        "REST APIS",
      ],
    },
    {
      index: "02",
      company: "PUREJIM",
      role: "MERN Stack Developer",
      period: "2021 — Aug 2025",
      location: "Remote",
      description:
        "Executing core software architecture and feature delivery using React, Node.js, Express, and MongoDB. Streamlining authentication boundaries and client-server sync.",
      highlights: [
        "Engineered modular frontend interfaces using React, Redux, and modern CSS systems.",
        "Implemented RESTful backend services with Express.js and Node.js with secure JWT authentication boundaries.",
        "Designed MongoDB schemas to ensure robust data synchronization between client and server layers.",
      ],
      tags: ["REACT", "NODE.JS", "MONGODB", "EXPRESS", "REDUX"],
    },
    {
      index: "03",
      company: "EASYSCH (SAAS)",
      role: "Creator & Product Lead",
      period: "2023 — 2024",
      location: "Lagos, NG",
      description:
        "Conceived and deployed an end-to-end multi-tenant school operating system. Managed database models for broadsheets, attendance, automated report cards, and bursar payment tracking.",
      highlights: [
        "Architected and deployed an end-to-end multi-tenant school operating system supporting real administrative workflows.",
        "Modeled database schemas for automated broadsheets, attendance, report cards, and bursar payment tracking.",
        "Built responsive interfaces with Next.js and Tailwind CSS for cross-device operational accessibility.",
      ],
      tags: ["NEXT.JS", "TAILWIND CSS", "MONGODB", "EXPRESS"],
    },
    {
      index: "04",
      company: "EAGLEVIEW & UMBROS",
      role: "Frontend Engineer (Contract)",
      period: "2021",
      location: "Remote / Contract",
      description:
        "Delivered responsive, pixel-perfect user interfaces, modular design components, and RESTful API integrations across consumer web properties.",
      highlights: [
        "Delivered responsive, pixel-perfect user interfaces and modular component libraries across consumer web properties.",
        "Integrated third-party RESTful APIs and ensured high performance across mobile and desktop viewports.",
      ],
      tags: ["REACT", "TYPESCRIPT", "TAILWIND", "REST API"],
    },
    {
      index: "05",
      company: "TRIATRON & ZSOLUTIONS",
      role: "Software Developer Intern to Associate",
      period: "2018 — 2020",
      location: "Lagos, NG",
      description:
        "Built web application foundations, mastered core JavaScript and full-stack development, and collaborated on client software deliverables.",
      highlights: [
        "Developed web application foundations and collaborated on full-stack JavaScript deliverables.",
        "Contributed to bug fixes, code refactoring, and feature enhancements across client deliverables.",
      ],
      tags: ["JAVASCRIPT", "HTML5", "CSS3", "NODE.JS"],
    },
  ] as ExperienceRegisterItem[],
  milestones: [
    {
      date: "11 // 2026",
      title: "MONGOOSE-TENANT-SHIELD",
      subtitle: "Published v1.0.1 on official NPM Registry",
    },
    {
      date: "11 // 2026",
      title: "REST BUILDER ON NPM",
      subtitle: "Published v1.0.2 on official NPM Registry",
    },
    {
      date: "04 // 2024",
      title: "LASU GRADUATION",
      subtitle: "B.Sc. Computer Science",
    },
    {
      date: "02 // 2024",
      title: "EASYSCH DEPLOYMENT",
      subtitle: "Multi-school production MVP",
    },
    {
      date: "11 // 2023",
      title: "AWS TEXTRACT PIPELINE",
      subtitle: "Enterprise automated document parsing",
    },
    {
      date: "06 // 2022",
      title: "STEM & ROBOTICS INSTRUCTION",
      subtitle: "Mentoring next-gen developers",
    },
    {
      date: "08 // 2019",
      title: "FIRST PRODUCTION ROLE",
      subtitle: "Professional engineering career launch",
    },
  ],
  architecturalNotes: [
    {
      title: "SYSTEM PHILOSOPHY // 01",
      quote:
        "Architecture should evolve with the product. Premature abstractions create more debt than value. Pragmatic engineering over trend chasing.",
    },
    {
      title: "ENGINEERING DISCIPLINE // 02",
      quote:
        "Version control, CI/CD, and clean git history are non-negotiable. Code without testing and observability is code waiting to fail in production.",
    },
  ],
  philosophyMantra: [
    "BUILD.",
    "BREAK.",
    "LEARN.",
    "REFINE.",
    "REPEAT.",
  ],
};
