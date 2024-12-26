'use client';

import { Volume2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';

export function SpeakerButton({
  soundSource,
  className,
}: {
  soundSource: string;
  className?: string;
}) {
  const playSound = () => {
    console.log('Playing sound:', soundSource);
  };

  return (
    <Button
      onClick={playSound}
      className={twMerge(
        'p-2 text-lg rounded-full bg-primary text-white h-14 w-14 flex justify-center items-center [&_svg]:size-6 hover:scale-105 transition-all',
        className
      )}
    >
      <Volume2 size={60} />
    </Button>
  );
}
