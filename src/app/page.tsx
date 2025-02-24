"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Difficulty,
  Category,
  QuestionType,
  CATEGORY_LABELS,
} from "../types/trivia";
import Card from "../components/Card";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [category, setCategory] = useState<Category>(Category.ANY);
  const [questionType, setQuestionType] = useState<QuestionType>(
    QuestionType.MULTIPLE
  );

  const startTrivia = async () => {
    setLoading(true);
    const query = new URLSearchParams({
      amount: amount.toString(),
      difficulty,
      category: category.toString(),
      type: questionType,
    }).toString();

    router.push(`/quiz?${query}`);
  };

  return (
    <div className="min-h-[calc(100vh-170px)] flex items-center justify-center p-8 bg-primary rounded-lg">
      {/* Contenedor del Card con un ancho máximo para mejorar la lectura en pantallas grandes */}
      <Card className="w-full max-w-2xl p-8 bg-background cartoon-border">
        {/* Título centrado */}
        <h1 className="text-center text-4xl font-bold bubble-text text-accent mb-8">
          Set Up Your Trivia Game!
        </h1>

        {/* Grid para agrupar los inputs en una columna en móvil y dos en pantallas medianas+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Número de Preguntas */}
          <div className="space-y-2">
            <label className="font-bold text-lg text-secondary">
              Number of Questions:
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={amount}
              onChange={(e) =>
                setAmount(Math.min(50, Math.max(1, Number(e.target.value))))
              }
              className="w-full p-3 rounded-lg bg-foreground text-background cartoon-border"
            />
          </div>

          {/* Categoría */}
          <div className="space-y-2">
            <label className="font-bold text-lg text-secondary">
              Category:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(Number(e.target.value) as Category)}
              className="w-full p-3 rounded-lg bg-foreground text-background cartoon-border"
            >
              {Object.entries(Category)
                .filter(([key]) => !isNaN(Number(key)))
                .map(([value]) => {
                  const categoryValue = Number(value) as Category;
                  return (
                    <option
                      key={categoryValue}
                      value={categoryValue}
                      className="bg-background text-foreground"
                    >
                      {CATEGORY_LABELS[categoryValue]}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* Dificultad */}
          <div className="space-y-2">
            <label className="font-bold text-lg text-secondary">
              Difficulty:
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as Difficulty)}
              className="w-full p-3 rounded-lg bg-foreground text-background cartoon-border"
            >
              {Object.values(Difficulty).map((d) => (
                <option
                  key={d}
                  value={d}
                  className="bg-background text-foreground"
                >
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Tipo de Pregunta */}
          <div className="space-y-2">
            <label className="font-bold text-lg text-secondary">
              Question Type:
            </label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value as QuestionType)}
              className="w-full p-3 rounded-lg bg-foreground text-background cartoon-border"
            >
              <option
                value={QuestionType.MULTIPLE}
                className="bg-background text-foreground"
              >
                Multiple Choice
              </option>
              <option
                value={QuestionType.BOOLEAN}
                className="bg-background text-foreground"
              >
                True/False
              </option>
            </select>
          </div>
        </div>

        {/* Botón para iniciar el juego */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={startTrivia}
            disabled={loading}
            className="text-xl px-8 py-4 cartoon-button disabled:bg-secondary disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-bounce-cartoon">🎮</span>
                Loading...
              </span>
            ) : (
              "Start Game!"
            )}
          </button>
        </div>
      </Card>
    </div>
  );
}
