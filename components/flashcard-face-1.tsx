import Image from 'next/image';
import { Vocabulary } from '@/lib/interfaces';

export function FlashcardFace1({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div className='flex gap-10 items-center px-4'>
      <div className='w-48 h-48 rounded-lg border border-zinc-200'>
        <Image
          src={vocabulary.imgSrc}
          alt={vocabulary.word}
          width={192}
          height={192}
        />
      </div>
      <div>
        <p>{vocabulary.word}</p>
        <p>{vocabulary.definition}</p>
        <p>{vocabulary.id}</p>
      </div>
    </div>
  );
}
