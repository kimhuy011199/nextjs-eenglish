'use client';

import { usePlayer } from '@/hooks/use-player';
import { LyricContent } from '@/components/player/lyric-content';
import { LyricEmpty } from '@/components/player/lyric-empty';

export function Lyric() {
  const { audioData, shouldShowLyrics } = usePlayer();

  return (
    <div className='mb-auto border text-center border-zinc-200 bg-zinc-50 rounded-2xl h-full flex flex-col justify-center items-center'>
      {shouldShowLyrics ? (
        audioData?.lyrics ? (
          <LyricContent />
        ) : (
          <LyricEmpty />
        )
      ) : null}
    </div>
  );
}
