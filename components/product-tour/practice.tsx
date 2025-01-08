'use client';

import { useProductTour } from '@/hooks/use-product-tour';
import { LOCAL_STORAGE } from '@/lib/constants';

export function TourPractice() {
  const data = [
    {
      id: 1,
      title: 'Welcome!',
      description:
        'Get started with the practice mode! This tour will guide you through learning and mastering vocabulary effectively.',
      image: '/tour/practice-1.webp',
    },
    {
      id: 2,
      title: 'Switch Question Types',
      description:
        'Easily switch between question types: fill-in-the-blank, multiple-choice, or both to suit your learning style.',
      image: '/tour/practice-2.webp',
    },
    {
      id: 3,
      title: 'Fill in the Blank',
      description:
        'Answer by typing the correct word in the blank, then click the check button to verify your answer.',
      image: '/tour/practice-3.webp',
    },
    {
      id: 4,
      title: 'Multiple Choice',
      description:
        'Choose the correct answer from the options provided. Your results will appear instantly after selection.',
      image: '/tour/practice-4.webp',
    },
    {
      id: 5,
      title: 'View Word Flashcards',
      description:
        'Click the flashcard button to view details about a word, including pronunciation, meaning, and examples.',
      image: '/tour/practice-5.webp',
    },
    {
      id: 6,
      title: 'Navigate Between Questions',
      description:
        'Use the Next button to move to a new random question and continue practicing.',
      image: '/tour/practice-6.webp',
    },
  ];

  const { DialogRender } = useProductTour({
    data,
    key: LOCAL_STORAGE.TOUR_PRACTICE,
  });

  return DialogRender;
}
