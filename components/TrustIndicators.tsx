'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, BookOpen } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    title: "15+ Ani de Experiență",
    description: "Ajutăm oamenii să-și recâștige sănătatea din 2009"
  },
  {
    icon: Users,
    title: "23,000+ Pacienți",
    description: "Au beneficiat de programele noastre specializate"
  },
  {
    icon: Shield,
    title: "Certificări Medicale",
    description: "Program dezvoltat de specialiști în diabet și nutriție"
  },
  {
    icon: BookOpen,
    title: "Metodă Dovedită",
    description: "Bazată pe cele mai recente cercetări științifice"
  }
];

export default function TrustIndicators() {
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
            De Ce Să Ne Alegi
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Suntem dedicați misiunii noastre de a ajuta oamenii să trăiască o viață sănătoasă și fericită
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-kilostop-pink/5 to-kilostop-orange/5 p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white shadow-md">
                  <item.icon className="w-8 h-8 text-kilostop-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-text-gray">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}