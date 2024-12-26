import { AnswerContent as AnswerContentInterface } from '@/lib/interfaces';
import { AnswerContentType } from '@/lib/enums';
import { AnswerInput } from '@/components/answer-input';
import { AnswerChoices } from '@/components/answer-choices';

export function AnswerContent({
  answerContent,
  userAnswer,
  handleUserAnswer,
}: {
  answerContent: AnswerContentInterface;
  userAnswer: string;
  handleUserAnswer: (value: string) => void;
}) {
  return (
    <>
      {/* Input word */}
      {answerContent.type === AnswerContentType.Input ? (
        <AnswerInput
          answerContent={answerContent}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
        />
      ) : null}
      {/* Mutiple choices */}
      {Array.isArray(answerContent.value) ? (
        <AnswerChoices
          answerContent={answerContent}
          userAnswer={userAnswer}
          handleUserAnswer={handleUserAnswer}
        />
      ) : null}
    </>
  );
}