import { Vocabulary } from '@/lib/interfaces';

export function FlashcardFace3({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <div>
      <p>{vocabulary.word}</p>
      <p>{vocabulary.definition}</p>
      <p>{vocabulary.id}</p>
    </div>
  );
}
