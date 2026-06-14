import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // Spanish lessons
  {
    id: "spanish-greetings",
    unitId: "spanish-basics",
    languageId: "spanish",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Spanish",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "es-hello",
        word: "Hola",
        translation: "Hello",
        pronunciation: "OH-lah",
        example: "¡Hola! ¿Cómo estás?",
      },
      {
        id: "es-goodbye",
        word: "Adiós",
        translation: "Goodbye",
        pronunciation: "ah-dee-OHS",
        example: "¡Adiós, amigo!",
      },
      {
        id: "es-please",
        word: "Por favor",
        translation: "Please",
        pronunciation: "por fah-VOR",
        example: "Un café, por favor.",
      },
      {
        id: "es-thank-you",
        word: "Gracias",
        translation: "Thank you",
        pronunciation: "GRAH-see-ahs",
        example: "Gracias por tu ayuda.",
      },
    ],
    phrases: [
      {
        id: "es-how-are-you",
        text: "¿Cómo estás?",
        translation: "How are you?",
        pronunciation: "KOH-moh ehs-TAHS",
      },
      {
        id: "es-im-fine",
        text: "Estoy bien",
        translation: "I'm fine",
        pronunciation: "ehs-TOY bee-EHN",
      },
    ],
    activities: [
      {
        id: "es-greet-1",
        type: "multiple_choice",
        instruction: "Select the correct translation for 'Hello'",
        options: ["Goodbye", "Hello", "Please", "Thank you"],
        correctAnswer: "Hello",
      },
      {
        id: "es-greet-2",
        type: "translation",
        instruction: "How do you say 'Thank you' in Spanish?",
        correctAnswer: "Gracias",
      },
      {
        id: "es-greet-3",
        type: "multiple_choice",
        instruction: "What does '¿Cómo estás?' mean?",
        options: ["How are you?", "What is your name?", "Where are you?"],
        correctAnswer: "How are you?",
      },
    ],
    goals: [
      {
        id: "es-greet-goal-1",
        description: "Greet someone in Spanish",
      },
      {
        id: "es-greet-goal-2",
        description: "Say goodbye politely",
      },
    ],
    aiTeacherPrompt: {
      id: "es-greet-ai",
      systemPrompt:
        "You are a friendly Spanish teacher named María. Help students practice greeting in Spanish. Be encouraging and patient. Use simple vocabulary appropriate for beginners.",
      greeting: "¡Hola! Soy María, your Spanish teacher. Let's practice greetings!",
      topics: ["greetings", "introductions", "polite expressions"],
    },
  },
  {
    id: "spanish-introductions",
    unitId: "spanish-basics",
    languageId: "spanish",
    title: "Introductions",
    description: "Learn to introduce yourself and ask names",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "es-name",
        word: "Me llamo",
        translation: "My name is",
        pronunciation: "meh YAH-moh",
        example: "Me llamo Carlos.",
      },
      {
        id: "es-nice",
        word: "Mucho gusto",
        translation: "Nice to meet you",
        pronunciation: "MOO-choh GOO-stoh",
        example: "Mucho gusto, soy Ana.",
      },
    ],
    phrases: [
      {
        id: "es-whats-name",
        text: "¿Cómo te llamas?",
        translation: "What is your name?",
        pronunciation: "KOH-moh teh YAH-mahs",
      },
      {
        id: "es-nice-meet",
        text: "Encantado",
        translation: "Nice to meet you (formal)",
        pronunciation: "ehn-kahn-TAH-doh",
      },
    ],
    activities: [
      {
        id: "es-intro-1",
        type: "fill_blank",
        instruction: "Complete: Me llamo ___",
        correctAnswer: "[Your Name]",
      },
      {
        id: "es-intro-2",
        type: "multiple_choice",
        instruction: "How do you ask someone's name?",
        options: [
          "¿Cómo estás?",
          "¿Cómo te llamas?",
          "¿Dónde vives?",
        ],
        correctAnswer: "¿Cómo te llamas?",
      },
    ],
    goals: [
      {
        id: "es-intro-goal-1",
        description: "Introduce yourself in Spanish",
      },
      {
        id: "es-intro-goal-2",
        description: "Ask someone their name",
      },
    ],
    aiTeacherPrompt: {
      id: "es-intro-ai",
      systemPrompt:
        "You are a friendly Spanish teacher named Carlos. Help students practice introductions. Be encouraging and correct gently.",
      greeting: "¡Hola! Soy Carlos. Let's practice introductions!",
      topics: ["introductions", "names", " polite responses"],
    },
  },
  {
    id: "spanish-food-vocab",
    unitId: "spanish-food",
    languageId: "spanish",
    title: "Food Vocabulary",
    description: "Learn common food and drink words",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "es-water",
        word: "Agua",
        translation: "Water",
        pronunciation: "AH-gwah",
        example: "Un vaso de agua, por favor.",
      },
      {
        id: "es-bread",
        word: "Pan",
        translation: "Bread",
        pronunciation: "pahn",
        example: "Me gusta el pan.",
      },
      {
        id: "es-milk",
        word: "Leche",
        translation: "Milk",
        pronunciation: "LEH-cheh",
        example: "Un vaso de leche.",
      },
      {
        id: "es-egg",
        word: "Huevo",
        translation: "Egg",
        pronunciation: "WEH-voh",
        example: "Quiero un huevo.",
      },
    ],
    phrases: [
      {
        id: "es-i-want",
        text: "Quiero",
        translation: "I want",
        pronunciation: "kee-EH-roh",
      },
      {
        id: "es-i-like",
        text: "Me gusta",
        translation: "I like",
        pronunciation: "meh GOO-stah",
      },
    ],
    activities: [
      {
        id: "es-food-1",
        type: "matching",
        instruction: "Match the food word to its translation",
        correctAnswer: "Agua = Water",
      },
      {
        id: "es-food-2",
        type: "multiple_choice",
        instruction: "What is 'pan' in English?",
        options: ["Milk", "Bread", "Egg", "Water"],
        correctAnswer: "Bread",
      },
    ],
    goals: [
      {
        id: "es-food-goal-1",
        description: "Name common foods in Spanish",
      },
      {
        id: "es-food-goal-2",
        description: "Express what you want to eat",
      },
    ],
  },

  // French lessons
  {
    id: "french-greetings",
    unitId: "french-basics",
    languageId: "french",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in French",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-hello",
        word: "Bonjour",
        translation: "Hello / Good morning",
        pronunciation: "bohn-ZHOOR",
        example: "Bonjour, comment allez-vous?",
      },
      {
        id: "fr-goodbye",
        word: "Au revoir",
        translation: "Goodbye",
        pronunciation: "oh reh-VWAHR",
        example: "Au revoir, à bientôt!",
      },
      {
        id: "fr-please",
        word: "S'il vous plaît",
        translation: "Please",
        pronunciation: "seel voo PLEH",
        example: "Un café, s'il vous plaît.",
      },
      {
        id: "fr-thank-you",
        word: "Merci",
        translation: "Thank you",
        pronunciation: "mehr-SEE",
        example: "Merci beaucoup!",
      },
    ],
    phrases: [
      {
        id: "fr-how-are-you",
        text: "Comment allez-vous?",
        translation: "How are you? (formal)",
        pronunciation: "koh-MAHN tah-lay VOO",
      },
      {
        id: "fr-im-fine",
        text: "Je vais bien",
        translation: "I'm fine",
        pronunciation: "zhuh vay bee-EHN",
      },
    ],
    activities: [
      {
        id: "fr-greet-1",
        type: "multiple_choice",
        instruction: "Select the correct translation for 'Hello'",
        options: ["Goodbye", "Hello", "Please", "Thank you"],
        correctAnswer: "Hello",
      },
      {
        id: "fr-greet-2",
        type: "translation",
        instruction: "How do you say 'Thank you' in French?",
        correctAnswer: "Merci",
      },
    ],
    goals: [
      {
        id: "fr-greet-goal-1",
        description: "Greet someone in French",
      },
      {
        id: "fr-greet-goal-2",
        description: "Say goodbye politely",
      },
    ],
    aiTeacherPrompt: {
      id: "fr-greet-ai",
      systemPrompt:
        "You are a friendly French teacher named Pierre. Help students practice greeting in French. Be encouraging and patient.",
      greeting: "Bonjour! I'm Pierre, your French teacher. Let's practice!",
      topics: ["greetings", "introductions", "polite expressions"],
    },
  },

  // Japanese lessons
  {
    id: "japanese-greetings",
    unitId: "japanese-basics",
    languageId: "japanese",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in Japanese",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-hello",
        word: "こんにちは",
        translation: "Hello",
        pronunciation: "kohn-nee-chee-WAH",
        example: "こんにちは、元気ですか？",
      },
      {
        id: "ja-goodbye",
        word: "さようなら",
        translation: "Goodbye",
        pronunciation: "sah-yoh-NAH-rah",
        example: "さようなら、また明日！",
      },
      {
        id: "ja-thank-you",
        word: "ありがとう",
        translation: "Thank you",
        pronunciation: "ah-ree-GAH-toh",
        example: "ありがとうございます。",
      },
      {
        id: "ja-sorry",
        word: "すみません",
        translation: "Excuse me / Sorry",
        pronunciation: "soo-mee-mah-SEHN",
        example: "すみません、駅はどこですか？",
      },
    ],
    phrases: [
      {
        id: "ja-how-are-you",
        text: "お元気ですか？",
        translation: "How are you?",
        pronunciation: "oh-GEHN-kee deh-soo kah",
      },
      {
        id: "ja-nice-meet",
        text: "はじめまして",
        translation: "Nice to meet you",
        pronunciation: "hah-jee-meh-mah-SHTEH",
      },
    ],
    activities: [
      {
        id: "ja-greet-1",
        type: "multiple_choice",
        instruction: "Select the correct translation for 'Hello'",
        options: ["Goodbye", "Hello", "Thank you", "Sorry"],
        correctAnswer: "Hello",
      },
      {
        id: "ja-greet-2",
        type: "translation",
        instruction: "How do you say 'Thank you' in Japanese?",
        correctAnswer: "ありがとう",
      },
    ],
    goals: [
      {
        id: "ja-greet-goal-1",
        description: "Greet someone in Japanese",
      },
      {
        id: "ja-greet-goal-2",
        description: "Say thank you politely",
      },
    ],
    aiTeacherPrompt: {
      id: "ja-greet-ai",
      systemPrompt:
        "You are a friendly Japanese teacher named Yuki. Help students practice greeting in Japanese. Be encouraging and patient.",
      greeting: "こんにちは！I'm Yuki, your Japanese teacher. Let's practice!",
      topics: ["greetings", "introductions", "polite expressions"],
    },
  },
];

export function getLessonsByUnit(unitId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonsByLanguage(languageId: string): Lesson[] {
  return lessons
    .filter((lesson) => lesson.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
