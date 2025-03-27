'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
          alt="Medical professional working"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
      </div>

      {/* Content */}
      <div className="container-width section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-text-black"
            >
              Programul Prediabet
              <span className="block text-kilostop-pink mt-2">KiloStop</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-text-gray"
            >
              Recâștigă-ți sănătatea și oprește diabetul înainte să înceapă sub supravegherea specialiștilor!!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="gradient-button text-lg"
                onClick={() => window.location.href = '/quiz'}
              >
                Începe Aici
              </Button>
              
              <div className="flex items-center gap-4 text-text-gray">
                <div className="h-12 w-[2px] bg-kilostop-pink/20 hidden sm:block" />
                <div className="text-sm">
                  <div className="font-semibold text-text-black">Program Specializat</div>
                  <div>3 luni de transformare</div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-100"
            >
              <div>
                <div className="text-3xl font-bold text-kilostop-pink">15+</div>
                <div className="text-text-gray">Ani de Experiență</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kilostop-pink">23k+</div>
                <div className="text-text-gray">Pacienți Ajutați</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=1974"
                alt="Doctor consulting with patient"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ x: 20, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs"
            >
              <div className="text-kilostop-pink font-semibold mb-2">Rezultate Dovedite</div>
              <p className="text-text-gray text-sm">
                "Glicemia mea a scăzut de la 126 la 105 mg/dl în doar 3 luni de program"
              </p>
              <div className="text-sm mt-2 font-medium">- Maria D., 47 ani</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}