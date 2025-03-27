'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-width py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <div className="relative h-12 mb-6">
              <Image
                src="https://kilostop.ro/wp-content/uploads/2020/04/Screenshot-2020-04-16-at-10.53.34.png"
                alt="Kilostop Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-text-gray mb-4">
              Suntem dedicați misiunii noastre de a ajuta oamenii să trăiască o viață sănătoasă și fericită.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-gray">
                <Phone className="w-4 h-4" />
                <span>0722 234 567</span>
              </li>
              <li className="flex items-center gap-2 text-text-gray">
                <Mail className="w-4 h-4" />
                <span>contact@kilostop.ro</span>
              </li>
              <li className="flex items-center gap-2 text-text-gray">
                <MapPin className="w-4 h-4" />
                <span>București, Sector 1</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Program</h4>
            <ul className="space-y-2 text-text-gray">
              <li>Luni - Vineri: 9:00 - 20:00</li>
              <li>Sâmbătă: 9:00 - 14:00</li>
              <li>Duminică: Închis</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Certificări</h4>
            <p className="text-text-gray">
              Clinică acreditată de Ministerul Sănătății și membră a Asociației Române de Nutriție.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-gray-100 text-center text-sm text-text-gray"
        >
          <p>© {new Date().getFullYear()} Kilostop. Toate drepturile rezervate.</p>
        </motion.div>
      </div>
    </footer>
  );
}