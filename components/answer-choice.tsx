'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence } from 'framer-motion';
import {
  AnswerChoice as AnswerChoiceType,
  AnswerContent as AnswerContentInterface,
} from '@/lib/interfaces';
import { ConfettiCircle } from '@/components/confetti-circle';
import { Language } from '@/lib/enums';
import { useConfetti } from '@/hooks/use-confetti';

export function AnswerChoice({
  answerContent,
  userAnswer,
  handleUserAnswer,
  choice,
  shouldShowConfetti,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
  choice: AnswerChoiceType;
  shouldShowConfetti?: boolean;
}) {
  const { triggerConfetti, ConfettiRenderer } = useConfetti();

  const handleClick = (choice: AnswerChoiceType) => {
    handleUserAnswer(choice.value);
    if (shouldShowConfetti && answerContent.correctAnswer === choice.value) {
      triggerConfetti();
    }
  };

  return (
    <div className='flex w-full relative'>
      <button
        className={twMerge(
          'w-full p-3 text-lg text-center font-medium border border-zinc-200 rounded-lg hover:bg-primary/5 hover:border-primary transition-all',
          answerContent.language === Language.Vietnamese
            ? 'font-vietnamese font-semibold'
            : '',
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
        onClick={() => handleClick(choice)}
        disabled={!!userAnswer}
      >
        {choice.label}
      </button>
      {shouldShowConfetti ? ConfettiRenderer : null}
    </div>
  );
}
