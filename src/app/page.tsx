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
    // Construimos la URL manualmente:
    const query = new URLSearchParams({
      amount: amount.toString(),
      difficulty,
      category: category.toString(),
      type: questionType,
    }).toString();

    router.push(`/quiz?${query}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Card className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Configura tu Trivia</h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-2">Número de preguntas:</label>
            <input
              type="number"
              min="1"
              max="50"
              value={amount}
              onChange={(e) =>
                setAmount(Math.min(50, Math.max(1, Number(e.target.value))))
              }
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Categoría:</label>
            <select
              value={category}
              onChange={(e) => setCategory(Number(e.target.value) as Category)}
              className="w-full p-2 border rounded"
            >
              {Object.entries(Category)
                .filter(([key]) => !isNaN(Number(key)))
                .map(([value]) => {
                  const categoryValue = Number(value) as Category;
                  return (
                    <option key={categoryValue} value={categoryValue}>
                      {CATEGORY_LABELS[categoryValue]}
                    </option>
                  );
                })}
            </select>
          </div>

          <div>
            <label className="block mb-2">Dificultad:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as Difficulty)}
              className="w-full p-2 border rounded"
            >
              {Object.values(Difficulty).map((d) => (
                <option key={d} value={d}>
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2">Tipo de pregunta:</label>
            <select
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value as QuestionType)}
              className="w-full p-2 border rounded"
            >
              <option value={QuestionType.MULTIPLE}>Multiple Choice</option>
              <option value={QuestionType.BOOLEAN}>Verdadero/Falso</option>
            </select>
          </div>

          <button
            onClick={startTrivia}
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Cargando..." : "Comenzar!"}
          </button>
        </div>
      </Card>
    </div>
  );
}
