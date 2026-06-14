import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

export interface HomeTask {
  id: string;
  type: "lesson" | "ai_conversation" | "new_words";
  title: string;
  subtitle: string;
  completed: boolean;
}

interface HomeState {
  dailyXP: number;
  dailyGoal: number;
  streak: number;
  completedTasks: string[];
  addXP: (amount: number) => void;
  completeTask: (taskId: string) => void;
  resetDaily: () => void;
}

export const useHomeStore = create<HomeState>()(
  persist(
    (set) => ({
      dailyXP: 15,
      dailyGoal: 20,
      streak: 12,
      completedTasks: ["lesson-cafe"],
      addXP: (amount) =>
        set((state) => ({dailyXP: Math.min(state.dailyXP + amount, state.dailyGoal)})),
      completeTask: (taskId) =>
        set((state) => ({
          completedTasks: [...state.completedTasks, taskId],
        })),
      resetDaily: () => set({dailyXP: 0, completedTasks: []}),
    }),
    {
      name: "home-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
