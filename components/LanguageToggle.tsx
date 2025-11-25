"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-24 h-10 rounded-full bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-500/50 transition-all overflow-hidden"
    >
      {/* Background gradient that slides */}
      <motion.div
        animate={{
          x: language === "en" ? "0%" : "100%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute top-0 left-0 w-1/2 h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
      />

      {/* Language labels - always centered */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-1/2 flex items-center justify-center">
          <motion.span
            animate={{
              color: language === "en" ? "#ffffff" : "#64748b",
              fontWeight: language === "en" ? 700 : 500,
            }}
            transition={{ duration: 0.2 }}
            className="text-sm"
          >
            EN
          </motion.span>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <motion.span
            animate={{
              color: language === "he" ? "#ffffff" : "#64748b",
              fontWeight: language === "he" ? 700 : 500,
            }}
            transition={{ duration: 0.2 }}
            className="text-sm"
          >
            עב
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}
