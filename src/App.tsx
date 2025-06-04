import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";
import CookieSettings from "./components/ui/CookieSettings";
import { LanguageProvider } from "./context/LanguageContext";
import CookieConsentWrapper from "./components/legal/CookieConsentWrapper";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-inter text-gray-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Industries />
          <Mission />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <CookieSettings />
        <CookieConsentWrapper />
      </div>
    </LanguageProvider>
  );
}

export default App;
