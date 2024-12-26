import { Vocabulary } from '@/lib/interfaces';
import { SpeakerButton } from '@/components/speaker-button';

export function FlashcardFace2({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-6'>
        <p className='text-2xl font-semibold text-primary'>{vocabulary.word}</p>
        <span className='text-zinc-500 font-medium'>
          {vocabulary.partOfSpeech}
        </span>
      </div>
      <div className='flex items-center gap-4'>
        <SpeakerButton
          className='h-8 w-8 [&_svg]:size-4'
          soundSource={vocabulary.phonetic.sound}
        />
        <p className='text-zinc-500 font-medium'>{vocabulary.phonetic.text}</p>
      </div>
      <p className='text-lg font-medium'>{vocabulary.meaning}</p>
    </div>
  );
}
