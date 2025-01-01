import { createClient } from '@/lib/supabase/server';

export const getCourses = async () => {
  const supabase = await createClient();
  const courses = await supabase.from('Course').select('*');
  console.log('courses', courses);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: '1',
      level: 1,
      name: 'Original Effortless English',
      description:
        'Learn the basics of programming, starting with JavaScript, the most popular programming language in the world.',
      lessons: [
        {
          id: 1,
          name: 'Day Of The Dead',
          handle: 'day-of-the-dead',
        },
        {
          id: 2,
          name: 'A Kiss',
          handle: 'a-kiss',
        },
        {
          id: 3,
          name: "Bubba's Food",
          handle: 'bubbas-food',
        },
        {
          id: 4,
          name: 'Changed',
          handle: 'changed',
        },
        {
          id: 5,
          name: 'Drag',
          handle: 'drag',
        },
        {
          id: 6,
          name: 'Intimacy',
          handle: 'intimacy',
        },
        {
          id: 7,
          name: 'Secret Love',
          handle: 'secret-love',
        },
        {
          id: 8,
          name: 'The Race',
          handle: 'the-race',
        },
      ],
    },
    {
      id: '2',
      level: 2,
      name: 'Flow English',
      description:
        'Learn the basics of programming, starting with JavaScript, the most popular programming language in the world.',
      lessons: [
        {
          id: 1,
          name: 'Baseball Pig',
          handle: 'baseball-pig',
        },
        {
          id: 2,
          name: 'Evil English Teacher',
          handle: 'evil-english-teacher',
        },
        {
          id: 3,
          name: 'Fat Man',
          handle: 'fat-man',
        },
        {
          id: 4,
          name: 'Female seeks Male',
          handle: 'famale-seeks-male',
        },
      ],
    },
  ];
};
