'use client';

import { Player } from '@/components/player/player';
import { Lyric } from '@/components/player/lyric';
import { PlayerProvider } from '@/hooks/use-player';
import { Audio } from '@/lib/interfaces';

export function PlayerContainer({ audioData }: { audioData: Audio }) {
  return (
    <PlayerProvider audioData={audioData}>
      <Lyric />
      <Player />
    </PlayerProvider>
  );
}
