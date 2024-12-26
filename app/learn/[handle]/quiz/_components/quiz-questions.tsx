'use client';

import { useState } from 'react';
import { CardQuestionAnswer } from '@/components/card-question-answer';
import { Question } from '@/lib/interfaces';
import { questions as importedQuestions } from '@/lib/constants';

export function PracticeQuestion() {
  // From the raw word => Convert them to question
  const questions = importedQuestions as Question[];
  const [question, setQuestion] = useState(questions[0]);

  const [userAnswer, setUserAnswer] = useState('');

  const handleUserAnswer = (value: string) => {
    setUserAnswer(value);
    if (value === question.answerContent.correctAnswer) {
      setTimeout(() => {
        setQuestion(questions[1]);
        setUserAnswer('');
      }, 1000);
    } else {
      setTimeout(() => {
        setQuestion(questions[5]);
        setUserAnswer('');
      }, 1000);
    }
  };

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
