import React, { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: translations[language].home, href: "#home" },
    { name: translations[language].about, href: "#about" },
    { name: translations[language].services, href: "#services" },
    { name: translations[language].industries, href: "#industries" },
    { name: translations[language].contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="FE Performance Media Logo"
            className={`h-12 w-12 transition-transform duration-300 ${
              scrolled ? "scale-90" : "scale-100"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-blue-500 ${
                scrolled ? "text-gray-800" : "text-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            <Languages className="h-4 w-4" />
            <span>{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
          >
            <Languages className="h-4 w-4" />
            <span>{language.toUpperCase()}</span>
          </button>
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium transition-colors duration-300 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
