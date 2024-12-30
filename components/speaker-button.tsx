'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume, Volume1, Volume2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';

export function SpeakerButton({
  soundSource,
  className,
}: {
  soundSource: string;
  className?: string;
}) {
  const speakerIcons = [Volume, Volume1, Volume2];
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [speakerIcon, setSpeakerIcon] = useState(2);
  const Icon = speakerIcons[speakerIcon];

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const playSound = () => {
    setIsPlaying(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        audioRef.current.play();
      }
    }
  };

  // Change volume icon when playing/pausing
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setSpeakerIcon((prev) => (prev + 1) % speakerIcons.length);
      }, 200);

      return () => clearInterval(interval);
    } else {
      setSpeakerIcon(2);
    }
  }, [audioRef.current, isPlaying]);

  return (
    <>
      {soundSource ? (
        <audio
          ref={audioRef}
          onEnded={handleEnded}
          src={soundSource}
          className='hidden'
        />
      ) : null}
      <Button
        disabled={!soundSource || isPlaying}
        onClick={playSound}
        className={twMerge(
          'p-2 text-lg rounded-full bg-primary text-white h-14 w-14 flex justify-center items-center [&_svg]:size-6 hover:scale-105 transition-all',
          className
        )}
      >
        <Icon size={60} />
      </Button>
    </>
  );
}
