import type { Metadata } from 'next';
import './globals.css';
import { inter, parkinsans, questrial, leckerliOne } from '@/lib/font';

export const metadata: Metadata = {
  title: 'EEnglish Learning App',
  description:
    'Learn English through listening, flashcards, and practice with interactive exercises inspired by the Effortless English method.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${parkinsans.className} ${questrial.variable} ${inter.variable} ${leckerliOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
