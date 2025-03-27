'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    }

    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-kilostop-pink/5 to-kilostop-orange/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rezultatele Vorbesc
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Vezi cum programul nostru a ajutat alte persoane să-și recâștige sănătatea
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                    <Quote className="w-10 h-10 text-kilostop-pink mb-6" />
                    <p className="text-lg md:text-xl mb-6 text-text-gray">
                      {testimonial.text}
                    </p>
                    <div className="font-semibold text-kilostop-pink">
                      {testimonial.author}
                      <span className="text-text-gray font-normal ml-2">
                        {testimonial.age}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-kilostop-pink w-4' 
                    : 'bg-kilostop-pink/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}