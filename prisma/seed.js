const { PrismaClient } = require('@prisma/client');
const {
  courses,
  lessons,
  audios,
  vocabularies,
  sentences,
  phonetics,
} = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    console.log('Start seeding data...');

    await prisma.course.deleteMany();
    console.log('Deleted records in courses table');

    await prisma.lesson.deleteMany();
    console.log('Deleted records in lessons table');

    await prisma.audio.deleteMany();
    console.log('Deleted records in audios table');

    await prisma.sentence.deleteMany();
    console.log('Deleted records in sentences table');

    await prisma.phonetic.deleteMany();
    console.log('Deleted records in phonetics table');

    await prisma.vocabulary.deleteMany();
    console.log('Deleted records in vocabularies table');

    await prisma.course.createMany({
      data: courses,
    });
    console.log('Added courses data');

    await prisma.lesson.createMany({
      data: lessons,
    });
    console.log('Added lessons data');

    await prisma.audio.createMany({
      data: audios,
    });
    console.log('Added audios data');

    await prisma.sentence.createMany({
      data: sentences,
    });
    console.log('Added sentences data');

    await prisma.phonetic.createMany({
      data: phonetics,
    });
    console.log('Added phonetics data');

    await prisma.vocabulary.createMany({
      data: vocabularies,
    });
    console.log('Added vocabularies data');

    console.log('Finish seeding data 🚀');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
