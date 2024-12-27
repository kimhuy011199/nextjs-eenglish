'use client';

import { useEffect, useState } from 'react';
import { MoveRight } from 'lucide-react';
import { CardQuestionAnswer } from '@/components/card-question-answer';
import { Question, Vocabulary } from '@/lib/interfaces';
import { DELAY_NEXT_QUESTION } from '@/lib/constants';
import { generatePracticeQuestion } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FlashcardModal } from '@/components/flashcard-modal';

export function PracticeQuestion({
  vocabularies,
}: {
  vocabularies: Vocabulary[];
}) {
  const [practiceQuestion, setPracticeQuestion] = useState<
    { question: Question; vocabulary: Vocabulary } | undefined
  >(undefined);
  const [userAnswer, setUserAnswer] = useState('');
  const [showActions, setShowActions] = useState(false);

  const handleUserAnswer = (value: string) => {
    if (!practiceQuestion) {
      return;
    }
    setUserAnswer(value);
    if (value === practiceQuestion.question.answerContent.correctAnswer) {
      setTimeout(() => {
        const newPracticeQuestion = generatePracticeQuestion(vocabularies);
        setPracticeQuestion(newPracticeQuestion);
        setUserAnswer('');
      }, DELAY_NEXT_QUESTION);
    } else {
      setShowActions(true);
    }
  };

  const handleNextQuestion = () => {
    const newPracticeQuestion = generatePracticeQuestion(vocabularies);
    setPracticeQuestion(newPracticeQuestion);
    setUserAnswer('');
    setShowActions(false);
  };

  useEffect(() => {
    const newPracticeQuestion = generatePracticeQuestion(vocabularies);
    setPracticeQuestion(newPracticeQuestion);
  }, []);

  if (!practiceQuestion) {
    return null;
  }

  return (
    <>
      <div className='max-w-2xl mx-auto w-full flex flex-col gap-4 relative pb-12'>
        <CardQuestionAnswer
          question={practiceQuestion.question}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
        />
      </div>
      <div className='flex justify-center gap-4 absolute bottom-0 right-0 left-0 pb-3'>
        <FlashcardModal vocabulary={practiceQuestion.vocabulary} />
        <Button
          variant='outline'
          onClick={handleNextQuestion}
          className='flex gap-3 items-center py-5'
        >
          <span>Next Question</span>
          <MoveRight />
        </Button>
      </div>
    </>
  );
}
