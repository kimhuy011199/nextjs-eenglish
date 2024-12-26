'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { usePlayer } from '@/hooks/use-player';

const lyrics = [
  {
    startTime: 0,
    endTime: 3000,
    text: 'Day of the Dead',
  },
  {
    startTime: 3000,
    endTime: 9000,
    text: 'I arrive in Guatemala on the Day of the Dead, November 1st.',
  },
  {
    startTime: 9000,
    endTime: 15000,
    text: "I'm curious about this holiday, so I go to the cemetery to see what's happening.",
  },
  {
    startTime: 15000,
    endTime: 18000,
    text: 'What I find is quite interesting.',
  },
  {
    startTime: 18000,
    endTime: 20000,
    text: 'The atmosphere is like a party.',
  },
  {
    startTime: 20000,
    endTime: 22000,
    text: 'There are people everywhere.',
  },
  {
    startTime: 22000,
    endTime: 25000,
    text: 'Families are sitting around the graves of their dead ancestors.',
  },
  {
    startTime: 25000,
    endTime: 28000,
    text: 'They clean the graves and add fresh flowers.',
  },
  {
    startTime: 28000,
    endTime: 34000,
    text: 'I walk through the cemetery and admire the beauty of all the colorful flowers.',
  },
  {
    startTime: 34000,
    endTime: 38000,
    text: "There's also color in the sky because many kids are flying kites.",
  },
  {
    startTime: 38000,
    endTime: 41000,
    text: 'Some families are having a picnic next to the graves.',
  },
  {
    startTime: 41000,
    endTime: 45000,
    text: 'They eat, drink, and chat together.',
  },
  {
    startTime: 45000,
    endTime: 47000,
    text: 'People laugh and smile.',
  },
  {
    startTime: 47000,
    endTime: 51000,
    text: 'In the United States, cemeteries are always somber.',
  },
  {
    startTime: 51000,
    endTime: 55000,
    text: 'We certainly never have festivals or parties next to graves.',
  },
  {
    startTime: 55000,
    endTime: 59000,
    text: "We don't laugh or play music or fly kites in cemeteries either.",
  },
  {
    startTime: 59000,
    endTime: 62000,
    text: 'I find that I prefer the Guatemalan approach.',
  },
  {
    startTime: 62000,
    endTime: 66000,
    text: 'I like the way they remember and celebrate those who have passed away.',
  },
  {
    startTime: 66000,
    endTime: 72000,
    text: 'I like that they acknowledge death instead of denying it the way Americans do.',
  },
  {
    startTime: 72000,
    endTime: 77000,
    text: 'I like that there is life as well as death in their cemeteries.',
  },
  {
    startTime: 77000,
    endTime: 82000,
    text: 'Guatemalans call it the Day of the Dead, but it is also a day to appreciate life.',
  },
];

export function LyricContent() {
  const { progress } = usePlayer();
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
