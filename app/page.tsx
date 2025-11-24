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
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([
    {
      role: "assistant",
      content:
        "היי! 👋\n\nאני מתן עמר, מפתח תוכנה ומומחה RPA.\nשמח שהגעתם לאתר שלי!\n\nתרגישו חופשי לשאול אותי כל שאלה:\n• על הניסיון המקצועי שלי\n• על הפרויקטים שפיתחתי\n• על הכישורים הטכנולוגיים שלי\n• על ההשכלה והלימודים שלי\n• פרטי קשר ומידע נוסף\n\nמה תרצו לדעת? 😊",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cvKnowledge = {
    personalInfo: {
      name: "מתן עמר",
      nameEn: "Matan Amar",
      email: "Matan4749@gmail.com",
      phone: "054-5993085",
      linkedin: "linkedin.com/in/matan--amar",
      github: "github.com/matan4749",
      title: "Software Engineer",
    },
    education: {
      institution: "מכללה טכנולוגית",
      degree: "הנדסת תוכנה",
      year: "2020",
      location: "ישראל",
    },
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
        name: "React",
        icon: "devicon-react-original colored",
        category: "Frontend",
      },
      {
        name: "Unity",
        icon: "devicon-unity-plain colored",
        category: "Game Dev",
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
    ],
    experience: [
      {
        year: "2022 - 2023",
        title: "RPA Developer",
        company: "HMS - Hospital Management Systems",
        description:
          "Automated workflows and data processing systems using UiPath",
        fullDescription:
          "Designed and implemented 15+ automated workflows using UiPath, reducing manual processing time by 60% for data entry and reporting tasks. Built ETL pipelines processing 10,000+ records daily from multiple sources (Excel, databases, web services), achieving 95%+ reliability. Integrated Business Intelligence and Machine Learning tools into automation workflows for predictive analytics",
        icon: <Zap className="w-6 h-6" />,
      },
      {
        year: "2015 - 2017",
        title: "Military Service",
        company: "IDF - Israel Defense Forces",
        description:
          "Led communications team and awarded Commander's Excellence Award for exceptional leadership",
        icon: <User className="w-6 h-6" />,
      },
    ],
    projects: [
      {
        title: "ThinkWell",
        description:
          "משחק חינוכי מבוסס Unity המיועד לילדים אוטיסטים, כולל מודולי למידה אינטראקטיביים וממשק ידידותי לחושים.",
        tech: ["Unity", "C#", "Game Development"],
        gradient: "from-cyan-500 to-blue-500",
      },
      {
        title: "HMS - Hospital Management System",
        description:
          "פתרון אוטומציה RPA לייעול פעולות בית חולים, ניהול רשומות מטופלים ותהליכי עבודה אדמיניסטרטיביים.",
        tech: ["UiPath", "C#", "Automation"],
        gradient: "from-blue-500 to-purple-500",
      },
      {
        title: "8-Room",
        description:
          "אפליקציית מובייל React Native להזמנת ח דרים וניהול עם זמינות בזמן אמת וממשק ידידותי למשתמש.",
        tech: ["React Native", "TypeScript", "Mobile"],
        gradient: "from-purple-500 to-pink-500",
      },
    ],
  };

  const handleSendMessage = () => {
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
        response = `למדתי ${cvKnowledge.education.degree} ב${cvKnowledge.education.institution}.\n\nסיימתי את הלימודים בשנת ${cvKnowledge.education.year}. 🎓\n\nהלימודים כללו קורסים ב-C#, Python, פיתוח משחקים, פיתוח web ועוד.`;
      }

      // איפה למדת
      else if (
        userMessage.includes("איפה למד") ||
        userMessage.includes("where study")
      ) {
        response = `למדתי ב${cvKnowledge.education.institution}, ${cvKnowledge.education.location}.\n\nהתמחות: ${cvKnowledge.education.degree} 🎓`;
      }

      // באיזו שנה סיימת
      else if (
        userMessage.includes("שנה") ||
        userMessage.includes("מתי") ||
        userMessage.includes("when")
      ) {
        response = `סיימתי את הלימודים בשנת ${cvKnowledge.education.year}.\n\nמאז אני עובד בתחום הפיתוח והאוטומציה! 💼`;
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
    <div className="min-h-screen bg-[#0a0e27] text-white overflow-hidden">
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
            {cvKnowledge.personalInfo.nameEn}
          </motion.div>
          <div className="flex gap-4">
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
      <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
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
                  Available for opportunities
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
                  <span className="gradient-text glow-text">Matan Amar</span>
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
                  {cvKnowledge.personalInfo.title}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20,
                  }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-gray-400 max-w-2xl leading-relaxed"
                >
                  Building innovative applications that bridge technology and human
                  experience. Specialized in full-stack development, Unity game development,
                  and automation solutions with C#, Python, and modern web technologies.
                </motion.p>
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
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${cvKnowledge.personalInfo.email}`}
                  className="btn-secondary"
                >
                  Get In Touch
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
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              Tech Stack
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {cvKnowledge.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
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
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              Experience
            </h2>
            <p className="text-gray-400 text-base md:text-lg">My professional journey</p>
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
                        {exp.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <span className="text-cyan-400 font-medium text-sm md:text-base">
                          {exp.year}
                        </span>
                      </div>
                      <div className="text-blue-400 font-semibold mb-3 text-sm md:text-base">
                        {exp.company}
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                        {exp.description}
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
                                  {(exp as any).fullDescription}
                                </p>
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                      {(exp as any).fullDescription && (
                        <div className="mt-3 text-cyan-400 text-sm flex items-center gap-2">
                          <span>
                            {expandedExperience === index
                              ? "Click to collapse"
                              : "Click to see more details"}
                          </span>
                          <motion.div
                            animate={{
                              rotate: expandedExperience === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-base md:text-lg">Some of my recent work</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cvKnowledge.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all card-hover">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed hebrew-inline">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${cvKnowledge.personalInfo.email}`}
                className="btn-primary flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
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
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/50 z-50"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.button>

      {/* AI Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 sm:bottom-28 right-4 sm:right-8 w-[calc(100vw-2rem)] sm:w-96 h-[calc(100vh-6rem)] sm:h-[500px] max-h-[600px] rounded-2xl bg-[#1a1f3a] border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white hebrew-inline">
                    מתן עמר
                  </h3>
                  <p className="text-xs text-gray-400 hebrew-inline">
                    שאלו אותי כל דבר
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
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
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="כתבו שאלה..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors hebrew-inline"
                  style={{ direction: "rtl" }}
                />
                <button
                  onClick={handleSendMessage}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              &copy; 2024 {cvKnowledge.personalInfo.nameEn}. All rights
              reserved.
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
