'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { usePlayer } from '@/hooks/use-player';
import { Slider } from '@/components/ui/slider';

export function PlayerVolume() {
  const { audioRef } = usePlayer();
  const [volume, setVolume] = useState(1);
  const VolumeIcon = volume === 0 ? VolumeX : Volume2;

  const handleToggleMute = () => {
    setVolume(volume === 0 ? 1 : 0);
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    <div className='hidden md:flex w-full justify-end pr-2'>
      <div className='flex items-center gap-x-2 w-[100px]'>
        <button onClick={handleToggleMute}>
          <VolumeIcon className='cursor-pointer text-zinc-400' size={20} />
        </button>
        <Slider
          value={[volume]}
          onValueChange={([value]) => setVolume(value)}
          max={1}
          step={0.1}
        />
      </div>
    </div>
  );
}
