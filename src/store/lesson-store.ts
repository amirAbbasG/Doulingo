import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { LessonStatus } from "@/types/learning";

interface LessonProgress {
  status: LessonStatus;
  completedCount: number;
  totalCount: number;
}

interface LessonState {
  lessonProgress: Record<string, LessonProgress>;
  setLessonStatus: (lessonId: string, status: LessonStatus) => void;
  completeLesson: (lessonId: string, totalCount: number) => void;
  getLessonStatus: (lessonId: string) => LessonStatus;
  getLessonProgress: (lessonId: string) => LessonProgress;
}

const DEFAULT_PROGRESS: LessonProgress = {
  status: "locked",
  completedCount: 0,
  totalCount: 6,
};

export const useLessonStore = create<LessonState>()(
  persist(
    (set, get) => ({
      lessonProgress: {},

      setLessonStatus: (lessonId, status) =>
        set((state) => ({
          lessonProgress: {
            ...state.lessonProgress,
            [lessonId]: {
              ...state.lessonProgress[lessonId],
              ...DEFAULT_PROGRESS,
              status,
            },
          },
        })),

      completeLesson: (lessonId, totalCount) =>
        set((state) => {
          const current = state.lessonProgress[lessonId] || DEFAULT_PROGRESS;
          const newCompletedCount = Math.min(
            current.completedCount + 1,
            totalCount
          );
          const newStatus: LessonStatus =
            newCompletedCount >= totalCount ? "completed" : "in_progress";

          return {
            lessonProgress: {
              ...state.lessonProgress,
              [lessonId]: {
                status: newStatus,
                completedCount: newCompletedCount,
                totalCount,
              },
            },
          };
        }),

      getLessonStatus: (lessonId) => {
        const progress = get().lessonProgress[lessonId];
        return progress?.status || "locked";
      },

      getLessonProgress: (lessonId) => {
        return get().lessonProgress[lessonId] || DEFAULT_PROGRESS;
      },
    }),
    {
      name: "lesson-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
