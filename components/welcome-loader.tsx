"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "Hello", language: "English" },
  { text: "こんにちは", language: "Japanese" },
  { text: "Bonjour", language: "French" },
  { text: "Hola", language: "Spanish" },
  { text: "안녕하세요", language: "Korean" },
  { text: "Ciao", language: "Italian" },
  { text: "Hallo", language: "German" },
  { text: "Salut", language: "Romanian" },
];

interface WelcomeLoaderProps {
  onComplete: () => void;
}

export default function WelcomeLoader({ onComplete }: WelcomeLoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) {
      // After animation completes, wait a bit then fade out
      const timer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (nextIndex >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prevIndex;
        }

        return nextIndex;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isAnimating, onComplete]);

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#f5f1eb' }}
    >
      <div className="relative flex h-20 w-80 items-center justify-center overflow-visible">
        {isAnimating ? (
          <AnimatePresence mode="popLayout">
            <motion.div
              animate={textVariants.visible}
              className="absolute flex items-center gap-3 font-medium text-4xl md:text-5xl text-[#8b7355]"
              exit={textVariants.exit}
              initial={textVariants.hidden}
              key={currentIndex}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="h-3 w-3 rounded-full bg-[#8b7355]" />
              {greetings[currentIndex].text}
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 font-medium text-4xl md:text-5xl text-[#8b7355]"
          >
            <div className="h-3 w-3 rounded-full bg-[#8b7355]" />
            {greetings[currentIndex].text}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
