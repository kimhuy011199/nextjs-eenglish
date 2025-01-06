'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import { MoveRight } from 'lucide-react';
import { CardQuestionAnswer } from '@/components/card-question-answer';
import { Question, Vocabulary } from '@/lib/interfaces';
import { DELAY_NEXT_QUESTION } from '@/lib/constants';
import { generatePracticeQuestion, sleep } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FlashcardModal } from '@/components/flashcard-modal';
import { AnswerTypeModal } from '@/components/answer-type-modal';
import { AnswerContentType } from '@/lib/enums';

export function PracticeQuestion({
  vocabularies,
}: {
  vocabularies: Vocabulary[];
}) {
  const [practiceQuestion, setPracticeQuestion] = useState<
    { question: Question; vocabulary: Vocabulary } | undefined
  >(undefined);
  const [userAnswer, setUserAnswer] = useState('');
  const [answerContentTypes, setAnswerContentTypes] = useState([
    AnswerContentType.Input,
    AnswerContentType.Choice,
  ]);
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);

  const handleNextQuestion = async () => {
    setIsGeneratingQuestion(true);
    const newPracticeQuestion = generatePracticeQuestion(
      vocabularies,
      answerContentTypes
    );
    setPracticeQuestion(newPracticeQuestion);
    setUserAnswer('');

    await sleep(50);
    setIsGeneratingQuestion(false);
  };

  const handleUserAnswer = (value: string) => {
    if (!practiceQuestion) {
      return;
    }
    setUserAnswer(value);
    if (value === practiceQuestion.question.answerContent.correctAnswer) {
      setTimeout(() => {
        handleNextQuestion();
      }, DELAY_NEXT_QUESTION);
    }
  };

  useEffect(() => {
    handleNextQuestion();
  }, [answerContentTypes]);

  if (!practiceQuestion) {
    return null;
  }

  return (
    <>
      <div className='max-w-2xl mx-auto w-full flex flex-col gap-4 relative pb-10 pt-6 md:pb-16 md:pt-0'>
        {!isGeneratingQuestion ? (
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='flex items-center'
            >
              <CardQuestionAnswer
                question={practiceQuestion.question}
                userAnswer={userAnswer}
                handleUserAnswer={handleUserAnswer}
              />
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
      <div className='flex flex-col max-w-xs mx-auto w-full lg:max-w-none lg:flex-row justify-center gap-2 lg:gap-4 md:absolute bottom-0 right-0 left-0 pb-3'>
        <AnswerTypeModal
          answerContentTypes={answerContentTypes}
          setAnswerContentTypes={setAnswerContentTypes}
        />
        <FlashcardModal vocabulary={practiceQuestion.vocabulary} />
        <Button
          variant='outline'
          onClick={handleNextQuestion}
          className='flex gap-3 items-center py-5'
          disabled={isGeneratingQuestion}
        >
          <span>Next Question</span>
          <MoveRight />
        </Button>
      </div>
    </>
  );
}
