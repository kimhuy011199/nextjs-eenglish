'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { usePlayer } from '@/hooks/use-player';

export function LyricContent() {
  const { progress, audioData } = usePlayer();
  const lyrics = audioData?.lyrics || [];
  const [currentIndex, setCurrentIndex] = useState(-1);

  const getLyricLine = (offset: number) => {
    const index = currentIndex + offset;
    return lyrics[index]?.text || '';
  };

  useEffect(() => {
    const time = Math.floor(progress * 1000);
    const index = lyrics.findIndex(
      (line) => time >= line.startTime && time <= line.endTime
    );

    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  }, [progress]);

  return (
    <>
      {currentIndex !== -1 ? (
        <div className='w-full px-10 max-w-xl flex flex-col justify-center items-center'>
          <AnimatePresence initial={false} mode='wait'>
            <motion.p
              className='text-2xl font-medium leading-relaxed'
              initial={{ opacity: 0, translateY: 5 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -5 }}
              transition={{ duration: 0.2 }}
              key={currentIndex}
            >
              {getLyricLine(0)}
            </motion.p>
          </AnimatePresence>
        </div>
      ) : null}
    </>
  );
}
