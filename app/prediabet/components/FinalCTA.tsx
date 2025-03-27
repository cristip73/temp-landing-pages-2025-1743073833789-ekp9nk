'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-kilostop-pink/10 to-kilostop-orange/10">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
            <Clock className="w-4 h-4 text-kilostop-pink" />
            <span className="text-sm font-medium text-text-gray">Locuri limitate pentru luna aceasta</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fă primul pas către o viață fără griji legate de diabet
          </h2>
          
          <p className="text-lg md:text-xl text-text-gray mb-8">
            Completează chestionarul rapid și află cum programul nostru personalizat te poate ajuta să-ți recapeți sănătatea
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <Button 
              className="gradient-button text-lg group"
              onClick={() => window.location.href = '/quiz'}
            >
              Începe Evaluarea Gratuită
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-text-gray">
              Durează doar 2 minute să completezi chestionarul
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}