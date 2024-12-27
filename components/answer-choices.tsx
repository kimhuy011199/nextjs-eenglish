'use client';

import {
  AnswerChoice as AnswerChoiceType,
  AnswerContent as AnswerContentInterface,
} from '@/lib/interfaces';
import { AnswerChoice } from '@/components/answer-choice';

export function AnswerChoices({
  answerContent,
  userAnswer,
  handleUserAnswer,
  shouldShowConfetti,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
  shouldShowConfetti?: boolean;
}) {
  return (
    <div className='grid grid-cols-2 gap-3'>
      {Array.isArray(answerContent.value)
        ? answerContent.value.map((choice: AnswerChoiceType) => (
            <AnswerChoice
              key={choice.value}
              answerContent={answerContent}
              userAnswer={userAnswer}
              handleUserAnswer={handleUserAnswer}
              choice={choice}
              shouldShowConfetti={shouldShowConfetti}
            />
          ))
        : null}
    </div>
  );
}
