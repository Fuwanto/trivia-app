"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchQuizQuestions } from "../../services/trivia";
import { QuestionState, Difficulty } from "../../types/trivia";
import QuestionCard from "../../components/QuestionCard";
import LoadingScreen from "../../components/LoadingScreen";
import { Category, QuestionType } from "../../types/trivia";

// Este componente envuelve a QuizPage en un Suspense para evitar errores con useSearchParams()
export default function QuizPageWrapper() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <QuizPage />
    </Suspense>
  );
}

function QuizPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  // Usamos useSearchParams() para obtener los parámetros de la URL
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

    if (queryAmount && queryDifficulty && queryCategory && queryType) {
      loadQuestions();
    }
  }, [queryAmount, queryDifficulty, queryCategory, queryType]);

  const handleAnswer = (answer: string) => {
    const correct = questions[currentQuestion].correct_answer === answer;
    if (correct) setScore((prev) => prev + 1);

    setUserAnswers((prev) => [...prev, answer]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Al finalizar, se redirige a la página de resultados pasando el puntaje y total de preguntas
      const query = `score=${score + (correct ? 1 : 0)}&total=${
        questions.length
      }`;
      router.push(`/results?${query}`);
    }
  };

  // Si aún no se han cargado las preguntas, se muestra la pantalla de carga
  if (!questions.length) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-[calc(100vh-170px)] bg-primary p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        {/* Tarjeta con la pregunta actual */}
        <QuestionCard
          question={questions[currentQuestion]}
          answers={questions[currentQuestion].answers}
          callback={(e) => handleAnswer(e.currentTarget.value)}
          userAnswer={userAnswers[currentQuestion]}
          questionNr={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        {/* Mostramos el puntaje debajo de la pregunta */}
        <div className="mt-8 text-center">
          <p className="text-2xl font-bold bubble-text text-secondary animate-bounce-cartoon">
            🏆 Score: {score}
          </p>
        </div>
      </div>
    </div>
  );
}
