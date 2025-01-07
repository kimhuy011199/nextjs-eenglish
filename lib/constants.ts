import { PartOfSpeech } from '@/lib/enums';

export const VOCABULARY = {
  id: '1',
  word: 'kite',
  definition:
    'a toy consisting of a light frame with thin material stretched over it',
  meaning: 'diều',
  partOfSpeech: PartOfSpeech.Noun,
  imgSrc:
    'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836839/eenglish/1.1.day-of-the-dead/kite_cqrwii.jpg',
  phonetic: {
    id: '1',
    vocabularyId: '1',
    text: '/kaɪt/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/k/kit/kite_/kite.mp3',
  },
  sentence: {
    id: '1',
    vocabularyId: '1',
    text: 'Many kids are flying kites.',
    translation: 'Nhiều trẻ em đang thả diều.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735805543/eenglish/1.1.day-of-the-dead/vocab_sentence_kite_u5winf.mp3',
  },
};

export const DELAY_NEXT_QUESTION = 1200;

export const LOCAL_STORAGE = {
  TOUR_LEARNING: 'TOUR_LEARNING',
  TOUR_AUDIO: 'TOUR_AUDIO',
  TOUR_FLASHCARD: 'TOUR_FLASHCARD',
  TOUR_PRACTICE: 'TOUR_PRACTICE',
};
