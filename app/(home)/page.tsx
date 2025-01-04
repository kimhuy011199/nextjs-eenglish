import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Flashcard } from '@/components/flashcard';
import { VOCABULARY } from '@/lib/constants';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <>
      <div className='px-8 pt-10 pb-4'>
        <div className='flex flex-col items-center pb-8'>
          <Logo />
        </div>
        <div className='px-8 py-12 w-full mx-auto flex flex-col justify-center items-center rounded-[32px] bg-zinc-100 border border-zinc-200'>
          <div className='w-full p-8 max-w-2xl flex flex-col justify-center items-center gap-6'>
            <h1 className='text-center text-5xl leading-tight font-semibold'>
              Master English The Effortless Way
            </h1>
            <p className='text-center text-zinc-500 text-lg'>
              Practice story listening, expand your vocabulary, and build
              confidence with interactive exercises tailored to the Effortless
              English course.
            </p>
            <Button asChild>
              <Link
                href='/learn'
                className='flex items-center gap-3 !h-12 !px-8 !rounded-xl group'
              >
                <span className='text-lg'>Explore Lessons</span>
                <MoveRight
                  strokeWidth={3}
                  className='group-hover:translate-x-1 transition-all'
                />
              </Link>
            </Button>
          </div>
          <div className='w-full max-w-5xl mx-auto p-10 flex flex-col gap-10'>
            <div className='bg-zinc-300 rounded-2xl w-full h-[500px]'></div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto px-10 py-24 flex flex-col'>
          <div>
            <h2 className='text-3xl font-semibold text-center mb-5'>
              Flashcard Vocabulary
            </h2>
            <p className='text-center w-full max-w-2xl mx-auto text-zinc-500'>
              Learn definitions, examples, and pronunciation in a fun and
              engaging way, all tailored to the lessons in the Effortless
              English course.
            </p>
            <div className='w-full max-w-3xl mx-auto flex flex-col mt-12 relative'>
              <Flashcard vocabulary={VOCABULARY} />
              <span className='absolute right-0 -top-10 rotate-6 text-primary font-leckerli text-2xl'>
                try now
              </span>
              <span className='absolute -right-10 -top-6'>
                <Image
                  src='/arrow.svg'
                  alt='Arrow'
                  width={62}
                  height={62}
                  className='rotate-[112deg]'
                />
              </span>
            </div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto px-10 py-20 flex flex-col'>
          <div>
            <h2 className='text-3xl font-semibold text-center mb-5'>
              Practice Makes Perfect
            </h2>
            <p className='text-center w-full max-w-2xl mx-auto text-zinc-500'>
              Reinforce your learning with interactive vocabulary exercises to
              deepen your understanding and retention.
            </p>
            <div className='w-full max-w-4xl mx-auto grid grid-cols-2 mt-12 gap-3'>
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
              <div className='w-full h-56 bg-zinc-200 rounded-xl' />
            </div>
          </div>
        </div>
      </div>
      <div className='p-10 border-t border-t-zinc-200 flex justify-center items-center'>
        <p className='text-center'>Footer</p>
      </div>
    </>
  );
}
