export interface Language {
  id: string;
  name: string;
  code: string; // ISO 639-1 code
  flag: string; // emoji flag
  nativeName: string;
  color: string;
  learners: string
}

export interface Vocabulary {
  id: string;
  word: string;
  translation: string;
  pronunciation?: string;
  example?: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  pronunciation?: string;
}

export type ActivityType =
  | "multiple_choice"
  | "fill_blank"
  | "translation"
  | "listening"
  | "speaking"
  | "matching";

export interface Activity {
  id: string;
  type: ActivityType;
  instruction: string;
  options?: string[];
  correctAnswer: string;
  vocabularyId?: string;
  phraseId?: string;
}

export interface LessonGoal {
  id: string;
  description: string;
}

export interface AITeacherPrompt {
  id: string;
  systemPrompt: string;
  greeting?: string;
  topics?: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  activities: Activity[];
  vocabulary: Vocabulary[];
  phrases: Phrase[];
  goals: LessonGoal[];
  aiTeacherPrompt?: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  color?: string;
  icon?: string;
}