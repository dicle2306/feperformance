import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  return (
    <section id="about" className="section bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-md">
              <div className="h-full w-full flex items-center justify-center">
                <p className="text-gray-400">
                  {translations[language].teamPhoto}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-40 w-40 bg-blue-50 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="section-title">
              {translations[language].aboutTitle}
            </h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                {translations[language].aboutText1}
              </p>

              <p className="text-gray-700">
                {translations[language].aboutText2}
              </p>

              <div className="pt-4">
                <a
                  href="#services"
                  className="text-blue-500 font-medium hover:underline inline-flex items-center"
                >
                  {translations[language].discoverServices}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
