'use client';

import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function AboutProject() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant={'outline'}
          className='text-left flex items-center justify-center !px-2 !py-1.5'
        >
          <Info />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>About This Project</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4 text-zinc-600'>
          <p>
            This is a <span className='font-semibold text-black'>Next.js</span>{' '}
            web application built with TypeScript, Tailwind CSS, Motion, Shadcn,
            and Supabase. It is designed to help users{' '}
            <span className='font-semibold text-black'>
              learn English vocabulary and improve listening skills using the
              Effortless English method.
            </span>
          </p>
          <p>
            The project is open source and available on GitHub. Feel free to
            explore the source code, report issues, or contribute enhancements
            to make it even better.
          </p>
          <div className='flex items-center gap-2'>
            <Button asChild variant={'outline'}>
              <a href='https://github.com/kimhuy011199/nextjs-eenglish'>
                GitHub Repo
              </a>
            </Button>
            <Button asChild variant={'outline'}>
              <a href=''>My Porfolio</a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
