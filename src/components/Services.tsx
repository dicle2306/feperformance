import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Video, BarChart3, LightbulbIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="service-card"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const services = [
    {
      title: translations[language].socialMediaManagement,
      description: translations[language].socialMediaManagementDesc,
      icon: <Instagram size={24} />,
      delay: 0.2,
    },
    {
      title: translations[language].contentCreation,
      description: translations[language].contentCreationDesc,
      icon: <Video size={24} />,
      delay: 0.3,
    },
    {
      title: translations[language].metaAds,
      description: translations[language].metaAdsDesc,
      icon: <BarChart3 size={24} />,
      delay: 0.4,
    },
    {
      title: translations[language].strategyConsulting,
      description: translations[language].strategyConsultingDesc,
      icon: <LightbulbIcon size={24} />,
      delay: 0.5,
    },
  ];

  return (
    <section id="services" className="section bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {translations[language].whatWeOffer}
          </h2>
          <p className="text-gray-700">
            {translations[language].servicesSubtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
