import { Project, SkillCategory, ExperienceItem, CertificationItem, EducationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Afsana Kathoon A",
  title: "AI Systems Engineer & Full Stack Developer",
  tagline: "Engineering deterministic high-throughput systems, multi-agent LLM pipelines, and elegant full-stack architectures.",
  bio: "Computer Science Engineer driven by the convergence of Multi-Agent AI Orchestration, Distributed Backend Systems, and Machine Learning. Experienced in architecting production-grade platforms with sub-second retrieval latency, high-throughput ingestion pipelines (35k+ records/sec), and resilient cloud architectures.",
  email: "afsanakathoon3@gmail.com",
  phone: "+91 63836 90157",
  location: "Coimbatore, Tamil Nadu, India",
  availability: "Open for Opportunities & Collaborations",
  linkedin: "https://linkedin.com/in/afsanakathoon3",
  github: "https://github.com/Afsu03",
  stats: [
    { label: "Pipeline Throughput", value: "35.8k+", unit: "rec/sec" },
    { label: "Query Speedup", value: "98.8x", unit: "optimization" },
    { label: "Predictive Accuracy", value: "85%+", unit: "ML models" },
    { label: "B.E. CSE CGPA", value: "8.14", unit: "Academic" }
  ]
};

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science Engineering",
    institution: "Dr. N.G.P Institute of Technology",
    period: "Expected March 2027",
    score: "8.14",
    scoreLabel: "CGPA",
    status: "In Progress",
    highlights: [
      "Core focus on Advanced Algorithms, Multi-Agent Systems, Database Internals, and Computer Networks",
      "Active participant in technical symposiums, hackathons, and AI-driven architecture design"
    ]
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "RVS Polytechnic College",
    period: "2021 – 2024",
    score: "75%",
    scoreLabel: "Aggregate Score",
    status: "Completed",
    highlights: [
      "Graduated with Distinction in foundational Computing, Systems Programming, and Software Engineering",
      "Hands-on project work in Web Technologies, Database Systems, and Hardware Interfacing"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages for systems, backends, AI algorithms, and frontend interfaces",
    skills: [
      { name: "Java", level: "Advanced", tags: ["OOP", "Enterprise", "Collections"] },
      { name: "Python", level: "Expert", tags: ["Scikit-learn", "Flask", "Data Science"] },
      { name: "TypeScript", level: "Expert", tags: ["Type Safety", "Full Stack", "Prisma"] },
      { name: "JavaScript (ES6+)", level: "Expert", tags: ["Async/Await", "DOM", "Node.js"] },
      { name: "HTML5 & CSS3", level: "Expert", tags: ["Modern Web", "Tailwind", "Responsive"] }
    ]
  },
  {
    id: "cs-fundamentals",
    title: "CS Fundamentals & Core",
    icon: "Cpu",
    description: "Foundational pillars powering resilient software engineering",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced", tags: ["Trees", "Graphs", "DP"] },
      { name: "Object-Oriented Programming (OOP)", level: "Expert", tags: ["Design Patterns", "Clean Code"] },
      { name: "Database Management (DBMS)", level: "Advanced", tags: ["ACID", "Normalization", "Indexing"] },
      { name: "Computer Networks", level: "Proficient", tags: ["TCP/IP", "HTTP/REST", "Security Protocols"] }
    ]
  },
  {
    id: "algorithms",
    title: "Algorithmic Paradigms",
    icon: "Binary",
    description: "Algorithmic strategies for optimized problem-solving and computation",
    skills: [
      { name: "Graph Traversal (BFS / DFS)", level: "Advanced", tags: ["Topological Sort", "Shortest Path"] },
      { name: "Dynamic Programming", level: "Advanced", tags: ["Memoization", "Tabulation"] },
      { name: "Greedy Algorithms", level: "Advanced", tags: ["Optimization", "Heuristics"] },
      { name: "Advanced Searching & Sorting", level: "Expert", tags: ["Binary Search", "Quicksort", "O(NlogN)"] }
    ]
  },
  {
    id: "backend-databases",
    title: "Backend & Databases",
    icon: "Database",
    description: "Scalable server architectures, high-performance querying, and cloud storage",
    skills: [
      { name: "Node.js & Express.js", level: "Expert", tags: ["REST APIs", "Microservices", "JWT"] },
      { name: "PostgreSQL & Prisma ORM", level: "Expert", tags: ["Query Caching", "Indexing", "Multi-tenancy"] },
      { name: "MySQL", level: "Advanced", tags: ["Schema Design", "Transactions", "Procedures"] },
      { name: "RESTful API Architecture", level: "Expert", tags: ["Zod Validation", "AES-256 Encryption"] }
    ]
  },
  {
    id: "ai-tools",
    title: "AI, Cloud & Engineering Tools",
    icon: "Wrench",
    description: "Ecosystem tools, model pipelines, and collaborative version control",
    skills: [
      { name: "Google Gemini Multi-Agent LLMs", level: "Advanced", tags: ["Agentforce", "Prompt Engineering"] },
      { name: "Scikit-learn & Machine Learning", level: "Advanced", tags: ["Classification", "NLP", "Pipelines"] },
      { name: "Git & GitHub", level: "Expert", tags: ["CI/CD", "Branching", "Code Reviews"] },
      { name: "VS Code & Development Tooling", level: "Expert", tags: ["Debugging", "Extensions", "Linters"] }
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "aegis-ai",
    title: "AegisAI",
    subtitle: "AI-Assisted Security Operations (SOC) Platform",
    category: "AI / LLM",
    featured: true,
    status: "Featured",
    accentColor: "#F472B6",
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Google Gemini", "JWT", "AES-256-GCM"],
    githubUrl: "https://github.com/Afsu03/AegisAI",
    architectureSummary: "Enterprise-grade SOC platform capable of ingesting multi-format security logs at 35,800+ records/sec via a deterministic rule engine. Powered by a 4-agent Google Gemini pipeline for threat triage, automated incident summarization, and schema-validated risk scoring.",
    metrics: [
      { label: "Throughput", value: "35,800+", description: "Records ingested / sec" },
      { label: "Latency Speedup", value: "98.8x", description: "158s down to 1.6s via query caching" },
      { label: "LLM Pipeline", value: "4 Agents", description: "Zod-validated structured outputs" },
      { label: "Security", value: "AES-256-GCM", description: "Encrypted per-tenant API key isolation" }
    ],
    bullets: [
      "Engineered full-stack SOC architecture ingesting CSV, JSON, JSONL, XLSX, and XML security streams at 35,800+ records/sec.",
      "Orchestrated a 4-agent LLM pipeline with Google Gemini for automated threat analysis, incident summarization, and risk scoring.",
      "Designed an optimized PostgreSQL schema with Prisma ORM and intelligent caching, dropping repeat queries from ~158s to ~1.6s (98.8x speedup).",
      "Implemented hardened JWT authentication, per-user resource isolation, and AES-256-GCM encrypted API key storage for a multi-tenant cloud setup."
    ]
  },
  {
    id: "alzheimer-risk-system",
    title: "AI-Powered Alzheimer's Risk Assessment",
    subtitle: "Clinical Decision Support & Patient Health Classification",
    category: "Machine Learning",
    featured: true,
    status: "Completed",
    accentColor: "#EC4899",
    technologies: ["Python", "Scikit-learn", "Flask", "MySQL", "Pandas", "NumPy", "Data Preprocessing"],
    githubUrl: "https://github.com/Afsu03/AlzheimerSystem",
    architectureSummary: "Supervised machine learning classification pipeline trained on multi-dimensional patient health indicators to provide early clinical risk stratification and continuous patient telemetry alerts.",
    metrics: [
      { label: "Domain", value: "Clinical AI", description: "Early diagnosis & risk evaluation" },
      { label: "Backend", value: "Flask REST", description: "Real-time inference API" },
      { label: "Database", value: "MySQL", description: "Normalized longitudinal records" },
      { label: "Alerts", value: "Real-Time", description: "Clinician dashboard dispatch" }
    ],
    bullets: [
      "Built and trained a machine learning classification pipeline to assess Alzheimer's disease risk from complex biometric and cognitive markers.",
      "Engineered a lightweight Flask-based REST API and real-time dashboard to serve on-demand predictions and clinical triage alerts.",
      "Designed a normalized relational MySQL schema to securely store and query longitudinal patient health records at scale."
    ]
  },
  {
    id: "smart-train-alert",
    title: "Smart Train Destination Alert System",
    subtitle: "Real-time Location Tracking & Geospatial Arrival Alerts",
    category: "IoT / Systems",
    featured: false,
    status: "Completed",
    accentColor: "#FB7185",
    technologies: ["Python", "MySQL", "Geospatial Logic", "Haversine Distance", "REST APIs"],
    githubUrl: "https://github.com/Afsu03/SmartDestinationAlertSystem",
    architectureSummary: "Real-time passenger navigation and location-tracking system calculating dynamic transit ETAs and notifying passengers via automated triggers prior to station arrival.",
    metrics: [
      { label: "ETA Accuracy", value: "85%", description: "Dynamic arrival distance calculation" },
      { label: "Latency", value: "<100ms", description: "Proximity trigger evaluation" },
      { label: "Engine", value: "Python Core", description: "Geospatial coordinate logic" }
    ],
    bullets: [
      "Designed a real-time location-tracking and alerting mechanism that notifies passengers well before reaching their destination stop.",
      "Implemented distance/ETA calculation logic in Python, achieving 85% accuracy on arrival-based predictive notifications.",
      "Built relational tracking tables in MySQL for route checkpoints and journey history."
    ]
  },
  {
    id: "fake-review-shield",
    title: "ReviewShield AI - Fake Review Classifier",
    subtitle: "NLP-Powered E-Commerce Spam & Deceptive Review Detection",
    category: "Machine Learning",
    featured: false,
    status: "Completed",
    accentColor: "#A855F7",
    technologies: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Flask", "MySQL"],
    githubUrl: "https://github.com/Afsu03/ReviewShield_Ai",
    architectureSummary: "Natural Language Processing classification engine detecting deceptive opinions, spam, and incentivized fake reviews from massive e-commerce product feedback datasets.",
    metrics: [
      { label: "Technique", value: "TF-IDF + ML", description: "Text vectorization & sentiment analysis" },
      { label: "Integration", value: "Flask API", description: "Downstream analysis connector" },
      { label: "Dataset", value: "E-Commerce", description: "Multi-product review corpora" }
    ],
    bullets: [
      "Developed an NLP-based text classifier to detect fake, manipulated, and spam product reviews from large-scale e-commerce datasets.",
      "Exposed model prediction endpoints through Flask REST APIs for immediate platform integration.",
      "Persisted classifications and confidence score breakdowns in MySQL for analytical audit trails."
    ]
  },
  {
    id: "ag-interiors",
    title: "AG Interiors & Furniture E-Commerce",
    subtitle: "High-Performance Responsive Client & Catalogue Platform",
    category: "Full Stack",
    featured: false,
    status: "Completed",
    accentColor: "#F43F5E",
    technologies: ["HTML5", "CSS3", "JavaScript", "MySQL", "Responsive Design"],
    githubUrl: "https://github.com/Afsu03/AG_Interiors",
    architectureSummary: "Full-stack commercial catalogue and interior client showcase website with integrated customer enquiry management and relational storage.",
    metrics: [
      { label: "Performance", value: "100%", description: "Mobile-responsive layouts" },
      { label: "Storage", value: "MySQL", description: "Structured customer enquiries" }
    ],
    bullets: [
      "Designed and built a responsive interior & furniture client portal showcasing catalogues, custom solutions, and service portfolios.",
      "Modeled and managed a secure MySQL database to capture and retrieve customer enquiry records efficiently."
    ]
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: "nxtlogic-intern",
    role: "Full Stack Developer Intern",
    company: "NxtLogic Solutions",
    location: "Coimbatore, India",
    period: "June – July 2025",
    type: "Internship",
    repoUrl: "https://github.com/Afsu03/AG_Interiors",
    skills: ["HTML5", "CSS3", "JavaScript", "MySQL", "UI/UX Design", "Database Modeling"],
    achievements: [
      "Designed and developed a responsive client-facing e-commerce and interior showcase platform providing product catalogues and custom service enquiries.",
      "Engineered an efficient MySQL database schema with optimized indexing to store and retrieve client enquiry records with zero data loss.",
      "Collaborated with senior engineers on frontend performance optimization, cross-browser compatibility, and user interface responsiveness."
    ]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    id: "salesforce-agentblazer",
    title: "Salesforce AgentBlazer Championship",
    issuer: "Salesforce Trailhead",
    date: "2025",
    badgeType: "championship",
    highlight: "Advanced AI & Agentforce workflows",
    skillsLearned: ["Agentforce", "Autonomous Agents", "CRM AI Integration", "AI-Driven Workflows"]
  },
  {
    id: "infosys-ai-first",
    title: "AI-First Software Engineering",
    issuer: "Infosys Springboard",
    date: "Mar 2025",
    badgeType: "certification",
    highlight: "Modern AI Engineering paradigms",
    skillsLearned: ["AI-Augmented Development", "LLM Integration", "Modern Software Architecture"]
  },
  {
    id: "infosys-python-packaging",
    title: "Extending Python & Packaging Programs",
    issuer: "Infosys Springboard",
    date: "Jan 2025",
    badgeType: "certification",
    highlight: "Modular Python development",
    skillsLearned: ["Package Distribution", "Virtual Environments", "Module Architecture"]
  },
  {
    id: "infosys-eclipse",
    title: "Eclipse: Creating Projects & Programs",
    issuer: "Infosys Springboard",
    date: "Jan 2025",
    badgeType: "course",
    skillsLearned: ["Java Enterprise Tools", "IDE Productivity", "Debugging Workflows"]
  },
  {
    id: "nptel-iot",
    title: "Introduction to IoT",
    issuer: "NPTEL",
    date: "Jul – Oct 2025",
    badgeType: "certification",
    skillsLearned: ["Sensor Networks", "Microcontroller Protocols", "Edge Computing", "IoT Security"]
  },
  {
    id: "hackerrank-sql",
    title: "SQL Intermediate Certificate",
    issuer: "HackerRank",
    date: "Verified",
    badgeType: "assessment",
    highlight: "Complex joins & subqueries",
    skillsLearned: ["Complex SQL Joins", "Aggregations & Window Functions", "Query Optimization"]
  }
];
