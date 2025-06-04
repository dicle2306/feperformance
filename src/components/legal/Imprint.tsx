import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

interface ImprintProps {
  onClose: () => void;
}

const Imprint: React.FC<ImprintProps> = ({ onClose }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          <h2 className="text-2xl font-semibold">Impressum</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="px-6 py-8">
          <div className="space-y-6">
            <div>
              <p className="mb-4">
                FE Performance Media GbR
                <br />
                Rahlstedter Str. 7<br />
                23743 Grömitz
              </p>

              <div className="mb-6">
                <p className="font-semibold mb-2">Vertreten durch:</p>
                <p>Ensar Brahimi und Florent Brahimi</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
                <p>
                  Telefon: 015771465421
                  <br />
                  E-Mail: feperformancemedia@gmail.com
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz:
                  <br />
                  DE453706861
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  EU-Streitschlichtung
                </h3>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h3>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <p className="text-sm text-gray-500">
                Quelle:{" "}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  e-recht24.de
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Imprint;
