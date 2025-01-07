'use client';

import { useProductTour } from '@/hooks/use-product-tour';
import { LOCAL_STORAGE } from '@/lib/constants';

export function TourFlashcard() {
  const data = [
    {
      id: 1,
      title: 'Welcome!',
      description:
        'Welcome to the flashcard tour, we will show you how to use flashcards to learn vocabulary.',
      image:
        'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045702/38_stock_photo_site/38_stock_photo_site-jpg?_i=AA',
    },
    {
      id: 2,
      title: 'Flip the flashcard',
      description:
        'You can click on the flip button to flip the flashcard. There are 3 sides of the flashcard.',
      image:
        'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045702/38_stock_photo_site/38_stock_photo_site-jpg?_i=AA',
    },
    {
      id: 3,
      title: 'Listen to the pronunciation',
      description:
        'You can click on the speaker button to hear the pronunciation of the word.',
      image:
        'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045702/38_stock_photo_site/38_stock_photo_site-jpg?_i=AA',
    },
    {
      id: 4,
      title: 'Main content of the flashcard',
      description:
        'This is the main content of the flashcard. You can see the word, pronunciation, meaning and example.',
      image:
        'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045702/38_stock_photo_site/38_stock_photo_site-jpg?_i=AA',
    },
    {
      id: 5,
      title: 'Navigate to the other flashcards',
      description:
        'You can click on the next or back button to go to the next or previous flashcard.',
      image:
        'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1647045702/38_stock_photo_site/38_stock_photo_site-jpg?_i=AA',
    },
  ];

  const { DialogRender } = useProductTour({
    data,
    key: LOCAL_STORAGE.TOUR_FLASHCARD,
  });

  return DialogRender;
}
