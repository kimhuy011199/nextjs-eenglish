import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ConfettiCircle } from '@/components/confetti-circle';

export function useConfetti() {
  const radius = 60;
  const angles = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);

  const [showConfetti, setShowConfetti] = useState(false);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
      setTimeout(() => setShowConfetti(true), 200);
      setTimeout(() => setShowConfetti(false), 400);
    }, 200);
  };

  const ConfettiRenderer = showConfetti ? (
    <AnimatePresence>
      {angles.map((angle, index) => (
        <ConfettiCircle key={index} angle={angle} radius={radius} />
      ))}
    </AnimatePresence>
  ) : null;

  return { triggerConfetti, ConfettiRenderer };
}
