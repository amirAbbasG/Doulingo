import { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "spanish",
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    color: "#FF9500",
    learners: "28.4M",
  },
  {
    id: "french",
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    color: "#4D88FF",
    learners: "19.4M",
  },
  {
    id:  "japanese",
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    color: "#FF3B30",
    learners: "12.7M",
  },
  // {
  //   id: "korean",
  //   code: "ko",
  //   name: "Korean",
  //   nativeName: "한국어",
  //   flag: "https://flagcdn.com/w320/kr.png",
  //   color: "#4D88FF",
  //   learners: "9.3M",
  // },
  {
    id:  "german",
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    color: "#FFCC00",
    learners: "8.1M",
  },
  // {
  //   id: "chinese",
  //   code: "zh",
  //   name: "Chinese",
  //   nativeName: "中文",
  //   flag: "https://flagcdn.com/w320/cn.png",
  //   color: "#FF3B30",
  //   learners: "7.4M",
  // },
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((lang) => lang.id === id);
}
