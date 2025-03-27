import { Libre_Baskerville, Open_Sans } from 'next/font/google';

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
});