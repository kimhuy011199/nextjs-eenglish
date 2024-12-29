import { AnswerContent as AnswerContentInterface } from '@/lib/interfaces';
import { AnswerContentType } from '@/lib/enums';
import { AnswerInput } from '@/components/answer-input';
import { AnswerChoices } from '@/components/answer-choices';

export function AnswerContent({
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
    <>
      {/* Input word */}
      {answerContent.type === AnswerContentType.Input ? (
        <AnswerInput
          answerContent={answerContent}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
          shouldShowConfetti={shouldShowConfetti}
        />
      ) : null}
      {/* Mutiple choices */}
      {Array.isArray(answerContent.value) ? (
        <AnswerChoices
          answerContent={answerContent}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
          shouldShowConfetti={shouldShowConfetti}
        />
      ) : null}
    </>
  );
}
