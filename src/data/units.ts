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
  // French units
  {
    id: "french-basics",
    languageId: "french",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["french-greetings"],
    color: "#45B7D1",
    icon: "👋",
  },
  // Japanese units
  {
    id: "japanese-basics",
    languageId: "japanese",
    title: "Basics",
    description: "Learn common greetings and introductions",
    order: 1,
    lessonIds: ["japanese-greetings"],
    color: "#96CEB4",
    icon: "👋",
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
