import { PlayerContainer } from '@/components/player/player-container';
import { getAudio } from '@/services/queries/audios';

export default async function MiniStory({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const lessonHandle = (await params).handle;
  const audioHandle = lessonHandle + '-story';
  const audio = await getAudio(audioHandle);

  return <PlayerContainer audioData={audio} />;
}
