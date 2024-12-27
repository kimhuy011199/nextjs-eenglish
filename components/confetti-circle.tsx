'use client';

import { motion } from 'framer-motion';

export function ConfettiCircle({
  angle,
  radius,
}: {
  angle: number;
  radius: number;
}) {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return (
    <motion.div
      className='absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full translate-x-1/2 translate-y-1/2'
      initial={{ x: 0, y: 0, scale: 1 }}
      animate={{ x, y, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
}
