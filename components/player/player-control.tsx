'use client';

import { Pause, Play, Undo2, Redo2, Repeat, AlignCenter } from 'lucide-react';
import { usePlayer } from '@/hooks/use-player';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { twMerge } from 'tailwind-merge';

export function PlayerControl() {
  const {
    handleForward,
    handleBackward,
    handleRepeat,
    handleShowHideLyrics,
    handlePlayPause,
    isPlaying,
    shouldRepeat,
    shouldShowLyrics,
  } = usePlayer();
  const PlayIcon = isPlaying ? Pause : Play;

  return (
    <div className='flex items-center gap-4'>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Button
              variant='outline'
              className={twMerge(
                'rounded-full h-10 w-10 [&_svg]:size-4 p-2.5 hover:scale-105 transition-all',
                shouldShowLyrics ? 'hover:text-primary' : 'hover:text-zinc-500'
              )}
              onClick={handleShowHideLyrics}
              asChild
            >
              <AlignCenter
                className={shouldShowLyrics ? 'text-primary' : 'text-zinc-500'}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {shouldShowLyrics ? 'Hide lyrics' : 'Show lyrics'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Button
              variant='outline'
              className={
                'rounded-full h-10 w-10 [&_svg]:size-4 p-2.5 hover:scale-105 transition-all'
              }
              onClick={() => handleBackward()}
              asChild
            >
              <Undo2 className='text-zinc-500' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Backward 5 seconds</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button
        className='rounded-full h-12 w-12 [&_svg]:size-5 hover:scale-105 transition-all'
        onClick={handlePlayPause}
      >
        <PlayIcon fill='white' className='text-white' />
      </Button>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Button
              variant='outline'
              className={
                'rounded-full h-10 w-10 [&_svg]:size-4 p-2.5 hover:scale-105 transition-all'
              }
              onClick={() => handleForward()}
              asChild
            >
              <Redo2 className='text-zinc-500' />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Forward 5 seconds</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger>
            <Button
              variant='outline'
              className={twMerge(
                'rounded-full h-10 w-10 [&_svg]:size-4 p-2.5 hover:scale-105 transition-all',
                shouldRepeat ? 'hover:text-primary' : 'hover:text-zinc-500'
              )}
              onClick={handleRepeat}
              asChild
            >
              <Repeat
                className={shouldRepeat ? 'text-primary' : 'text-zinc-500'}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {shouldRepeat ? 'Disabled repeat' : 'Enabled repeat'}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
