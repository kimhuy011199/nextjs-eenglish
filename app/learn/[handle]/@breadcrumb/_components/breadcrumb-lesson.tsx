import { BreadcrumbPage } from '@/components/ui/breadcrumb';
import { getLesson } from '@/services/queries/lessons';
import Link from 'next/link';

export async function BreadcrumbLesson({ handle }: { handle: string }) {
  const lesson = await getLesson(handle);

  return (
    <BreadcrumbPage>
      <Link
        href={`/learn/${handle}`}
        className='font-medium transition-all hover:text-primary'
      >
        Lesson {lesson.level}.{lesson.episode}. {lesson.name}
      </Link>
    </BreadcrumbPage>
  );
}
