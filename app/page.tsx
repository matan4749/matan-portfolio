"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  MessageSquare,
  X,
  Send,
  ChevronDown,
  Sparkles,
  Code2,
  Database,
  Layers,
  Zap,
  User,
  Download,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";
import TypingIndicator from "../components/TypingIndicator";

export default function Home() {
  const { language, t } = useLanguage();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string | "typing" }>
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedAbout, setExpandedAbout] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Set initial chat message in current language
    if (t("chat.initialMessage")) {
      setMessages([
        {
          role: "assistant",
          content: t("chat.initialMessage"),
        },
      ]);
    }
  }, [language, t]);

  const cvKnowledge = {
    personalInfo: {
      name: "מתן עמר",
      nameEn: "Matan Amar",
      email: "Matan4749@gmail.com",
      phone: "054-5993085",
      linkedin: "linkedin.com/in/matan--amar",
      github: "github.com/matan4749",
      title: "Software Engineer",
      shortDescription:
        "Building innovative applications with modern technologies",
      fullDescription:
        "Software engineer with BSc in Software Engineering and hands-on experience building mobile applications, web solutions, and automation systems. Proficient in React Native and Firebase with proven ability to deliver production-ready applications. Combines technical skills with strong problem-solving abilities and leadership experience from military service. Seeking junior developer role to contribute to innovative development teams",
    },
    education: [
      {
        institution: "Sami Shamoon College of Engineering (SCE)",
        degree: "BSc Software Engineering",
        details: "React Native",
        year: "2018–2022",
        location: "Israel",
      },
      {
        institution: "Udemy",
        degree: "Development",
        year: "2021",
        location: "Online",
      },
    ],
    skills: [
      { name: "C#", icon: "devicon-csharp-plain colored", category: "Backend" },
      {
        name: "Python",
        icon: "devicon-python-plain colored",
        category: "Backend",
      },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain colored",
        category: "Frontend",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain colored",
        category: "Frontend",
      },
      {
        name: "React",
        icon: "devicon-react-original colored",
        category: "Frontend",
      },
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain colored",
        category: "Backend",
      },
      {
        name: "Next.js",
        icon: "devicon-nextjs-plain colored",
        category: "Frontend",
      },
      {
        name: "Unity",
        icon: "devicon-unity-plain colored",
        category: "Game Dev",
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain colored",
        category: "DevOps",
      },
      {
        name: "SQL Server",
        icon: "devicon-microsoftsqlserver-plain colored",
        category: "Database",
      },
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain colored",
        category: "Database",
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain colored",
        category: "Database",
      },
      { name: "Git", icon: "devicon-git-plain colored", category: "Tools" },
      {
        name: "Linux",
        icon: "devicon-linux-plain colored",
        category: "Systems",
      },
      {
        name: "HTML5",
        icon: "devicon-html5-plain colored",
        category: "Frontend",
      },
      {
        name: "AI / Machine Learning",
        icon: "devicon-tensorflow-original colored",
        category: "AI/ML",
      },
      {
        name: "TensorFlow",
        icon: "devicon-tensorflow-original colored",
        category: "AI/ML",
      },
      {
        name: "PyTorch",
        icon: "devicon-pytorch-original colored",
        category: "AI/ML",
      },
      {
        name: "OpenAI",
        icon: "devicon-openai-plain colored",
        category: "AI/ML",
      },
      {
        name: "LangChain",
        icon: "devicon-python-plain colored",
        category: "AI/ML",
      },
      {
        name: "Computer Vision",
        icon: "devicon-opencv-plain colored",
        category: "AI/ML",
      },
    ],
    experience: [
      {
        year: "2022 - 2023",
        title: { en: "RPA Developer", he: "מפתח RPA" },
        company: { en: "HMS - Hospital Management Systems", he: "HMS - מערכות לניהול בתי חולים" },
        description: {
          en: "Automated workflows and data processing systems using UiPath",
          he: "פיתוח זרימות עבודה אוטומטיות ומערכות עיבוד נתונים באמצעות UiPath"
        },
        fullDescription: {
          en: "Designed and implemented 15+ automated workflows using UiPath, reducing manual processing time by 60% for data entry and reporting tasks. Built ETL pipelines processing 10,000+ records daily from multiple sources (Excel, databases, web services), achieving 95%+ reliability. Integrated Business Intelligence and Machine Learning tools into automation workflows for predictive analytics",
          he: "תכננתי ויישמתי למעלה מ-15 זרימות עבודה אוטומטיות באמצעות UiPath, והפחתתי את זמן העיבוד הידני ב-60% עבור משימות הזנת נתונים ודיווח. בניתי צינורות ETL שמעבדים למעלה מ-10,000 רשומות יומיות ממקורות מרובים (Excel, מסדי נתונים, שירותי אינטרנט), והשגתי אמינות של 95%+. שילבתי כלי Business Intelligence ו-Machine Learning בזרימות אוטומציה לניתוחים חזויים"
        },
        icon: <Zap className="w-6 h-6" />,
      },
      {
        year: "2015 - 2017",
        title: { en: "Military Service", he: "שירות צבאי" },
        company: { en: "IDF - Israel Defense Forces", he: "צה״ל - צבא הגנה לישראל" },
        description: {
          en: "Led communications team and awarded Commander's Excellence Award for exceptional leadership",
          he: "הובלתי צוות תקשורת וקיבלתי פרס מצוינות מפקד על מנהיגות יוצאת דופן"
        },
        icon: <User className="w-6 h-6" />,
      },
    ],
    projects: [
      {
        title: "Room 8",
        description: {
          en: "Cross-platform roommate matching mobile application",
          he: "אפליקציית מובייל להתאמת שותפים לדירה"
        },
        fullDescription: {
          en: "Built cross-platform roommate matching app with Firebase Authentication and real-time synchronization. Implemented matching algorithm analyzing 15+ compatibility dimensions and integrated push notifications",
          he: "בניתי אפליקציה חוצת פלטפורמות להתאמת שותפים לדירה עם אימות Firebase וסנכרון בזמן אמת. יישמתי אלגוריתם התאמה שמנתח למעלה מ-15 ממדי תאימות ושילבתי התראות push"
        },
        tech: ["React Native", "Firebase", "Git"],
        gradient: "from-cyan-500 to-blue-500",
        github: "https://github.com/matan4749/Room-8",
        featured: true,
      },
      {
        title: "Renovations",
        description: {
          en: "Modern business website with responsive design",
          he: "אתר עסקי מודרני עם עיצוב רספונסיבי"
        },
        fullDescription: {
          en: "Developed responsive business website with modern mobile-first design, interactive forms, and CSS Grid/Flexbox layouts",
          he: "פיתחתי אתר עסקי רספונסיבי עם עיצוב מודרני המותאם למובייל, טפסים אינטראקטיביים ופריסות CSS Grid/Flexbox"
        },
        tech: ["HTML5", "CSS3", "JavaScript", "Git"],
        gradient: "from-purple-500 to-pink-500",
        github: "https://github.com/matan4749/renovations",
        featured: false,
      },
      // Python Projects
      {
        title: "Stock Market Analyzer",
        description: {
          en: "Professional stock market analysis with technical indicators",
          he: "ניתוח שוק המניות מקצועי עם אינדיקטורים טכניים"
        },
        fullDescription: {
          en: "Built professional stock market analysis tool using Python with pandas, matplotlib, and seaborn. Features technical indicators (MA, RSI), volatility analysis, and comprehensive visualizations including candlestick charts and volume analysis",
          he: "בניתי כלי ניתוח שוק מניות מקצועי באמצעות Python עם pandas, matplotlib ו-seaborn. כולל אינדיקטורים טכניים (MA, RSI), ניתוח תנודתיות וויזואליזציות מקיפות כולל גרפי נרות וניתוח נפח מסחר"
        },
        tech: ["Python", "pandas", "matplotlib", "Git"],
        gradient: "from-yellow-500 to-orange-500",
        github: "https://github.com/matan4749/stock-market-analyzer",
        featured: true,
      },
      {
        title: "Task Management API",
        description: {
          en: "REST API with FastAPI for task management",
          he: "REST API עם FastAPI לניהול משימות"
        },
        fullDescription: {
          en: "Created professional REST API using FastAPI and SQLite with full CRUD operations, filtering, pagination, sorting, and statistics. Includes Pydantic validation, async operations, and comprehensive documentation",
          he: "יצרתי REST API מקצועי באמצעות FastAPI ו-SQLite עם פעולות CRUD מלאות, סינון, עימוד, מיון וסטטיסטיקות. כולל ולידציה עם Pydantic, פעולות אסינכרוניות ותיעוד מקיף"
        },
        tech: ["Python", "FastAPI", "SQLite", "Git"],
        gradient: "from-orange-500 to-red-500",
        github: "https://github.com/matan4749/task-management-api",
        featured: true,
      },
      {
        title: "Email Automation Tool",
        description: {
          en: "Professional email automation with templates and bulk sending",
          he: "אוטומציה מקצועית של אימייל עם תבניות ושליחה המונית"
        },
        fullDescription: {
          en: "Developed email automation system with SMTP, Jinja2 templates, personalization, bulk sending from CSV, and delivery tracking. Perfect for marketing campaigns and professional communications",
          he: "פיתחתי מערכת אוטומציה לאימייל עם SMTP, תבניות Jinja2, התאמה אישית, שליחה המונית מ-CSV ומעקב אחר משלוח. מושלם לקמפיינים שיווקיים ותקשורת מקצועית"
        },
        tech: ["Python", "SMTP", "Jinja2", "Git"],
        gradient: "from-red-500 to-pink-500",
        github: "https://github.com/matan4749/email-automation-tool",
        featured: false,
      },
      {
        title: "Image Processing Studio",
        description: {
          en: "Image processing library with 20+ filters and batch operations",
          he: "ספריית עיבוד תמונות עם למעלה מ-20 פילטרים ופעולות אצווה"
        },
        fullDescription: {
          en: "Built comprehensive image processing library using PIL/Pillow with 20+ filters (resize, crop, rotate, blur, sharpen, grayscale, posterize, solarize, etc.), watermarking, and batch processing capabilities",
          he: "בניתי ספריית עיבוד תמונות מקיפה באמצעות PIL/Pillow עם למעלה מ-20 פילטרים (שינוי גודל, חיתוך, סיבוב, טשטוש, חידוד, גווני אפור, posterize, solarize ועוד), סימון מים ויכולות עיבוד אצווה"
        },
        tech: ["Python", "PIL/Pillow", "Git"],
        gradient: "from-pink-500 to-purple-500",
        github: "https://github.com/matan4749/image-processing-studio",
        featured: false,
      },
      {
        title: "Password Manager CLI",
        description: {
          en: "Secure password manager with AES-256 encryption",
          he: "מנהל סיסמאות מאובטח עם הצפנת AES-256"
        },
        fullDescription: {
          en: "Created secure password manager with AES-256 encryption, PBKDF2 key derivation (100k iterations), password generation, strength checking, and secure CLI interface. Master password with timeout protection",
          he: "יצרתי מנהל סיסמאות מאובטח עם הצפנת AES-256, גזירת מפתח PBKDF2 (100k איטרציות), יצירת סיסמאות, בדיקת חוזק וממשק CLI מאובטח. סיסמת אב עם הגנת timeout"
        },
        tech: ["Python", "Cryptography", "CLI", "Git"],
        gradient: "from-purple-500 to-indigo-500",
        github: "https://github.com/matan4749/password-manager-cli",
        featured: true,
      },
      // React Projects
      {
        title: "ShopHub - E-commerce Store",
        description: {
          en: "Modern e-commerce application with shopping cart and checkout",
          he: "אפליקציית מסחר אלקטרוני מודרנית עם עגלת קניות ותהליך תשלום"
        },
        fullDescription: {
          en: "Built professional e-commerce application with React 18, featuring shopping cart management, product filtering by category, checkout flow, and persistent storage. Includes 12+ products, cart state with Context API, toast notifications, and responsive design. Complete with order summary, shipping forms, and payment simulation",
          he: "בניתי אפליקציית מסחר אלקטרוני מקצועית עם React 18, הכוללת ניהול עגלת קניות, סינון מוצרים לפי קטגוריה, תהליך תשלום ואחסון מתמשך. כולל למעלה מ-12 מוצרים, מצב עגלה עם Context API, התראות toast ועיצוב רספונסיבי. מלא עם סיכום הזמנה, טפסי משלוח וסימולציית תשלום"
        },
        tech: ["React", "Vite", "React Router", "Context API", "Git"],
        gradient: "from-blue-500 to-cyan-500",
        github: "https://github.com/matan4749/react-ecommerce-store",
        featured: true,
      },
      // HTML5/JavaScript Projects
      {
        title: "Calculator JS",
        description: {
          en: "Simple calculator with arithmetic operations",
          he: "מחשבון פשוט עם פעולות אריתמטיות"
        },
        fullDescription: {
          en: "Built calculator application with HTML5, CSS3 Grid, and vanilla JavaScript. Features basic arithmetic operations with clean, modern design",
          he: "בניתי אפליקציית מחשבון עם HTML5, CSS3 Grid ו-JavaScript טהור. כולל פעולות אריתמטיות בסיסיות עם עיצוב נקי ומודרני"
        },
        tech: ["HTML5", "JavaScript", "CSS3", "Git"],
        gradient: "from-violet-500 to-purple-500",
        github: "https://github.com/matan4749/calculator-js",
        featured: false,
      },
      {
        title: "Todo List App",
        description: {
          en: "Modern todo list with filters and local storage",
          he: "רשימת משימות מודרנית עם פילטרים ושמירה מקומית"
        },
        fullDescription: {
          en: "Built todo list application with localStorage persistence, filter options (all/active/completed), and responsive design",
          he: "בניתי אפליקציית todo list עם שמירה ב-localStorage, אפשרויות סינון (הכל/פעיל/הושלם) ועיצוב רספונסיבי"
        },
        tech: ["HTML5", "JavaScript", "CSS3", "Git"],
        gradient: "from-emerald-500 to-teal-500",
        github: "https://github.com/matan4749/todo-list-app",
        featured: false,
      },
      {
        title: "Weather App JS",
        description: {
          en: "Weather app with OpenWeatherMap API integration",
          he: "אפליקציית מזג אוויר עם אינטגרציית OpenWeatherMap API"
        },
        fullDescription: {
          en: "Created weather app with city search, temperature display, humidity, wind speed. Includes demo mode for testing without API key",
          he: "יצרתי אפליקציית מזג אוויר עם חיפוש עיר, תצוגת טמפרטורה, לחות ומהירות רוח. כולל מצב הדגמה לבדיקה ללא מפתח API"
        },
        tech: ["HTML5", "JavaScript", "API", "Git"],
        gradient: "from-sky-500 to-blue-500",
        github: "https://github.com/matan4749/weather-app-js",
        featured: false,
      },
      {
        title: "Quiz App JS",
        description: {
          en: "Interactive quiz with 10 questions and score tracking",
          he: "חידון אינטראקטיבי עם 10 שאלות ומעקב ניקוד"
        },
        fullDescription: {
          en: "Developed quiz application with 10 multiple-choice questions, progress tracking, color-coded feedback, and final score display",
          he: "פיתחתי אפליקציית חידון עם 10 שאלות רב-ברירה, מעקב התקדמות, משוב עם צבעים ותצוגת ניקוד סופי"
        },
        tech: ["HTML5", "JavaScript", "CSS3", "Git"],
        gradient: "from-fuchsia-500 to-pink-500",
        github: "https://github.com/matan4749/quiz-app-js",
        featured: false,
      },
      {
        title: "Timer App JS",
        description: {
          en: "Dual stopwatch and countdown timer application",
          he: "אפליקציית שעון עצר וטיימר ספירה לאחור כפולה"
        },
        fullDescription: {
          en: "Built timer app with dual mode: stopwatch with lap recording and countdown timer with alert notifications",
          he: "בניתי אפליקציית טיימר עם מצב כפול: שעון עצר עם רישום סיבובים וטיימר ספירה לאחור עם התראות"
        },
        tech: ["HTML5", "JavaScript", "CSS3", "Git"],
        gradient: "from-amber-500 to-orange-500",
        github: "https://github.com/matan4749/timer-app-js",
        featured: false,
      },
      // C# Projects
      {
        title: "E-Commerce REST API",
        description: {
          en: "Professional REST API with ASP.NET Core and Entity Framework",
          he: "REST API מקצועי עם ASP.NET Core ו-Entity Framework"
        },
        fullDescription: {
          en: "Built enterprise-grade REST API using ASP.NET Core 8, Entity Framework Core, and SQL Server. Features JWT authentication, role-based authorization, product catalog with search and filtering, shopping cart, order management, payment integration (Stripe), and comprehensive Swagger documentation. Implements repository pattern, unit of work, and async operations for optimal performance",
          he: "בניתי REST API ברמה ארגונית באמצעות ASP.NET Core 8, Entity Framework Core ו-SQL Server. כולל אימות JWT, הרשאות מבוססות תפקידים, קטלוג מוצרים עם חיפוש וסינון, עגלת קניות, ניהול הזמנות, אינטגרציה עם תשלומים (Stripe) ותיעוד Swagger מקיף. מיישם repository pattern, unit of work ופעולות אסינכרוניות לביצועים אופטימליים"
        },
        tech: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "JWT", "Git"],
        gradient: "from-purple-600 to-blue-600",
        github: "https://github.com/matan4749/ecommerce-api-dotnet",
        featured: true,
      },
      {
        title: "WPF Task Manager Pro",
        description: {
          en: "Advanced desktop task manager with MVVM architecture",
          he: "מנהל משימות שולחני מתקדם עם ארכיטקטורת MVVM"
        },
        fullDescription: {
          en: "Created professional desktop application using WPF and MVVM pattern. Features include task management with categories, priorities, and deadlines, SQLite database with Entity Framework Core, real-time notifications, drag-and-drop interface, data visualization with charts, export to Excel/PDF, dark/light themes, and keyboard shortcuts. Implements INotifyPropertyChanged, commands, and dependency injection",
          he: "יצרתי אפליקציית שולחן עבודה מקצועית באמצעות WPF ותבנית MVVM. כולל ניהול משימות עם קטגוריות, עדיפויות ומועדי יעד, מסד נתונים SQLite עם Entity Framework Core, התראות בזמן אמת, ממשק drag-and-drop, ויזואליזציה של נתונים עם גרפים, ייצוא ל-Excel/PDF, ערכות נושא כהה/בהירה וקיצורי מקלדת. מיישם INotifyPropertyChanged, commands ו-dependency injection"
        },
        tech: ["C#", "WPF", "MVVM", "Entity Framework", "SQLite", "Git"],
        gradient: "from-indigo-600 to-purple-600",
        github: "https://github.com/matan4749/wpf-task-manager",
        featured: true,
      },
      {
        title: "Real-Time Chat Server",
        description: {
          en: "WebSocket chat server with SignalR and Redis",
          he: "שרת צ'אט בזמן אמת עם SignalR ו-Redis"
        },
        fullDescription: {
          en: "Developed scalable real-time chat server using SignalR, ASP.NET Core, and Redis. Features include multiple chat rooms, private messaging, online presence indicators, typing indicators, message history with pagination, file sharing, emoji support, and user authentication. Implements Redis backplane for horizontal scaling, supports thousands of concurrent connections, and includes message encryption for security",
          he: "פיתחתי שרת צ'אט בזמן אמת ברמת scale באמצעות SignalR, ASP.NET Core ו-Redis. כולל מספר חדרי צ'אט, הודעות פרטיות, אינדיקטורים של נוכחות מקוונת, אינדיקטורים של הקלדה, היסטוריית הודעות עם עימוד, שיתוף קבצים, תמיכה באימוג'י ואימות משתמשים. מיישם Redis backplane להרחבה אופקית, תומך באלפי חיבורים במקביל וכולל הצפנת הודעות לאבטחה"
        },
        tech: ["C#", "SignalR", "ASP.NET Core", "Redis", "WebSocket", "Git"],
        gradient: "from-green-600 to-teal-600",
        github: "https://github.com/matan4749/realtime-chat-signalr",
        featured: true,
      },
      {
        title: "Microservices E-Commerce Platform",
        description: {
          en: "Microservices architecture with Docker and RabbitMQ",
          he: "ארכיטקטורת Microservices עם Docker ו-RabbitMQ"
        },
        fullDescription: {
          en: "Built complete microservices-based e-commerce platform with 6 independent services: API Gateway (Ocelot), Product Service, Order Service, Payment Service, Notification Service, and User Service. Each service has its own database (polyglot persistence), communicates via RabbitMQ message bus, and runs in Docker containers. Includes service discovery, circuit breaker pattern (Polly), distributed logging (Serilog), health checks, and monitoring dashboard",
          he: "בניתי פלטפורמת מסחר אלקטרוני מלאה מבוססת microservices עם 6 שירותים עצמאיים: API Gateway (Ocelot), שירות מוצרים, שירות הזמנות, שירות תשלומים, שירות התראות ושירות משתמשים. לכל שירות מסד נתונים משלו (polyglot persistence), מתקשרים דרך RabbitMQ message bus ורצים בקונטיינרים של Docker. כולל service discovery, circuit breaker pattern (Polly), distributed logging (Serilog), health checks ולוח בקרה לניטור"
        },
        tech: ["C#", "Microservices", "Docker", "RabbitMQ", "PostgreSQL", "Git"],
        gradient: "from-blue-600 to-cyan-600",
        github: "https://github.com/matan4749/microservices-ecommerce",
        featured: true,
      },
      // Unity Projects
      {
        title: "Pixel Adventure - 2D Platformer",
        description: {
          en: "Professional 2D platformer game with physics and animations",
          he: "משחק פלטפורמר 2D מקצועי עם פיזיקה ואנימציות"
        },
        fullDescription: {
          en: "Created complete 2D platformer game using Unity with 15+ levels, custom physics system, character animations (idle, run, jump, attack), enemy AI with patrol and chase behaviors, collectible items and power-ups, boss battles, checkpoint system, parallax scrolling backgrounds, particle effects, and sound design. Implements state machine for character controller, object pooling for performance, and save/load system",
          he: "יצרתי משחק פלטפורמר 2D מלא באמצעות Unity עם למעלה מ-15 שלבים, מערכת פיזיקה מותאמת אישית, אנימציות דמות (idle, run, jump, attack), AI אויבים עם התנהגויות סיור ומרדף, פריטים לאיסוף ו-power-ups, קרבות בוס, מערכת checkpoints, רקעים עם parallax scrolling, אפקטי חלקיקים ועיצוב קול. מיישם state machine לבקר דמות, object pooling לביצועים ומערכת save/load"
        },
        tech: ["Unity", "C#", "2D Physics", "Animation", "Git"],
        gradient: "from-red-500 to-orange-500",
        github: "https://github.com/matan4749/pixel-adventure-unity",
        featured: true,
      },
      {
        title: "Mystery Manor - 3D Puzzle Adventure",
        description: {
          en: "3D adventure game with puzzles, AI, and inventory system",
          he: "משחק הרפתקאות 3D עם פאזלים, AI ומערכת תיק"
        },
        fullDescription: {
          en: "Developed 3D puzzle adventure game featuring exploration-based gameplay, 10+ unique puzzles (logic, physics, pattern), advanced AI enemies with A* pathfinding and behavior trees, interactive object system, inventory management with drag-and-drop, dialogue system with branching conversations, quest system, day/night cycle, post-processing effects, and cinematic cutscenes. Built with Universal Render Pipeline for optimized graphics",
          he: "פיתחתי משחק הרפתקאות פאזלים 3D הכולל משחקיות מבוססת חקירה, למעלה מ-10 פאזלים ייחודיים (לוגיקה, פיזיקה, תבניות), אויבי AI מתקדמים עם A* pathfinding ו-behavior trees, מערכת אובייקטים אינטראקטיביים, ניהול תיק עם drag-and-drop, מערכת דיאלוג עם שיחות מסועפות, מערכת משימות, מחזור יום/לילה, אפקטי post-processing וסצנות קולנועיות. נבנה עם Universal Render Pipeline לגרפיקה מיטבית"
        },
        tech: ["Unity", "C#", "3D Graphics", "AI", "Pathfinding", "Git"],
        gradient: "from-purple-500 to-indigo-600",
        github: "https://github.com/matan4749/mystery-manor-unity",
        featured: true,
      },
      {
        title: "AR Math Explorer",
        description: {
          en: "AR educational app for interactive math learning",
          he: "אפליקציית AR חינוכית ללמידת מתמטיקה אינטראקטיבית"
        },
        fullDescription: {
          en: "Built augmented reality educational app using AR Foundation for iOS/Android. Features 3D math visualizations (geometry, fractions, graphs), interactive AR exercises, real-world problem solving with AR objects, progress tracking and achievements, voice feedback, multi-language support, and teacher dashboard. Implements plane detection, image tracking, and gesture recognition for intuitive AR interactions",
          he: "בניתי אפליקציה חינוכית במציאות רבודה באמצעות AR Foundation ל-iOS/Android. כולל ויזואליזציות מתמטיות תלת-ממדיות (גיאומטריה, שברים, גרפים), תרגילי AR אינטראקטיביים, פתרון בעיות מהעולם האמיתי עם אובייקטי AR, מעקב אחר התקדמות והישגים, משוב קולי, תמיכה במספר שפות ולוח בקרה למורים. מיישם plane detection, image tracking וזיהוי מחוות לאינטראקציות AR אינטואיטיביות"
        },
        tech: ["Unity", "C#", "AR Foundation", "Mobile", "Git"],
        gradient: "from-cyan-500 to-blue-600",
        github: "https://github.com/matan4749/ar-math-explorer",
        featured: true,
      },
      // TypeScript Project
      {
        title: "TaskFlow - Project Management Dashboard",
        description: {
          en: "Professional task management dashboard with TypeScript and React",
          he: "לוח ניהול משימות מקצועי עם TypeScript ו-React"
        },
        fullDescription: {
          en: "Created enterprise-grade project management dashboard using TypeScript, React 18, Redux Toolkit, and Material-UI. Features include kanban boards with drag-and-drop, Gantt charts, time tracking, team collaboration, real-time updates via WebSocket, file attachments, notifications, advanced filtering and search, custom reports with charts, dark/light themes, and keyboard shortcuts. Fully typed with TypeScript for type safety and IntelliSense support",
          he: "יצרתי לוח ניהול פרויקטים ברמה ארגונית באמצעות TypeScript, React 18, Redux Toolkit ו-Material-UI. כולל לוחות kanban עם drag-and-drop, תרשימי Gantt, מעקב זמן, שיתוף פעולה צוותי, עדכונים בזמן אמת דרך WebSocket, קבצים מצורפים, התראות, סינון וחיפוש מתקדמים, דוחות מותאמים אישית עם גרפים, ערכות נושא כהה/בהירה וקיצורי מקלדת. מוקלד במלואו עם TypeScript לבטיחות טיפוסים ותמיכת IntelliSense"
        },
        tech: ["TypeScript", "React", "Redux", "Material-UI", "WebSocket", "Git"],
        gradient: "from-blue-600 to-indigo-600",
        github: "https://github.com/matan4749/taskflow-dashboard",
        featured: true,
      },
      // Node.js Project
      {
        title: "SocialHub - Social Media API",
        description: {
          en: "RESTful social media API with Node.js and MongoDB",
          he: "RESTful API למדיה חברתית עם Node.js ו-MongoDB"
        },
        fullDescription: {
          en: "Developed comprehensive social media backend API using Node.js, Express, MongoDB, and Socket.io. Features include user authentication with JWT and OAuth (Google, Facebook), posts with images/videos, comments and nested replies, likes and reactions, follow/unfollow system, news feed algorithm, real-time chat and notifications, story features (24h expiry), hashtags and trending topics, content moderation, and rate limiting. Implements caching with Redis, image processing with Sharp, and file storage with AWS S3",
          he: "פיתחתי API backend מקיף למדיה חברתית באמצעות Node.js, Express, MongoDB ו-Socket.io. כולל אימות משתמשים עם JWT ו-OAuth (Google, Facebook), פוסטים עם תמונות/סרטונים, תגובות ותשובות מקוננות, לייקים ותגובות, מערכת עוקבים/הפסקת מעקב, אלגוריתם עדכוני חדשות, צ'אט והתראות בזמן אמת, תכונות story (תפוגה 24 שעות), האשטאגים ונושאים טרנדים, ניהול תוכן ו-rate limiting. מיישם caching עם Redis, עיבוד תמונות עם Sharp ואחסון קבצים עם AWS S3"
        },
        tech: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Git"],
        gradient: "from-green-500 to-emerald-600",
        github: "https://github.com/matan4749/socialhub-api",
        featured: true,
      },
      // Next.js Project
      {
        title: "DevBlog - Modern Blog Platform",
        description: {
          en: "Full-stack blog platform with Next.js and PostgreSQL",
          he: "פלטפורמת בלוג full-stack עם Next.js ו-PostgreSQL"
        },
        fullDescription: {
          en: "Built modern blog platform using Next.js 14 with App Router, TypeScript, Prisma ORM, and PostgreSQL. Features include server-side rendering and static generation, MDX support for rich content, syntax highlighting for code blocks, image optimization, SEO optimization with metadata, comment system, user authentication with NextAuth, admin dashboard for content management, categories and tags, search functionality, RSS feed, sitemap generation, responsive design, and analytics integration. Deployed on Vercel with edge functions",
          he: "בניתי פלטפורמת בלוג מודרנית באמצעות Next.js 14 עם App Router, TypeScript, Prisma ORM ו-PostgreSQL. כולל server-side rendering ו-static generation, תמיכה ב-MDX לתוכן עשיר, הדגשת תחביר לבלוקים של קוד, אופטימיזציה של תמונות, אופטימיזציית SEO עם metadata, מערכת תגובות, אימות משתמשים עם NextAuth, לוח בקרה למנהל לניהול תוכן, קטגוריות ותגים, פונקציונליות חיפוש, RSS feed, יצירת sitemap, עיצוב רספונסיבי ואינטגרציה עם analytics. נפרס ב-Vercel עם edge functions"
        },
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Git"],
        gradient: "from-slate-600 to-gray-700",
        github: "https://github.com/matan4749/devblog-nextjs",
        featured: true,
      },
      // SQL Project
      {
        title: "Advanced Database Management System",
        description: {
          en: "Complex SQL database with stored procedures and triggers",
          he: "מסד נתונים SQL מורכב עם stored procedures וטריגרים"
        },
        fullDescription: {
          en: "Designed and implemented comprehensive database system for enterprise resource planning (ERP). Includes 30+ normalized tables with proper relationships, complex queries with joins and subqueries, stored procedures for business logic, triggers for data integrity, views for reporting, indexes for performance optimization, full-text search, transaction management with ACID properties, backup and recovery procedures, and user roles with permissions. Features inventory management, order processing, customer relationship management, and financial reporting modules",
          he: "תכננתי ויישמתי מערכת מסד נתונים מקיפה לתכנון משאבי ארגון (ERP). כולל למעלה מ-30 טבלאות מנורמלות עם קשרים תקינים, שאילתות מורכבות עם joins ו-subqueries, stored procedures ללוגיקה עסקית, triggers לשלמות נתונים, views לדיווח, אינדקסים לאופטימיזציה של ביצועים, חיפוש טקסט מלא, ניהול transactions עם תכונות ACID, נוהלי גיבוי ושחזור ותפקידי משתמש עם הרשאות. כולל מודולים לניהול מלאי, עיבוד הזמנות, ניהול קשרי לקוחות ודיווח פיננסי"
        },
        tech: ["SQL Server", "T-SQL", "Database Design", "Stored Procedures", "Git"],
        gradient: "from-orange-600 to-red-600",
        github: "https://github.com/matan4749/advanced-database-system",
        featured: false,
      },
      // Docker Project
      {
        title: "Full-Stack Containerized Application",
        description: {
          en: "Multi-container application with Docker Compose and CI/CD",
          he: "אפליקציה מרובת קונטיינרים עם Docker Compose ו-CI/CD"
        },
        fullDescription: {
          en: "Built production-ready containerized application using Docker and Docker Compose with 7 services: React frontend, Node.js backend API, PostgreSQL database, Redis cache, Nginx reverse proxy, Elasticsearch for search, and Kibana for monitoring. Includes multi-stage Docker builds for optimization, environment-specific configurations, health checks, auto-restart policies, volume management for data persistence, networking configuration, and GitHub Actions CI/CD pipeline for automated testing and deployment. Implements container orchestration best practices and security hardening",
          he: "בניתי אפליקציה מוכנה לייצור מבוססת קונטיינרים באמצעות Docker ו-Docker Compose עם 7 שירותים: frontend React, backend API Node.js, מסד נתונים PostgreSQL, cache Redis, Nginx reverse proxy, Elasticsearch לחיפוש ו-Kibana לניטור. כולל Docker builds רב-שלביים לאופטימיזציה, תצורות ספציפיות לסביבה, health checks, מדיניות auto-restart, ניהול volumes לשימור נתונים, תצורת רשת וצינור CI/CD של GitHub Actions לבדיקה ופריסה אוטומטיות. מיישם שיטות עבודה מומלצות לתזמור קונטיינרים וחיזוק אבטחה"
        },
        tech: ["Docker", "Docker Compose", "CI/CD", "Nginx", "Linux", "Git"],
        gradient: "from-blue-500 to-cyan-500",
        github: "https://github.com/matan4749/docker-fullstack-app",
        featured: false,
      },
      // AI/ML Projects
      {
        title: "AI Chatbot Platform",
        description: {
          en: "Intelligent chatbot with OpenAI GPT-4 and Claude integration",
          he: "צ'אטבוט חכם עם אינטגרציה של OpenAI GPT-4 ו-Claude"
        },
        fullDescription: {
          en: "Built advanced AI chatbot platform supporting multiple LLM providers (OpenAI GPT-4, Anthropic Claude, Google Gemini). Features include conversation memory with vector databases (Pinecone), streaming responses, function calling for tool use, RAG (Retrieval Augmented Generation) for knowledge base integration, multi-turn conversations with context window management, custom system prompts, chat history with search, markdown rendering, code syntax highlighting, and admin dashboard for analytics. Implements rate limiting, cost tracking, and model switching",
          he: "בניתי פלטפורמת צ'אטבוט AI מתקדמת התומכת במספר ספקי LLM (OpenAI GPT-4, Anthropic Claude, Google Gemini). כולל זיכרון שיחות עם מסדי נתונים וקטוריים (Pinecone), תגובות streaming, function calling לשימוש בכלים, RAG (Retrieval Augmented Generation) לאינטגרציה עם בסיס ידע, שיחות מרובות תורות עם ניהול context window, system prompts מותאמים אישית, היסטוריית צ'אט עם חיפוש, רינדור markdown, הדגשת תחביר קוד ולוח בקרה למנהל עם analytics. מיישם rate limiting, מעקב עלויות והחלפת מודלים"
        },
        tech: ["Python", "OpenAI", "Claude", "FastAPI", "Pinecone", "LangChain", "Git"],
        gradient: "from-violet-500 to-purple-600",
        github: "https://github.com/matan4749/ai-chatbot-platform",
        featured: true,
      },
      {
        title: "AI Image Generator Studio",
        description: {
          en: "Text-to-image generation with Stable Diffusion and DALL-E",
          he: "יצירת תמונות מטקסט עם Stable Diffusion ו-DALL-E"
        },
        fullDescription: {
          en: "Created professional AI image generation platform supporting multiple models: Stable Diffusion XL, DALL-E 3, and Midjourney API. Features include prompt engineering templates, negative prompts, style presets (photorealistic, anime, oil painting, etc.), image upscaling with Real-ESRGAN, inpainting and outpainting, ControlNet for pose/depth/edge guidance, batch generation, gallery with search and filters, image editing with AI (background removal, object replacement), and API for integration. Built with React frontend and Python backend using diffusers library",
          he: "יצרתי פלטפורמה מקצועית ליצירת תמונות AI התומכת במודלים מרובים: Stable Diffusion XL, DALL-E 3 ו-Midjourney API. כולל תבניות prompt engineering, negative prompts, presets סגנון (פוטוריאליסטי, אנימה, ציור שמן וכו'), הגדלת תמונות עם Real-ESRGAN, inpainting ו-outpainting, ControlNet להנחיית pose/depth/edge, יצירה אצווה, גלריה עם חיפוש וסינונים, עריכת תמונות עם AI (הסרת רקע, החלפת אובייקטים) ו-API לאינטגרציה. נבנה עם React frontend ו-Python backend באמצעות ספריית diffusers"
        },
        tech: ["Python", "Stable Diffusion", "DALL-E", "React", "PyTorch", "FastAPI", "Git"],
        gradient: "from-pink-500 to-rose-600",
        github: "https://github.com/matan4749/ai-image-generator",
        featured: true,
      },
      {
        title: "AI Code Assistant",
        description: {
          en: "Intelligent code completion and generation with AI",
          he: "השלמה ויצירת קוד חכמה עם AI"
        },
        fullDescription: {
          en: "Developed VS Code extension for AI-powered coding assistance using OpenAI Codex and Claude. Features include intelligent code completion, natural language to code translation, code explanation and documentation generation, bug detection and fixing suggestions, code refactoring recommendations, unit test generation, multiple programming languages support (Python, JavaScript, TypeScript, Java, C++), context-aware suggestions based on project structure, inline chat for coding questions, and code review assistance. Integrates with GitHub Copilot alternative",
          he: "פיתחתי תוסף VS Code לסיוע קידוד מבוסס AI באמצעות OpenAI Codex ו-Claude. כולל השלמת קוד חכמה, תרגום שפה טבעית לקוד, הסבר קוד ויצירת תיעוד, זיהוי באגים והצעות תיקון, המלצות refactoring, יצירת unit tests, תמיכה במספר שפות תכנות (Python, JavaScript, TypeScript, Java, C++), הצעות מודעות הקשר על בסיס מבנה הפרויקט, צ'אט inline לשאלות קידוד וסיוע בסקירת קוד. אינטגרציה עם אלטרנטיבה ל-GitHub Copilot"
        },
        tech: ["TypeScript", "OpenAI", "VS Code API", "Node.js", "AI", "Git"],
        gradient: "from-emerald-500 to-teal-600",
        github: "https://github.com/matan4749/ai-code-assistant",
        featured: true,
      },
      {
        title: "Natural Language to SQL",
        description: {
          en: "Convert natural language queries to SQL with AI",
          he: "המרת שאילתות בשפה טבעית ל-SQL עם AI"
        },
        fullDescription: {
          en: "Built intelligent system that converts natural language questions to SQL queries using fine-tuned LLM models. Features include database schema understanding, complex query generation (joins, subqueries, aggregations), query optimization suggestions, SQL dialect support (PostgreSQL, MySQL, SQL Server), query explanation in natural language, result visualization with charts, query history and templates, support for multiple tables and relationships, error handling with correction suggestions, and API for integration with existing applications. Trained on WikiSQL and Spider datasets",
          he: "בניתי מערכת חכמה הממירה שאלות בשפה טבעית לשאילתות SQL באמצעות מודלי LLM מכווננים. כולל הבנת schema של מסד נתונים, יצירת שאילתות מורכבות (joins, subqueries, aggregations), הצעות אופטימיזציה לשאילתות, תמיכה ב-SQL dialects (PostgreSQL, MySQL, SQL Server), הסבר שאילתה בשפה טבעית, ויזואליזציה של תוצאות עם גרפים, היסטוריה ותבניות שאילתות, תמיכה במספר טבלאות וקשרים, טיפול בשגיאות עם הצעות תיקון ו-API לאינטגרציה עם אפליקציות קיימות. אומן על WikiSQL ו-Spider datasets"
        },
        tech: ["Python", "LangChain", "OpenAI", "SQL", "PostgreSQL", "Streamlit", "Git"],
        gradient: "from-yellow-500 to-orange-600",
        github: "https://github.com/matan4749/nl-to-sql",
        featured: true,
      },
      {
        title: "AI Content Generator",
        description: {
          en: "Multi-purpose content creation with AI (blog, social media, marketing)",
          he: "יצירת תוכן רב-תכליתי עם AI (בלוג, רשתות חברתיות, שיווק)"
        },
        fullDescription: {
          en: "Created comprehensive AI content generation platform for marketing and social media. Features include blog post generation with SEO optimization, social media captions for multiple platforms (Instagram, Twitter, LinkedIn, Facebook), product descriptions, email marketing campaigns, ad copy generation, content rephrasing and improvement, tone adjustment (professional, casual, friendly, formal), keyword integration, plagiarism checking, content calendar planning, A/B testing suggestions, and analytics for content performance. Supports multiple languages and includes brand voice customization",
          he: "יצרתי פלטפורמה מקיפה ליצירת תוכן AI לשיווק ורשתות חברתיות. כולל יצירת פוסטים לבלוג עם אופטימיזציית SEO, כיתובים לרשתות חברתיות למספר פלטפורמות (Instagram, Twitter, LinkedIn, Facebook), תיאורי מוצרים, קמפיינים של email marketing, יצירת copy לפרסומות, ניסוח מחדש ושיפור תוכן, התאמת tone (מקצועי, casual, ידידותי, רשמי), אינטגרציה של מילות מפתח, בדיקת plagiarism, תכנון לוח תוכן, הצעות A/B testing ו-analytics לביצועי תוכן. תומך במספר שפות וכולל התאמה אישית של brand voice"
        },
        tech: ["Python", "OpenAI", "React", "FastAPI", "SEO", "AI", "Git"],
        gradient: "from-indigo-500 to-blue-600",
        github: "https://github.com/matan4749/ai-content-generator",
        featured: true,
      },
      {
        title: "Computer Vision Object Detection",
        description: {
          en: "Real-time object detection and tracking with YOLO and OpenCV",
          he: "זיהוי ומעקב אובייקטים בזמן אמת עם YOLO ו-OpenCV"
        },
        fullDescription: {
          en: "Developed computer vision system for real-time object detection and tracking using YOLOv8, OpenCV, and TensorFlow. Features include detection of 80+ object classes, real-time video processing (webcam, video files, IP cameras), object tracking across frames, instance segmentation, pose estimation, face detection and recognition, license plate reading, custom model training, batch processing for images/videos, detection confidence adjustment, bounding box visualization with labels, and REST API for integration. Optimized for GPU acceleration with CUDA support",
          he: "פיתחתי מערכת computer vision לזיהוי ומעקב אובייקטים בזמן אמת באמצעות YOLOv8, OpenCV ו-TensorFlow. כולל זיהוי של למעלה מ-80 מחלקות אובייקטים, עיבוד וידאו בזמן אמת (מצלמת אינטרנט, קבצי וידאו, מצלמות IP), מעקב אובייקטים בין פריימים, instance segmentation, pose estimation, זיהוי והכרת פנים, קריאת לוחיות רישוי, אימון מודל מותאם אישית, עיבוד אצווה לתמונות/וידאו, התאמת confidence לזיהוי, ויזואליזציה של bounding boxes עם תוויות ו-REST API לאינטגרציה. מותאם לאצה GPU עם תמיכת CUDA"
        },
        tech: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "PyTorch", "Computer Vision", "Git"],
        gradient: "from-red-500 to-pink-600",
        github: "https://github.com/matan4749/cv-object-detection",
        featured: true,
      },
      {
        title: "ML Model Training Platform",
        description: {
          en: "AutoML platform for training and deploying machine learning models",
          he: "פלטפורמת AutoML לאימון ופריסה של מודלי machine learning"
        },
        fullDescription: {
          en: "Built comprehensive AutoML platform for end-to-end machine learning workflows. Features include automated data preprocessing (handling missing values, encoding, scaling), feature engineering and selection, algorithm selection and hyperparameter tuning with Optuna, model training for classification and regression tasks, model evaluation with cross-validation, ensemble methods, model explainability with SHAP values, experiment tracking with MLflow, model versioning and registry, automated deployment with FastAPI, real-time prediction API, monitoring and drift detection, and Jupyter notebook integration for exploration",
          he: "בניתי פלטפורמת AutoML מקיפה לזרימות עבודה machine learning מקצה לקצה. כולל עיבוד מקדים אוטומטי של נתונים (טיפול בערכים חסרים, encoding, scaling), feature engineering ובחירה, בחירת אלגוריתם וכיוון hyperparameters עם Optuna, אימון מודל למשימות classification ו-regression, הערכת מודל עם cross-validation, שיטות ensemble, explainability של מודל עם ערכי SHAP, מעקב ניסויים עם MLflow, versioning ו-registry של מודלים, פריסה אוטומטית עם FastAPI, API לחיזוי בזמן אמת, ניטור וזיהוי drift ואינטגרציה של Jupyter notebook לחקירה"
        },
        tech: ["Python", "Scikit-learn", "MLflow", "Optuna", "FastAPI", "AutoML", "Git"],
        gradient: "from-purple-500 to-indigo-600",
        github: "https://github.com/matan4749/ml-training-platform",
        featured: false,
      },
      {
        title: "AI Recommendation Engine",
        description: {
          en: "Personalized recommendation system with collaborative filtering",
          he: "מנוע המלצות מותאם אישית עם collaborative filtering"
        },
        fullDescription: {
          en: "Developed sophisticated recommendation engine using multiple algorithms: collaborative filtering (user-based and item-based), content-based filtering, matrix factorization with SVD, deep learning with neural networks, and hybrid approaches. Features include real-time recommendations, cold start problem handling, A/B testing framework, diversity and serendipity optimization, explainable recommendations, scalability with Apache Spark, batch and streaming processing, recommendation API with caching, user preference learning, and analytics dashboard. Implemented for e-commerce, content streaming, and social platforms",
          he: "פיתחתי מנוע המלצות מתוחכם באמצעות אלגוריתמים מרובים: collaborative filtering (מבוסס משתמש ומבוסס פריט), content-based filtering, matrix factorization עם SVD, deep learning עם רשתות נוירונים וגישות היברידיות. כולל המלצות בזמן אמת, טיפול ב-cold start problem, מסגרת A/B testing, אופטימיזציה של גיוון ו-serendipity, המלצות ניתנות להסבר, scalability עם Apache Spark, עיבוד אצווה ו-streaming, API המלצות עם caching, למידת העדפות משתמש ולוח בקרה analytics. מיושם עבור מסחר אלקטרוני, streaming תוכן ופלטפורמות חברתיות"
        },
        tech: ["Python", "TensorFlow", "Spark", "Redis", "Collaborative Filtering", "ML", "Git"],
        gradient: "from-cyan-500 to-blue-600",
        github: "https://github.com/matan4749/ai-recommendation-engine",
        featured: false,
      },
    ],
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessageText = inputMessage.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessageText }]);
    setInputMessage("");

    // Add typing indicator
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "typing" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      const data = await response.json();

      // Remove loading message and add AI response
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content: data.response || data.error || t("chat.error"),
        };
        return newMessages;
      });
    } catch (error) {
      // Remove loading message and show error
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content: t("chat.error"),
        };
        return newMessages;
      });
    }
  };

  const handleSendMessageOld = () => {
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim().toLowerCase();
    setMessages((prev) => [...prev, { role: "user", content: inputMessage }]);
    setInputMessage("");

    setTimeout(() => {
      let response = "";

      // כישורים וטכנולוגיות
      if (
        userMessage.includes("כישור") ||
        userMessage.includes("skill") ||
        userMessage.includes("טכנולוגי") ||
        userMessage.includes("שפ") ||
        userMessage.includes("language")
      ) {
        response = `אני שולט במגוון רחב של טכנולוגיות! 💻

הכישורים הטכניים שלי כוללים:
${cvKnowledge.skills.map((s) => `• ${s.name} (${s.category})`).join("\n")}

אני במיוחד מנוסה ב-C#, Python ו-JavaScript, ועבדתי איתם בפרויקטים מגוונים - מפיתוח משחקים ב-Unity ועד אוטומציה עם RPA.

רוצה לדעת יותר על טכנולוגיה ספציפית? 🚀`;
      }

      // ניסיון בעבודה
      else if (
        userMessage.includes("ניסיון") ||
        userMessage.includes("experience") ||
        userMessage.includes("עבוד") ||
        userMessage.includes("תפקיד")
      ) {
        response =
          `הניסיון המקצועי שלי כולל ${cvKnowledge.experience.length} תפקידים מרכזיים:\n\n` +
          cvKnowledge.experience
            .map(
              (exp) =>
                `📌 ${exp.title}\n${exp.company} | ${exp.year}\n${exp.description}\n`
            )
            .join("\n");
      }

      // פרויקטים
      else if (
        userMessage.includes("פרויקט") ||
        userMessage.includes("project") ||
        userMessage.includes("עבודות")
      ) {
        response =
          `פיתחתי ${cvKnowledge.projects.length} פרויקטים מרכזיים:\n\n` +
          cvKnowledge.projects
            .map(
              (proj) =>
                `🎯 ${proj.title}\n${
                  proj.description
                }\n💡 טכנולוגיות: ${proj.tech.join(", ")}\n`
            )
            .join("\n");
      }

      // פרטי קשר
      else if (
        userMessage.includes("קשר") ||
        userMessage.includes("contact") ||
        userMessage.includes("מייל") ||
        userMessage.includes("טלפון") ||
        userMessage.includes("אימייל") ||
        userMessage.includes("email") ||
        userMessage.includes("phone")
      ) {
        response = `שמח לשמוע ממך! אפשר ליצור איתי קשר בכמה דרכים:\n\n📧 מייל: ${cvKnowledge.personalInfo.email}\n📱 טלפון: ${cvKnowledge.personalInfo.phone}\n💼 LinkedIn: ${cvKnowledge.personalInfo.linkedin}\n👨‍💻 GitHub: ${cvKnowledge.personalInfo.github}\n\nמצפה לשמוע ממך! 😊`;
      }

      // מספר טלפון
      else if (userMessage.includes("מספר") || userMessage.includes("נייד")) {
        response = `המספר שלי הוא: ${cvKnowledge.personalInfo.phone}\n\nניתן ליצור איתי קשר בכל זמן! 📞`;
      }

      // אימייל
      else if (userMessage.includes("mail")) {
        response = `האימייל שלי הוא: ${cvKnowledge.personalInfo.email}\n\nשלח לי הודעה ואחזור אליך בהקדם! ✉️`;
      }

      // השכלה ולימודים
      else if (
        userMessage.includes("לימוד") ||
        userMessage.includes("השכלה") ||
        userMessage.includes("סיים") ||
        userMessage.includes("תואר") ||
        userMessage.includes("מכללה") ||
        userMessage.includes("אוניברסיטה") ||
        userMessage.includes("study") ||
        userMessage.includes("education")
      ) {
        response =
          `ההשכלה שלי כוללת:\n\n` +
          cvKnowledge.education
            .map(
              (edu) =>
                `🎓 ${edu.degree}\n${edu.institution} | ${edu.year}${
                  edu.details ? `\nהתמקדות: ${edu.details}` : ""
                }\n`
            )
            .join("\n");
      }

      // איפה למדת
      else if (
        userMessage.includes("איפה למד") ||
        userMessage.includes("where study")
      ) {
        response =
          `למדתי במוסדות הבאים:\n\n` +
          cvKnowledge.education
            .map((edu) => `📍 ${edu.institution}, ${edu.location}`)
            .join("\n");
      }

      // באיזו שנה סיימת
      else if (
        userMessage.includes("שנה") ||
        userMessage.includes("מתי") ||
        userMessage.includes("when")
      ) {
        response = `סיימתי את הלימודים ב-${cvKnowledge.education[0].year}.\n\nמאז אני עובד בתחום הפיתוח והאוטומציה! 💼`;
      }

      // מי אתה
      else if (
        userMessage.includes("מי") ||
        userMessage.includes("who") ||
        userMessage.includes("שם") ||
        userMessage.includes("עצמך") ||
        userMessage.includes("yourself")
      ) {
        response = `שמי מתן עמר, ואני מפתח תוכנה ומומחה RPA! 👨‍💻\n\nיש לי ניסיון בפיתוח אפליקציות, אוטומציה, ומשחקים חינוכיים.\nאני נלהב מטכנולוגיה וחדשנות, ותמיד מחפש אתגרים חדשים.\n\nאני שולט במגוון שפות תכנות ופלטפורמות, ונהנה לבנות פתרונות שעוזרים לאנשים! 🚀`;
      }

      // Unity ופיתוח משחקים
      else if (
        userMessage.includes("unity") ||
        userMessage.includes("משחק") ||
        userMessage.includes("game")
      ) {
        response = `אני התמחיתי בפיתוח משחקים עם Unity! 🎮\n\nהפרויקט המרכזי שלי הוא ThinkWell - משחק חינוכי לילדים אוטיסטים.\nעבדתי כ-Game Developer ב-Educational Tech (2020-2021).\n\nפיתוח משחקים הוא תחום מרתק שמשלב יצירתיות עם טכנולוגיה! 🌟`;
      }

      // RPA ואוטומציה
      else if (
        userMessage.includes("rpa") ||
        userMessage.includes("אוטומציה") ||
        userMessage.includes("automation") ||
        userMessage.includes("uipath")
      ) {
        response = `אני מומחה ב-RPA (Robotic Process Automation)! 🤖\n\nעבדתי עם UiPath לפיתוח פתרונות אוטומציה חכמים.\nהצלחתי לצמצם תהליכים ידניים ב-60% בפרויקטים שונים.\n\nאוטומציה היא העתיד - היא חוסכת זמן, מפחיתה טעויות ומשחררת אנשים לעבודה יצירתית יותר! ⚡`;
      }

      // שפות תכנות ספציפיות
      else if (
        userMessage.includes("python") ||
        userMessage.includes("c#") ||
        userMessage.includes("javascript") ||
        userMessage.includes("react")
      ) {
        const lang = userMessage.includes("python")
          ? "Python"
          : userMessage.includes("c#")
          ? "C#"
          : userMessage.includes("react")
          ? "React"
          : "JavaScript";
        response = `אני שולט ב-${lang} ועובד איתו הרבה! 💻\n\nבניתי אפליקציות cross-platform, פתרונות אוטומציה, ומשחקים באמצעות ${lang}.\n\nהשפה הזו היא אחת הכלים המרכזיים שלי בפיתוח! 🚀`;
      }

      // GitHub
      else if (
        userMessage.includes("github") ||
        userMessage.includes("git") ||
        userMessage.includes("קוד")
      ) {
        response = `ה-GitHub שלי: ${cvKnowledge.personalInfo.github}\n\nשם תוכלו למצוא את הפרויקטים שלי וקוד שכתבתי.\nמוזמנים לעקוב ולהתרשם! 👨‍💻`;
      }

      // LinkedIn
      else if (
        userMessage.includes("linkedin") ||
        userMessage.includes("לינקדאין")
      ) {
        response = `ה-LinkedIn שלי: ${cvKnowledge.personalInfo.linkedin}\n\nשם תוכלו למצוא יותר פרטים על הקריירה המקצועית שלי.\nשמח לחברות מקצועית! 💼`;
      }

      // HMS
      else if (
        userMessage.includes("hms") ||
        userMessage.includes("hospital")
      ) {
        response = `עבדתי על HMS (Hospital Management System) בין 2020-2023! 🏥\n\nזה היה פרויקט מרכזי שבו פיתחתי פתרונות אוטומציה לבתי חולים.\nהשתמשתי ב-C#, Python ו-UiPath לשיפור תהליכי עבודה וניהול רשומות מטופלים.\n\nהפרויקט שילב אתגרים טכנולוגיים עם השפעה אמיתית על חיי אנשים! 💡`;
      }

      // ThinkWell
      else if (
        userMessage.includes("thinkwell") ||
        userMessage.includes("ת'ינקוול")
      ) {
        response = `ThinkWell הוא אחד הפרויקטים שאני הכי גאה בהם! 🎮\n\nזה משחק חינוכי מבוסס Unity שפיתחתי לילדים אוטיסטים.\nהמשחק כולל מודולי למידה אינטראקטיביים וממשק ידידותי לחושים.\n\nהמטרה הייתה ליצור כלי למידה נגיש ומהנה לילדים עם צרכים מיוחדים. 🌟`;
      }

      // 8-Room
      else if (userMessage.includes("8-room") || userMessage.includes("room")) {
        response = `8-Room היא אפליקציית מובייל שפיתחתי עם React Native! 📱\n\nהאפליקציה מאפשרת הזמנת חדרים וניהול עם זמינות בזמן אמת.\nבניתי אותה עם TypeScript וממשק משתמש מודרני.\n\nהפרויקט שילב פיתוח mobile, עיצוב UX ועבודה עם APIs. 🚀`;
      }

      // ברירת מחדל - תפריט עזרה
      else {
        response = `אני כאן לעזור! אפשר לשאול אותי על:\n\n👨‍💻 על עצמי ומי אני\n💼 ניסיון בעבודה ותפקידים\n🎯 הפרויקטים שפיתחתי\n🛠️ כישורים טכנולוגיים\n🎓 השכלה ולימודים\n📞 פרטי קשר (מייל, טלפון)\n💼 LinkedIn ו-GitHub\n\nפשוט כתוב מה מעניין אותך! 😊`;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 blur-bg border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            {t("nav.name")}
          </motion.div>
          <div className="flex gap-4">
            <LanguageToggle />
            {[
              {
                href: `https://${cvKnowledge.personalInfo.github}`,
                icon: Github,
              },
              {
                href: `https://${cvKnowledge.personalInfo.linkedin}`,
                icon: Linkedin,
              },
              { href: `mailto:${cvKnowledge.personalInfo.email}`, icon: Mail },
              { href: `tel:${cvKnowledge.personalInfo.phone}`, icon: Phone },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {t("hero.badge")}
                </span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                >
                  <span className="gradient-text glow-text">{t("hero.name")}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold"
                >
                  {t("hero.title")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl"
                >
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {expandedAbout
                      ? t("hero.fullDescription")
                      : t("hero.shortDescription")}
                  </p>
                  <button
                    onClick={() => setExpandedAbout(!expandedAbout)}
                    className="mt-3 text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <span>{expandedAbout ? t("hero.showLess") : t("hero.readMore")}</span>
                    <motion.div
                      animate={{ rotate: expandedAbout ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary flex items-center gap-2"
                >
                  <span>{t("hero.viewWork")}</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Matan-Amar-CV.pdf"
                  download="Matan-Amar-CV.pdf"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>{t("hero.downloadCV")}</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${cvKnowledge.personalInfo.email}`}
                  className="btn-secondary"
                >
                  {t("hero.getInTouch")}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              >
                {/* Animated gradient border rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)",
                    padding: "4px",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), white 0)",
                  }}
                />

                {/* Profile image container with glow */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm profile-glow">
                  <Image
                    src="/profile.jpg"
                    alt="Matan Amar Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
                >
                  <Code2 className="w-10 h-10 text-cyan-400" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
                >
                  <Zap className="w-10 h-10 text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-cyan-400"
            >
              <span className="text-sm">{t("hero.scrollToExplore")}</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              {t("skills.title")}
            </h2>
            <p className="text-gray-400 text-base md:text-lg">{t("skills.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {cvKnowledge.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkill(skill.name)}
                className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="tech-icon">
                    <i className={`${skill.icon} text-6xl`}></i>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {skill.category}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              {t("experience.title")}
            </h2>
            <p className="text-gray-400 text-base md:text-lg">{t("experience.subtitle")}</p>
          </motion.div>

          <div className="space-y-8">
            {cvKnowledge.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div
                  className={`p-4 sm:p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all card-hover ${
                    (exp as any).fullDescription ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if ((exp as any).fullDescription) {
                      setExpandedExperience(
                        expandedExperience === index ? null : index
                      );
                    }
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                        {index === 0 ? <Zap className="w-6 h-6" /> : <User className="w-6 h-6" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {typeof exp.title === 'object' ? exp.title[language] : exp.title}
                        </h3>
                        <span className="text-cyan-400 font-medium text-sm md:text-base">
                          {exp.year}
                        </span>
                      </div>
                      <div className="text-blue-400 font-semibold mb-3 text-sm md:text-base">
                        {typeof exp.company === 'object' ? exp.company[language] : exp.company}
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {typeof exp.description === 'object' ? exp.description[language] : exp.description}
                      </p>
                      <AnimatePresence>
                        {(exp as any).fullDescription &&
                          expandedExperience === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                  {typeof (exp as any).fullDescription === 'object'
                                    ? (exp as any).fullDescription[language]
                                    : (exp as any).fullDescription}
                                </p>
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-gray-400 text-base md:text-lg">{t("projects.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {cvKnowledge.projects
              .filter(project => showAllProjects || project.featured)
              .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group w-full"
              >
                <div
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all card-hover cursor-pointer flex flex-col"
                  onClick={() => {
                    setExpandedProject(
                      expandedProject === index ? null : index
                    );
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                      index === 0 ? "from-cyan-500 to-blue-500" :
                      index === 1 ? "from-blue-500 to-purple-500" :
                      "from-purple-500 to-pink-500"
                    } mb-6 flex items-center justify-center`}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                    {typeof project.description === 'object' ? project.description[language] : project.description}
                  </p>

                  {project.fullDescription && expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mb-4"
                    >
                      <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {typeof project.fullDescription === 'object'
                            ? project.fullDescription[language]
                            : project.fullDescription}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-gray-300 hover:text-cyan-400 transition-all group/github"
                    >
                      <Github className="w-4 h-4 group-hover/github:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{t("projects.viewGithub")}</span>
                      <ArrowRight className="w-4 h-4 group-hover/github:translate-x-1 transition-transform" />
                    </a>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 mx-auto"
            >
              <Database className="w-5 h-5" />
              <span>{showAllProjects ? t("projects.showLess") : t("projects.showMore")}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${showAllProjects ? 'rotate-180' : ''}`} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              {t("contact.title")}
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${cvKnowledge.personalInfo.email}`}
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>{t("contact.emailMe")}</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/972545993085"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border-green-500/30 hover:border-green-500/50 text-green-400 hover:text-green-300"
              >
                <Phone className="w-5 h-5" />
                <span>{t("contact.whatsapp")}</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://${cvKnowledge.personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>{t("contact.linkedin")}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1f3a] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold gradient-text">
                  {t("skills.modal.title")} {selectedSkill}
                </h3>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {cvKnowledge.projects
                  .filter((project) =>
                    project.tech.some((tech) =>
                      tech.toLowerCase().includes(selectedSkill.toLowerCase()) ||
                      selectedSkill.toLowerCase().includes(tech.toLowerCase())
                    )
                  )
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                    >
                      <h4 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-3">
                        {typeof project.description === 'object'
                          ? project.description[language]
                          : project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`px-3 py-1 text-xs rounded-full ${
                              tech.toLowerCase().includes(selectedSkill.toLowerCase()) ||
                              selectedSkill.toLowerCase().includes(tech.toLowerCase())
                                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                : "bg-white/5 text-gray-400 border border-white/10"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                {cvKnowledge.projects.filter((project) =>
                  project.tech.some((tech) =>
                    tech.toLowerCase().includes(selectedSkill.toLowerCase()) ||
                    selectedSkill.toLowerCase().includes(tech.toLowerCase())
                  )
                ).length === 0 && (
                  <p className="text-gray-400 text-center py-8">
                    {t("skills.modal.noProjects")}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/50 z-[100]"
      >
        <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.button>

      {/* AI Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 left-6 right-6 sm:bottom-28 sm:left-auto sm:right-8 sm:w-96 h-[70vh] max-h-[600px] sm:h-[500px] rounded-2xl bg-[#1a1f3a] border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-[100] flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-3 sm:p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-white/10 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white hebrew-inline text-sm sm:text-base truncate">
                    {t("chat.name")}
                  </h3>
                  <p className="text-xs text-gray-400 hebrew-inline truncate">
                    {t("chat.subtitle")}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-2"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.content === "typing" ? (
                    <div className="bg-white/5 border border-white/10 rounded-2xl">
                      <TypingIndicator />
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl hebrew-inline ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-cyan-500 to-blue-500 text-white"
                          : "bg-white/5 text-gray-200 border border-white/10"
                      }`}
                      style={{ lineHeight: "1.8" }}
                    >
                      {message.content.split("\n").map((line, i) => (
                        <div key={i} className="text-sm mb-1">
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 sm:p-4 border-t border-white/10 bg-white/5 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={t("chat.placeholder")}
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors hebrew-inline"
                  style={{ direction: language === "he" ? "rtl" : "ltr" }}
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex-shrink-0"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              &copy; 2025 {t("nav.name")}. {t("footer.rights")}
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a
                href={`mailto:${cvKnowledge.personalInfo.email}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {cvKnowledge.personalInfo.email}
              </a>
              <span>•</span>
              <a
                href={`tel:${cvKnowledge.personalInfo.phone}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {cvKnowledge.personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
