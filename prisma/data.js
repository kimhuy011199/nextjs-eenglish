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
      'https://res.cloudinary.com/cloudinaryassets/raw/upload/v1736133112/eenglish/1.1.day-of-the-dead/transcript_ministory_f5qct3.srt',
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
  {
    id: 'b0f8b4c2-4f7d-4b5c-9e9c-0c8a6b2b3f3b',
    title: 'A Kiss - Mini Story',
    handle: 'a-kiss-story',
    src: 'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735898555/eenglish/1.2.a-kiss/ministory_zya8ht.mp3',
    lyricSrc:
      'https://res.cloudinary.com/cloudinaryassets/raw/upload/v1736132871/eenglish/1.2.a-kiss/transcript_ministory_z0zjru.srt',
    duration: 83,
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: 'f5a4a5e0-1b3e-4b8b-8f7d-3e5a6f8a0c7b',
    title: 'A Kiss - Vocabulary',
    handle: 'a-kiss-vocabulary',
    src: 'https://res.cloudinary.com/cloudinaryassets/video/upload/v1735898572/eenglish/1.2.a-kiss/vocabulary_ezi1bb.mp3',
    lyricSrc: '',
    duration: 563,
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
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
  {
    id: '97061e51-fbfe-40a8-ae81-48ff7784cfb7',
    vocabularyId: '406635f1-56cc-4819-afe2-fd8d5efe065d',
    text: '/hjuːdʒ/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/h/hug/huge_/huge.mp3',
  },
  {
    id: '89807907-ca7d-4c7e-bb55-6f2b75f7b346',
    vocabularyId: '7002160e-5f23-442e-b666-cc8c57ce3b03',
    text: '/jel/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/y/yel/yell_/yell.mp3',
  },
  {
    id: 'ec985e45-804b-4af5-aab3-2862f0c1ffaf',
    vocabularyId: '6ffb87d1-310f-4a96-aca1-85e6538e476e',
    text: '/tʃiːk/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/c/che/cheek/cheek.mp3',
  },
  {
    id: 'e193608b-7540-4a85-b227-d44f929e2c1a',
    vocabularyId: '11512c73-9a7e-44a9-8051-d678a7480b72',
    text: '/ˈsaɪd.wɑːk/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/s/sid/sidew/sidewalk.mp3',
  },
  {
    id: 'b4506cb1-c427-43e1-bda9-4475cb2cd714',
    vocabularyId: '577a51fd-c2ff-437d-a28e-7899a5fef7f1',
    text: '/blɑːnd/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/b/blo/blond/blond.mp3',
  },
  {
    id: '79a4bddc-b6af-4f5a-8166-f0a0114e1fce',
    vocabularyId: 'df89e773-2081-4885-8be7-2f656f93b6d8',
    text: '/ɪɡˈnɔːr/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/i/ign/ignor/ignore.mp3',
  },
  {
    id: '24002fe3-e38a-4e70-8ae9-e20dddd80ca0',
    vocabularyId: '967fa384-a8b8-4597-a3d4-8b4173fe244d',
    text: '/sɚˈpɹaɪz/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/s/sur/surpr/surprise.mp3',
  },
  {
    id: '346d16a9-a4d0-4dc2-9b52-3572efee2caf',
    vocabularyId: '2220c4c0-9659-4b3f-9141-909b4e8f2860',
    text: '/ɪkˈspensɪv/',
    sound:
      'https://dictionary.cambridge.org/vi/media/english/us_pron/e/exp/expen/expensive.mp3',
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
  {
    id: '848c85dc-9959-44f9-acd3-4fe4e1e79ba8',
    vocabularyId: '406635f1-56cc-4819-afe2-fd8d5efe065d',
    text: "It's a huge, blue, fast car.",
    translation: 'Đó là một chiếc xe to, màu xanh, nhanh.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131272/eenglish/1.2.a-kiss/vocab_huge_sentence_igcsy8.mp3',
  },
  {
    id: 'a2505466-bc6b-4e93-ade2-bd8980615b5e',
    vocabularyId: '7002160e-5f23-442e-b666-cc8c57ce3b03',
    text: 'He yells to her, "What\'s up?"',
    translation: 'Anh ấy hét lên với cô ấy, "Có chuyện gì vậy?"',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131340/eenglish/1.2.a-kiss/vocab_yell_sentence_vgozlq.mp3',
  },
  {
    id: 'c1d35928-1cce-458e-8646-ce60d4cdea2f',
    vocabularyId: '6ffb87d1-310f-4a96-aca1-85e6538e476e',
    text: 'He says, "That\'s it, just a kiss on the cheek?"',
    translation: 'Anh ấy nói, "Đó là tất cả, chỉ là một nụ hôn trên má?"',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131439/eenglish/1.2.a-kiss/vocab_cheek_sentence_e66yjy.mp3',
  },
  {
    id: 'bc54b9b1-b38e-4586-8f3c-f0911c243be1',
    vocabularyId: '11512c73-9a7e-44a9-8051-d678a7480b72',
    text: 'Carlos stands on the sidewalk.',
    translation: 'Carlos đứng trên vỉa hè.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131545/eenglish/1.2.a-kiss/vocab_sidewalk_sentence_bpfmku.mp3',
  },
  {
    id: 'ee4c1ab4-79e8-4272-ab36-7b7dac94394c',
    vocabularyId: '577a51fd-c2ff-437d-a28e-7899a5fef7f1',
    text: 'She has long blond hair and is beautiful.',
    translation: 'Cô ấy có mái tóc vàng dài và rất xinh đẹp.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131709/eenglish/1.2.a-kiss/vocab_blond_sentence_ysg8ve.mp3',
  },
  {
    id: 'c7e494af-3a7b-43c1-9bf1-42148c11e962',
    vocabularyId: 'df89e773-2081-4885-8be7-2f656f93b6d8',
    text: 'She keeps going and ignores him.',
    translation: 'Cô ấy tiếp tục đi và phớt lờ anh ấy.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131781/eenglish/1.2.a-kiss/vocab_ignore_sentence_do5vua.mp3',
  },
  {
    id: 'e24d28f7-a7aa-4e1e-912f-9cf0eabaee87',
    vocabularyId: '967fa384-a8b8-4597-a3d4-8b4173fe244d',
    text: 'But if you give me your car, I will give you a surprise.',
    translation:
      'Nhưng nếu bạn cho tôi chiếc xe của bạn, tôi sẽ cho bạn một bất ngờ.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131919/eenglish/1.2.a-kiss/vocab_surprise_sentence_ptfhoo.mp3',
  },
  {
    id: '269d4d9e-b4bc-4651-9ba0-f7161db3fd57',
    vocabularyId: '2220c4c0-9659-4b3f-9141-909b4e8f2860',
    text: "I'll take you to an expensive restaurant.",
    translation: 'Tôi sẽ đưa bạn đến một nhà hàng đắt tiền.',
    audioSrc:
      'https://res.cloudinary.com/cloudinaryassets/video/upload/v1736131997/eenglish/1.2.a-kiss/vocab_expensive_sentence_fsy6an.mp3',
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
  {
    id: '406635f1-56cc-4819-afe2-fd8d5efe065d',
    word: 'huge',
    definition: 'extremely large',
    meaning: 'to lớn',
    partOfSpeech: PartOfSpeech.Adjective,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_huge_cjz6wt.png',
    phoneticId: '97061e51-fbfe-40a8-ae81-48ff7784cfb7',
    sentenceId: '848c85dc-9959-44f9-acd3-4fe4e1e79ba8',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '7002160e-5f23-442e-b666-cc8c57ce3b03',
    word: 'yell',
    definition:
      'to shout something or make a loud noise, usually when you are angry, in pain, or excited',
    meaning: 'hét lên',
    partOfSpeech: PartOfSpeech.Verb,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_yell_mlfpqu.jpg',
    phoneticId: '89807907-ca7d-4c7e-bb55-6f2b75f7b346',
    sentenceId: 'a2505466-bc6b-4e93-ade2-bd8980615b5e',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '6ffb87d1-310f-4a96-aca1-85e6538e476e',
    word: 'cheek',
    definition:
      'the soft part of your face that is below your eye and between your mouth and ear',
    meaning: 'gò má',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961509/eenglish/1.2.a-kiss/vocab_cheek_zlx53v.jpg',
    phoneticId: 'ec985e45-804b-4af5-aab3-2862f0c1ffaf',
    sentenceId: 'c1d35928-1cce-458e-8646-ce60d4cdea2f',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '11512c73-9a7e-44a9-8051-d678a7480b72',
    word: 'sidewalk',
    definition: 'a path with a hard surface on one or both sides of a road',
    meaning: 'vỉa hè',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_sidewalk_xxxhmk.png',
    phoneticId: 'e193608b-7540-4a85-b227-d44f929e2c1a',
    sentenceId: 'bc54b9b1-b38e-4586-8f3c-f0911c243be1',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '577a51fd-c2ff-437d-a28e-7899a5fef7f1',
    word: 'blond',
    definition: 'a person, with pale yellow or gold hair',
    meaning: 'tóc vàng',
    partOfSpeech: PartOfSpeech.Adjective,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_blond_d4zkmc.png',
    phoneticId: 'b4506cb1-c427-43e1-bda9-4475cb2cd714',
    sentenceId: 'ee4c1ab4-79e8-4272-ab36-7b7dac94394c',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: 'df89e773-2081-4885-8be7-2f656f93b6d8',
    word: 'ignore',
    definition: 'to intentionally not listen or give attention to',
    meaning: 'bỏ qua',
    partOfSpeech: PartOfSpeech.Verb,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_ignore_nmfbpq.png',
    phoneticId: '79a4bddc-b6af-4f5a-8166-f0a0114e1fce',
    sentenceId: 'c7e494af-3a7b-43c1-9bf1-42148c11e962',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '967fa384-a8b8-4597-a3d4-8b4173fe244d',
    word: 'surprise',
    definition: 'an unexpected event',
    meaning: 'bất ngờ',
    partOfSpeech: PartOfSpeech.Noun,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_surprise_j5uxq1.jpg',
    phoneticId: '24002fe3-e38a-4e70-8ae9-e20dddd80ca0',
    sentenceId: 'e24d28f7-a7aa-4e1e-912f-9cf0eabaee87',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
  },
  {
    id: '2220c4c0-9659-4b3f-9141-909b4e8f2860',
    word: 'expensive',
    definition: 'costing a lot of money',
    meaning: 'đắt tiền',
    partOfSpeech: PartOfSpeech.Adjective,
    imgSrc:
      'https://res.cloudinary.com/cloudinaryassets/image/upload/v1735961510/eenglish/1.2.a-kiss/vocab_expensive_aimvef.png',
    phoneticId: '346d16a9-a4d0-4dc2-9b52-3572efee2caf',
    sentenceId: '269d4d9e-b4bc-4651-9ba0-f7161db3fd57',
    lessonId: 'db0d5bf2-6910-4fb5-9717-6c9c5d75409a',
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
