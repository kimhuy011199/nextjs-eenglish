import { QuestionContent as QuestionContentInterface } from '@/lib/interfaces';
import { QuestionContentType } from '@/lib/enums';
import { SpeakerButton } from '@/components/speaker-button';

export function QuestionContent({
  questionContent,
}: {
  questionContent: QuestionContentInterface;
}) {
  return (
    <>
      <p className='text-zinc-500'>{questionContent.description}</p>
      <div className='pt-8 pb-4'>
        {questionContent.type === QuestionContentType.Text ||
        questionContent.type === QuestionContentType.Meaning ||
        questionContent.type === QuestionContentType.Blank ? (
          <p className='text-3xl font-semibold text-center px-4'>
            {questionContent.value}
          </p>
        ) : null}
        {questionContent.type === QuestionContentType.Voice ? (
          <p className='w-full flex justify-center'>
            <SpeakerButton soundSource={questionContent.value} />
          </p>
        ) : null}
      </div>
    </>
  );
}
