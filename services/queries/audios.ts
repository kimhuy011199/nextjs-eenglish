import { parseSubtitles } from '@/lib/utils';

export const getAudio = async (handle: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const audio = {
    id: '1',
    title: 'Mini Story',
    lessonId: '1',
    handle: 'day-of-the-dead-story',
    src: 'https://res.cloudinary.com/cloudinaryassets/video/upload/v1734968823/dayofthedead_qiasff.mp3',
    duration: 82,
    lyricSrc:
      'https://res.cloudinary.com/cloudinaryassets/raw/upload/v1735628739/dayofthedead_eyae0p.srt',
  };

  const lyricsFile = await fetch(audio.lyricSrc);
  const lyricsText = await lyricsFile.text();
  const lyrics = parseSubtitles(lyricsText);

  return { ...audio, lyrics };
};
