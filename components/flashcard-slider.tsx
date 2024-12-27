'use client';

import React, { useState } from 'react';
import { MoveRight, MoveLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { Vocabulary } from '@/lib/interfaces';
import { Flashcard } from '@/components/flashcard';
import { Button } from '@/components/ui/button';

const xOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

export function FlashcardSlider({
  vocabularies,
}: {
  vocabularies: Vocabulary[];
}) {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const vocabIndex = wrap(0, vocabularies.length, currentPage);
  const paginate = (newDirection: number) => {
    setCurrentPage([currentPage + newDirection, newDirection]);
  };

  return (
    <div className='mx-auto flex flex-col items-center justify-center gap-4 w-[800px]'>
      <div className='flex flex-col items-center justify-center relative h-80 w-full'>
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            className='absolute inset-0 flex flex-col items-center justify-center'
            data-page={currentPage}
            variants={variants}
            initial='enter'
            animate='active'
            exit='exit'
          >
            <Flashcard vocabulary={vocabularies[vocabIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='flex justify-center gap-5 w-full'>
        <Button
          variant='outline'
          className='h-10 w-10 [&_svg]:size-4 rounded-lg'
          onClick={() => paginate(-1)}
        >
          <MoveLeft size={40} strokeWidth={3} />
        </Button>
        <Button
          variant='outline'
          className='h-10 w-10 [&_svg]:size-4 rounded-lg'
          onClick={() => paginate(1)}
        >
          <MoveRight size={40} strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
}
