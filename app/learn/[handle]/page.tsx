import Image from 'next/image';
import { SwatchBook, Headphones } from 'lucide-react';
import { CardLink } from '@/components/card-link';

export default async function Learn({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const handle = (await params).handle;

  const data = [
    {
      label: 'Listening',
      icon: Headphones,
      items: [
        {
          title: 'Mini Story',
          description: 'Learn English through simple, repetitive storytelling',
          pathname: 'story',
          icon: '/cat/mini-story.svg',
        },
        {
          title: 'Vocabulary',
          description:
            'Learn new words and phrases in the context of the story',
          pathname: 'vocabulary',
          icon: '/cat/vocabulary.svg',
        },
      ],
    },
    {
      label: 'Vocabulary',
      icon: SwatchBook,
      items: [
        {
          title: 'Flashcards',
          description:
            'Learn new words by using flashcards with images and audio',
          pathname: 'flashcards',
          icon: '/cat/flashcards.svg',
        },
        {
          title: 'Practice',
          description: 'Practice the new words in sentences and questions',
          pathname: 'practice',
          icon: '/cat/practice.svg',
        },
        {
          title: 'Quiz',
          description: 'Test your knowledge of the new words by taking a quiz',
          pathname: 'quiz',
          icon: '/cat/quiz.svg',
        },
      ],
    },
  ];

  return (
    <div className='py-2'>
      {data.map((section, index) => (
        <div key={index} className='pb-7'>
          <div className='flex items-center gap-1.5 mb-3'>
            <section.icon size={16} className='inline-block' />
            <h2 className='font-medium'>{section.label}</h2>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {section.items.map((item, index) => (
              <CardLink
                key={index}
                href={`/learn/${handle}/${item.pathname}`}
                className='rounded-2xl pt-4 pl-5 pb-12 pr-36'
              >
                <p className='text-zinc-500 pb-2 group-hover:text-primary'>
                  {item.title}
                </p>
                <p className='text-lg font-semibold leading-snug text-zinc-800'>
                  {item.description}
                </p>
                <div className='absolute -bottom-5 -right-5 group-hover:-bottom-2 group-hover:-right-2 transition-all duration-200'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={128}
                    height={128}
                    unoptimized
                  />
                </div>
              </CardLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
