import { getVocabularies } from '@/services/queries/vocabularies';
import { PracticeQuestion } from '@/app/learn/[handle]/practice/_components/practice-question';

export default async function Practice({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const lessonHandle = (await params).handle;
  const vocabularies = await getVocabularies(lessonHandle);

  return (
    <div className='flex flex-col h-full justify-center items-center relative'>
      <PracticeQuestion vocabularies={vocabularies} />
    </div>
  );
}
