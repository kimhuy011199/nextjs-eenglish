import { notFound } from 'next/navigation';
import { FlashcardSlider } from '@/components/flashcard-slider';
import { ResourceLimit } from '@/components/resource-limit';
import { getLesson } from '@/services/queries/lessons';
import { getVocabularies } from '@/services/queries/vocabularies';

export default async function Flashcards({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const lessonHandle = (await params).handle;
  const lesson = await getLesson(lessonHandle);
  if (!lesson) {
    notFound();
  }

  const vocabularies = await getVocabularies(lesson.id);
  if (!vocabularies?.length) {
    return <ResourceLimit />;
  }

  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <FlashcardSlider vocabularies={vocabularies} />
    </div>
  );
}
