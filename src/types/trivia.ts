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
  [Category.ANY]: 'Cualquier categoría',
  [Category.GENERAL_KNOWLEDGE]: 'Conocimiento General',
  [Category.BOOKS]: 'Libros',
  [Category.FILM]: 'Cine',
  [Category.MUSIC]: 'Música',
  [Category.THEATRES]: 'Teatros y Musicales',
  [Category.TELEVISION]: 'Televisión',
  [Category.VIDEOGAMES]: 'Videojuegos',
  [Category.BOARD_GAMES]: 'Juegos de Mesa',
  [Category.SCIENCE_NATURE]: 'Ciencia y Naturaleza',
  [Category.COMPUTERS]: 'Computadoras',
  [Category.MATHEMATICS]: 'Matemáticas',
  [Category.MYTHOLOGY]: 'Mitología',
  [Category.SPORTS]: 'Deportes',
  [Category.GEOGRAPHY]: 'Geografía',
  [Category.HISTORY]: 'Historia',
  [Category.POLITICS]: 'Política',
  [Category.ART]: 'Arte',
  [Category.CELEBRITIES]: 'Celebridades',
  [Category.ANIMALS]: 'Animales',
  [Category.VEHICLES]: 'Vehículos',
  [Category.COMICS]: 'Cómics',
  [Category.GADGETS]: 'Gadgets',
  [Category.ANIME]: 'Anime Japonés',
  [Category.CARTOON]: 'Dibujos Animados',
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

