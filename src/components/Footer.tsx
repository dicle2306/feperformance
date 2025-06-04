import React, { useState } from "react";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";
import PrivacyPolicy from "./legal/PrivacyPolicy";
import Imprint from "./legal/Imprint";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showImprint, setShowImprint] = useState(false);
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logo.png"
                  alt="FE Performance Media Logo"
                  className="h-12 w-12 rounded-full bg-white"
                />
                <h3 className="text-xl font-semibold">
                  Performance <span className="text-blue-400">Media</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                {translations[language].companyDescription}
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/fe_performance_media/"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61576107353534"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">
                {translations[language].quickLinks}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations[language].home}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations[language].about}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations[language].services}
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations[language].industries}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {translations[language].contact}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">
                {translations[language].contact}
              </h3>
              <p className="text-gray-400 mb-2">
                {translations[language].email}: feperfromancemedia@gmail.com
              </p>
              <p className="text-gray-400 mb-2">
                {translations[language].phone}: 01577 1465421
              </p>
              <p className="text-gray-400">
                {translations[language].location}: Schleswig-Holstein, Hamburg,
                Lübeck
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              {translations[language].allRightsReserved.replace(
                "{year}",
                currentYear.toString()
              )}
            </p>
            <div className="mt-2 space-x-4 text-sm text-gray-500">
              <button
                onClick={() => setShowPrivacyPolicy(true)}
                className="hover:text-gray-400 transition-colors"
              >
                {translations[language].privacyPolicy}
              </button>
              <button
                onClick={() => setShowImprint(true)}
                className="hover:text-gray-400 transition-colors"
              >
                {translations[language].imprint}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      {showImprint && <Imprint onClose={() => setShowImprint(false)} />}
    </>
  );
};

export default Footer;
