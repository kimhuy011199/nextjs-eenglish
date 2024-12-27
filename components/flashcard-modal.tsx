import { SwatchBook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Flashcard } from '@/components/flashcard';
import { Vocabulary } from '@/lib/interfaces';

export function FlashcardModal({ vocabulary }: { vocabulary: Vocabulary }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='flex gap-3 items-center py-5'>
          <span>Show Flashcard</span>
          <SwatchBook />
        </Button>
      </DialogTrigger>
      <DialogContent className='min-w-[800px] rounded-3xl'>
        <DialogHeader className='pb-2'>
          <DialogTitle>Flashcard</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Flashcard vocabulary={vocabulary} />
      </DialogContent>
    </Dialog>
  );
}
