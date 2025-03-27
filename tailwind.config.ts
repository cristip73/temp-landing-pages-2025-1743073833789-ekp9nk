import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['var(--font-libre)'],
        opensans: ['var(--font-opensans)'],
      },
      colors: {
        'kilostop-pink': '#ff5a81',
        'kilostop-green': '#26b583',
        'kilostop-orange': '#ff531a',
        'kilostop-blue': '#3B89ED',
        'kilostop-red': '#D62F57',
        'text-black': '#071911',
        'text-gray': '#778c85',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;