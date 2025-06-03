import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

const ContactItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  delay: number;
}> = ({ icon, title, content, link, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="flex items-start space-x-4"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-3 rounded-full bg-blue-50 text-blue-500 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-gray-700 hover:text-blue-500 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: translations[language].email,
      content: "feperfromancemedia@gmail.com",
      link: "mailto:feperfromancemedia@gmail.com",
      delay: 0.2,
    },
    {
      icon: <Phone size={24} />,
      title: translations[language].phone,
      content: "01577 1465421",
      link: "tel:015771465421",
      delay: 0.3,
    },
    {
      icon: <MapPin size={24} />,
      title: translations[language].location,
      content: "Schleswig-Holstein, Hamburg, Lübeck",
      delay: 0.4,
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {translations[language].readyForConsultation}
          </h2>
          <p className="text-gray-700 mb-8">
            {translations[language].contactSubtitle}
          </p>
          <a
            href="#"
            className="btn btn-primary text-lg inline-block mb-12"
            onClick={(e) => e.preventDefault()}
          >
            {translations[language].bookCall}
          </a>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-3xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
                link={item.link}
                delay={item.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
