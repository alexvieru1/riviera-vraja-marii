"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { src: "/icons/balneologie.png", alt: "Balneologie" },
  { src: "/icons/cazare.png", alt: "Cazare" },
  { src: "/icons/gradina.png", alt: "Gradina" },
  { src: "/icons/piscina.png", alt: "Piscina" },
  { src: "/icons/programe-integrative.png", alt: "Programe Integrative" },
  { src: "/icons/recuperare-fizica-medicala.png", alt: "Recuperare Medicala" },
  { src: "/icons/restaurant.png", alt: "Restaurant" },
  { src: "/icons/terasa.png", alt: "Terasa" },
  { src: "/icons/wellness.png", alt: "Wellness" },
];

const FacilityItem = ({ src, alt }: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-2 opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Image
        className="h-12 w-auto object-contain"
        src={src}
        alt={alt}
        width={64}
        height={64}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="relative bg-white text-black px-4 py-2 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 min-w-max">
               {/* Figma-like pin connector */}
               <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-b border-r border-gray-100"></div>
               
               <div className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full text-[10px] text-white font-bold">
                 A
               </div>
               <span className="text-sm font-semibold">{alt}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FacilitiesSlider = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background pb-16 md:pb-32 mt-16">
      <div className="group relative m-auto max-w-6xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="inline md:max-w-44 md:border-r md:pr-6 mb-8 md:mb-0">
            <p className="text-center md:text-end text-sm md:text-base font-bold text-muted-foreground font-heading-bold">
              {t("facilities.title")}
            </p>
          </div>
          <div className="relative py-12 md:w-[calc(100%-11rem)] overflow-hidden">
            <InfiniteSlider speedOnHover={20} speed={40} gap={60}>
              {items.map((item, i) => (
                <FacilityItem key={i} src={item.src} alt={item.alt} />
              ))}
            </InfiniteSlider>

            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSlider;