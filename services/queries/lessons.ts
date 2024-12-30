export const getLesson = async (handle: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id: '1',
    courseId: '1',
    name: 'Day Of The Dead',
    handle: 'day-of-the-dead',
    level: 1,
    episode: 1,
  };
};
