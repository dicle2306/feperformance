// components/Cookies/CookieConsentWrapper.tsx
import React, { useState, useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  resetCookieConsentValue,
} from "react-cookie-consent";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations";

const CookieConsentWrapper: React.FC = () => {
  const { language } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Banner initial anzeigen, falls noch kein Consent‐Cookie existiert
    const consent = getCookieConsentValue("mySiteCookieConsent"); // gibt "true" zurück, wenn bereits akzeptiert, sonst ""
    setShowBanner(!consent);
    // Listener: Wenn 'showCookieConsent' ausgelöst wird, Banner wieder zeigen und Cookie zurücksetzen
    const handleShowConsent = () => {
      // Lösche den alten Cookie, damit <CookieConsent> ihn beim Mount nicht überspringt
      document.cookie =
        "mySiteCookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      resetCookieConsentValue();
      setShowBanner(true);
    };
    window.addEventListener("showCookieConsent", handleShowConsent);

    return () => {
      window.removeEventListener("showCookieConsent", handleShowConsent);
    };
  }, []);

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText={translations[language].cookieAcceptAll}
      declineButtonText={translations[language].cookieReject}
      enableDeclineButton
      cookieName="mySiteCookieConsent"
      onAccept={() => {
        setShowBanner(false);
        window.dispatchEvent(new Event("cookieConsentAccepted"));
      }}
      onDecline={() => {
        setShowBanner(false);
        window.dispatchEvent(new Event("cookieConsentDeclined"));
      }}
      containerClasses="flex items-center gap-4 p-4"
      style={{
        background: "rgba(25, 25, 25, 0.95)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      buttonClasses="bg-[#0071e3] text-white text-sm font-medium rounded-full px-4 py-2 hover:bg-[#0077ed] transition-colors"
      declineButtonClasses="bg-transparent text-[#0071e3] text-sm font-medium rounded-full px-4 py-2 hover:bg-gray-800/50 transition-colors"
      contentClasses="flex-1"
      expires={150}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-lg font-semibold">
          {translations[language].cookieTitle}
        </h3>
        <p className="text-gray-300 text-sm">
          {translations[language].cookieMessage}{" "}
          {translations[language].cookiePolicy}
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentWrapper;
