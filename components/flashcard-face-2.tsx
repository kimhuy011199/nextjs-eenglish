import { Vocabulary } from '@/lib/interfaces';

export function FlashcardFace2({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div>
      <p>{vocabulary.word}</p>
      <p>{vocabulary.definition}</p>
      <p>{vocabulary.id}</p>
    </div>
  );
}
