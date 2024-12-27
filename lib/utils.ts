import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AnswerContentType, Language, QuestionContentType } from '@/lib/enums';
import { Question, Vocabulary } from '@/lib/interfaces';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateAnswerChoices = (
  vocab: Vocabulary,
  vocabularies: Vocabulary[],
  language: Language
) => {
  const shuffledVocabularies = shuffleArray(vocabularies);
  const selectedVocabularies = shuffledVocabularies
    .filter((v) => v.word !== vocab.word)
    .slice(0, 3);
  selectedVocabularies.push(vocab);
  const shuffledSelectedVocabularies = shuffleArray(selectedVocabularies);
  return shuffledSelectedVocabularies.map((v, i) => ({
    id: i + 1,
    label: language === Language.English ? v.word : v.meaning,
    value: v.word,
  }));
};

export const generateQuestion = (
  vocab: Vocabulary,
  vocabularies: Vocabulary[],
  answerContentTypes?: AnswerContentType[]
) => {
  let typesList: number[] = [];
  if (answerContentTypes?.length === 1) {
    if (answerContentTypes[0] === AnswerContentType.Choice) {
      typesList = [1, 2, 3];
    }
    if (answerContentTypes[0] === AnswerContentType.Input) {
      typesList = [4, 5, 6];
    }
  } else {
    typesList = [1, 2, 3, 4, 5, 6];
  }

  const type = getRandomItemFromArray(typesList);
  // const type = 1;

  switch (type) {
    case 1:
      return {
        questionContent: {
          type: QuestionContentType.Text,
          description: 'Give the English translation of the following word',
          value: vocab.meaning,
          language: Language.Vietnamese,
        },
        answerContent: {
          type: AnswerContentType.Choice,
          value: generateAnswerChoices(vocab, vocabularies, Language.English),
          language: Language.English,
          correctAnswer: vocab.word,
        },
      };
    case 2:
      return {
        questionContent: {
          type: QuestionContentType.Text,
          description: 'Give the Vietnamese translation of the following word',
          value: vocab.word,
          language: Language.English,
        },
        answerContent: {
          type: AnswerContentType.Choice,
          value: generateAnswerChoices(
            vocab,
            vocabularies,
            Language.Vietnamese
          ),
          language: Language.Vietnamese,
          correctAnswer: vocab.word,
        },
      };
    case 3:
      return {
        questionContent: {
          type: QuestionContentType.Voice,
          description: 'Give the English voice of the following word',
          value: vocab.phonetic.sound,
          language: Language.English,
        },
        answerContent: {
          type: AnswerContentType.Choice,
          value: generateAnswerChoices(
            vocab,
            vocabularies,
            Language.Vietnamese
          ),
          correctAnswer: vocab.word,
          language: Language.Vietnamese,
        },
      };
    case 4:
      return {
        questionContent: {
          type: QuestionContentType.Text,
          description: 'Give the English text of the following word',
          value: vocab.word,
          language: Language.English,
        },
        answerContent: {
          type: AnswerContentType.Input,
          value: '',
          correctAnswer: vocab.meaning,
          language: Language.Vietnamese,
        },
      };
    case 5:
      return {
        questionContent: {
          type: QuestionContentType.Meaning,
          description: 'Give the English meaning of the following word',
          value: vocab.definition,
          language: Language.English,
        },
        answerContent: {
          type: AnswerContentType.Input,
          value: '',
          correctAnswer: vocab.word,
          language: Language.English,
        },
      };
    case 6:
    default:
      return {
        questionContent: {
          type: QuestionContentType.Voice,
          description: 'Give the English voice of the following word',
          value: vocab.phonetic.sound,
          language: Language.English,
        },
        answerContent: {
          type: AnswerContentType.Input,
          value: '',
          correctAnswer: vocab.word,
          language: Language.English,
        },
      };
  }
};

export const getRandomItemFromArray = (array: any[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const generatePracticeQuestion = (
  vocabularies: Vocabulary[],
  answerContentTypes?: AnswerContentType[]
) => {
  const vocab = getRandomItemFromArray(vocabularies);
  const question = generateQuestion(vocab, vocabularies, answerContentTypes);
  return { vocabulary: vocab, question };
};

export const formatDurationTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};
