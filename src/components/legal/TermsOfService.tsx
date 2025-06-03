import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";
import { X } from "lucide-react";

interface TermsOfServiceProps {
  onClose: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onClose }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">
            {translations[language].termsTitle}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-8">
          <p className="text-gray-500 mb-8">
            {translations[language].termsLastUpdated}
          </p>

          <div className="space-y-6">
            {translations[language].termsContent.map((content, index) => (
              <div key={index} className="terms-content">
                {content.startsWith("•") ? (
                  <p className="ml-4 text-gray-600">{content}</p>
                ) : content.match(/^\d\./) ? (
                  <h3 className="text-xl font-semibold mb-3 mt-8">{content}</h3>
                ) : (
                  <p className="text-gray-600">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
