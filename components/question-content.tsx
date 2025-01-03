import { twMerge } from 'tailwind-merge';
import { QuestionContent as QuestionContentInterface } from '@/lib/interfaces';
import { Language, QuestionContentType } from '@/lib/enums';
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
        questionContent.type === QuestionContentType.Meaning ? (
          <p
            className={twMerge(
              'text-3xl font-semibold text-center px-4',
              questionContent.language === Language.Vietnamese
                ? 'font-vietnamese'
                : ''
            )}
          >
            {questionContent.value}
          </p>
        ) : null}
        {questionContent.type === QuestionContentType.Voice ? (
          <p className='w-full flex justify-center'>
            <SpeakerButton soundSource={questionContent.value} autoPlay />
          </p>
        ) : null}
      </div>
    </>
  );
}
