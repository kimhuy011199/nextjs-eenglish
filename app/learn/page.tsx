import { ArrowRight, Album } from 'lucide-react';
import { CardLink } from '@/components/card-link';
import { getCourses } from '@/services/queries/courses';
import { Logo } from '@/components/logo';

export default async function Learn() {
  const courses = await getCourses();

  if (!courses) {
    throw new Error('Failed to fetch courses.');
  }

  return (
    <div className='w-full max-w-5xl mx-auto px-5 mb-10'>
      <div className='my-10'>
        <div className='flex items-center justify-center gap-2'>
          <Logo height={40} />
        </div>
        <div className='pt-10 pb-3 flex flex-col gap-3'>
          <h1 className='text-3xl font-semibold'>Course Lessons</h1>
          <p className='text-zinc-500 w-full max-w-2xl'>
            Explore the lessons and start speaking English confidently and
            fluently with Professor A.J. Hoge's Effortless English method.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-10'>
        {courses.map((section, index) => (
          <div key={index} className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <div className='text-zinc-500 flex items-center gap-2'>
                <Album size={16} />
                <p className='text-sm font-medium'>Level {section.level}</p>
              </div>
              <h2 className='text-xl font-semibold'>{section.name}</h2>
              <p className='text-zinc-500 text-sm leading-relaxed'>
                {section.description}
              </p>
            </div>
            <div className='col-span-2 flex flex-col'>
              {section.lessons.map((lesson, index) => (
                <CardLink
                  key={index}
                  href={`learn/${lesson.handle}`}
                  className='flex justify-between items-center px-4 py-2.5 pr-5 -mt-[1px] hover:z-10 last:rounded-b-xl first:rounded-t-xl'
                >
                  <div className='flex items-center gap-2'>
                    <span className='text-zinc-500 text-sm'>
                      Lesson {lesson.episode}.
                    </span>
                    <h3 className='font-medium'>{lesson.name}</h3>
                  </div>
                  <div className='group-hover:opacity-100 group-hover:translate-x-2 translate-x-0 opacity-0 transition-all'>
                    <ArrowRight size={16} className='text-primary' />
                  </div>
                </CardLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
