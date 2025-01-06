import { notFound } from 'next/navigation';
import { getLesson } from '@/services/queries/lessons';
import { getVocabularies } from '@/services/queries/vocabularies';
import { PracticeQuestion } from '@/app/learn/[handle]/practice/_components/practice-question';
import { ResourceLimit } from '@/components/resource-limit';

export default async function Practice({
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
    <div className='flex flex-col md:h-full md:justify-center md:items-center relative'>
      <PracticeQuestion vocabularies={vocabularies} />
    </div>
  );
}
