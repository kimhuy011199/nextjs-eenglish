'use client';

import Image from 'next/image';
import { AnimatePresence } from 'motion/react';
import { RefreshCw } from 'lucide-react';
import * as motion from 'motion/react-client';
import { Vocabulary } from '@/lib/interfaces';
import { useFlashcard } from '@/hooks/use-flashcard';
import { Button } from '@/components/ui/button';

export function Flashcard({ vocabulary }: { vocabulary: Vocabulary }) {
  const { selectedTab, handleNextTab } = useFlashcard(vocabulary);

  return (
    <div className='border border-zinc-200 min-h-[520px] sm:min-h-[480px] lg:min-h-[320px] p-2 md:p-6 w-full rounded-2xl relative flex items-center shadow-lg'>
      <Button
        onClick={handleNextTab}
        variant='outline'
        className='h-10 w-10 [&_svg]:size-4 absolute top-4 right-4 rounded-lg'
      >
        <RefreshCw size={40} strokeWidth={2.5} />
      </Button>
      <div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='flex items-center'
          >
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-8 xl:gap-10 items-start lg:items-center p-3 xl:p-4'>
              <div className='min-w-48 h-48 rounded-xl border border-zinc-200 overflow-hidden'>
                <Image
                  src={vocabulary.imgSrc}
                  alt={vocabulary.word}
                  width={192}
                  height={192}
                />
              </div>
              {selectedTab.component}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
