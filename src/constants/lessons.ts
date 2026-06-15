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

  // Spanish "At the Café" unit lessons
  {
    id: "spanish-daily-life",
    unitId: "spanish-cafe",
    languageId: "spanish",
    title: "Daily Life",
    description: "Learn vocabulary for daily routines",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "es-morning",
        word: "Mañana",
        translation: "Morning",
        pronunciation: "mah-NYAH-nah",
        example: "Buenos días, buenas mañanas.",
      },
      {
        id: "es-afternoon",
        word: "Tarde",
        translation: "Afternoon",
        pronunciation: "TAR-deh",
        example: "Buenas tardes.",
      },
      {
        id: "es-night",
        word: "Noche",
        translation: "Night",
        pronunciation: "NO-cheh",
        example: "Buenas noches.",
      },
    ],
    phrases: [
      {
        id: "es-good-morning",
        text: "Buenos días",
        translation: "Good morning",
        pronunciation: "BWEH-nohs DEE-ahs",
      },
      {
        id: "es-good-night",
        text: "Buenas noches",
        translation: "Good night",
        pronunciation: "BWEH-nahs NO-chehs",
      },
    ],
    activities: [
      {
        id: "es-daily-1",
        type: "multiple_choice",
        instruction: "What does 'Mañana' mean?",
        options: ["Night", "Morning", "Afternoon", "Evening"],
        correctAnswer: "Morning",
      },
    ],
    goals: [
      {
        id: "es-daily-goal-1",
        description: "Greet someone at different times of day",
      },
    ],
  },
  {
    id: "spanish-at-cafe",
    unitId: "spanish-cafe",
    languageId: "spanish",
    title: "At the Café",
    description: "Order food and drinks at a café",
    order: 3,
    xpReward: 20,
    vocabulary: [
      {
        id: "es-coffee",
        word: "Café",
        translation: "Coffee",
        pronunciation: "kah-FEH",
        example: "Un café con leche, por favor.",
      },
      {
        id: "es-tea",
        word: "Té",
        translation: "Tea",
        pronunciation: "TEH",
        example: "Quiero un té verde.",
      },
      {
        id: "es-croissant",
        word: "Croissant",
        translation: "Croissant",
        pronunciation: "kwah-SAHN",
        example: "Un croissant de mantequilla.",
      },
      {
        id: "es-check",
        word: "La cuenta",
        translation: "The bill",
        pronunciation: "lah KWEHN-tah",
      },
    ],
    phrases: [
      {
        id: "es-i-want-coffee",
        text: "Quiero un café",
        translation: "I want a coffee",
        pronunciation: "kee-EH-roh oon kah-FEH",
      },
      {
        id: "es-the-bill",
        text: "La cuenta, por favor",
        translation: "The bill, please",
        pronunciation: "lah KWEHN-tah por fah-VOR",
      },
    ],
    activities: [
      {
        id: "es-cafe-1",
        type: "multiple_choice",
        instruction: "How do you say 'coffee' in Spanish?",
        options: ["Té", "Café", "Agua", "Leche"],
        correctAnswer: "Café",
      },
    ],
    goals: [
      {
        id: "es-cafe-goal-1",
        description: "Order drinks at a café",
      },
      {
        id: "es-cafe-goal-2",
        description: "Ask for the bill",
      },
    ],
    aiTeacherPrompt: {
      id: "es-cafe-ai",
      systemPrompt:
        "You are a friendly Spanish teacher named María. Help students practice ordering at a café in Spanish. Be encouraging and patient.",
      greeting: "¡Hola! Let's practice ordering at a café!",
      topics: ["food", "drinks", "ordering"],
    },
  },
  {
    id: "spanish-travel",
    unitId: "spanish-cafe",
    languageId: "spanish",
    title: "Travel & Directions",
    description: "Learn to ask for and give directions",
    order: 4,
    xpReward: 20,
    vocabulary: [
      {
        id: "es-left",
        word: "Izquierda",
        translation: "Left",
        pronunciation: "ees-kee-EHR-dah",
        example: "Gira a la izquierda.",
      },
      {
        id: "es-right",
        word: "Derecha",
        translation: "Right",
        pronunciation: "deh-REH-chah",
        example: "Gira a la derecha.",
      },
      {
        id: "es-straight",
        word: "Recto",
        translation: "Straight",
        pronunciation: "REK-toh",
        example: "Sigue recto.",
      },
    ],
    phrases: [
      {
        id: "es-where-is",
        text: "¿Dónde está...?",
        translation: "Where is...?",
        pronunciation: "DOHN-deh ehs-TAH",
      },
      {
        id: "es-turn-left",
        text: "Gira a la izquierda",
        translation: "Turn left",
        pronunciation: "HEE-rah ah lah ees-kee-EHR-dah",
      },
    ],
    activities: [
      {
        id: "es-travel-1",
        type: "multiple_choice",
        instruction: "What does 'Derecha' mean?",
        options: ["Left", "Right", "Straight", "Back"],
        correctAnswer: "Right",
      },
    ],
    goals: [
      {
        id: "es-travel-goal-1",
        description: "Ask for directions",
      },
    ],
  },
  {
    id: "spanish-shopping",
    unitId: "spanish-cafe",
    languageId: "spanish",
    title: "Shopping",
    description: "Learn vocabulary for shopping",
    order: 5,
    xpReward: 15,
    vocabulary: [
      {
        id: "es-price",
        word: "Precio",
        translation: "Price",
        pronunciation: "PREH-see-oh",
        example: "¿Cuánto cuesta?",
      },
      {
        id: "es-cheap",
        word: "Barato",
        translation: "Cheap",
        pronunciation: "bah-RAH-toh",
        example: "Es muy barato.",
      },
      {
        id: "es-expensive",
        word: "Caro",
        translation: "Expensive",
        pronunciation: "KAH-roh",
        example: "Es demasiado caro.",
      },
    ],
    phrases: [
      {
        id: "es-how-much",
        text: "¿Cuánto cuesta?",
        translation: "How much does it cost?",
        pronunciation: "KWAHN-toh KWEHS-tah",
      },
      {
        id: "es-too-expensive",
        text: "Es demasiado caro",
        translation: "It's too expensive",
        pronunciation: "ehs deh-mah-SEE-ah-doh KAH-roh",
      },
    ],
    activities: [
      {
        id: "es-shop-1",
        type: "multiple_choice",
        instruction: "How do you say 'cheap' in Spanish?",
        options: ["Caro", "Barato", "Precio", "Gratis"],
        correctAnswer: "Barato",
      },
    ],
    goals: [
      {
        id: "es-shop-goal-1",
        description: "Ask about prices",
      },
    ],
  },
  {
    id: "spanish-family",
    unitId: "spanish-cafe",
    languageId: "spanish",
    title: "Family & Friends",
    description: "Learn family member vocabulary",
    order: 6,
    xpReward: 15,
    vocabulary: [
      {
        id: "es-mother",
        word: "Madre",
        translation: "Mother",
        pronunciation: "MAH-dreh",
        example: "Mi madre es doctora.",
      },
      {
        id: "es-father",
        word: "Padre",
        translation: "Father",
        pronunciation: "PAH-dreh",
        example: "Mi padre es profesor.",
      },
      {
        id: "es-brother",
        word: "Hermano",
        translation: "Brother",
        pronunciation: "ehr-MAH-noh",
        example: "Tengo un hermano.",
      },
      {
        id: "es-sister",
        word: "Hermana",
        translation: "Sister",
        pronunciation: "ehr-MAH-nah",
        example: "Tengo una hermana.",
      },
    ],
    phrases: [
      {
        id: "es-my-family",
        text: "Mi familia",
        translation: "My family",
        pronunciation: "mee fah-MEE-lee-ah",
      },
      {
        id: "es-i-have",
        text: "Tengo un...",
        translation: "I have a...",
        pronunciation: "TEHN-goh oon",
      },
    ],
    activities: [
      {
        id: "es-family-1",
        type: "multiple_choice",
        instruction: "What does 'Madre' mean?",
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: "Mother",
      },
    ],
    goals: [
      {
        id: "es-family-goal-1",
        description: "Name family members",
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
  {
    id: "french-introductions",
    unitId: "french-basics",
    languageId: "french",
    title: "Introductions",
    description: "Learn to introduce yourself in French",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "fr-name",
        word: "Je m'appelle",
        translation: "My name is",
        pronunciation: "zhuh mah-PEHL",
        example: "Je m'appelle Pierre.",
      },
      {
        id: "fr-nice",
        word: "Enchanté",
        translation: "Nice to meet you",
        pronunciation: "ahn-shahn-TAY",
        example: "Enchanté, je suis Marie.",
      },
    ],
    phrases: [
      {
        id: "fr-whats-name",
        text: "Comment vous appelez-vous?",
        translation: "What is your name?",
        pronunciation: "koh-MAHN voo zah-play VOO",
      },
    ],
    activities: [
      {
        id: "fr-intro-1",
        type: "multiple_choice",
        instruction: "How do you say 'My name is' in French?",
        options: ["Je suis", "Je m'appelle", "J'ai", "Je veux"],
        correctAnswer: "Je m'appelle",
      },
    ],
    goals: [
      {
        id: "fr-intro-goal-1",
        description: "Introduce yourself in French",
      },
    ],
  },
  {
    id: "french-food",
    unitId: "french-food",
    languageId: "french",
    title: "Food & Drinks",
    description: "Order food and drinks in French",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "fr-bread",
        word: "Pain",
        translation: "Bread",
        pronunciation: "pahn",
        example: "Un pain au chocolat.",
      },
      {
        id: "fr-cheese",
        word: "Fromage",
        translation: "Cheese",
        pronunciation: "froh-MAHZH",
        example: "Le fromage est délicieux.",
      },
      {
        id: "fr-wine",
        word: "Vin",
        translation: "Wine",
        pronunciation: "vahn",
        example: "Un verre de vin rouge.",
      },
    ],
    phrases: [
      {
        id: "fr-i-want",
        text: "Je voudrais",
        translation: "I would like",
        pronunciation: "zhuh voo-DREH",
      },
    ],
    activities: [
      {
        id: "fr-food-1",
        type: "multiple_choice",
        instruction: "What is 'bread' in French?",
        options: ["Fromage", "Pain", "Vin", "Beurre"],
        correctAnswer: "Pain",
      },
    ],
    goals: [
      {
        id: "fr-food-goal-1",
        description: "Order food in French",
      },
    ],
  },
  {
    id: "french-cafe",
    unitId: "french-cafe",
    languageId: "french",
    title: "At the Café",
    description: "Order at a French café",
    order: 1,
    xpReward: 20,
    vocabulary: [
      {
        id: "fr-coffee",
        word: "Café",
        translation: "Coffee",
        pronunciation: "kah-FEH",
        example: "Un café, s'il vous plaît.",
      },
      {
        id: "fr-croissant",
        word: "Croissant",
        translation: "Croissant",
        pronunciation: "kwah-SAHN",
        example: "Un croissant au beurre.",
      },
    ],
    phrases: [
      {
        id: "fr-une-cafe",
        text: "Un café, s'il vous plaît",
        translation: "A coffee, please",
        pronunciation: "uhn kah-FEH seel voo PLEH",
      },
    ],
    activities: [
      {
        id: "fr-cafe-1",
        type: "multiple_choice",
        instruction: "How do you order a coffee in French?",
        options: ["Un thé", "Un café", "Un vin", "Un jus"],
        correctAnswer: "Un café",
      },
    ],
    goals: [
      {
        id: "fr-cafe-goal-1",
        description: "Order at a café",
      },
    ],
  },
  {
    id: "french-travel",
    unitId: "french-cafe",
    languageId: "french",
    title: "Travel",
    description: "Learn travel vocabulary in French",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "fr-station",
        word: "Gare",
        translation: "Station",
        pronunciation: "gahr",
        example: "La gare est loin.",
      },
      {
        id: "fr-ticket",
        word: "Billet",
        translation: "Ticket",
        pronunciation: "bee-YEH",
        example: "Un billet, s'il vous plaît.",
      },
    ],
    phrases: [
      {
        id: "fr-where-station",
        text: "Où est la gare?",
        translation: "Where is the station?",
        pronunciation: "oo eh lah gahr",
      },
    ],
    activities: [
      {
        id: "fr-travel-1",
        type: "multiple_choice",
        instruction: "What does 'Gare' mean?",
        options: ["Airport", "Station", "Hotel", "Restaurant"],
        correctAnswer: "Station",
      },
    ],
    goals: [
      {
        id: "fr-travel-goal-1",
        description: "Navigate in a French city",
      },
    ],
  },
  {
    id: "french-shopping",
    unitId: "french-cafe",
    languageId: "french",
    title: "Shopping",
    description: "Learn shopping vocabulary in French",
    order: 3,
    xpReward: 15,
    vocabulary: [
      {
        id: "fr-price",
        word: "Prix",
        translation: "Price",
        pronunciation: "pree",
        example: "Quel est le prix?",
      },
      {
        id: "fr-expensive",
        word: "Cher",
        translation: "Expensive",
        pronunciation: "shehr",
        example: "C'est trop cher.",
      },
    ],
    phrases: [
      {
        id: "fr-how-much",
        text: "Combien ça coûte?",
        translation: "How much does it cost?",
        pronunciation: "kohm-BYEHN sah koot",
      },
    ],
    activities: [
      {
        id: "fr-shop-1",
        type: "multiple_choice",
        instruction: "How do you say 'expensive' in French?",
        options: ["Bon", "Cher", "Beau", "Vieux"],
        correctAnswer: "Cher",
      },
    ],
    goals: [
      {
        id: "fr-shop-goal-1",
        description: "Shop in French",
      },
    ],
  },
  {
    id: "french-family",
    unitId: "french-cafe",
    languageId: "french",
    title: "Family",
    description: "Learn family vocabulary in French",
    order: 4,
    xpReward: 15,
    vocabulary: [
      {
        id: "fr-mother",
        word: "Mère",
        translation: "Mother",
        pronunciation: "mehr",
        example: "Ma mère est gentille.",
      },
      {
        id: "fr-father",
        word: "Père",
        translation: "Father",
        pronunciation: "pehr",
        example: "Mon père est grand.",
      },
    ],
    phrases: [
      {
        id: "fr-my-family",
        text: "Ma famille",
        translation: "My family",
        pronunciation: "mah fah-MEEL",
      },
    ],
    activities: [
      {
        id: "fr-family-1",
        type: "multiple_choice",
        instruction: "What does 'Mère' mean?",
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: "Mother",
      },
    ],
    goals: [
      {
        id: "fr-family-goal-1",
        description: "Name family members in French",
      },
    ],
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
  {
    id: "japanese-introductions",
    unitId: "japanese-basics",
    languageId: "japanese",
    title: "Introductions",
    description: "Learn to introduce yourself in Japanese",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "ja-name",
        word: "名前",
        translation: "Name",
        pronunciation: "nah-MAH-eh",
        example: "あなたの名前は？",
      },
      {
        id: "ja-self",
        word: "私",
        translation: "I / Me",
        pronunciation: " wah-TAH-shee",
        example: "私は学生です。",
      },
    ],
    phrases: [
      {
        id: "ja-whats-name",
        text: "お名前は？",
        translation: "What is your name?",
        pronunciation: "oh-NAH-meh-eh wah",
      },
    ],
    activities: [
      {
        id: "ja-intro-1",
        type: "multiple_choice",
        instruction: "What does '名前' mean?",
        options: ["Name", "Age", "Address", "Phone"],
        correctAnswer: "Name",
      },
    ],
    goals: [
      {
        id: "ja-intro-goal-1",
        description: "Introduce yourself in Japanese",
      },
    ],
  },
  {
    id: "japanese-food",
    unitId: "japanese-food",
    languageId: "japanese",
    title: "Food & Drinks",
    description: "Learn food vocabulary in Japanese",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "ja-water",
        word: "水",
        translation: "Water",
        pronunciation: "mee-ZOO",
        example: "水をください。",
      },
      {
        id: "ja-rice",
        word: "ご飯",
        translation: "Rice / Meal",
        pronunciation: "GO-hahn",
        example: "ご飯を食べましょう。",
      },
      {
        id: "ja-tea",
        word: "お茶",
        translation: "Tea",
        pronunciation: "oh-CHAH",
        example: "お茶をどうぞ。",
      },
    ],
    phrases: [
      {
        id: "ja-i-want",
        text: "〜をください",
        translation: "Please give me ~",
        pronunciation: "woh koo-dah-SAI",
      },
    ],
    activities: [
      {
        id: "ja-food-1",
        type: "multiple_choice",
        instruction: "What is '水' in English?",
        options: ["Rice", "Water", "Tea", "Bread"],
        correctAnswer: "Water",
      },
    ],
    goals: [
      {
        id: "ja-food-goal-1",
        description: "Order food in Japanese",
      },
    ],
  },
  {
    id: "japanese-cafe",
    unitId: "japanese-cafe",
    languageId: "japanese",
    title: "At the Café",
    description: "Order at a Japanese café",
    order: 1,
    xpReward: 20,
    vocabulary: [
      {
        id: "ja-coffee",
        word: "コーヒー",
        translation: "Coffee",
        pronunciation: "KOH-hee",
        example: "コーヒーを一杯ください。",
      },
      {
        id: "ja-cake",
        word: "ケーキ",
        translation: "Cake",
        pronunciation: "KEH-kee",
        example: "ケーキが好きです。",
      },
    ],
    phrases: [
      {
        id: "ja-one-coffee",
        text: "コーヒーを一杯ください",
        translation: "One coffee, please",
        pronunciation: "KOH-heh wo hi-PAI koo-dah-SAI",
      },
    ],
    activities: [
      {
        id: "ja-cafe-1",
        type: "multiple_choice",
        instruction: "How do you say 'coffee' in Japanese?",
        options: ["お茶", "コーヒー", "水", "ジュース"],
        correctAnswer: "コーヒー",
      },
    ],
    goals: [
      {
        id: "ja-cafe-goal-1",
        description: "Order at a café in Japanese",
      },
    ],
  },
  {
    id: "japanese-travel",
    unitId: "japanese-cafe",
    languageId: "japanese",
    title: "Travel",
    description: "Learn travel vocabulary in Japanese",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "ja-station",
        word: "駅",
        translation: "Station",
        pronunciation: "EH-kee",
        example: "駅はどこですか？",
      },
      {
        id: "ja-ticket",
        word: "切符",
        translation: "Ticket",
        pronunciation: "KIHP-poo",
        example: "切符を買いたいです。",
      },
    ],
    phrases: [
      {
        id: "ja-where-station",
        text: "駅はどこですか？",
        translation: "Where is the station?",
        pronunciation: "EH-kee wah DOH-koh deh-soo kah",
      },
    ],
    activities: [
      {
        id: "ja-travel-1",
        type: "multiple_choice",
        instruction: "What does '駅' mean?",
        options: ["Airport", "Station", "Hotel", "Restaurant"],
        correctAnswer: "Station",
      },
    ],
    goals: [
      {
        id: "ja-travel-goal-1",
        description: "Navigate in Japan",
      },
    ],
  },
  {
    id: "japanese-shopping",
    unitId: "japanese-cafe",
    languageId: "japanese",
    title: "Shopping",
    description: "Learn shopping vocabulary in Japanese",
    order: 3,
    xpReward: 15,
    vocabulary: [
      {
        id: "ja-price",
        word: "値段",
        translation: "Price",
        pronunciation: "NEH-dahn",
        example: "値段はいくらですか？",
      },
      {
        id: "ja-cheap",
        word: "安い",
        translation: "Cheap",
        pronunciation: "yah-SOO-ee",
        example: "これは安いです。",
      },
    ],
    phrases: [
      {
        id: "ja-how-much",
        text: "いくらですか？",
        translation: "How much is it?",
        pronunciation: "EE-koo-rah deh-soo kah",
      },
    ],
    activities: [
      {
        id: "ja-shop-1",
        type: "multiple_choice",
        instruction: "What does '安い' mean?",
        options: ["Expensive", "Cheap", "Free", "Sale"],
        correctAnswer: "Cheap",
      },
    ],
    goals: [
      {
        id: "ja-shop-goal-1",
        description: "Shop in Japanese",
      },
    ],
  },
  {
    id: "japanese-family",
    unitId: "japanese-cafe",
    languageId: "japanese",
    title: "Family",
    description: "Learn family vocabulary in Japanese",
    order: 4,
    xpReward: 15,
    vocabulary: [
      {
        id: "ja-mother",
        word: "お母さん",
        translation: "Mother",
        pronunciation: "oh-KAH-sahn",
        example: "お母さんは優しいです。",
      },
      {
        id: "ja-father",
        word: "お父さん",
        translation: "Father",
        pronunciation: "oh-TOH-sahn",
        example: "お父さんは背が高いです。",
      },
    ],
    phrases: [
      {
        id: "ja-my-family",
        text: "私の家族",
        translation: "My family",
        pronunciation: "wah-TAH-shee noh KAH-zohk",
      },
    ],
    activities: [
      {
        id: "ja-family-1",
        type: "multiple_choice",
        instruction: "What does 'お母さん' mean?",
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: "Mother",
      },
    ],
    goals: [
      {
        id: "ja-family-goal-1",
        description: "Name family members in Japanese",
      },
    ],
  },

  // German lessons
  {
    id: "german-greetings",
    unitId: "german-basics",
    languageId: "german",
    title: "Greetings",
    description: "Learn how to say hello and goodbye in German",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "de-hello",
        word: "Hallo",
        translation: "Hello",
        pronunciation: "HAH-loh",
        example: "Hallo, wie geht es Ihnen?",
      },
      {
        id: "de-goodbye",
        word: "Auf Wiedersehen",
        translation: "Goodbye",
        pronunciation: "owf VEE-der-zey-en",
        example: "Auf Wiedersehen, bis morgen!",
      },
      {
        id: "de-please",
        word: "Bitte",
        translation: "Please / You're welcome",
        pronunciation: "BIT-teh",
        example: "Ein Kaffee, bitte.",
      },
      {
        id: "de-thank-you",
        word: "Danke",
        translation: "Thank you",
        pronunciation: "DAHN-keh",
        example: "Danke schön!",
      },
    ],
    phrases: [
      {
        id: "de-how-are-you",
        text: "Wie geht es Ihnen?",
        translation: "How are you? (formal)",
        pronunciation: "vee gayt es EE-nen",
      },
      {
        id: "de-im-fine",
        text: "Mir geht es gut",
        translation: "I'm fine",
        pronunciation: "meer gayt es goot",
      },
    ],
    activities: [
      {
        id: "de-greet-1",
        type: "multiple_choice",
        instruction: "Select the correct translation for 'Hello'",
        options: ["Auf Wiedersehen", "Hallo", "Bitte", "Danke"],
        correctAnswer: "Hallo",
      },
    ],
    goals: [
      {
        id: "de-greet-goal-1",
        description: "Greet someone in German",
      },
    ],
    aiTeacherPrompt: {
      id: "de-greet-ai",
      systemPrompt:
        "You are a friendly German teacher named Hans. Help students practice greeting in German. Be encouraging and patient.",
      greeting: "Hallo! I'm Hans, your German teacher. Let's practice!",
      topics: ["greetings", "introductions", "polite expressions"],
    },
  },
  {
    id: "german-introductions",
    unitId: "german-basics",
    languageId: "german",
    title: "Introductions",
    description: "Learn to introduce yourself in German",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "de-name",
        word: "Name",
        translation: "Name",
        pronunciation: "NAH-meh",
        example: "Wie ist Ihr Name?",
      },
      {
        id: "de-nice",
        word: "Freut mich",
        translation: "Nice to meet you",
        pronunciation: "froyt mikh",
        example: "Freut mich, Sie kennenzulernen.",
      },
    ],
    phrases: [
      {
        id: "de-whats-name",
        text: "Wie heißen Sie?",
        translation: "What is your name?",
        pronunciation: "vee HY-sen zee",
      },
    ],
    activities: [
      {
        id: "de-intro-1",
        type: "multiple_choice",
        instruction: "How do you ask someone's name in German?",
        options: ["Wie geht es?", "Wie heißen Sie?", "Wo wohnen Sie?"],
        correctAnswer: "Wie heißen Sie?",
      },
    ],
    goals: [
      {
        id: "de-intro-goal-1",
        description: "Introduce yourself in German",
      },
    ],
  },
  {
    id: "german-food",
    unitId: "german-food",
    languageId: "german",
    title: "Food & Drinks",
    description: "Learn food vocabulary in German",
    order: 1,
    xpReward: 10,
    vocabulary: [
      {
        id: "de-bread",
        word: "Brot",
        translation: "Bread",
        pronunciation: "broht",
        example: "Ich möchte Brot.",
      },
      {
        id: "de-beer",
        word: "Bier",
        translation: "Beer",
        pronunciation: "beer",
        example: "Ein Bier, bitte.",
      },
      {
        id: "de-sausage",
        word: "Wurst",
        translation: "Sausage",
        pronunciation: "voorst",
        example: "Die Wurst schmeckt gut.",
      },
    ],
    phrases: [
      {
        id: "de-i-want",
        text: "Ich möchte",
        translation: "I would like",
        pronunciation: "ikh MURKH-teh",
      },
    ],
    activities: [
      {
        id: "de-food-1",
        type: "multiple_choice",
        instruction: "What is 'Bier' in English?",
        options: ["Bread", "Beer", "Water", "Milk"],
        correctAnswer: "Beer",
      },
    ],
    goals: [
      {
        id: "de-food-goal-1",
        description: "Order food in German",
      },
    ],
  },
  {
    id: "german-cafe",
    unitId: "german-cafe",
    languageId: "german",
    title: "At the Café",
    description: "Order at a German café",
    order: 1,
    xpReward: 20,
    vocabulary: [
      {
        id: "de-coffee",
        word: "Kaffee",
        translation: "Coffee",
        pronunciation: "KAH-feh",
        example: "Einen Kaffee, bitte.",
      },
      {
        id: "de-cake",
        word: "Kuchen",
        translation: "Cake",
        pronunciation: "KOO-khen",
        example: "Der Kuchen ist lecker.",
      },
    ],
    phrases: [
      {
        id: "de-one-coffee",
        text: "Einen Kaffee, bitte",
        translation: "One coffee, please",
        pronunciation: "EYE-nen KAH-feh BIT-teh",
      },
    ],
    activities: [
      {
        id: "de-cafe-1",
        type: "multiple_choice",
        instruction: "How do you say 'coffee' in German?",
        options: ["Tee", "Kaffee", "Wasser", "Milch"],
        correctAnswer: "Kaffee",
      },
    ],
    goals: [
      {
        id: "de-cafe-goal-1",
        description: "Order at a café in German",
      },
    ],
  },
  {
    id: "german-travel",
    unitId: "german-cafe",
    languageId: "german",
    title: "Travel",
    description: "Learn travel vocabulary in German",
    order: 2,
    xpReward: 15,
    vocabulary: [
      {
        id: "de-station",
        word: "Bahnhof",
        translation: "Station",
        pronunciation: "BAHN-hohf",
        example: "Wo ist der Bahnhof?",
      },
      {
        id: "de-ticket",
        word: "Fahrkarte",
        translation: "Ticket",
        pronunciation: "FAHR-kar-teh",
        example: "Eine Fahrkarte, bitte.",
      },
    ],
    phrases: [
      {
        id: "de-where-station",
        text: "Wo ist der Bahnhof?",
        translation: "Where is the station?",
        pronunciation: "voh ist dehr BAHN-hohf",
      },
    ],
    activities: [
      {
        id: "de-travel-1",
        type: "multiple_choice",
        instruction: "What does 'Bahnhof' mean?",
        options: ["Airport", "Station", "Hotel", "Restaurant"],
        correctAnswer: "Station",
      },
    ],
    goals: [
      {
        id: "de-travel-goal-1",
        description: "Navigate in Germany",
      },
    ],
  },
  {
    id: "german-shopping",
    unitId: "german-cafe",
    languageId: "german",
    title: "Shopping",
    description: "Learn shopping vocabulary in German",
    order: 3,
    xpReward: 15,
    vocabulary: [
      {
        id: "de-price",
        word: "Preis",
        translation: "Price",
        pronunciation: "priys",
        example: "Was ist der Preis?",
      },
      {
        id: "de-cheap",
        word: "Billig",
        translation: "Cheap",
        pronunciation: "BILL-ikh",
        example: "Das ist billig.",
      },
    ],
    phrases: [
      {
        id: "de-how-much",
        text: "Was kostet das?",
        translation: "How much does it cost?",
        pronunciation: "vohs KOS-tet dahs",
      },
    ],
    activities: [
      {
        id: "de-shop-1",
        type: "multiple_choice",
        instruction: "What does 'Billig' mean?",
        options: ["Expensive", "Cheap", "Free", "Sale"],
        correctAnswer: "Cheap",
      },
    ],
    goals: [
      {
        id: "de-shop-goal-1",
        description: "Shop in German",
      },
    ],
  },
  {
    id: "german-family",
    unitId: "german-cafe",
    languageId: "german",
    title: "Family",
    description: "Learn family vocabulary in German",
    order: 4,
    xpReward: 15,
    vocabulary: [
      {
        id: "de-mother",
        word: "Mutter",
        translation: "Mother",
        pronunciation: "MOO-ter",
        example: "Meine Mutter ist nett.",
      },
      {
        id: "de-father",
        word: "Vater",
        translation: "Father",
        pronunciation: "FAH-ter",
        example: "Mein Vater arbeitet.",
      },
    ],
    phrases: [
      {
        id: "de-my-family",
        text: "Meine Familie",
        translation: "My family",
        pronunciation: "MY-neh fah-MEE-lee-eh",
      },
    ],
    activities: [
      {
        id: "de-family-1",
        type: "multiple_choice",
        instruction: "What does 'Mutter' mean?",
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: "Mother",
      },
    ],
    goals: [
      {
        id: "de-family-goal-1",
        description: "Name family members in German",
      },
    ],
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
