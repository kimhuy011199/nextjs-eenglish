'use client';

import { useEffect, useState } from 'react';
import { CardQuestionAnswer } from '@/components/card-question-answer';
import { Question, Vocabulary } from '@/lib/interfaces';
import { DELAY_NEXT_QUESTION } from '@/lib/constants';
import { generatePracticeQuestion } from '@/lib/utils';

export function PracticeQuestion({
  vocabularies,
}: {
  vocabularies: Vocabulary[];
}) {
  const [question, setQuestion] = useState<Question | undefined>(undefined);
  const [userAnswer, setUserAnswer] = useState('');

  const handleUserAnswer = (value: string) => {
    if (!question) {
      return;
    }
    setUserAnswer(value);
    if (value === question.answerContent.correctAnswer) {
      setTimeout(() => {
        const newQuestion = generatePracticeQuestion(vocabularies);
        setQuestion(newQuestion);
        setUserAnswer('');
      }, DELAY_NEXT_QUESTION);
    } else {
      setTimeout(() => {
        const newQuestion = generatePracticeQuestion(vocabularies);
        setQuestion(newQuestion);
        setUserAnswer('');
      }, DELAY_NEXT_QUESTION);
    }
  };

  useEffect(() => {
    const newQuestion = generatePracticeQuestion(vocabularies);
    setQuestion(newQuestion);
  }, []);

  if (!question) {
    return null;
  }

  return (
    <div className='max-w-2xl mx-auto'>
      <CardQuestionAnswer
        question={question}
        userAnswer={userAnswer}
        handleUserAnswer={handleUserAnswer}
      />
    </div>
  );
}
