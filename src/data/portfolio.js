import {
    Briefcase, Calendar, Target, User, Github, Linkedin, Twitter, Mail,
    Shield, TrendingUp, Award, Zap, Instagram, Youtube, Phone, MapPin, Star
} from 'lucide-react';

export const themeColors = {
    light: {
        background: "210 40% 98%",
        foreground: "222 47% 11%",
        card: "0 0% 100%",
        primary: "250 47% 60%",
        primaryForeground: "210 40% 98%",
        border: "214 32% 91%",
    },
    dark: {
        background: "222 47% 4%",
        foreground: "213 31% 91%",
        card: "222 47% 8%",
        primary: "250 65% 65%",
        primaryForeground: "213 31% 91%",
        border: "217 33% 20%",
    }
};

export const personalInfo = {
    name: "Ed-Deryouch",
    fullName: "Mohamed Ed-Deryouch",
    role: "Software Engineer & AI Engineer",
    aboutRole: "Software Engineer & AI Engineer",
    resumeUrl: "/mohamededderyouch_cv_en_1.2.pdf",
    email: "mohamededderyouch5@gmail.com",
    phone: "+212 619466913",
    location: "Beni Mellal, Morocco",
    websiteUrl: "#",
    formspreeEndpoint: "https://formspree.io/f/xwpbojaj"
};

export const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/simoderyouch" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/mohamededderyouch/" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
    { icon: Mail, label: "Email", url: `mailto:mohamededderyouch5@gmail.com` },
];

export const heroData = {
    greeting: "I'm ED-Deryouch",
    highlightedRole: "AI Engineer",
    description: "Results-driven AI Engineer with 2 years of experience developing end-to-end machine learning solutions. Specializing in Python, deep learning frameworks, and cloud technologies.",
    availability: "Available Immediately for AI and Data Science roles",
    achievements: [
        { number: "2+", label: "Years Experience", icon: Shield },
        { number: "10+", label: "Projects Delivered", icon: TrendingUp },
        { number: "90%", label: "Faster Decisions", icon: Award },
        { number: "90%+", label: "Model Accuracy", icon: Zap }
    ],
    codeSnippets: [
        "import { AIEngineer } from 'mohamed.ai';",
        "",
        "const engineer = new AIEngineer({",
        "  name: 'Mohamed Ed-Deryouch',",
        "  stack: ['Python', 'PyTorch', 'FastAPI', 'React'],",
        "  focus: 'Building production-ready AI applications',",
        "  status: 'Open to new opportunities'",
        "});",
        "",
        "await engineer.deployModel();",
        "// Expertise: NLP, CV, MLOps, Big Data",
        "",
        "engineer.connect();",
        "console.log('🚀 Let\\'s build intelligent systems together!');"
    ]
};

export const aboutData = {
    heading: "Building Intelligent Solutions",
    subheading: "Developing production-ready AI applications that drive impact",
    profileImage: "/mohamededderyouch.png",
    achievements: [
        { number: "2", label: "Years Exp", icon: Calendar, suffix: "+" },
        { number: "10", label: "Projects", icon: Briefcase, suffix: "+" },
        { number: "40", label: "Efficiency", icon: Target, suffix: "%" },
        { number: "2", label: "Degrees", icon: User, suffix: "" }
    ],
    tabContent: {
        personal: "Results-driven AI Engineer with 2 years of experience developing end-to-end machine learning solutions. Passionate about building intelligent systems using Python, deep learning frameworks, and cloud technologies.",
        professional: "Successfully delivered RAG-based Q&A systems, real-time NLP models, and scalable data pipelines that improved decision-making speed by 40%. Strong background in MLOps, big data processing, and full-stack development.",
        approach: "I focus on deploying scalable, production-ready AI solutions. My approach combines advanced machine learning algorithms with robust software engineering practices and data pipelines."
    },
    techStack: [
        { category: "ML & AI", items: ["Python", "PyTorch", "TensorFlow", "NLP", "LLMs", "LangChain"] },
        { category: "Data & Full-Stack", items: ["React.js", "FastAPI", "PostgreSQL", "Apache Spark", "Power BI"] },
        { category: "MLOps & Cloud", items: ["Docker", "Apache Airflow", "Kafka", "Qdrant", "Git"] }
    ],
    features: [
        "End-to-End AI Solutions",
        "Scalable Data Pipelines", "MLOps & Deployment",
        "Software Engineering"
    ]
};

export const skillsData = [
    // Programming & Frameworks
    { name: "Python", level: 95, category: "backend", icon: "python" },
    { name: "JavaScript", level: 85, category: "frontend", icon: "javascript" },
    { name: "React.js", level: 85, category: "frontend", icon: "react" },
    { name: "FastAPI", level: 90, category: "backend", icon: "python" },
    { name: "SQL", level: 90, category: "backend", icon: "sql" },
    { name: "Django", level: 80, category: "backend", icon: "python" },
    // ML & AI
    { name: "PyTorch", level: 90, category: "backend", icon: "python" },
    { name: "TensorFlow", level: 85, category: "backend", icon: "python" },
    { name: "NLP (BERT, LLMs)", level: 95, category: "backend", icon: "cleark" },
    { name: "LangChain", level: 90, category: "tools", icon: "cleark" },
    // Data & MLOps
    { name: "PostgreSQL", level: 85, category: "backend", icon: "postgresql" },
    { name: "Docker", level: 80, category: "tools", icon: "docker" },
    { name: "Kafka", level: 75, category: "tools", icon: "cleark" },
    { name: "PySpark", level: 80, category: "backend", icon: "cleark" },
    { name: "Git", level: 90, category: "tools", icon: "git" },
];

export const projectsData = [
    {
        id: 8,
        title: "GenAxis",
        category: "AI SaaS ",
        description: "AI saas webapp build with PERN stack and Intigrated Gemini . OPEN SOURCE ",
        image: "/projects/project8.png",
        video: "/projects/videos/genaxix-demo.mp4",
        tags: ["PERN Stack", "Clerk Auth", "Google Gemini", "Clerk Billing", "OPEN SOURCE"],
        demoUrl: "https://genaxis.vercel.app",
        githubUrl: "https://github.com/Sahilmd01/genaxis",
        featured: true,
        accentColor: "from-emerald-500 to-teal-600",
        status: "Live",
        highlights: ["Image Generation", "Article writer", "Blog Writter", "Resume Reviewer"]
    },
    {
        id: 7,
        title: "NauraCare",
        category: "Healthcare SaaS",
        description: "Hospital management platform with multi-role access, patient tracking, and billing systems.",
        image: "/projects/project7.png",
        video: "/projects/videos/nauracare-demo.mp4",
        tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT Auth"],
        demoUrl: "https://nauracare.vercel.app",
        githubUrl: "https://github.com/Sahilmd01/neuracare",
        featured: true,
        accentColor: "from-emerald-500 to-teal-600",
        status: "Live",
        highlights: ["Multi-role system", "Patient management", "Payment integration"]
    },
    {
        id: 1,
        title: "Vante & Co.",
        category: "E-commerce",
        description: "Fashion marketplace with product recommendations and seamless checkout experience.",
        image: "/projects/project1.png",
        video: "/projects/videos/vante-demo.mp4",
        tags: ["React", "Node.js", "Stripe", "Redis"],
        demoUrl: "https://e-commerce-website-4w6a.vercel.app",
        githubUrl: "https://github.com/Sahilmd01/E-commerce-website",
        featured: true,
        accentColor: "from-purple-500 to-indigo-600",
        status: "Live",
        highlights: ["Product catalog", "Shopping cart", "Payment processing"]
    },
    {
        id: 2,
        title: "Converse Pro",
        category: "Real-time Communication",
        description: "Chat platform with real-time messaging, media sharing, and user authentication.",
        image: "/projects/project2.png",
        video: "/projects/videos/converse-demo.mp4",
        tags: ["Socket.IO", "MongoDB", "React", "WebRTC"],
        demoUrl: "https://converse-pro-frontend.vercel.app",
        githubUrl: "https://github.com/Sahilmd01/converse-pro",
        featured: true,
        accentColor: "from-blue-500 to-cyan-600",
        status: "Live",
        highlights: ["Real-time chat", "Media sharing", "User authentication"]
    },
    {
        id: 3,
        title: "Blogni AI",
        category: "Artificial Intelligence",
        description: "AI-powered content generation platform with multi-language support.",
        image: "/projects/project3.png",
        video: "/projects/videos/blogni-demo.mp4",
        tags: ["Next.js", "Gemini AI", "Clerk Auth", "Redis"],
        demoUrl: "https://blogni.vercel.app",
        githubUrl: "https://github.com/Sahilmd01/Blogni",
        accentColor: "from-amber-500 to-orange-600",
        status: "Live",
        highlights: ["AI content generation", "Multi-language", "User accounts"]
    },
    {
        id: 4,
        title: "Spendlix",
        category: "FinTech",
        description: "Financial tracking platform with expense management and budgeting features.",
        image: "/projects/project4.png",
        video: "/projects/videos/spendlix-demo.mp4",
        tags: ["React", "Chart.js", "Node.js", "Firebase"],
        demoUrl: "https://spendlix.vercel.app/login",
        githubUrl: "https://github.com/Sahilmd01/Spendlix",
        accentColor: "from-rose-500 to-pink-600",
        status: "Live",
        highlights: ["Expense tracking", "Data visualization", "Budget planning"]
    },
    {
        id: 5,
        title: "Eattoo",
        category: "Food Tech",
        description: "Food delivery platform with restaurant listings and order management.",
        image: "/projects/project5.png",
        video: "/projects/videos/eattoo-demo.mp4",
        tags: ["React", "Redux", "Mapbox", "Stripe"],
        demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
        githubUrl: "https://github.com/Sahilmd01/Eattoo-food-delivery-website",
        accentColor: "from-violet-500 to-purple-600",
        status: "Live",
        highlights: ["Restaurant listings", "Order system", "Location services"]
    },
    {
        id: 6,
        title: "JobQue",
        category: "HR Tech",
        description: "Job matching platform with candidate tracking and application management.",
        image: "/projects/project6.png",
        video: "/projects/videos/jobque-demo.mp4",
        tags: ["Next.js", "PostgreSQL", "Redis", "AI Integration"],
        demoUrl: "#",
        githubUrl: "#",
        accentColor: "from-orange-500 to-red-600",
        status: "Development",
        highlights: ["Job matching", "Candidate tracking", "Application system"]
    }
];

export const categoryColors = {
    "Healthcare SaaS": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
    "E-commerce": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
    "Real-time Communication": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
    "Artificial Intelligence": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
    "FinTech": "from-rose-500/20 to-pink-600/20 text-rose-600 border-rose-500/30",
    "Food Tech": "from-violet-500/20 to-purple-600/20 text-violet-600 border-violet-500/30",
    "HR Tech": "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30"
};
