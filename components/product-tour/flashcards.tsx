'use client';

import { useProductTour } from '@/hooks/use-product-tour';
import { LOCAL_STORAGE } from '@/lib/constants';

export function TourFlashcard() {
  const data = [
    {
      id: 1,
      title: 'Welcome!',
      description:
        'Learn how to use flashcards to build and strengthen your vocabulary with this guided tour.',
      image: '/tour/flashcard-1.webp',
    },
    {
      id: 2,
      title: 'Flashcard Details',
      description:
        'Each flashcard contains the word, pronunciation, meaning, and an example sentence to enhance your understanding.',
      image: '/tour/flashcard-2.webp',
    },
    {
      id: 3,
      title: 'Flip the Flashcard',
      description:
        'Click the flip button to view all three sides of the flashcard, each containing unique information.',
      image: '/tour/flashcard-3.webp',
    },
    {
      id: 4,
      title: 'Listen to Pronunciation',
      description:
        'Tap the speaker icon to hear the correct pronunciation of the word. Repeat as many times as needed to practice.',
      image: '/tour/flashcard-4.webp',
    },
    {
      id: 5,
      title: 'Navigate Through Flashcards',
      description:
        'Use the next and back buttons to easily switch between flashcards.',
      image: '/tour/flashcard-5.webp',
    },
  ];

  const { DialogRender } = useProductTour({
    data,
    key: LOCAL_STORAGE.TOUR_FLASHCARD,
  });

  return DialogRender;
}
