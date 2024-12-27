import { FlashcardSlider } from '@/components/flashcard-slider';
import { getVocabularies } from '@/services/queries/vocabularies';

export default async function Flashcards({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const lessonHandle = (await params).handle;
  const vocabularies = await getVocabularies(lessonHandle);

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <FlashcardSlider vocabularies={vocabularies} />
    </div>
  );
}
