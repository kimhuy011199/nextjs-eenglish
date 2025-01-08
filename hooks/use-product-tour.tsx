import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import useLocalStorage from '@/hooks/use-local-storage';

export interface ProductTourStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function useProductTour({
  data,
  key,
}: {
  data: ProductTourStep[];
  key: string;
}) {
  const [isTourCompleted, setTourCompleted] = useLocalStorage(key);
  const [open, setOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFinish = () => {
    setTourCompleted('true');
    setOpen(false);
  };

  const handleNext = () => {
    if (currentPage === data.length - 1) {
      handleFinish();
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const DialogRender = !isTourCompleted ? (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className='p-0 overflow-hidden [&>button]:hidden'
        // Prevents the dialog from closing when clicking outside
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogTitle className='hidden'></DialogTitle>
        <div className='border-b border-b-zinc-200'>
          <Image
            src={data[currentPage].image}
            alt={data[currentPage].id.toString()}
            width={1000}
            height={200}
          />
        </div>
        <div className='pb-4 pt-0 px-5 flex flex-col'>
          <p className='font-medium'>{data[currentPage].title}</p>
          <p className='text-zinc-500 text-sm pt-2.5'>
            {data[currentPage].description}
          </p>
          <div className='flex justify-between pt-5'>
            <Button
              variant='outline'
              onClick={handleBack}
              disabled={currentPage === 0}
            >
              Back
            </Button>
            <Button autoFocus onClick={handleNext}>
              {currentPage === data.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  ) : null;

  return { open, setOpen, currentPage, handleNext, handleBack, DialogRender };
}
