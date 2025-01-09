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
      <div className='md:px-8 md:pb-4 pt-8'>
        <div className='flex flex-col items-center pb-6'>
          <Logo />
        </div>
        <div className='px-6 md:px-8 py-10 w-full mx-auto flex flex-col justify-center items-center md:rounded-[32px] bg-zinc-100 border border-zinc-200'>
          <div className='w-full pt-6 pb-2 md:px-5 lg:px-10 max-w-3xl flex flex-col justify-center items-center gap-6'>
            <h1 className='text-center text-3xl md:text-[32px] lg:text-5xl leading-tight lg:leading-snug font-semibold'>
              Master English The Effortless Way
            </h1>
            <p className='text-center text-zinc-500 text-base'>
              Practice story listening, expand your vocabulary, and build
              confidence with interactive exercises tailored to the Effortless
              English course.
            </p>
            <Button asChild>
              <Link
                href='/learn'
                className='flex items-center gap-3 !h-12 !px-5 !rounded-xl group'
              >
                <span className='font-medium'>Explore Lessons</span>
                <MoveRight
                  strokeWidth={3}
                  className='group-hover:translate-x-1 transition-all'
                />
              </Link>
            </Button>
          </div>
          <div className='w-full max-w-5xl mx-auto mt-8 lg:mt-0 lg:p-10 flex flex-col gap-10'>
            <div className='overflow-hidden border border-zinc-200 rounded-lg shadow-xl'>
              <Image src='/home.webp' alt='Hero' width={1920} height={500} />
            </div>
          </div>
        </div>
        <div className='w-full max-w-5xl mx-auto px-6 md:px-10 py-16 lg:py-24 flex flex-col overflow-hidden'>
          <div>
            <h2 className='text-2xl md:text-[28px] font-semibold text-center mb-5'>
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
        <div className='w-full max-w-5xl mx-auto px-6 md:px-10 py-12 md:py-16 !pt-6 flex flex-col'>
          <div>
            <h2 className='text-2xl md:text-[28px] font-semibold text-center mb-5'>
              Practice Makes Perfect
            </h2>
            <p className='text-center w-full max-w-2xl mx-auto text-zinc-500'>
              Reinforce your learning with interactive vocabulary exercises to
              deepen your understanding and retention.
            </p>
            <div className='w-full max-w-4xl mx-auto grid md:grid-cols-2 mt-12 gap-4'>
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className='rounded-xl overflow-hidden border border-zinc-200 p-1.5 shadow-lg flex flex-col justify-center items-center'
                >
                  <Image
                    src={`/practice/${index + 1}.png`}
                    alt={(index + 1).toString()}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
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
