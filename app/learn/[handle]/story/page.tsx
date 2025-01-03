import { PlayerContainer } from '@/components/player/player-container';
import { ResourceLimit } from '@/components/resource-limit';
import { getAudio } from '@/services/queries/audios';

export default async function MiniStory({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const lessonHandle = (await params).handle;
  const audioHandle = lessonHandle + '-story';
  const audio = await getAudio(audioHandle);

  if (!audio) {
    return <ResourceLimit />;
  }

  return <PlayerContainer audioData={audio} />;
}
