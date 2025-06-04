// components/ui/CookieSettings.tsx
import { Cookie } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

const CookieSettings = () => {
  const { language } = useLanguage();

  const handleClick = () => {
    // Löst das Event aus, das unseren Wrapper dazu bringt, Banner wiederzu-öffnen

    window.dispatchEvent(new Event("showCookieConsent"));
    //console.log("CookieSettings clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-20 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-40"
      title={translations[language].cookieSettings}
      aria-label={translations[language].cookieSettings}
    >
      <Cookie size={20} />
    </button>
  );
};

export default CookieSettings;
