'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    stage: "Etapa 1: Evaluare completă & Plan Personalizat",
    items: [
      {
        title: "Radiografia Sănătății",
        description: "Descoperi cu precizie starea ta metabolică prin analize complete, pentru a avea claritate absolută asupra punctului de plecare."
      },
      {
        title: "Strategia Personalizată Anti-Diabet",
        description: "Primești un plan de alimentație și stil de viață adaptat nevoilor tale, care te ghidează pas cu pas spre echilibru."
      },
      {
        title: "Instrumentele Schimbării",
        description: "Ești echipat cu toate uneltele necesare – de la monitorizare la suport psihologic – pentru a porni cu încredere pe drumul schimbării."
      }
    ]
  },
  {
    stage: "Etapa 2: Implementare & Transformare",
    items: [
      {
        title: "Hrana ca Medicament",
        description: "Fiecare masă devine o oportunitate de a-ți regla glicemia și de a-ți alimenta corpul cu energie sănătoasă."
      },
      {
        title: "Mișcarea ca Medicament",
        description: "Integrezi exercițiile fizice în rutina zilnică, pentru a-ți spori metabolismul și a-ți întări vitalitatea."
      },
      {
        title: "Ajustare & Suport Medical",
        description: "Beneficiezi de monitorizare constantă și de ajustări personalizate, asigurând progresul sigur și eficient sub îndrumarea medicului."
      }
    ]
  },
  {
    stage: "Etapa 3: Menținere & Autonomie",
    items: [
      {
        title: "Obiceiuri de Fier",
        description: "Transformi acțiunile deliberate în obiceiuri automate, care te susțin zilnic fără efort conștient."
      },
      {
        title: "Scut Anti-Recădere",
        description: "Dobândești strategii de prevenție care te protejează de orice recădere, menținând constant rezultatele obținute."
      },
      {
        title: "Autonomie pe Viață",
        description: "Devii independent în gestionarea sănătății tale, cu un plan clar de menținere și cu încrederea de a trăi activ și sănătos pe termen lung."
      }
    ]
  }
];

export default function ProgramSteps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gradient-to-br from-white to-kilostop-green/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pașii către Transformare
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Un program structurat în 3 etape pentru a-ți asigura succesul pe termen lung
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((stage, stageIndex) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stageIndex * 0.2 }}
              className="relative"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-kilostop-green" />
                  <span className="text-sm font-semibold text-text-black">{stage.stage}</span>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {stage.items.map((step, index) => {
                  const stepIndex = stageIndex * 3 + index;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setActiveStep(activeStep === stepIndex ? null : stepIndex)}
                        className="w-full text-left"
                      >
                        <div
                          className={`p-6 rounded-xl transition-all duration-300 ${
                            activeStep === stepIndex
                              ? 'bg-kilostop-green text-white shadow-lg'
                              : 'bg-kilostop-green/10 hover:bg-kilostop-green/20'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`text-lg font-bold ${
                              activeStep === stepIndex ? 'text-white' : 'text-kilostop-green'
                            }`}>
                              {step.title}
                            </h3>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                activeStep === stepIndex ? 'rotate-180 text-white' : 'text-kilostop-green'
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {activeStep === stepIndex && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 text-sm"
                              >
                                {step.description}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}