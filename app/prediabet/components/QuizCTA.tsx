'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function QuizCTA() {
  return (
    <section className="bg-gradient-to-r from-kilostop-pink/5 to-kilostop-orange/5 section-padding">
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Completează testul nostru rapid pentru a descoperi riscul tău
          </h2>
          <p className="text-lg md:text-xl text-text-gray mb-8">
            Află cum un plan personalizat poate transforma sănătatea ta și primește recomandări adaptate situației tale.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Button 
              className="gradient-button text-lg"
              onClick={() => window.location.href = '/quiz'}
            >
              Începe Aici
            </Button>

            <p className="text-sm text-text-gray">
              Este rapid și revelator – doar 10 întrebări simple
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
