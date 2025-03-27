'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "După multe diete fără succes, Kilostop a funcționat. Glicemia a scăzut de la 118 la 98 mg/dl, am slăbit 6 kg și furnicăturile din picioare s-au redus considerabil.",
    author: "Mihai L.",
    age: "52 ani"
  },
  {
    text: "Glicemia mea a scăzut de la 126 la 105 mg/dl și am slăbit 8 kg în 3 luni. Nu mai am setea constantă și pot dormi toată noaptea fără întreruperi. Medicul meu a fost impresionat la ultimul control.",
    author: "Maria D.",
    age: "47 ani"
  },
  {
    text: "Cu ajutorul echipei Kilostop, hemoglobina glicată a scăzut de la 6.8% la 6.3% în 4 luni. Am dat jos 8 kg și nu mai am amețelile acelea bruște care mă speriau.",
    author: "Vasile P.",
    age: "58 ani"
  },
  {
    text: "În 5 luni, glicata mea a coborât de la 6.1% la 5.8%, iar cântarul arată cu 9 kg mai puțin. Mi-am recăpătat încrederea și nu mă mai tem de complicațiile diabetului.",
    author: "Elena B.",
    age: "49 ani"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent((current) => (current + newDirection + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-kilostop-pink/5 to-kilostop-orange/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rezultatele Vorbesc
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Vezi cum programul nostru a ajutat alte persoane să-și recâștige sănătatea
          </p>
        </motion.div>

        <div className="relative h-[300px] md:h-[250px] max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <Quote className="w-12 h-12 text-kilostop-pink mb-6" />
                <p className="text-lg md:text-xl mb-6 text-text-gray">
                  {testimonials[current].text}
                </p>
                <div className="font-semibold text-kilostop-pink">
                  {testimonials[current].author}
                  <span className="text-text-gray font-normal ml-2">
                    {testimonials[current].age}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-6 h-6 text-kilostop-pink" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-6 h-6 text-kilostop-pink" />
          </button>
        </div>
      </div>
    </section>
  );
}