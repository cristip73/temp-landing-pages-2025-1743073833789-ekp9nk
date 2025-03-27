'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Ce presupune Programul Prediabet KiloStop?",
    answer: "Un program intensiv de 3 luni cu 9 consultații (3 consultații/lună) supervizat de medici specialiști diabetologi. Folosim Metoda 4M (Mâncare, Mișcare, Motivație, Metabolism) pentru a aborda cauzele profunde ale prediabetului. La fiecare consultație primești un plan personalizat de alimentație, activitate fizică și stil de viață bazat pe cele mai recente studii științifice."
  },
  {
    question: "Pentru cine este potrivit programul?",
    answer: "Programul este dedicat persoanelor cu prediabet (glicemie 100-126 mg/dl) sau recent diagnosticate cu diabet, fără complicații (glicemie maximă 150 mg/dl). Este eficient atât pentru persoanele cu kilograme în plus, cât și pentru cele normoponderale. Pentru diabetul avansat, recomandăm clinici specializate."
  },
  {
    question: "Cum se desfășoară programul?",
    answer: "Începi cu o consultație de evaluare (30 minute) pentru diagnosticare și evaluarea eligibilității. Apoi, urmează 9 consultații în 3 luni (30 minute fiecare) unde medicul îți oferă ghidare personalizată. Primești acces imediat la aplicația noastră cu peste 30 de lecții structurate pe cei 9 pași ai programului."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Întrebări Frecvente
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Află mai multe despre programul nostru și cum te poate ajuta
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-kilostop-pink transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-text-gray"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}