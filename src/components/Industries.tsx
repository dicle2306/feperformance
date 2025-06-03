import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShoppingBag, Hammer, Home, Coffee, Briefcase } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const IndustryItem: React.FC<{
  title: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="text-center"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-4">
        <div className="text-blue-500">{icon}</div>
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
    </motion.div>
  );
};

const Industries: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const industries = [
    {
      title: translations[language].ecommerce,
      icon: <ShoppingBag size={24} />,
      delay: 0.2,
    },
    {
      title: translations[language].trades,
      icon: <Hammer size={24} />,
      delay: 0.3,
    },
    {
      title: translations[language].realEstate,
      icon: <Home size={24} />,
      delay: 0.4,
    },
    {
      title: translations[language].restaurants,
      icon: <Coffee size={24} />,
      delay: 0.5,
    },
    {
      title: translations[language].localServices,
      icon: <Briefcase size={24} />,
      delay: 0.6,
    },
  ];

  return (
    <section id="industries" className="section bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {translations[language].industriesTitle}
          </h2>
          <p className="text-gray-700">
            {translations[language].industriesSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {industries.map((industry, index) => (
            <IndustryItem
              key={index}
              title={industry.title}
              icon={industry.icon}
              delay={industry.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
