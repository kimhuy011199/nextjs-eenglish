'use client';

import { useProductTour } from '@/hooks/use-product-tour';
import { LOCAL_STORAGE } from '@/lib/constants';

export function TourAudioPlayer() {
  const data = [
    {
      id: 1,
      title: 'Welcome!',
      description:
        'Learn how to use the audio player to improve your listening skills with this quick tour.',
      image: '/tour/audio-1.webp',
    },
    {
      id: 2,
      title: 'Audio Controls',
      description:
        'Play, pause, or skip forward/backward 5 seconds using the controls for a seamless listening experience.',
      image: '/tour/audio-2.webp',
    },
    {
      id: 3,
      title: 'Progress Bar',
      description:
        'Drag the progress bar to move to any part of the audio instantly. Use it to replay or skip sections as needed.',
      image: '/tour/audio-3.webp',
    },
    {
      id: 4,
      title: 'Transcript Visibility',
      description:
        'Toggle the transcript button to show or hide the audio transcript in English if available.',
      image: '/tour/audio-4.webp',
    },
    {
      id: 5,
      title: 'Repeat Mode',
      description:
        'Enable repeat mode to replay the audio automatically after it finishes.',
      image: '/tour/audio-5.webp',
    },
  ];

  const { DialogRender } = useProductTour({
    data,
    key: LOCAL_STORAGE.TOUR_AUDIO,
  });

  return DialogRender;
}
