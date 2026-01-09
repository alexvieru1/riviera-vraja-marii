"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

// Romanian Flag SVG Component
const RomanianFlag = () => (
  <svg viewBox="0 0 90 60" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <rect width="30" height="60" fill="#002B7F" />
    <rect x="30" width="30" height="60" fill="#FCD116" />
    <rect x="60" width="30" height="60" fill="#CE1126" />
  </svg>
);

// UK Flag SVG Component
const UKFlag = () => (
  <svg viewBox="0 0 60 30" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ro" ? "en" : "ro");
  };

  return (
    <motion.div 
      className="relative w-10 h-5 rounded-full overflow-hidden cursor-pointer shadow-md "
      onClick={toggleLanguage}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {language === "en" ? <UKFlag /> : <RomanianFlag />}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
