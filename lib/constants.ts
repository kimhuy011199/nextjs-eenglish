export const questions = [
  {
    questionContent: {
      type: 'text',
      description: 'Give the English translation of the following word',
      value: 'xin chào',
      language: 'vi',
    },
    answerContent: {
      type: 'choice',
      value: [
        {
          id: 1,
          label: 'hello',
          value: 'hello',
        },
        {
          id: 2,
          label: 'bye',
          value: 'bye',
        },
        {
          id: 3,
          label: 'love',
          value: 'love',
        },
        {
          id: 4,
          label: 'student',
          value: 'student',
        },
      ],
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'text',
      description: 'Give the Vietnamese translation of the following word',
      value: 'hello',
      language: 'en',
    },
    answerContent: {
      type: 'choice',
      value: [
        {
          id: 1,
          label: 'tạm biệt',
          value: 'bye',
        },
        {
          id: 2,
          label: 'học sinh',
          value: 'student',
        },
        {
          id: 3,
          label: 'yêu',
          value: 'love',
        },
        {
          id: 4,
          label: 'xin chào',
          value: 'hello',
        },
      ],
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'voice',
      description: 'Give the English voice of the following word',
      value:
        'https://dictionary.cambridge.org/media/english/us_pron/h/hel/hello/hello.mp3',
      language: 'en',
    },
    answerContent: {
      type: 'choice',
      value: [
        {
          id: 1,
          label: 'tạm biệt',
          value: 'bye',
        },
        {
          id: 2,
          label: 'học sinh',
          value: 'student',
        },
        {
          id: 3,
          label: 'yêu',
          value: 'love',
        },
        {
          id: 4,
          label: 'xin chào',
          value: 'hello',
        },
      ],
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'text',
      description: 'Give the English text of the following word',
      value: 'xin chào',
      language: 'en',
    },
    answerContent: {
      type: 'input',
      value: '',
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'meaning',
      description: 'Give the English meaning of the following word',
      value: 'something that is said at the beginning of a phone conversation',
      language: 'en',
    },
    answerContent: {
      type: 'input',
      value: '',
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'voice',
      description: 'Give the English voice of the following word',
      value:
        'https://dictionary.cambridge.org/media/english/us_pron/h/hel/hello/hello.mp3',
      language: 'en',
    },
    answerContent: {
      type: 'input',
      value: '',
      correctAnswer: 'hello',
    },
  },
  {
    questionContent: {
      type: 'blank',
      description: 'Give the English sentence of the following word',
      value: '____, how are you?',
      language: 'en',
    },
    answerContent: {
      type: 'input',
      value: '',
      correctAnswer: 'hello',
    },
  },
];

export const DELAY_NEXT_QUESTION = 1000;
