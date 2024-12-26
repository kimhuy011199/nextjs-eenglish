import { PartOfSpeech } from '@/lib/enums';

export const getVocabularies = async (lessonHandle: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return [
    {
      id: '110',
      word: 'cemetery',
      definition: 'a place where dead people are buried',
      meaning: 'nghĩa trang',
      partOfSpeech: PartOfSpeech.Noun,
      imgSrc: '/cat/flashcards.svg',
      phonetic: {
        id: '1',
        vocabularyId: '110',
        text: '/ˈsem.ɘˌtiɘɹ.i/',
        sound:
          'https://api.dictionaryapi.dev/media/pronunciations/en/cemetery-us.mp3',
      },
      sentence: {
        id: '1',
        vocabularyId: '110',
        sentence: "I go to the cemetery to see what's happening.",
        translation: 'Tôi đến nghĩa trang để xem có gì xảy ra.',
        audioSrc: '',
      },
    },
    {
      id: '111',
      word: 'atmosphere',
      definition: 'the air in a particular place',
      meaning: 'bầu không khí',
      partOfSpeech: PartOfSpeech.Noun,
      imgSrc: '/cat/flashcards.svg',
      phonetic: {
        id: '2',
        vocabularyId: '111',
        text: '/ˈætməsˌfɪɹ/',
        sound:
          'https://api.dictionaryapi.dev/media/pronunciations/en/atmosphere-us.mp3',
      },
      sentence: {
        id: '2',
        vocabularyId: '111',
        sentence: 'The atmosphereis like a party.',
        translation: 'Bầu không khí giống như một bữa tiệc.',
        audioSrc: '',
      },
    },
    {
      id: '112',
      word: 'kite',
      definition:
        'a toy consisting of a light frame with thin material stretched over it',
      meaning: 'diều',
      partOfSpeech: PartOfSpeech.Noun,
      imgSrc: '/cat/flashcards.svg',
      phonetic: {
        id: '3',
        vocabularyId: '112',
        text: '/kaɪt/',
        sound:
          'https://api.dictionaryapi.dev/media/pronunciations/en/kite-us.mp3',
      },
      sentence: {
        id: '3',
        vocabularyId: '112',
        sentence: 'Many kids are flying kites in the park.',
        translation: 'Nhiều trẻ em đang thả diều ở công viên.',
        audioSrc: '',
      },
    },
    {
      id: '113',
      word: 'approach',
      definition:
        'to come near or nearer to something or someone in space, time, quality, or amount',
      meaning: 'tiếp cận',
      partOfSpeech: PartOfSpeech.Verb,
      imgSrc: '/cat/flashcards.svg',
      phonetic: {
        id: '4',
        vocabularyId: '113',
        text: '/əˈproʊtʃ/',
        sound:
          'https://api.dictionaryapi.dev/media/pronunciations/en/approach-us.mp3',
      },
      sentence: {
        id: '4',
        vocabularyId: '113',
        sentence: 'I prefer the Guatemalan approach.',
        translation: 'Tôi thích cách tiếp cận của người Guatemala.',
        audioSrc: '',
      },
    },
    {
      id: '114',
      word: 'hello',
      definition: 'used when meeting or greeting someone',
      meaning: 'xin chào',
      partOfSpeech: PartOfSpeech.Interjection,
      imgSrc: '/cat/flashcards.svg',
      phonetic: {
        id: '5',
        vocabularyId: '114',
        text: '/həˈloʊ/',
        sound:
          'https://api.dictionaryapi.dev/media/pronunciations/en/hello-us.mp3',
      },
      sentence: {
        id: '5',
        vocabularyId: '114',
        sentence: 'Hello, how are you?',
        translation: 'Xin chào, bạn khỏe không?',
        audioSrc: '',
      },
    },
  ];
};
