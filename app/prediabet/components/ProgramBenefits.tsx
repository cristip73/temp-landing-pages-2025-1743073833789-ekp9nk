'use client';

import { motion } from 'framer-motion';
import { Activity, Heart, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Activity,
    title: "Dovedit Științific",
    description: "Dezvoltat de specialiști pe baza celor mai noi cercetări în prevenirea diabetului."
  },
  {
    icon: Heart,
    title: "Plan Personalizat",
    description: "Adaptat stilului tău de viață și preferințelor tale."
  },
  {
    icon: Brain,
    title: "Suport Individual",
    description: "Ghidare atentă din partea echipei noastre medicale la fiecare pas."
  }
];

export default function ProgramBenefits() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-kilostop-pink/5">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Beneficiile Programului
          </h2>
          <p className="text-lg text-text-gray max-w-3xl mx-auto">
            Despre Programul Kilostop Prediabet: O călătorie de 3 luni supravegheată de doctor care te ajută să remediezi cauzele profunde ale prediabetului prin nutriție, coaching pentru obiceiuri și suport compasional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <benefit.icon className="w-12 h-12 text-kilostop-pink mb-4" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-text-gray">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}