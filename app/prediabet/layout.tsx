import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programul Prediabet KiloStop - Controleaza-ti Glicemia',
  description: 'Recâștigă-ți sănătatea și oprește diabetul înainte să înceapă sub supravegherea specialiștilor!',
};

export default function PrediabetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}