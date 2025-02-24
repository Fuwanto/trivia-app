export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export enum Category {
  ANY = 0,
  GENERAL_KNOWLEDGE = 9,
  BOOKS = 10,
  FILM = 11,
  MUSIC = 12,
  THEATRES = 13,
  TELEVISION = 14,
  VIDEOGAMES = 15,
  BOARD_GAMES = 16,
  SCIENCE_NATURE = 17,
  COMPUTERS = 18,
  MATHEMATICS = 19,
  MYTHOLOGY = 20,
  SPORTS = 21,
  GEOGRAPHY = 22,
  HISTORY = 23,
  POLITICS = 24,
  ART = 25,
  CELEBRITIES = 26,
  ANIMALS = 27,
  VEHICLES = 28,
  COMICS = 29,
  GADGETS = 30,
  ANIME = 31,
  CARTOON = 32
}

export const CATEGORY_LABELS: Record<Category, string> = {
  [Category.ANY]: 'Any Category',
  [Category.GENERAL_KNOWLEDGE]: 'General Knowledge',
  [Category.BOOKS]: 'Books',
  [Category.FILM]: 'Film',
  [Category.MUSIC]: 'Music',
  [Category.THEATRES]: 'Theatres and Musicals',
  [Category.TELEVISION]: 'Television',
  [Category.VIDEOGAMES]: 'Video Games',
  [Category.BOARD_GAMES]: 'Board Games',
  [Category.SCIENCE_NATURE]: 'Science and Nature',
  [Category.COMPUTERS]: 'Computers',
  [Category.MATHEMATICS]: 'Mathematics',
  [Category.MYTHOLOGY]: 'Mythology',
  [Category.SPORTS]: 'Sports',
  [Category.GEOGRAPHY]: 'Geography',
  [Category.HISTORY]: 'History',
  [Category.POLITICS]: 'Politics',
  [Category.ART]: 'Art',
  [Category.CELEBRITIES]: 'Celebrities',
  [Category.ANIMALS]: 'Animals',
  [Category.VEHICLES]: 'Vehicles',
  [Category.COMICS]: 'Comics',
  [Category.GADGETS]: 'Gadgets',
  [Category.ANIME]: 'Japanese Anime',
  [Category.CARTOON]: 'Cartoons',
};

export enum QuestionType {
  MULTIPLE = "multiple",
  BOOLEAN = "boolean"
}

export type Question = {
  category: string;
  type: QuestionType;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuestionState = Question & {
  answers: string[];
  userAnswer?: string;
};

