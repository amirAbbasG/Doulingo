import { Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish units
  {
    id: "spanish-basics",
    languageId: "spanish",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["spanish-greetings", "spanish-introductions"],
    color: "#FF6B6B",
    icon: "👋",
  },
  {
    id: "spanish-food",
    languageId: "spanish",
    title: "Food & Drinks",
    description: "Order food and talk about meals",
    order: 2,
    lessonIds: ["spanish-food-vocab"],
    color: "#4ECDC4",
    icon: "🍽️",
  },
  {
    id: "spanish-cafe",
    languageId: "spanish",
    title: "At the Café",
    description: "Master café conversations and daily scenarios",
    order: 3,
    lessonIds: [
      "spanish-greetings",
      "spanish-daily-life",
      "spanish-at-cafe",
      "spanish-travel",
      "spanish-shopping",
      "spanish-family",
    ],
    color: "#8B5CF6",
    icon: "☕",
  },
  // French units
  {
    id: "french-basics",
    languageId: "french",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["french-greetings", "french-introductions"],
    color: "#45B7D1",
    icon: "👋",
  },
  {
    id: "french-food",
    languageId: "french",
    title: "Food & Drinks",
    description: "Order food and talk about meals",
    order: 2,
    lessonIds: ["french-food"],
    color: "#F59E0B",
    icon: "🥐",
  },
  {
    id: "french-cafe",
    languageId: "french",
    title: "At the Café",
    description: "Master café conversations in French",
    order: 3,
    lessonIds: [
      "french-cafe",
      "french-travel",
      "french-shopping",
      "french-family",
      "french-food",
    ],
    color: "#3B82F6",
    icon: "☕",
  },
  // Japanese units
  {
    id: "japanese-basics",
    languageId: "japanese",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["japanese-greetings", "japanese-introductions"],
    color: "#96CEB4",
    icon: "👋",
  },
  {
    id: "japanese-food",
    languageId: "japanese",
    title: "Food & Drinks",
    description: "Learn food vocabulary in Japanese",
    order: 2,
    lessonIds: ["japanese-food"],
    color: "#EC4899",
    icon: "🍱",
  },
  {
    id: "japanese-cafe",
    languageId: "japanese",
    title: "At the Café",
    description: "Master café conversations in Japanese",
    order: 3,
    lessonIds: [
      "japanese-cafe",
      "japanese-travel",
      "japanese-shopping",
      "japanese-family",
      "japanese-food",
    ],
    color: "#EF4444",
    icon: "☕",
  },
  // German units
  {
    id: "german-basics",
    languageId: "german",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["german-greetings", "german-introductions"],
    color: "#FBBF24",
    icon: "👋",
  },
  {
    id: "german-food",
    languageId: "german",
    title: "Food & Drinks",
    description: "Order food and talk about meals",
    order: 2,
    lessonIds: ["german-food"],
    color: "#10B981",
    icon: "🥨",
  },
  {
    id: "german-cafe",
    languageId: "german",
    title: "At the Café",
    description: "Master café conversations in German",
    order: 3,
    lessonIds: [
      "german-cafe",
      "german-travel",
      "german-shopping",
      "german-family",
      "german-food",
    ],
    color: "#6366F1",
    icon: "☕",
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
