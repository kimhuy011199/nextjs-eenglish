const PartOfSpeech = {
  Noun: 'noun',
  Verb: 'verb',
  Adjective: 'adjective',
  Adverb: 'adverb',
  Pronoun: 'pronoun',
  Preposition: 'preposition',
  Conjunction: 'conjunction',
  Interjection: 'interjection',
};

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

const audios = [
  {
    id: '58d483c5-40b6-492a-88bc-d5b89408ce66',
    title: 'Day Of The Dead - Mini Story',
    handle: 'day-of-the-dead-story',
    src: 'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735802434/eenglish/1.1.day-of-the-dead/ministory_kgqbqn.mp3',
    lyricSrc:
      'https://res.cloudinary.com/cloudinaryassets/raw/upload/v1735802432/eenglish/1.1.day-of-the-dead/ministory_transcript_ud9gzz.srt',
    duration: 82,
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },

  {
    id: 'd9b2019c-0af3-40ee-8780-7e5e2e156817',
    title: 'Day Of The Dead - Vocabulary',
    handle: 'day-of-the-dead-vocabulary',
    src: 'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735802448/eenglish/1.1.day-of-the-dead/vocabulary_a4x4al.mp3',
    lyricSrc: '',
    duration: 589,
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
];

const phonetics = [
  {
    id: 'cbc18538-3522-4471-851e-ad84867c4b59',
    vocabularyId: 'e4d81dce-c62a-4161-8928-10b0571bc0f7',
    text: '/ˈsem.ɘˌtiɘɹ.i/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/c/cem/cemet/cemetery.mp3',
  },
  {
    id: 'af676a83-c572-411f-8537-ff62985c1b8b',
    vocabularyId: '88c68495-8e3a-4b40-a10c-69af93503ff1',
    text: '/ˈætməsˌfɪɹ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/a/atm/atmos/atmosphere.mp3',
  },
  {
    id: 'e9387b27-ffcf-4f62-a5cd-d95dce8ae445',
    vocabularyId: 'a022f128-1f68-46b1-a6d1-17aaf51513bc',
    text: '/kaɪt/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/k/kit/kite_/kite.mp3',
  },
  {
    id: '8b7c79b2-9a11-4fe5-a47e-4aef6e574796',
    vocabularyId: '6c706210-a874-4c82-bdcb-eab930cb8c51',
    text: '/əˈproʊtʃ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/a/app/appro/approach.mp3',
  },
  {
    id: '3d0daf88-0879-4b2f-a8d1-3991c7c59098',
    vocabularyId: '5c56cdba-f4f6-4577-a26d-65c442c82b37',
    text: '/ˈsɑːm.bɚ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/s/som/sombe/somber.mp3',
  },
  {
    id: '086291d2-9ccb-4989-ab2f-a50f31f142d1',
    vocabularyId: '26cbac35-4401-40b3-9349-59fe304e3fe2',
    text: '/ˈpɪk.nɪk/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/p/pic/picni/picnic.mp3',
  },
  {
    id: 'b20a159b-d4f7-44af-92b0-a2d5d3770671',
    vocabularyId: 'c2a8e900-5428-4751-9a11-1a1a70ffffa0',
    text: '/ˈæn.ses.tɚ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/a/anc/ances/ancestor.mp3',
  },
  {
    id: 'def226ec-sn93-4e70-83c3-12a1527d9dc9',
    vocabularyId: '7342c21a-a10b-4514-ba77-79a02fed5cb9',
    text: '/əkˈnɑː.lɪdʒ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/a/ack/ackno/acknowledge.mp3',
  },
];

const sentences = [
  {
    id: '9248d433-f369-4017-8734-eaf1e389affb',
    vocabularyId: 'e4d81dce-c62a-4161-8928-10b0571bc0f7',
    text: "I go to the cemetery to see what's happening.",
    translation: 'Tôi đến nghĩa trang để xem có gì xảy ra.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735804744/eenglish/1.1.day-of-the-dead/vocab_sentence_cemetery_rl8b26.mp3',
  },
  {
    id: '2b45118e-c58b-4e4d-8337-fb029bb99612',
    vocabularyId: '88c68495-8e3a-4b40-a10c-69af93503ff1',
    text: 'The atmosphere is like a party.',
    translation: 'Bầu không khí giống như một bữa tiệc.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735805054/eenglish/1.1.day-of-the-dead/vocab_sentence_atmosphere_v3eliw.mp3',
  },
  {
    id: 'ff30063a-5e46-4ea3-a487-4fa8b60e65a0',
    vocabularyId: 'a022f128-1f68-46b1-a6d1-17aaf51513bc',
    text: 'Many kids are flying kites.',
    translation: 'Nhiều trẻ em đang thả diều.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735805543/eenglish/1.1.day-of-the-dead/vocab_sentence_kite_u5winf.mp3',
  },
  {
    id: '8bb640b5-244b-4040-b849-49e4eff3ee51',
    vocabularyId: '6c706210-a874-4c82-bdcb-eab930cb8c51',
    text: 'I prefer the Guatemalan approach.',
    translation: 'Tôi thích cách tiếp cận của người Guatemala.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735805876/eenglish/1.1.day-of-the-dead/vocab_sentence_approach_dusnes.mp3',
  },
  {
    id: '16d45254-affc-4c0b-9486-5384b019c07f',
    vocabularyId: '5c56cdba-f4f6-4577-a26d-65c442c82b37',
    text: 'In the United States, cemeteries are always somber.',
    translation: 'Ở Hoa Kỳ, nghĩa trang luôn tối tăm.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735806231/eenglish/1.1.day-of-the-dead/vocab_sentence_somber_hfcf5o.mp3',
  },
  {
    id: 'd9f9bef4-9653-4fa7-939b-71e638a34e49',
    vocabularyId: '26cbac35-4401-40b3-9349-59fe304e3fe2',
    text: 'Some families are having a picnic next to the graves.',
    translation: 'Một số gia đình đang đi chơi dã ngoại bên cạnh mộ.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735806538/eenglish/1.1.day-of-the-dead/vocab_sentence_picnic_sxvszf.mp3',
  },
  {
    id: '622dbec0-572a-41a1-b685-722708dd11a6',
    vocabularyId: 'c2a8e900-5428-4751-9a11-1a1a70ffffa0',
    text: 'Families are sitting around the graves of their dead ancestors.',
    translation: 'Gia đình đang ngồi xung quanh mộ tổ tiên đã mất.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735806795/eenglish/1.1.day-of-the-dead/vocab_sentence_ancestor_zquqsw.mp3',
  },
  {
    id: '922dbec0-a79a-41a1-f293-722763ad11a6',
    vocabularyId: '7342c21a-a10b-4514-ba77-79a02fed5cb9',
    text: 'I like that they acknowledge death instead of denying it the way Americans do.',
    translation:
      'Tôi thích họ thừa nhận cái chết thay vì phủ nhận nó như người Mỹ.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735807217/eenglish/1.1.day-of-the-dead/vocab_sentence_acknowledge_yiwf5x.mp3',
  },
];

const vocabularies = [
  {
    id: 'e4d81dce-c62a-4161-8928-10b0571bc0f7',
    word: 'cemetery',
    definition: 'a place where dead people are buried',
    meaning: 'nghĩa trang',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836840/eenglish/1.1.day-of-the-dead/cemetery_lw5ssn.png',
    phoneticId: 'cbc18538-3522-4471-851e-ad84867c4b59',
    sentenceId: '9248d433-f369-4017-8734-eaf1e389affb',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: '88c68495-8e3a-4b40-a10c-69af93503ff1',
    word: 'atmosphere',
    definition: 'the air in a particular place',
    meaning: 'bầu không khí',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836838/eenglish/1.1.day-of-the-dead/atmosphere_b7c9zg.jpg',
    phoneticId: 'af676a83-c572-411f-8537-ff62985c1b8b',
    sentenceId: '2b45118e-c58b-4e4d-8337-fb029bb99612',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: 'a022f128-1f68-46b1-a6d1-17aaf51513bc',
    word: 'kite',
    definition:
      'a toy consisting of a light frame with thin material stretched over it',
    meaning: 'diều',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836839/eenglish/1.1.day-of-the-dead/kite_cqrwii.jpg',
    phoneticId: 'e9387b27-ffcf-4f62-a5cd-d95dce8ae445',
    sentenceId: 'ff30063a-5e46-4ea3-a487-4fa8b60e65a0',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: '6c706210-a874-4c82-bdcb-eab930cb8c51',
    word: 'approach',
    definition: 'to deal with something',
    meaning: 'tiếp cận',
    partOfSpeech: PartOfSpeech.Verb,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836837/eenglish/1.1.day-of-the-dead/approach_cboz49.png',
    phoneticId: '8b7c79b2-9a11-4fe5-a47e-4aef6e574796',
    sentenceId: '8bb640b5-244b-4040-b849-49e4eff3ee51',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: '5c56cdba-f4f6-4577-a26d-65c442c82b37',
    word: 'somber',
    definition: 'dark and dull in color or tone',
    meaning: 'tối tăm',
    partOfSpeech: PartOfSpeech.Adjective,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836839/eenglish/1.1.day-of-the-dead/somber_bgvogo.jpg',
    phoneticId: '3d0daf88-0879-4b2f-a8d1-3991c7c59098',
    sentenceId: '16d45254-affc-4c0b-9486-5384b019c07f',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: '26cbac35-4401-40b3-9349-59fe304e3fe2',
    word: 'picnic',
    definition: 'an occasion when you have an informal meal eaten outside',
    meaning: 'đi chơi dã ngoại',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836839/eenglish/1.1.day-of-the-dead/picnic_hc70qi.jpg',
    phoneticId: '086291d2-9ccb-4989-ab2f-a50f31f142d1',
    sentenceId: 'd9f9bef4-9653-4fa7-939b-71e638a34e49',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: 'c2a8e900-5428-4751-9a11-1a1a70ffffa0',
    word: 'ancestor',
    definition: 'a person related to you who lived a long time ago',
    meaning: 'tổ tiên',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836566/eenglish/1.1.day-of-the-dead/ancestor_e0dsbh.png',
    phoneticId: 'b20a159b-d4f7-44af-92b0-a2d5d3770671',
    sentenceId: '622dbec0-572a-41a1-b685-722708dd11a6',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
  {
    id: '7342c21a-a10b-4514-ba77-79a02fed5cb9',
    word: 'acknowledge',
    definition: 'accept or admit the existence or truth of',
    meaning: 'thừa nhận',
    partOfSpeech: PartOfSpeech.Verb,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735836223/eenglish/1.1.day-of-the-dead/acknowledge_k4ihif.jpg',
    phoneticId: 'def226ec-sn93-4e70-83c3-12a1527d9dc9',
    sentenceId: '922dbec0-a79a-41a1-f293-722763ad11a6',
    lessonId: '984911c4-ebf7-45b7-8a56-5c87a038e5b6',
  },
];

module.exports = {
  courses,
  lessons,
  audios,
  vocabularies,
  phonetics,
  sentences,
};
