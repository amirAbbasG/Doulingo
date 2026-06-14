import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

import {Language} from "@/types/learning";

interface LanguageState {
    selectedLanguage: Language | null;
    setSelectedLanguage: (code: Language) => void;
    clearSelectedLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            selectedLanguage: null,
            setSelectedLanguage: (lang) => set({selectedLanguage: lang}),
            clearSelectedLanguage: () => set({selectedLanguage: null}),
        }),
        {
            name: "language-storage",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
