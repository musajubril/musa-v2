export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  status?: string;
  featured?: boolean;
  description: string;
  targetUsers?: string;
  tech: string[];
  features?: string[];
  image: string;
  year?: string;
  role?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
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
      id: "expense-tracker",
      name: "Expense Tracker",
      type: "Full-Stack Web App",
      status: "Production Ready",
      featured: true,
      year: "2024",
      role: "Full-Stack Engineer",
      description:
        "A personal finance and treasury ledger designed with vintage black-and-white editorial aesthetics. Provides cashflow visualization, invoice creation, PWA offline caching, and an AI-driven quota advisory system.",
      targetUsers: "Designers, Engineers, and Independent Consultancies",
      metrics: "PWA Offline-First // Instant PDF Invoicing",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "JWT", "TypeScript"],
      features: [
        "Dual-Entry Ledger & Cashflow",
        "Invoice Generation & Export",
        "PWA Offline Mode",
        "AI Budget Quota Engine",
      ],
      image: "/images/expense-tracker-showcase.jpg",
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
      role: "MEAN Full Stack Software Developer",
      period: "2023 — Present",
      location: "Remote",
      description:
        "Architecting full-stack web applications, integrating AWS Textract document processing, optimizing Quill editor UX, and implementing Angular proxy configurations for enterprise workflows.",
      tags: ["ANGULAR", "NODE.JS", "EXPRESS", "MONGODB", "AWS TEXTRACT"],
    },
    {
      index: "02",
      company: "PUREJIM",
      role: "MERN Stack Developer",
      period: "2021 — Present",
      location: "Remote",
      description:
        "Executing core software architecture and feature delivery using React, Node.js, Express, and MongoDB. Streamlining authentication boundaries and client-server sync.",
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
      tags: ["JAVASCRIPT", "HTML5", "CSS3", "NODE.JS"],
    },
  ],
  milestones: [
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
