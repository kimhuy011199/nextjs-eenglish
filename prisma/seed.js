const { PrismaClient } = require('@prisma/client');
const { courses, lessons } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    console.log('Start seeding data...');

    await prisma.course.deleteMany();
    console.log('Deleted records in courses table');

    await prisma.lesson.deleteMany();
    console.log('Deleted records in lessons table');

    await prisma.course.createMany({
      data: courses,
    });
    console.log('Added courses data');

    await prisma.lesson.createMany({
      data: lessons,
    });
    console.log('Added lessons data');

    console.log('Finish seeding data 🚀');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
