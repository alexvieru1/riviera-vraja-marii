"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSwitcher from "./language-switcher";
import { useLanguage } from "@/lib/language-context";
import HamburgerMenu from "./ui/hamburger-menu";

const navItems = [
  { key: "nav.about", href: "/despre-noi" },
  { key: "nav.services", href: "/servicii-recuperare-medicala" },
  { key: "nav.medical-team", href: "/echipa-medicala" },
  { key: "nav.stays", href: "/sejururi" },
  { key: "nav.patient-info", href: "/info-pacienti" },
  { key: "nav.medical-info", href: "/info-medical" },
  { key: "nav.gallery", href: "/galerie" },
  { key: "nav.contact", href: "/contact" },
  { key: "nav.blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#f5f1eb] backdrop-blur-md shadow-lg"
          : "bg-[#f5f1eb]/00"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-16 w-24"
            >
              <Image 
                src="/images/logo.webp" 
                alt="Riviera Vraja Mării" 
                width={100}
                height={100}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu Items - appear in navbar when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="hidden lg:flex items-center space-x-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-2 text-sm font-medium text-[#8b7355] hover:text-[#6b5644] relative group transition-colors whitespace-nowrap"
                      >
                        {t(item.key)}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#d4a574] to-[#b8936d]"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Language Switcher & Menu Button */}
          <div className="flex items-center gap-8 shrink-0">
            <LanguageSwitcher />
            <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} color="bg-[#8b7355]" />
          </div>
        </div>
      </div>

      {/* Mobile Menu - slides from top */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#f5f1eb]/98 backdrop-blur-md border-t border-[#d4a574]/30"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="block px-4 py-3 text-base font-medium text-[#8b7355] hover:text-[#6b5644] hover:bg-[#e8dfd3] rounded-md transition-colors"
                    >
                      {t(item.key)}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
