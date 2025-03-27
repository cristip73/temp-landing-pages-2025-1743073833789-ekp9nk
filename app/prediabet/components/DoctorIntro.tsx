'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DoctorIntro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070"
              alt="Dr. Ancuța Leonte"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Doctorul tău în această călătorie
              </h2>
              <p className="text-lg text-text-gray mb-6">
                "Dacă îți faci griji pentru nivelul glicemiei sau te simți copleșit de sfaturi contradictorii, nu ești singur. Sunt Dr. Ancuța Leonte și am ajutat mulți pacienți ca tine care se simțeau speriați de prediabet. Știu cât de greu poate fi – și vreau să știi că există o cale de urmat."
              </p>
              <div className="flex items-center">
                <div className="text-kilostop-pink font-semibold">
                  Dr. Ancuța Leonte
                  <span className="block text-text-gray font-normal">Specialist Diabet și Nutriție</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}