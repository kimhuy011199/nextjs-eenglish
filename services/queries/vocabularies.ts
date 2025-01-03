import { createClient } from '@/lib/supabase/server';
import { Vocabulary } from '@/lib/interfaces';

export const getVocabularies = async (lessonId: string) => {
  const supabase = await createClient();
  const vocabularyData = await supabase
    .from('Vocabulary')
    .select('*, sentence:Sentence(*), phonetic:Phonetic(*)')
    .eq('lessonId', lessonId);

  if (vocabularyData.error) {
    return null;
  }

  return vocabularyData.data as Vocabulary[];
};
