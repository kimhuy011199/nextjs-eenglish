import { Lesson } from '@/lib/interfaces';
import { createClient } from '@/lib/supabase/server';

export const getLesson = async (handle: string) => {
  const supabase = await createClient();
  const lessonData = await supabase
    .from('Lesson')
    .select('*')
    .eq('handle', handle)
    .limit(1)
    .single();

  if (lessonData.error) {
    return null;
  }

  return lessonData.data as Lesson;
};
