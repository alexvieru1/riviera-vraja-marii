"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/homepage/hero-section";
import FeaturedServicesSection from "@/components/homepage/featured-services-section";
import FacilitiesSlider from "@/components/homepage/facilities-slider";
import WelcomeLoader from "@/components/welcome-loader";
import AboutUsShort from "@/components/homepage/about-us-short";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Check if user has seen the loader in this session
    const seenInSession = sessionStorage.getItem("hasSeenWelcome");
    
    if (!seenInSession) {
      // This setState is intentional - we need to check sessionStorage after mount
      // to avoid SSR hydration mismatch. The re-render is acceptable for this use case.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowLoader(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setShowLoader(false);
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <WelcomeLoader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      
      <div className="bg-background">
        <HeroSection />
        <FacilitiesSlider />
        <AboutUsShort />
        <FeaturedServicesSection />
      </div>
    </>
  );
}
