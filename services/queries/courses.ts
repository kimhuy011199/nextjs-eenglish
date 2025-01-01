import { createClient } from '@/lib/supabase/server';
import { Course, Lesson } from '@/lib/interfaces';

type GetCoursesResponse = (Course & { lessons: Lesson[] })[];

export const getCourses = async () => {
  const supabase = await createClient();
  const coursesData = await supabase
    .from('Course')
    .select('*, lessons:Lesson(*)');

  if (coursesData.error) {
    throw new Error(coursesData.error.message);
  }

  return coursesData.data as GetCoursesResponse;
};
