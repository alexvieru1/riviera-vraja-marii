"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Navigation
    "nav.home": "Acasă",
    "nav.about": "Despre Noi",
    "nav.services": "Servicii",
    "nav.medical-team": "Echipa Medicală",
    "nav.stays": "Sejururi",
    "nav.patient-info": "Info Pacienți",
    "nav.medical-info": "Info Medical",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "Stiinta Longevitatii la Malul Marii",
    "hero.subtitle": "Biohacking avansat și recuperare medicală într-o oază de relaxare.",
    
    // Common
    "common.book-now": "Rezervă Acum",
    "common.learn-more": "Află Mai Mult",
    "common.view-all-services": "Vezi Toate Serviciile",

    "facilities.title": "Facilitati Premium",

    // Featured Services
    "services.featured.title": "Servicii Premium",
    "services.featured.subtitle": "Descoperă tratamentele noastre de top pentru regenerare completă.",
    
    "service.hbot.title": "HBOT & Lumină Roșie",
    "service.hbot.desc": "Oxigenare celulară intensă sub presiune combinată cu fotobiomodulare pentru regenerare accelerată.",
    
    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc": "Cocktailuri intravenoase personalizate și infuzii NAD+ pentru energie instantanee și claritate mentală.",
    
    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc": "Abordare integrativă pentru sănătatea endocrină, susținută de elemente marine terapeutice.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.medical-team": "Medical Team",
    "nav.stays": "Stays",
    "nav.patient-info": "Patient Info",
    "nav.medical-info": "Medical Info",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "The Science of Longevity by the Sea",
    "hero.subtitle": "Advanced biohacking and medical recovery in a seaside sanctuary.",
    
    // Common
    "common.book-now": "Book Now",
    "common.learn-more": "Learn More",
    "common.view-all-services": "View All Services",

    "facilities.title": "Premium Facilities",

    // Featured Services
    "services.featured.title": "Premium Services",
    "services.featured.subtitle": "Discover our top treatments for complete regeneration.",

    "service.hbot.title": "HBOT & Red Light",
    "service.hbot.desc": "Intense cellular oxygenation under pressure combined with photobiomodulation for accelerated regeneration.",
    
    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc": "Customized intravenous cocktails and NAD+ infusions for instant energy and mental clarity.",
    
    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc": "Integrative approach to endocrine health, supported by therapeutic marine elements.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ro");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "ro" || saved === "en") && saved !== "ro") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ro] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
