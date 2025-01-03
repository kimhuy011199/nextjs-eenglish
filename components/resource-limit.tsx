import { CircleAlert } from 'lucide-react';
import Link from 'next/link';

export function ResourceLimit() {
  return (
    <div className='flex flex-col gap-5 w-full h-full items-center justify-center text-center'>
      <CircleAlert size={60} className='text-primary' />
      <h2 className='text-2xl font-semibold pb-1'>Resources Not Available</h2>
      <div className='px-8 flex flex-col gap-1.5 text-zinc-500'>
        <p>
          This is a demo project, and resources are currently available only for
          <Link
            href='/learn/day-of-the-dead'
            className='text-primary font-medium transition-all cursor-pointer hover:text-primary/75'
          >
            {' '}
            Lesson 1.1{' '}
          </Link>
          and{' '}
          <Link
            href='/learn/a-kiss'
            className='text-primary font-medium transition-all cursor-pointer hover:text-primary/75'
          >
            {' '}
            Lesson 1.2
          </Link>
          .
        </p>
        <p>Please visit these lessons to explore the app's features.</p>
        <p>
          If you'd like to contribute resources for other lessons, feel free to
          <a
            href='mailto:kimhuy011199@gmail.com?subject=Contribute%20Resources%20for%20EEnglish%20App'
            className='text-primary font-medium transition-all cursor-pointer hover:text-primary/75'
          >
            {' '}
            contact me
          </a>
          .
        </p>
        <p>Thank you for your understanding!</p>
      </div>
    </div>
  );
}
