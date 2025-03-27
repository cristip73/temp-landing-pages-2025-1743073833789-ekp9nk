import './globals.css';
import type { Metadata } from 'next';
import { libreBaskerville, openSans } from './fonts';

export const metadata: Metadata = {
  title: 'Programul Prediabet KiloStop - Controleaza-ti Glicemia',
  description: 'Recâștigă-ți sănătatea și oprește diabetul înainte să înceapă sub supravegherea specialiștilor!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${libreBaskerville.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}