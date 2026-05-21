// ============================================================
// Portfolio Data — Zelalem Belay (WordPress & Full-Stack Dev)
// ============================================================

export const PROFILE_IMAGE = "/images/Zelalem_Belay.png";

export const PERSONAL = {
  name: "Zelalem Belay",
  role: "WordPress & Full-Stack Web Developer",
  tagline: "Building modern, responsive, and scalable digital experiences.",
  subtitle:
    "I create professional WordPress websites, web systems, and database-driven solutions with a focus on quality, usability, and performance.",
  email: "zelalembelay932@gmail.com",
  phone: "0994942373",
  whatsapp: "https://wa.me/+251994942373",
  linkedin: "https://linkedin.com/in/zelalem-belay-8a32212b0",
  github: "https://github.com/zelalembelay932",
  telegram: "https://t.me/Zelsh14",
  location: "Adama, Oromia, Ethiopia",
  available: true,
  roles: ["WordPress Developer", "Full-Stack Developer", "Web Developer", "Database & Systems Developer"],
};

export const STATS = [
  { value: "5+", label: "Projects Delivered" },
  { value: "3+", label: "WordPress Sites Live" },
  { value: "2+", label: "Systems Built" },
  { value: "4", label: "Tech Stacks" },
];

// ---- SKILLS ----
export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: { name: string; level: number }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "WordPress Development",
    icon: "🔵",
    color: "cyan",
    skills: [
      { name: "WordPress CMS", level: 95 },
      { name: "Theme Development", level: 90 },
      { name: "Plugin Customization", level: 85 },
      { name: "WooCommerce", level: 88 },
      { name: "Elementor / Page Builders", level: 90 },
      { name: "Website Maintenance", level: 92 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    color: "purple",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 90 },
      { name: "Responsive Design", level: 94 },
      { name: "UI/UX Design", level: 82 },
    ],
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "blue",
    skills: [
      { name: "Python", level: 88 },
      { name: "Flask Framework", level: 85 },
      { name: "PHP", level: 80 },
      { name: "REST APIs", level: 82 },
      { name: "Web Application Dev", level: 85 },
    ],
  },
  {
    category: "Database Administration",
    icon: "🗄️",
    color: "emerald",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Database Design", level: 88 },
      { name: "Schema Optimization", level: 82 },
      { name: "SQL Queries", level: 88 },
      { name: "Data Integration", level: 80 },
    ],
  },
  {
    category: "AI & Special Systems",
    icon: "🤖",
    color: "amber",
    skills: [
      { name: "Face Recognition", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "Attendance Systems", level: 85 },
      { name: "System Design", level: 84 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    color: "slate",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Problem Solving", level: 92 },
      { name: "DevOps Basics", level: 72 },
      { name: "Technical Documentation", level: 85 },
      { name: "cPanel / Hosting", level: 80 },
    ],
  },
];

// ---- PROJECTS ----
export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  color: string;
  badge: string;
  summary: string;
  description: string;
  techs: string[];
  features: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  icon: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cellsys Biosciences",
    client: "Advanced Cellular Solutions",
    category: "WordPress Corporate",
    color: "cyan",
    badge: "WordPress",
    icon: "🔬",
    summary: "Full professional WordPress website for a biotech company specializing in human cell biology and research solutions.",
    description:
      "Designed and developed a comprehensive corporate website for Cellsys Biosciences — a biotech company providing high-quality human biological materials and advanced research solutions to pharmaceutical and academic organizations.",
    techs: ["WordPress", "PHP", "CSS3", "JavaScript", "WooCommerce", "Elementor"],
    features: [
      "Multi-section product catalog (primary cells, organoids, bioservices)",
      "Quality pipeline showcase with visual steps",
      "Research sector pages and use-case landing areas",
      "Contact & feasibility request form",
      "Fully responsive and SEO-optimized",
    ],
    outcome:
      "Delivered a polished, trust-building corporate web presence that positions Cellsys as a premium scientific solutions provider.",
    liveUrl: "https://cellsysbiosciences.com",
  },
  {
    id: 2,
    title: "Yeti Fashion Design",
    client: "Yeti Fashion Design Training & Production PLC",
    category: "WooCommerce Store",
    color: "purple",
    badge: "WooCommerce",
    icon: "👗",
    summary: "Full WooCommerce e-commerce platform for an Ethiopian fashion design company offering traditional and modern clothing.",
    description:
      "Built a complete e-commerce website with WooCommerce for Yeti Fashion Design Training and Production PLC. The store features traditional Ethiopian garments including Habesha clothes, Oromo traditional wear, and modern chiffon dresses.",
    techs: ["WordPress", "WooCommerce", "PHP", "CSS3", "JavaScript", "Payment Gateway"],
    features: [
      "Full e-commerce product catalog with multiple categories",
      "Shopping cart, checkout, and order management",
      "Product gallery with detailed listings",
      "Fashion design training service pages",
      "Multiple branch locations displayed",
      "Mobile-first responsive design",
    ],
    outcome:
      "Enabled the business to sell fashion products online, reach customers across Ethiopia, and showcase their training services.",
    liveUrl: "https://yetifashiondesign.zelalem.tech",
  },
  {
  id: 3,
  title: "SAfire Collection",
  client: "SAfire Collection – Cape Town Premium Fireplace Retailer",
  category: "WordPress E-Commerce",
  color: "orange",
  badge: "WordPress",
  icon: "🔥",
  summary:
    "Premium product catalog website for a South African fireplace and braai brand, featuring 87+ products across 11 categories, an interactive Room Calculator, and a Steel Grade education guide.",
  description:
    "Designed and developed a sophisticated WordPress product showcase website for SAfire Collection — Cape Town's premier fireplace, firepit, and braai grill brand with 20+ years of craftsmanship. The site blends luxury aesthetics with practical utility, giving homeowners and agents the tools to choose and enquire about the right product for their space.",
  techs: [
    "WordPress",
    "Elementor",
    "PHP",
    "CSS3",
    "JavaScript",
    "WooCommerce / Custom Post Types",
    "Contact Forms",
  ],
  features: [
    "87-product catalog organized across 11 curated collections (Wood, Gas, Suspended, Braai, Pizza Ovens, etc.)",
    "Interactive Room Volume Calculator to match fireplace size to room dimensions",
    "Steel Grade Suitability Guide — educational content for coastal vs. inland environments",
    "Featured Products section with filterable category tabs",
    "Dedicated Agents page for trade and distributor network",
    "Quote enquiry form with 24-hour response workflow",
    "Animated stats section (20+ years, 87 products, 7-day support)",
    "Fully responsive premium design with brand-consistent dark/fire-tone palette",
  ],
  outcome:
    "A visually premium, content-rich product website that educates buyers, showcases the full collection, and channels qualified leads to the sales team through structured enquiry flows.",
  liveUrl: "https://safirecollection.zelalem.tech/",
},
  {
  id: 4,
  title: "Excelinwork",
  client: "Ankush Agrawal – Business Efficiency & Automation Consultant",
  category: "WordPress Business",
  color: "blue",
  badge: "WordPress",
  icon: "⚡",
  summary:
    "Professional consulting website for a Fiverr Level-2 automation expert, showcasing Excel, VBA, Google Sheets, and AI automation services with live case studies and a product store.",
  description:
    "Built a full-featured WordPress business website for Excelinwork — a business efficiency and automation consultancy with 12+ years of expertise and 513+ Fiverr reviews. The site positions the client as a premium consultant, presenting services, verified case studies, downloadable product templates, and a structured lead-capture system.",
  techs: [
    "WordPress",
    "Elementor",
    "PHP",
    "CSS3",
    "JavaScript",
    "Contact Forms",
  ],
  features: [
    "8 clearly defined service sections with outcome-focused copywriting",
    "Case study portfolio with problem/solution/impact structure",
    "Ready-made product store with pricing cards and WhatsApp CTA",
    "Animated KPI counters (hours saved, error rate, efficiency)",
    "Verified client testimonials section with star ratings",
    "Multi-field lead capture form with service area and budget selectors",
    "Sticky navigation with WhatsApp quick-contact integration",
    "Fully responsive, conversion-optimized layout",
  ],
  outcome:
    "A high-converting consulting website that communicates credibility and drives client inquiries through structured social proof, outcome-focused service pages, and direct WhatsApp lead generation.",
  liveUrl: "https://excelinwork.zelalem.tech/",
},

  {
    id: 5,
    title: "Jora Defense Club",
    client: "Jora Taekwondo & Martial Arts Club",
    category: "WordPress Business",
    color: "emerald",
    badge: "WordPress",
    icon: "🥋",
    summary: "Modern WordPress website for a Taekwondo club featuring training programs, instructors, and membership enrollment.",
    description:
      "Created a fully functional, visually engaging WordPress website for Jora Defense Club — a martial arts organization offering Taekwondo training programs for all age groups.",
    techs: ["WordPress", "PHP", "CSS3", "JavaScript", "Elementor", "Contact Forms"],
    features: [
      "Training programs by age group (Little Tigers, Youth, Adult, Elite)",
      "Instructor profile pages with credentials",
      "Testimonials and social proof section",
      "Free trial session sign-up form",
      "Philosophy and mission sections",
      "Responsive, modern design",
    ],
    outcome:
      "Professional online presence that communicates the club's quality and credibility, helping attract new students.",
    liveUrl: "http://joradefenescclub.zelalem.tech",
  },
  {
    id: 6,
    title: "Complaint Management System",
    client: "Web Application Project",
    category: "Python / Flask System",
    color: "blue",
    badge: "Python Flask",
    icon: "📋",
    summary: "Full-stack complaint tracking system where users submit complaints and admins manage, track, and resolve them.",
    description:
      "Developed a web-based Complaint Management System using Python Flask, MySQL, and Bootstrap. The system allows users to submit, track, and follow up on complaints, while administrators have a dashboard to manage and resolve all submissions.",
    techs: ["Python", "Flask", "MySQL", "Bootstrap", "HTML5", "JavaScript", "SMTP"],
    features: [
      "User complaint submission with categorization",
      "Admin dashboard for complaint management",
      "Status tracking: Pending, In Progress, Resolved",
      "Email notification system for status updates",
      "Role-based access (User vs Admin)",
      "Responsive mobile-first interface",
    ],
    outcome:
      "Delivered a functional, clean complaint workflow system with real-time status tracking and full admin control.",
    githubUrl: "https://github.com/zelalembelay932/Complaint-Management-System",
  },
  {
    id: 7,
    title: "Face Recognition Attendance System",
    client: "Adama Polytechnic College",
    category: "AI / Computer Vision",
    color: "amber",
    badge: "AI System",
    icon: "👁️",
    summary: "Automated face recognition attendance system built for Adama Polytechnic College using OpenCV and Python.",
    description:
      "Designed and developed a Face Recognition Attendance System for Adama Polytechnic College. The system uses real-time camera input, face detection, and recognition to automatically log attendance in a MySQL database, eliminating manual roll-calling.",
    techs: ["Python", "OpenCV", "MySQL", "Flask", "HTML5", "JavaScript", "Bootstrap"],
    features: [
      "Real-time face detection and recognition via webcam",
      "Automatic attendance recording to MySQL database",
      "Student enrollment and facial data management",
      "Attendance reports with date filtering",
      "Admin web interface for management",
      "Built for Adama Polytechnic College",
    ],
    outcome:
      "Automated the attendance process for the college, reducing errors and saving significant manual effort daily.",
    githubUrl: "https://github.com/zelalembelay932",
  },
  
];

// ---- SERVICES ----
export const SERVICES = [
  { id: 1, title: "WordPress Website Development", desc: "Custom WordPress websites tailored to your brand — from business portfolios to complex multi-page platforms.", icon: "Globe", color: "cyan" },
  { id: 2, title: "WooCommerce E-Commerce", desc: "Full-featured online stores with product management, payments, cart, and order management.", icon: "ShoppingCart", color: "purple" },
  { id: 3, title: "Business Website Design", desc: "Professional, modern business websites that build credibility and generate leads.", icon: "Building2", color: "blue" },
  { id: 4, title: "Web Application Development", desc: "Custom web-based systems built with Python Flask, MySQL, and Bootstrap for real business processes.", icon: "Code2", color: "emerald" },
  { id: 5, title: "Complaint & Management Systems", desc: "Custom workflow systems for tracking, managing, and resolving complaints or operational tasks.", icon: "ClipboardList", color: "amber" },
  { id: 6, title: "Face Recognition Systems", desc: "AI-powered attendance and access systems using OpenCV and machine learning.", icon: "ScanFace", color: "pink" },
  { id: 7, title: "Database Design & Integration", desc: "Proper MySQL schema design, relational modeling, and seamless integration with web applications.", icon: "Database", color: "teal" },
  { id: 8, title: "Responsive UI Development", desc: "Pixel-perfect, mobile-first UI/UX with Bootstrap, CSS3, and JavaScript.", icon: "Layout", color: "violet" },
  { id: 9, title: "Website Maintenance & Improvement", desc: "Ongoing updates, security patches, speed optimization, and feature additions for existing sites.", icon: "Wrench", color: "slate" },
  { id: 10, title: "Dashboard & Admin Panels", desc: "Clean, functional admin panels with data tables, charts, and user management.", icon: "LayoutDashboard", color: "orange" },
];

// ---- EDUCATION ----
export const EDUCATION = {
  institution: "Adama Polytechnic College",
  degree: "Diploma in Web Development and Database Administration",
  period: "2022 — 2024",
  location: "Adama, Oromia, Ethiopia",
  highlights: [
    "Web Development (HTML, CSS, JavaScript, PHP)",
    "Database Administration (MySQL, SQL, Database Design)",
    "Network Fundamentals and System Administration",
    "Software Engineering Principles",
    "Practical project-based curriculum",
  ],
  description:
    "Completed a comprehensive technical program focused on modern web development and database administration. Applied learning through real-world projects including management systems, websites, and AI-powered tools.",
};

// ---- TRUST METRICS ----
export const TRUST_METRICS = [
  { value: "5+", label: "Projects Delivered", sub: "Real-world web & systems projects" },
  { value: "3", label: "Live WordPress Sites", sub: "Production sites running today" },
  { value: "2", label: "Custom Systems Built", sub: "Flask-based web applications" },
  { value: "1", label: "AI System Deployed", sub: "Face recognition at a college" },
  { value: "6+", label: "Technologies Mastered", sub: "Across full stack and AI" },
  { value: "100%", label: "Client-First Approach", sub: "Focused on quality and delivery" },
];

// ---- BLOG POSTS ----
export const BLOG_POSTS = [
  {
    id: 1,
    title: "How I Built a Production-Ready WordPress E-Commerce Site for a Fashion Brand",
    excerpt: "A behind-the-scenes walkthrough of the Yeti Fashion WooCommerce project — from requirements to deployment.",
    date: "March 2026",
    readTime: "8 min read",
    category: "WordPress",
    color: "cyan",
    tags: ["WordPress", "WooCommerce", "E-Commerce"],
  },
  {
    id: 2,
    title: "Building a Flask + MySQL Complaint Management System from Scratch",
    excerpt: "Step-by-step guide on designing the data model, building the Flask backend, and deploying the complaint system.",
    date: "February 2026",
    readTime: "10 min read",
    category: "Python / Flask",
    color: "purple",
    tags: ["Python", "Flask", "MySQL"],
  },
  {
    id: 3,
    title: "Face Recognition with OpenCV: Building an Attendance System",
    excerpt: "How I built a real-time face recognition attendance system for a polytechnic college using Python and OpenCV.",
    date: "January 2026",
    readTime: "12 min read",
    category: "AI / Computer Vision",
    color: "emerald",
    tags: ["Python", "OpenCV", "AI"],
  },
];
