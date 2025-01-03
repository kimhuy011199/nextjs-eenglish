import { createClient } from '@/lib/supabase/server';
import { Audio } from '@/lib/interfaces';
import { parseSubtitles } from '@/lib/utils';

export const getAudio = async (handle: string) => {
  const supabase = await createClient();
  const audioData = await supabase
    .from('Audio')
    .select('*')
    .eq('handle', handle)
    .limit(1)
    .single();

  if (audioData.error) {
    return null;
  }

  if (!audioData.data?.lyricSrc) {
    return audioData.data as Audio;
  }

  // Fetch the lyrics file and parse it
  const lyricsFile = await fetch(audioData.data?.lyricSrc);
  const lyricsText = await lyricsFile.text();
  const lyrics = parseSubtitles(lyricsText);

  return { ...audioData.data, lyrics } as Audio;
};
