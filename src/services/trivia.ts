import axios from 'axios';
import { Question, QuestionState, Difficulty, Category, QuestionType } from '../types/trivia';

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty,
  category: Category,
  type: QuestionType
): Promise<QuestionState[]> => {
  const baseUrl = 'https://opentdb.com/api.php';
  
  const params = new URLSearchParams({
    amount: amount.toString(),
    difficulty,
    type
  });

  if (category !== Category.ANY) {
    params.append('category', category.toString());
  }

  const response = await axios.get(`${baseUrl}?${params}`);
  
  return response.data.results.map((question: Question) => ({
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer]
      .sort(() => Math.random() - 0.5)
  }));
};