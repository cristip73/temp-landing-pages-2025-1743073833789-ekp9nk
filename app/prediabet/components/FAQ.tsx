'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  program: FAQItem[];
  results: FAQItem[];
  costs: FAQItem[];
}

const faqData: FAQData = {
  program: [
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
  ],
  results: [],
  costs: []
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("program");

  return (
    <section className="section-padding bg-white md:py-24 py-16">
      <div className="container-width">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Întrebări Frecvente
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Află mai multe despre programul nostru și cum te poate ajuta
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="program" className="w-full" onValueChange={setActiveTab}>
            <div className="md:flex md:justify-center mb-6 md:mb-8">
              {/* Mobile-optimized tabs with horizontal scroll */}
              <div className="relative md:hidden w-full overflow-x-auto scrollbar-hide -mx-4 px-4 pb-4">
                <TabsList className="bg-transparent w-auto inline-flex space-x-2 px-0">
                  <TabsTrigger
                    value="program"
                    className={cn(
                      "rounded-full px-4 py-2 whitespace-nowrap text-sm",
                      "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                      "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                    )}
                  >
                    🩺 Despre Program
                  </TabsTrigger>
                  <TabsTrigger
                    value="results"
                    className={cn(
                      "rounded-full px-4 py-2 whitespace-nowrap text-sm",
                      "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                      "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                    )}
                  >
                    🩸 Rezultate
                  </TabsTrigger>
                  <TabsTrigger
                    value="costs"
                    className={cn(
                      "rounded-full px-4 py-2 whitespace-nowrap text-sm",
                      "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                      "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                    )}
                  >
                    💰 Costuri
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Desktop tabs */}
              <TabsList className="bg-transparent hidden md:inline-flex">
                <TabsTrigger
                  value="program"
                  className={cn(
                    "rounded-full px-6 py-2",
                    "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                    "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                  )}
                >
                  🩺 Despre Program
                </TabsTrigger>
                <TabsTrigger
                  value="results"
                  className={cn(
                    "rounded-full px-6 py-2",
                    "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                    "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                  )}
                >
                  🩸 Rezultate
                </TabsTrigger>
                <TabsTrigger
                  value="costs"
                  className={cn(
                    "rounded-full px-6 py-2",
                    "data-[state=active]:bg-kilostop-pink data-[state=active]:text-white",
                    "data-[state=inactive]:bg-transparent data-[state=inactive]:text-text-gray border border-kilostop-pink/20"
                  )}
                >
                  💰 Costuri
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="program" className="mt-0">
              <CustomAccordion items={faqData.program} />
            </TabsContent>

            <TabsContent value="results" className="mt-0">
              <div className="text-center text-text-gray py-8">
                Vom adăuga în curând întrebări frecvente despre rezultatele programului.
              </div>
            </TabsContent>

            <TabsContent value="costs" className="mt-0">
              <div className="text-center text-text-gray py-8">
                Vom adăuga în curând întrebări frecvente despre costurile programului.
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

interface CustomAccordionProps {
  items: FAQItem[];
}

function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`} 
          className="border-b border-gray-100 py-2"
        >
          <AccordionTrigger className="py-4 text-left text-lg font-semibold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-text-gray pb-4 pt-1">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}