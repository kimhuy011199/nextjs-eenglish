import { Question } from '@/lib/interfaces';
import { QuestionContent } from '@/components/question-content';
import { AnswerContent } from '@/components/answer-content';

export function CardQuestionAnswer({
  question,
  userAnswer,
  handleUserAnswer,
  shouldShowConfetti = true,
}: {
  question: Question;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
  shouldShowConfetti?: boolean;
}) {
  return (
    <div className='group w-full border border-zinc-200 rounded-2xl flex flex-col divide-y shadow-lg'>
      <div className='p-4'>
        <QuestionContent questionContent={question.questionContent} />
      </div>
      <div className='p-4'>
        <AnswerContent
          answerContent={question.answerContent}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
          shouldShowConfetti={shouldShowConfetti}
        />
      </div>
    </div>
  );
}
