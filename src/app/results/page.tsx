"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../components/Card";
import LoadingScreen from "../../components/LoadingScreen";

// Componente que envuelve a ResultsPage en un Suspense
export default function ResultsPageWrapper() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ResultsPage />
    </Suspense>
  );
}

function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const total = searchParams.get("total");

  return (
    <main className="min-h-[calc(100vh-170px)] bg-primary p-4 flex items-center justify-center">
      <Card className="w-full max-w-lg mx-auto text-center p-8">
        {/* Encabezado */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold bubble-text text-accent">
            Game Results
          </h1>
        </header>

        {/* Sección de resultados */}
        <section className="mb-8">
          <div className="flex justify-center items-center animate-bounce-cartoon">
            <p className="text-6xl font-bold text-secondary">
              {score}
              <span className="text-3xl text-foreground mx-2">/</span>
              {total}
            </p>
          </div>
          <p className="mt-2 text-2xl text-foreground">Correct Answers</p>
        </section>

        {/* Botón para reiniciar el juego */}
        <footer>
          <button
            onClick={() => router.push("/")}
            className="cartoon-button text-xl px-8 py-3 hover:bg-secondary text-foreground font-bold uppercase transition-colors duration-200"
          >
            Play Again!
          </button>
        </footer>
      </Card>
    </main>
  );
}
