import { Vocabulary } from '@/lib/interfaces';

export function FlashcardFace1({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-zinc-500'>Meaning:</p>
      <p className='text-lg font-medium'>{vocabulary.definition}</p>
    </div>
  );
}
