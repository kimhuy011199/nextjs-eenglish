'use client';

import { Slider } from '@/components/ui/slider';
import { usePlayer } from '@/hooks/use-player';
import { formatDurationTime } from '@/lib/utils';

export function PlayerProgress() {
  const { audioData, progress, handleChangeProgress } = usePlayer();

  return (
    <div className='flex items-center gap-3 w-full'>
      <span className='w-10 text-right text-xs text-zinc-500'>
        {formatDurationTime(progress)}
      </span>
      <div className='flex flex-1'>
        <Slider
          className='h-2 w-full'
          value={[progress]}
          onValueChange={handleChangeProgress}
          max={audioData.duration}
          step={1}
          defaultValue={[0]}
        />
      </div>
      <span className='w-10 text-xs text-zinc-500'>
        {formatDurationTime(audioData.duration)}
      </span>
    </div>
  );
}
