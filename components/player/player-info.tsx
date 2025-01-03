import { usePlayer } from '@/hooks/use-player';

export function PlayerInfo() {
  const { audioData } = usePlayer();

  if (!audioData) {
    return null;
  }

  const title = audioData.title.split(' - ')[1];

  return (
    <div>
      <div className='font-medium text-lg'>{title}</div>
      <div className='text-zinc-500 text-sm'>A.J. Hoge</div>
    </div>
  );
}
