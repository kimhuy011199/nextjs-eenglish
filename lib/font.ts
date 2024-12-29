import { Questrial, Parkinsans, Inter } from 'next/font/google';

// App font
export const parkinsans = Parkinsans({
  variable: '--font-parkinsans',
  subsets: ['latin'],
});

// Vietnamese font
export const questrial = Questrial({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-questrial',
  weight: ['400'],
});

// Phonetic font
export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
