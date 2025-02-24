"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchQuizQuestions } from "../../services/trivia";
import { QuestionState, Difficulty } from "../../types/trivia";
import QuestionCard from "../../components/QuestionCard";
import { Category, QuestionType } from "../../types/trivia";

export default function QuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const queryAmount = searchParams.get("amount");
  const queryDifficulty = searchParams.get("difficulty");
  const queryCategory = searchParams.get("category");
  const queryType = searchParams.get("type");

  useEffect(() => {
    const loadQuestions = async () => {
      if (queryAmount && queryDifficulty && queryCategory && queryType) {
        const amount = Number(queryAmount);
        const difficulty = queryDifficulty as Difficulty;
        const category = Number(queryCategory) as Category;
        const type = queryType as QuestionType;

        const data = await fetchQuizQuestions(
          amount,
          difficulty,
          category,
          type
        );
        setQuestions(data);
      }
    };

    if (queryAmount && queryDifficulty && queryCategory && queryType)
      loadQuestions();
  }, [queryAmount, queryDifficulty, queryCategory, queryType]);

  const handleAnswer = (answer: string) => {
    const correct = questions[currentQuestion].correct_answer === answer;
    if (correct) setScore((prev) => prev + 1);

    setUserAnswers((prev) => [...prev, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const query = `score=${score + 1}&total=${questions.length}`;
      router.push(`/results?${query}`);
    }
  };

  if (!questions.length) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <QuestionCard
        question={questions[currentQuestion]}
        answers={questions[currentQuestion].answers}
        callback={(e) => handleAnswer(e.currentTarget.value)}
        userAnswer={userAnswers[currentQuestion]}
        questionNr={currentQuestion + 1}
        totalQuestions={questions.length}
      />
      <p className="text-center mt-4 text-xl">Puntaje: {score}</p>
    </div>
  );
}
