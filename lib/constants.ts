import { PartOfSpeech } from '@/lib/enums';

export const VOCABULARY = {
  id: '111',
  word: 'atmosphere',
  definition: 'the air in a particular place',
  meaning: 'bầu không khí',
  partOfSpeech: PartOfSpeech.Noun,
  imgSrc: '/cat/flashcards.svg',
  phonetic: {
    id: '1',
    vocabularyId: '111',
    text: '/ˈætməsˌfɪɹ/',
    sound:
      'https://api.dictionaryapi.dev/media/pronunciations/en/atmosphere-us.mp3',
  },
  sentence: {
    id: '1',
    vocabularyId: '111',
    sentence: 'The atmosphereis like a party.',
    translation: 'Bầu không khí giống như một bữa tiệc.',
    audioSrc: '',
  },
};

export const DELAY_NEXT_QUESTION = 1200;
