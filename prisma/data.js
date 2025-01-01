const courses = [
  {
    id: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    level: 1,
    name: 'Original Effortless English',
    description:
      'Original Course is a listening and speaking course for beginners, focusing on developing deep listening and slow speaking skills.',
  },
  {
    id: 'def226ec-6651-4e70-83c3-12a1527d96ec',
    level: 2,
    name: 'Flow English',
    description:
      'This course not only helps you reflect English more confidently but also provides very useful knowledge to help you develop yourself after 10 weeks.',
  },
];

const lessons = [
  {
    id: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'Day Of The Dead',
    handle: 'day-of-the-dead',
    level: 1,
    episode: 1,
  },
  {
    id: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'A Kiss',
    handle: 'a-kiss',
    level: 1,
    episode: 2,
  },
  {
    id: 'dc017f9f-758a-467c-acc4-c8beef8b8fea',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: "Bubba's Food",
    handle: 'bubbas-food',
    level: 1,
    episode: 3,
  },
  {
    id: '377b8e3d-9dac-4c5d-be79-e4bfbaed3a41',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'Changed',
    handle: 'changed',
    level: 1,
    episode: 4,
  },
  {
    id: 'a49fd26c-5d6a-43a1-95c6-896c2e98cad9',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'Drag',
    handle: 'drag',
    level: 1,
    episode: 5,
  },
  {
    id: '06e1e375-de29-4253-a564-64e0a931b23e',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'Intimacy',
    handle: 'intimacy',
    level: 1,
    episode: 6,
  },
  {
    id: 'a63775a0-878f-4458-917e-5eee2120cdd1',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'Secret Love',
    handle: 'secret-love',
    level: 1,
    episode: 7,
  },
  {
    id: 'baf108ce-1953-4f57-ae0d-7b8af2dd4127',
    courseId: '7342c21a-070e-4514-ba77-79a02fed5ce9',
    name: 'The Race',
    handle: 'the-race',
    level: 1,
    episode: 8,
  },
  {
    id: 'afb223a1-3e7e-406c-a036-3e1cb98526de',
    courseId: 'def226ec-6651-4e70-83c3-12a1527d96ec',
    name: 'Baseball Pig',
    handle: 'baseball-pig',
    level: 2,
    episode: 1,
  },
  {
    id: 'fe315fcb-4a60-46db-b5f8-1b875419c4bb',
    courseId: 'def226ec-6651-4e70-83c3-12a1527d96ec',
    name: 'Evil English Teacher',
    handle: 'evil-english-teacher',
    level: 2,
    episode: 2,
  },
  {
    id: '4fe8c158-426c-4b77-8373-73b48d200e3f',
    courseId: 'def226ec-6651-4e70-83c3-12a1527d96ec',
    name: 'Fat Man',
    handle: 'fat-man',
    level: 2,
    episode: 3,
  },
  {
    id: '79665455-29d5-4860-8503-759425254742',
    courseId: 'def226ec-6651-4e70-83c3-12a1527d96ec',
    name: 'Female seeks Male',
    handle: 'famale-seeks-male',
    level: 2,
    episode: 4,
  },
];

module.exports = {
  courses,
  lessons,
};
