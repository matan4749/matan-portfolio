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
        icon: "https://cdn.simpleicons.org/openai/412991",
        category: "AI/ML",
      },
      {
        name: "LangChain",
        icon: "devicon-python-plain colored",
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
      {
        title: "CV-to-Portfolio Builder",
        description: {
          en: "AI-powered platform that transforms CVs into stunning portfolio websites",
          he: "פלטפורמה מונעת AI שממירה קורות חיים לאתרי תיק עבודות מרהיבים"
        },
        fullDescription: {
          en: "Built innovative SaaS platform using Next.js 15 and OpenAI GPT-4 that automatically converts CVs (PDF/manual input) into professional portfolio websites. Features include AI-powered content extraction and enhancement, 10+ customizable modern templates, real-time preview with live editing, automatic skill categorization, SEO optimization, responsive design for all devices, custom domain support (matan.life), one-click deployment to Vercel, and analytics dashboard. Integrated with Stripe for payments and MongoDB for data storage. Perfect tool for job seekers to create impressive online presence in minutes",
          he: "בניתי פלטפורמת SaaS חדשנית באמצעות Next.js 15 ו-OpenAI GPT-4 שממירה אוטומטית קורות חיים (PDF/הזנה ידנית) לאתרי תיק עבודות מקצועיים. כולל חילוץ ושיפור תוכן מונע AI, למעלה מ-10 תבניות מודרניות ניתנות להתאמה אישית, תצוגה מקדימה בזמן אמת עם עריכה חיה, סיווג כישורים אוטומטי, אופטימיזציה ל-SEO, עיצוב רספונסיבי לכל המכשירים, תמיכה בדומיין מותאם אישית (matan.life), פריסה בלחיצה אחת ל-Vercel ולוח מחוונים לאנליטיקה. משולב עם Stripe לתשלומים ו-MongoDB לאחסון נתונים. כלי מושלם למחפשי עבודה ליצור נוכחות אונליין מרשימה תוך דקות"
        },
        tech: ["Next.js", "TypeScript", "OpenAI", "MongoDB", "Stripe", "Vercel", "Tailwind CSS", "Git"],
        gradient: "from-emerald-500 to-teal-500",
        github: "https://github.com/matan4749/cv-to-portfolio",
        featured: true,
      },
      {
        title: "AI Image Recognition System",
        description: {
          en: "Advanced computer vision platform with real-time object detection",
          he: "פלטפורמת ראייה ממוחשבת מתקדמת עם זיהוי עצמים בזמן אמת"
        },
        fullDescription: {
          en: "Developed production-ready computer vision system using TensorFlow and OpenCV with 95%+ accuracy. Features include real-time object detection and classification for 1000+ categories, facial recognition and emotion analysis, custom model training pipeline, REST API for easy integration, batch processing for large image datasets, confidence scoring and bounding box visualization, and deployment on AWS with auto-scaling. Processes 100+ images per second with optimized inference",
          he: "פיתחתי מערכת ראייה ממוחשבת מוכנת לייצור באמצעות TensorFlow ו-OpenCV עם דיוק של 95%+. כולל זיהוי וסיווג עצמים בזמן אמת עבור למעלה מ-1000 קטגוריות, זיהוי פנים וניתוח רגשות, צינור אימון מודל מותאם אישית, REST API לאינטגרציה קלה, עיבוד אצווה עבור מערכי נתוני תמונות גדולים, ציון ביטחון וויזואליזציה של תיבות תוחמות, ופריסה ב-AWS עם קנה מידה אוטומטי. מעבד למעלה מ-100 תמונות לשנייה עם הסקה מאופטמת"
        },
        tech: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "FastAPI", "Docker", "AWS", "Git"],
        gradient: "from-orange-500 to-red-500",
        github: "https://github.com/matan4749/ai-image-recognition",
        featured: false,
      },
      {
        title: "Sentiment Analysis API",
        description: {
          en: "NLP-powered sentiment analysis with multi-language support",
          he: "ניתוח סנטימנט מבוסס NLP עם תמיכה במספר שפות"
        },
        fullDescription: {
          en: "Built enterprise-grade NLP API using PyTorch and Hugging Face Transformers for real-time sentiment analysis. Supports 15+ languages including Hebrew and Arabic, analyzes sentiment polarity (positive/negative/neutral) with confidence scores, detects emotions and aspect-based sentiment, handles 10,000+ requests per minute with Redis caching, includes pre-trained BERT models fine-tuned on domain-specific data, provides detailed analytics dashboard, and REST API with comprehensive documentation. Deployed on Kubernetes for high availability",
          he: "בניתי API NLP ברמה ארגונית באמצעות PyTorch ו-Hugging Face Transformers לניתוח סנטימנט בזמן אמת. תומך בלמעלה מ-15 שפות כולל עברית וערבית, מנתח קוטביות סנטימנט (חיובי/שלילי/ניטרלי) עם ציוני ביטחון, מזהה רגשות וסנטימנט מבוסס היבטים, מטפל בלמעלה מ-10,000 בקשות לדקה עם caching Redis, כולל מודלי BERT מאומנים מראש המכווננים על נתונים ספציפיים לתחום, מספק לוח מחוונים אנליטי מפורט, ו-REST API עם תיעוד מקיף. נפרס ב-Kubernetes לזמינות גבוהה"
        },
        tech: ["Python", "PyTorch", "NLP", "FastAPI", "Redis", "Kubernetes", "Docker", "Git"],
        gradient: "from-pink-500 to-rose-500",
        github: "https://github.com/matan4749/sentiment-analysis-api",
        featured: false,
      },
      {
        title: "Smart RAG Chatbot",
        description: {
          en: "Intelligent chatbot with Retrieval-Augmented Generation",
          he: "צ'אטבוט חכם עם יכולות RAG"
        },
        fullDescription: {
          en: "Developed advanced AI chatbot using LangChain and OpenAI GPT-4 with Retrieval-Augmented Generation for accurate, context-aware responses. Features include vector database integration with Pinecone for semantic search, ingests and processes documents (PDF, Word, web pages), maintains conversation history and context, custom prompt engineering for domain-specific use cases, streaming responses for better UX, multi-turn conversations with memory, and analytics for conversation insights. Reduces hallucinations by 80% through RAG architecture",
          he: "פיתחתי צ'אטבוט AI מתקדם באמצעות LangChain ו-OpenAI GPT-4 עם Retrieval-Augmented Generation לתגובות מדויקות ומודעות הקשר. כולל אינטגרציה עם מסד נתונים וקטורי Pinecone לחיפוש סמנטי, קולט ומעבד מסמכים (PDF, Word, דפי אינטרנט), שומר על היסטוריית שיחה והקשר, הנדסת פרומפט מותאמת אישית למקרי שימוש ספציפיים לתחום, תגובות סטרימינג ל-UX טוב יותר, שיחות רב-תורניות עם זיכרון, ואנליטיקה לתובנות שיחה. מפחית הזיות ב-80% באמצעות ארכיטקטורת RAG"
        },
        tech: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React", "WebSocket", "Git"],
        gradient: "from-purple-500 to-indigo-500",
        github: "https://github.com/matan4749/smart-rag-chatbot",
        featured: false,
      },
      {
        title: "VR Educational Experience",
        description: {
          en: "Immersive VR application for interactive learning",
          he: "אפליקציית VR סוחפת ללמידה אינטראקטיבית"
        },
        fullDescription: {
          en: "Created immersive VR educational platform using Unity and C# for Oculus Quest 2 and Meta Quest 3. Features include 10+ interactive learning modules for STEM subjects, realistic physics simulations and 3D visualizations, multiplayer support for collaborative learning, hand tracking and gesture controls, progress tracking and achievements system, voice commands integration, adaptive difficulty based on performance, and cross-platform compatibility. Improved learning retention by 60% compared to traditional methods",
          he: "יצרתי פלטפורמת לימוד VR סוחפת באמצעות Unity ו-C# עבור Oculus Quest 2 ו-Meta Quest 3. כולל למעלה מ-10 מודולי למידה אינטראקטיביים למקצועות STEM, סימולציות פיזיקה ריאליסטיות וויזואליזציות תלת-ממד, תמיכה במרובה משתתפים ללמידה שיתופית, מעקב יד ובקרות מחוות, מערכת מעקב התקדמות והישגים, אינטגרציה של פקודות קוליות, קושי מסתגל המבוסס על ביצועים, ותאימות חוצת פלטפורמות. שיפר שימור למידה ב-60% בהשוואה לשיטות מסורתיות"
        },
        tech: ["Unity", "C#", "VR", "Oculus SDK", "Photon", "3D Modeling", "Git"],
        gradient: "from-blue-600 to-purple-600",
        github: "https://github.com/matan4749/vr-educational-experience",
        featured: false,
      },
      {
        title: "Analytics Dashboard Pro",
        description: {
          en: "Real-time analytics platform with MongoDB and interactive visualizations",
          he: "פלטפורמת אנליטיקה בזמן אמת עם MongoDB וויזואליזציות אינטראקטיביות"
        },
        fullDescription: {
          en: "Built comprehensive analytics platform using MongoDB, Node.js, and React with real-time data processing. Features include custom dashboard builder with drag-and-drop widgets, processes 1M+ events per day with aggregation pipelines, 20+ chart types and interactive visualizations, real-time updates with WebSocket, advanced filtering and date range selection, export to CSV/PDF/Excel, user management with role-based access, scheduled reports via email, and MongoDB aggregation for complex analytics. Optimized queries reduce response time by 70%",
          he: "בניתי פלטפורמת אנליטיקה מקיפה באמצעות MongoDB, Node.js ו-React עם עיבוד נתונים בזמן אמת. כולל בונה לוח מחוונים מותאם אישית עם ווידג'טים בגרירה ושחרור, מעבד למעלה מ-1 מיליון אירועים ליום עם צינורות צבירה, למעלה מ-20 סוגי תרשימים וויזואליזציות אינטראקטיביות, עדכונים בזמן אמת עם WebSocket, סינון מתקדם ובחירת טווח תאריכים, ייצוא ל-CSV/PDF/Excel, ניהול משתמשים עם גישה מבוססת תפקידים, דוחות מתוזמנים באמצעות דוא\"ל, וצבירת MongoDB לאנליטיקה מורכבת. שאילתות מאופטמות מפחיתות זמן תגובה ב-70%"
        },
        tech: ["MongoDB", "Node.js", "Express", "React", "D3.js", "WebSocket", "Redis", "Git"],
        gradient: "from-green-500 to-emerald-500",
        github: "https://github.com/matan4749/analytics-dashboard-pro",
        featured: false,
      },
      {
        title: "Enterprise ERP System",
        description: {
          en: "Full-featured ERP solution with SQL Server and ASP.NET Core",
          he: "פתרון ERP מלא עם SQL Server ו-ASP.NET Core"
        },
        fullDescription: {
          en: "Developed comprehensive ERP system using C#, ASP.NET Core, and SQL Server for enterprise resource planning. Features include inventory management with real-time stock tracking, sales and purchase order processing, financial accounting and reporting, CRM with customer relationship management, HR management with payroll integration, role-based access control with 10+ user roles, advanced reporting with SQL Server Reporting Services, RESTful API for third-party integrations, automated workflows and notifications, and audit logging for compliance. Handles 50,000+ transactions daily with high performance",
          he: "פיתחתי מערכת ERP מקיפה באמצעות C#, ASP.NET Core ו-SQL Server לתכנון משאבי ארגון. כולל ניהול מלאי עם מעקב מלאי בזמן אמת, עיבוד הזמנות מכירה ורכישה, חשבונאות פינ��סית ודיווח, CRM עם ניהול קשרי לקוחות, ניהול משאבי אנוש עם אינטגרציה לשכר, בקרת גישה מבוססת תפקידים עם למעלה מ-10 תפקידי משתמש, דיווח מתקדם עם SQL Server Reporting Services, RESTful API לאינטגרציות צד שלישי, זרימות עבודה והתראות אוטומטיות, ורישום ביקורת לעמידה בדרישות. מטפל בלמעלה מ-50,000 עסקאות ביום עם ביצועים גבוהים"
        },
        tech: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "Angular", "Redis", "Docker", "Git"],
        gradient: "from-indigo-600 to-blue-600",
        github: "https://github.com/matan4749/enterprise-erp-system",
        featured: false,
      },
      {
        title: "AI Recommendation Engine",
        description: {
          en: "Machine learning recommendation system with collaborative filtering",
          he: "מנוע המלצות AI עם סינון שיתופי"
        },
        fullDescription: {
          en: "Built scalable recommendation engine using collaborative and content-based filtering with TensorFlow and scikit-learn. Processes 10M+ user interactions daily, provides personalized recommendations with 85%+ accuracy, implements matrix factorization and deep learning models, features A/B testing framework, real-time recommendation updates, handles cold start problem with hybrid approaches, and includes explainable AI for recommendation reasoning. Increased user engagement by 40%",
          he: "בניתי מנוע המלצות מדרגי באמצעות סינון שיתופי ומבוסס תוכן עם TensorFlow ו-scikit-learn. מעבד למעלה מ-10 מיליון אינטראקציות משתמשים ביום, מספק המלצות מותאמות אישית עם דיוק של 85%+, מיישם פקטוריזציה מטריצית ומודלי למידה עמוקה, כולל מסגרת בדיקות A/B, עדכוני המלצות בזמן אמת, מטפל בבעיית cold start עם גישות היברידיות, וכולל AI מוסבר לנימוק המלצות. הגביר מעורבות משתמשים ב-40%"
        },
        tech: ["Python", "TensorFlow", "scikit-learn", "Pandas", "Redis", "PostgreSQL", "Docker", "Git"],
        gradient: "from-yellow-500 to-orange-500",
        github: "https://github.com/matan4749/ai-recommendation-engine",
        featured: false,
      },
      {
        title: "AR Math Explorer",
        description: {
          en: "Augmented Reality educational app for interactive mathematics",
          he: "אפליקציית AR חינוכית למתמטיקה אינטראקטיבית"
        },
        fullDescription: {
          en: "Created innovative AR mathematics learning platform using ARCore/ARKit and Unity. Features include 3D visualization of complex mathematical concepts, interactive geometry and algebra problems, real-time hand gesture recognition, gamified learning with achievements, multiplayer collaborative problem-solving, step-by-step solution guidance, adaptive difficulty levels, and progress tracking dashboard. Makes abstract concepts tangible and improved student comprehension by 55%",
          he: "יצרתי פלטפורמת למידת מתמטיקה AR חדשנית באמצעות ARCore/ARKit ו-Unity. כולל ויזואליזציה תלת-ממדית של מושגים מתמטיים מורכבים, בעיות גיאומטריה ואלגברה אינטראקטיביות, זיהוי מחוות יד בזמן אמת, למידה מבוססת משחק עם הישגים, פתרון בעיות שיתופי רב-משתתפים, הנחיית פתרון שלב אחר שלב, רמות קושי מסתגלות ולוח מחוונים למעקב התקדמות. הופך מושגים מופשטים למוחשיים ושיפר הבנת תלמידים ב-55%"
        },
        tech: ["Unity", "C#", "ARCore", "ARKit", "Vuforia", "Firebase", "Git"],
        gradient: "from-red-500 to-pink-500",
        github: "https://github.com/matan4749/ar-math-explorer",
        featured: false,
      },
      {
        title: "CV Object Detection",
        description: {
          en: "Real-time object detection and tracking system",
          he: "מערכת זיהוי ומעקב אובייקטים בזמן אמת"
        },
        fullDescription: {
          en: "Implemented advanced object detection system using YOLO v8 and OpenCV for real-time video analysis. Achieves 60+ FPS on standard hardware, detects and tracks 80+ object classes, includes custom model training pipeline, supports multi-object tracking across frames, features crowd counting and density estimation, provides heatmap visualization, optimized for edge devices with TensorRT, and includes REST API for integration. Used in security and retail analytics applications",
          he: "יישמתי מערכת זיהוי אובייקטים מתקדמת באמצעות YOLO v8 ו-OpenCV לניתוח וידאו בזמן אמת. משיג למעלה מ-60 FPS על חומרה סטנדרטית, מזהה ועוקב אחרי למעלה מ-80 מחלקות אובייקטים, כולל צינור אימון מודל מותאם אישית, תומך במעקב רב-אובייקטי על פני פריימים, כולל ספירת קהל והערכת צפיפות, מספק ויזואליזציה של מפת חום, מותאם למכשירי edge עם TensorRT, וכולל REST API לאינטגרציה. משמש באפליקציות אבטחה וניתוח קמעונאות"
        },
        tech: ["Python", "YOLO", "OpenCV", "TensorRT", "FastAPI", "NumPy", "Docker", "Git"],
        gradient: "from-teal-500 to-cyan-500",
        github: "https://github.com/matan4749/cv-object-detection",
        featured: false,
      },
      {
        title: "DevBlog Next.js",
        description: {
          en: "Modern developer blog with MDX and static generation",
          he: "בלוג מפתחים מודרני עם MDX ויצירה סטטית"
        },
        fullDescription: {
          en: "Built high-performance developer blog using Next.js 15 with App Router and MDX for content. Features include server-side rendering and static generation, syntax highlighting with Prism.js, reading time estimation, tag-based filtering, full-text search, RSS feed generation, SEO optimization with metadata API, responsive design with Tailwind CSS, dark mode support, and comments system integration. Achieves perfect 100 Lighthouse score",
          he: "בניתי בלוג מפתחים בעל ביצועים גבוהים באמצעות Next.js 15 עם App Router ו-MDX לתוכן. כולל רינדור צד שרת ויצירה סטטית, הדגשת תחביר עם Prism.js, הערכת זמן קריאה, סינון מבוסס תגיות, חיפוש טקסט מלא, יצירת RSS feed, אופטימיזציית SEO עם metadata API, עיצוב רספונסיבי עם Tailwind CSS, תמיכה במצב כהה ואינטגרציה של מערכת תגובות. משיג ציון Lighthouse מושלם של 100"
        },
        tech: ["Next.js", "React", "MDX", "TypeScript", "Tailwind CSS", "Vercel", "Git"],
        gradient: "from-slate-600 to-gray-700",
        github: "https://github.com/matan4749/devblog-nextjs",
        featured: false,
      },
      {
        title: "Docker Full-Stack App",
        description: {
          en: "Microservices architecture with Docker and Kubernetes",
          he: "ארכיטקטורת microservices עם Docker ו-Kubernetes"
        },
        fullDescription: {
          en: "Developed production-ready microservices application with Docker and Kubernetes orchestration. Includes Node.js backend services, React frontend, PostgreSQL and Redis databases, Nginx reverse proxy, service mesh with Istio, horizontal pod autoscaling, health checks and monitoring with Prometheus/Grafana, centralized logging with ELK stack, CI/CD pipeline with GitHub Actions, and infrastructure as code with Terraform. Handles 100K+ requests per hour",
          he: "פיתחתי אפליקציית microservices מוכנת לייצור עם תזמור Docker ו-Kubernetes. כולל שירותי backend Node.js, frontend React, מסדי נתונים PostgreSQL ו-Redis, reverse proxy Nginx, service mesh עם Istio, קנה מידה אופקי אוטומטי של pods, בדיקות תקינות ומוניטורינג עם Prometheus/Grafana, לוגים מרוכזים עם ELK stack, צינור CI/CD עם GitHub Actions ותשתית כקוד עם Terraform. מטפל בלמעלה מ-100K בקשות לשעה"
        },
        tech: ["Docker", "Kubernetes", "Node.js", "React", "PostgreSQL", "Redis", "Nginx", "Terraform", "Git"],
        gradient: "from-blue-700 to-indigo-800",
        github: "https://github.com/matan4749/docker-fullstack-app",
        featured: false,
      },
      {
        title: "E-Commerce API .NET",
        description: {
          en: "RESTful API with .NET 8 and clean architecture",
          he: "RESTful API עם .NET 8 וארכיטקטורה נקייה"
        },
        fullDescription: {
          en: "Built scalable e-commerce API using .NET 8 with clean architecture principles. Features include CQRS pattern with MediatR, Entity Framework Core with repository pattern, JWT authentication and authorization, Swagger/OpenAPI documentation, rate limiting and caching, background jobs with Hangfire, payment integration with Stripe, email notifications, comprehensive unit and integration tests, and Docker support. Follows SOLID principles and domain-driven design",
          he: "בניתי API מסחר אלקטרוני מדרגי באמצעות .NET 8 עם עקרונות ארכיטקטורה נקייה. כולל תבנית CQRS עם MediatR, Entity Framework Core עם תבנית repository, אימות והרשאה JWT, תיעוד Swagger/OpenAPI, הגבלת קצב ו-caching, משימות רקע עם Hangfire, אינטגרציית תשלום עם Stripe, התראות דוא\"ל, בדיקות יחידה ואינטגרציה מקיפות ותמיכה ב-Docker. עוקב אחרי עקרונות SOLID ועיצוב מונחה תחום"
        },
        tech: ["C#", ".NET 8", "Entity Framework", "SQL Server", "MediatR", "Swagger", "Docker", "Git"],
        gradient: "from-purple-700 to-violet-800",
        github: "https://github.com/matan4749/ecommerce-api-dotnet",
        featured: false,
      },
      {
        title: "Microservices E-Commerce",
        description: {
          en: "Distributed e-commerce platform with event-driven architecture",
          he: "פלטפורמת מסחר אלקטרוני מבוזרת עם ארכיטקטורה מונחית אירועים"
        },
        fullDescription: {
          en: "Developed enterprise-scale microservices e-commerce platform with event-driven architecture. Includes separate services for products, orders, payments, inventory, and notifications, RabbitMQ for message queueing, API Gateway with rate limiting, service discovery with Consul, distributed tracing with Jaeger, centralized configuration, saga pattern for distributed transactions, eventual consistency with event sourcing, and comprehensive monitoring. Deployed on Kubernetes with high availability",
          he: "פיתחתי פלטפורמת מסחר אלקטרוני microservices בקנה מידה ארגוני עם ארכיטקטורה מונחית אירועים. כולל שירותים נפרדים למוצרים, הזמנות, תשלומים, מלאי והתראות, RabbitMQ לתורי הודעות, API Gateway עם הגבלת קצב, גילוי שירותים עם Consul, מעקב מבוזר עם Jaeger, תצורה מרכזית, תבנית saga לעסקאות מבוזרות, עקביות סופית עם event sourcing ומוניטורינג מקיף. נפרס על Kubernetes עם זמינות גבוהה"
        },
        tech: ["Node.js", "RabbitMQ", "MongoDB", "Redis", "Docker", "Kubernetes", "Jaeger", "Consul", "Git"],
        gradient: "from-emerald-600 to-green-700",
        github: "https://github.com/matan4749/microservices-ecommerce",
        featured: true,
      },
      {
        title: "ML Training Platform",
        description: {
          en: "Automated machine learning training and deployment pipeline",
          he: "פלטפורמת אימון ופריסת למידת מכונה אוטומטית"
        },
        fullDescription: {
          en: "Created comprehensive MLOps platform for automated model training and deployment. Features include experiment tracking with MLflow, automated hyperparameter tuning, distributed training with Ray, model versioning and registry, automated data validation, feature store, A/B testing framework, model monitoring and drift detection, automated retraining pipelines, REST API for model serving, and Kubernetes-based deployment. Reduces model deployment time from weeks to hours",
          he: "יצרתי פלטפורמת MLOps מקיפה לאימון ופריסת מודלים אוטומטית. כולל מעקב ניסויים עם MLflow, כוונון היפרפרמטרים אוטומטי, אימון מבוזר עם Ray, גרסאות ורישום מודלים, אימות נתונים אוטומטי, feature store, מסגרת בדיקות A/B, מוניטורינג מודלים וזיהוי סטייה, צינורות אימון מחדש אוטומטיים, REST API להגשת מודלים ופריסה מבוססת Kubernetes. מפחית זמן פריסת מודלים משבועות לשעות"
        },
        tech: ["Python", "MLflow", "Ray", "TensorFlow", "PyTorch", "FastAPI", "Kubernetes", "Docker", "Git"],
        gradient: "from-amber-500 to-yellow-600",
        github: "https://github.com/matan4749/ml-training-platform",
        featured: false,
      },
      {
        title: "Mystery Manor - Unity Game",
        description: {
          en: "3D mystery adventure game with puzzle mechanics",
          he: "משחק הרפתקאות תעלומה תלת-ממד עם מכניקות חידות"
        },
        fullDescription: {
          en: "Developed immersive 3D mystery adventure game using Unity and C#. Features include engaging story-driven gameplay, complex puzzle mechanics, interactive object system, inventory management, save/load system, dynamic lighting and shadows, atmospheric sound design, multiple endings based on player choices, 20+ unique levels, and optimized performance for multiple platforms. Combines detective work with adventure elements",
          he: "פיתחתי משחק הרפתקאות תעלומה תלת-ממד סוחף באמצעות Unity ו-C#. כולל משחקיות מונעת סיפור מרתקת, מכניקות חידות מורכבות, מערכת אובייקטים אינטראקטיבית, ניהול מלאי, מערכת שמירה/טעינה, תאורה וצללים דינמיים, עיצוב סאונד אטמוספרי, סופים מרובים המבוססים על בחירות שחקן, למעלה מ-20 שלבים ייחודיים וביצועים מותאמים לפלטפורמות מרובות. משלב עבודת בילוש עם אלמנטים הרפתקניים"
        },
        tech: ["Unity", "C#", "Blender", "FMOD", "ProBuilder", "Git"],
        gradient: "from-gray-700 to-slate-800",
        github: "https://github.com/matan4749/mystery-manor-unity",
        featured: false,
      },
      {
        title: "NL to SQL Converter",
        description: {
          en: "Natural language to SQL query generator using AI",
          he: "ממיר שפה טבעית לשאילתות SQL באמצעות AI"
        },
        fullDescription: {
          en: "Built intelligent NL to SQL converter using GPT-4 and custom fine-tuned models. Supports multiple SQL dialects (PostgreSQL, MySQL, SQL Server), understands complex queries with joins and aggregations, provides query explanation and visualization, includes query validation and optimization suggestions, handles multi-table relationships, features schema-aware generation, supports parameterized queries for security, and includes interactive query builder. Achieves 92%+ accuracy on standard benchmarks",
          he: "בניתי ממיר NL ל-SQL חכם באמצעות GPT-4 ומודלים מכווננים מותאמים אישית. תומך בדיאלקטים מרובים של SQL (PostgreSQL, MySQL, SQL Server), מבין שאילתות מורכבות עם joins וצבירות, מספק הסבר וויזואליזציה של שאילתות, כולל אימות שאילתות והצעות אופטימיזציה, מטפל ביחסי רב-טבלאות, כולל יצירה מודעת סכמה, תומך בשאילתות מפרמטריות לאבטחה וכולל בונה שאילתות אינטראקטיבי. משיג דיוק של 92%+ בבנצ'מרקים סטנדרטיים"
        },
        tech: ["Python", "OpenAI", "LangChain", "SQLAlchemy", "FastAPI", "React", "PostgreSQL", "Git"],
        gradient: "from-lime-500 to-green-600",
        github: "https://github.com/matan4749/nl-to-sql",
        featured: false,
      },
      {
        title: "Pixel Adventure - Unity Game",
        description: {
          en: "2D platformer game with retro pixel art style",
          he: "משחק פלטפורמר דו-ממדי בסגנון פיקסל ארט רטרו"
        },
        fullDescription: {
          en: "Created nostalgic 2D platformer game using Unity with pixel-perfect rendering. Features include smooth character movement and animations, challenging level design with 30+ levels, collectibles and power-ups, enemy AI with various behaviors, boss fights, checkpoint system, leaderboard integration, responsive controls, chiptune soundtrack, and mobile touch controls. Optimized for 60 FPS gameplay on all platforms",
          he: "יצרתי משחק פלטפורמר דו-ממדי נוסטלגי באמצעות Unity עם רינדור פיקסל מושלם. כולל תנועה ואנימציות דמויות חלקות, עיצוב שלבים מאתגר עם למעלה מ-30 שלבים, אספנים ושדרוגים, AI אויבים עם התנהגויות שונות, קרבות בוסים, מערכת נקודות ביקורת, אינטגרציה של לוח מובילים, בקרות רספונסיביות, פסקול chiptune ובקרות מגע למובייל. מותאם ל-60 FPS על כל הפלטפורמות"
        },
        tech: ["Unity", "C#", "Aseprite", "2D Toolkit", "Git"],
        gradient: "from-fuchsia-500 to-purple-600",
        github: "https://github.com/matan4749/pixel-adventure-unity",
        featured: false,
      },
      {
        title: "Real-Time Chat SignalR",
        description: {
          en: "Real-time chat application with SignalR and ASP.NET Core",
          he: "אפליקציית צ'אט בזמן אמת עם SignalR ו-ASP.NET Core"
        },
        fullDescription: {
          en: "Developed scalable real-time chat application using SignalR and ASP.NET Core. Features include one-on-one and group conversations, typing indicators, message read receipts, file and image sharing, emoji support, message search and history, online/offline status, push notifications, end-to-end encryption, message reactions, and responsive UI with React. Supports 10,000+ concurrent connections with Redis backplane",
          he: "פיתחתי אפליקציית צ'אט בזמן אמת מדרגית באמצעות SignalR ו-ASP.NET Core. כולל שיחות אחד-על-אחד וקבוצתיות, אינדיקטורים של הקלדה, אישורי קריאת הודעות, שיתוף קבצים ותמונות, תמיכה באימוג'ים, חיפוש והיסטוריה של הודעות, סטטוס מחובר/מנותק, התראות push, הצפנה מקצה לקצה, תגובות להודעות וממשק משתמש רספונסיבי עם React. תומך בלמעלה מ-10,000 חיבורים מקבילים עם Redis backplane"
        },
        tech: ["C#", "ASP.NET Core", "SignalR", "React", "SQL Server", "Redis", "Docker", "Git"],
        gradient: "from-sky-500 to-blue-600",
        github: "https://github.com/matan4749/realtime-chat-signalr",
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
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                    ) : (
                      <i className={`${skill.icon} text-6xl`}></i>
                    )}
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
