'use client';

import { twMerge } from 'tailwind-merge';
import {
  AnswerChoice as AnswerChoiceType,
  AnswerContent as AnswerContentInterface,
} from '@/lib/interfaces';

export function AnswerChoices({
  answerContent,
  userAnswer,
  handleUserAnswer,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
}) {
  return (
    <div className='grid grid-cols-2 gap-3'>
      {Array.isArray(answerContent.value)
        ? answerContent.value.map((choice: AnswerChoiceType) => (
            <button
              key={choice.id}
              className={twMerge(
                'p-3 text-lg font-medium text-center border border-zinc-200 rounded-lg hover:bg-primary/5 hover:border-primary transition-all',
                userAnswer
                  ? 'hover:bg-white hover:border-zinc-200 text-zinc-400'
                  : '',
                userAnswer && answerContent.correctAnswer === choice.value
                  ? 'bg-green-100 border-green-500 text-green-600 hover:bg-green-100 hover:border-green-500'
                  : '',
                userAnswer === choice.value &&
                  userAnswer !== answerContent.correctAnswer
                  ? 'bg-red-100 border-red-500 text-red-600 hover:bg-red-100 hover:border-red-500'
                  : ''
              )}
              onClick={() => handleUserAnswer(choice.value)}
              disabled={!!userAnswer}
            >
              {choice.label}
            </button>
          ))
        : null}
    </div>
  );
}
