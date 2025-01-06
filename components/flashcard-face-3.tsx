import { Vocabulary } from '@/lib/interfaces';
import { SpeakerButton } from '@/components/speaker-button';

export function FlashcardFace3({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div className='flex flex-col gap-3 lg:gap-4'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:gap-6'>
        <p className='text-2xl font-semibold text-primary'>{vocabulary.word}</p>
        <span className='text-zinc-500 font-medium pb-2 sm:pb-0'>
          {vocabulary.partOfSpeech}
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <SpeakerButton
          className='h-8 w-8 [&_svg]:size-4'
          soundSource={vocabulary.phonetic.sound}
        />
        <p className='text-zinc-500 font-medium font-phonetic'>
          {vocabulary.phonetic.text}
        </p>
      </div>
      <div className='flex items-center gap-4'>
        <SpeakerButton
          className='h-8 w-8 [&_svg]:size-4'
          soundSource={vocabulary.sentence?.audioSrc || ''}
        />
        <div className='flex flex-col gap-1.5'>
          <p className='font-medium font-lg'>{vocabulary.sentence.text}</p>
          <p className='text-zinc-500 font-vietnamese'>
            {vocabulary.sentence?.translation}
          </p>
        </div>
      </div>
    </div>
  );
}
