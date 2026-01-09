"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { GradientHeading } from "./ui/gradient-heading";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Desktop hero image */}
      <Image
        src="/images/test.jpeg"
        alt="Riviera Vraja Mării"
        fill
        priority
        className="hidden md:block object-cover"
        quality={100}
      />
      
      {/* Mobile hero image */}
      <Image
        src="/images/test-mobile.jpg"
        alt="Riviera Vraja Mării"
        fill
        priority
        className="md:hidden object-cover"
        quality={100}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Optional content overlay - you can add text, CTA buttons, etc. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center text-white z-10"
      >
        {/* Example with translations - uncomment when ready: */}
        <div className="text-center px-4">
          <GradientHeading variant="light" size="xl" weight="bold" className="mb-4">
            {t("hero.title")}
          </GradientHeading>
          <p className="text-xl md:text-2xl text-gray-200">
            {t("hero.subtitle")}
          </p>
        </div>
       
      </motion.div>
    </section>
  );
};

export default HeroSection;
