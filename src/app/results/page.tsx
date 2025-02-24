"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../components/Card";

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const total = searchParams.get("total");

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Card className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Resultados</h1>
        <p className="text-2xl mb-6">
          Obtuviste {score} de {total} correctas!
        </p>
        <button
          onClick={() => router.push("/")}
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
        >
          Jugar de nuevo
        </button>
      </Card>
    </div>
  );
}
