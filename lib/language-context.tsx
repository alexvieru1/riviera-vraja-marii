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
    "nav.blog": "Blogul Andreei",
    
    // Hero Section
    "hero.title": "Stiinta Longevitatii la Malul Marii",
    "hero.subtitle": "Biohacking avansat și recuperare medicală într-o oază de relaxare.",
    
    // Common
    "common.book-now": "Rezervă Acum",
    "common.learn-more": "Află Mai Mult",
    "common.view-all-services": "Vezi Toate Serviciile",

    // Facilities
    "facilities.title": "Facilități Premium",

    //Our Vision
    "our-vision-section.title": "Viziunea Noastra",
    "our-vision-section.subtitle": "Lumea noastră se transformă cu o rapiditate fără precedent. Schimbările globale – de la digitalizare și inteligență artificială, la provocările climatice și fluctuațiile socio-economice – ne solicită sănătatea la un nivel nemaiîntâlnit. Aceste timpuri provocatoare cer o noua dimensiune a medicinei: o medicină care pune omul în centrul vindecării.",

    // Featured Services
    "services.featured.title": "Servicii Premium",
    "services.featured.subtitle": "Descoperă tratamentele noastre de top pentru regenerare completă.",
    
    "service.hbot.title": "HBOT & Lumină Roșie",
    "service.hbot.desc": "Oxigenare celulară intensă sub presiune combinată cu fotobiomodulare pentru regenerare accelerată.",
    
    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc": "Cocktailuri intravenoase personalizate și infuzii NAD+ pentru energie instantanee și claritate mentală.",
    
    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc": "Abordare integrativă pentru sănătatea endocrină, susținută de elemente marine terapeutice.",

    //Blog
    "blog.title": "Blogul Andreei",
    "blog.subtitle": "Perspective despre biohacking, longevitate și wellness din expertiza Andreei.",
    
    //Cookies Policy
    "cookies-policy.title": "Politica de Cookie-uri",
    "cookies-policy.content": "Aceasta este pagina Politicii de Cookie-uri.",

    //Terms and Conditions
    "terms.title": "Termeni si Conditii",
    "terms.content": "Aceasta este pagina Termeni si Condiții.",
    
    //Privacy
    "privacy.title": "Politica de Confidentialitate",
    "privacy.content": "Aceasta este pagina Politicii de Confidențialitate.",

    //Footer
    "footer.customer-rules": "Regulament Pacienți",
    "footer.terms": "Termeni și Condiții",
    "footer.privacy": "Politica de Confidențialitate",
    "footer.cookies": "Politica de Cookie-uri",
    "footer.contact": "Contact",
    "footer.copyright": "Vraja Mării by The Sea. Toate drepturile rezervate.",
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
    "nav.blog": "Andreea's Blog",
    // Hero Section
    "hero.title": "The Science of Longevity by the Sea",
    "hero.subtitle": "Advanced biohacking and medical recovery in a seaside sanctuary.",
    
    // Common
    "common.book-now": "Book Now",
    "common.learn-more": "Learn More",
    "common.view-all-services": "View All Services",

    // Facilities
    "facilities.title": "Premium Facilities",

    //Our Vision
    "our-vision-section.title": "Our Vision",
    "our-vision-section.subtitle": "Our world is transforming at an unprecedented pace. Global changes – from digitalization and artificial intelligence to climate challenges and socio-economic fluctuations – are demanding our health at a level never seen before. These challenging times call for a new dimension of medicine: a medicine that puts people at the center of healing.",

    // Featured Services
    "services.featured.title": "Premium Services",
    "services.featured.subtitle": "Discover our top treatments for complete regeneration.",

    "service.hbot.title": "HBOT & Red Light",
    "service.hbot.desc": "Intense cellular oxygenation under pressure combined with photobiomodulation for accelerated regeneration.",
    
    "service.iv.title": "IV Drips & NAD+",
    "service.iv.desc": "Customized intravenous cocktails and NAD+ infusions for instant energy and mental clarity.",
    
    "service.endo.title": "SeaMed EndoSupport",
    "service.endo.desc": "Integrative approach to endocrine health, supported by therapeutic marine elements.",

    //Blog
    "blog.title": "Andreea's Blog",
    "blog.subtitle": "Insights on biohacking, longevity, and wellness from Andreea's expertise.",

    //Cookies Policy
    "cookies-policy.title": "Cookies Policy",
    "cookies-policy.content": "This is the Cookies Policy page.",

    //Terms and Conditions
    "terms.title": "Terms and Conditions",
    "terms.content": "This is the Terms and Conditions page.",

    //Privacy
    "privacy.title": "Privacy Policy",
    "privacy.content": "This is the Privacy Policy page.",

    //Footer
    "footer.copyright": "Vraja Mării by The Sea. All rights reserved.",
    "footer.terms": "Terms and Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.cookies": "Cookie Policy",
    "footer.customer-rules": "Patient Rules",
    "footer.contact": "Contact",
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
