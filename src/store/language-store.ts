import { create } from "zustand";
import type { Language } from "@/types/learning";

interface LanguageState {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  selectedLanguage: null,
  setSelectedLanguage: (language) => set({ selectedLanguage: language }),
}));
