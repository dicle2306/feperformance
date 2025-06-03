import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, value, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-sm"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-blue-50 text-blue-500">{icon}</div>
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const stats = [
    {
      title: translations[language].increasedReach,
      value: "+300%",
      icon: <Target size={24} />,
      delay: 0.2,
    },
    {
      title: translations[language].newFollowers,
      value: "+10K",
      icon: <Users size={24} />,
      delay: 0.3,
    },
    {
      title: translations[language].revenueGrowth,
      value: "+150%",
      icon: <TrendingUp size={24} />,
      delay: 0.4,
    },
  ];

  return (
    <section className="section bg-blue-500 text-white" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title">
              {translations[language].missionTitle}
            </h2>
            <p className="mb-6">{translations[language].missionText1}</p>
            <p className="mb-8">{translations[language].missionText2}</p>
            <a
              href="#contact"
              className="btn bg-white text-blue-500 hover:bg-gray-100"
            >
              {translations[language].getStarted}
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
