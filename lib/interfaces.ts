import { AnswerContentType, Language, QuestionContentType } from '@/lib/enums';

export interface Course {
  id: string;
  level: number;
  name: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  name: string;
  handle: string;
  episode: number;
  level: number;
  audios: Audio[];
  vocabularies: Vocabulary[];
}

export interface QuestionContent {
  type: QuestionContentType;
  description: string;
  value: string;
  language: Language;
}

export interface AnswerChoice {
  id: number;
  label: string;
  value: string;
}

export interface AnswerContent {
  type: AnswerContentType;
  value: AnswerChoice[] | string;
  language: Language;
  correctAnswer: string;
}

export interface Question {
  questionContent: QuestionContent;
  answerContent: AnswerContent;
}

export interface Audio {
  id: string;
  title: string;
  lessonId: string;
  src: string;
  duration: number;
  lyricSrc?: string;
  lyrics?: LyricLine[];
}

export interface Vocabulary {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  meaning: string;
  imgSrc: string;
  phonetic: Phonetic;
  sentence: Sentence;
}

export interface Phonetic {
  id: string;
  vocabularyId: string;
  text: string;
  sound: string;
}

export interface Sentence {
  id: string;
  vocabularyId: string;
  text: string;
  translation?: string;
  audioSrc?: string;
}

export interface LyricLine {
  startTime: number;
  endTime: number;
  text: string;
}
