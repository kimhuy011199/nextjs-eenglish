'use client';

import { PlayerVolume } from '@/components/player/player-volume';
import { PlayerInfo } from '@/components/player/player-info';
import { PlayerControl } from '@/components/player/player-control';
import { PlayerProgress } from '@/components/player/player-progress';
import { usePlayer } from '@/hooks/use-player';

export function Player() {
  const { audioRef, audioData, handleEnded } = usePlayer();

  if (!audioData) {
    return null;
  }

  return (
    <div className='h-32 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col pt-6 pb-4'>
      <audio
        src={audioData.src}
        controls
        className='hidden'
        ref={audioRef}
        onEnded={handleEnded}
      />
      <div className='flex justify-between items-center h-full px-6'>
        <div className='w-60'>
          <PlayerInfo />
        </div>
        <div className='flex flex-col gap-3 items-center w-full max-w-xl'>
          <PlayerControl />
          <PlayerProgress />
        </div>
        <div className='w-60'>
          <PlayerVolume />
        </div>
      </div>
    </div>
  );
}
