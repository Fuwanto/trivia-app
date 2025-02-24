"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "../../components/Card";

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
    <div className="min-h-screen bg-primary p-8 flex items-center justify-center">
      <Card className="max-w-lg mx-auto text-center cartoon-border bg-background p-8">
        <h1 className="text-4xl font-bold bubble-text text-accent mb-8">
          Game Results
        </h1>

        <div className="animate-bounce-cartoon mb-8">
          <p className="text-6xl font-bold text-secondary">
            {score}
            <span className="text-3xl text-foreground">/</span>
            {total}
          </p>
          <p className="text-2xl mt-2 text-foreground">Correct Answers</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="cartoon-button text-xl px-8 py-3 hover:bg-secondary text-foreground font-bold uppercase"
        >
          Play Again!
        </button>
      </Card>
    </div>
  );
}

// Pantalla de carga para el fallback del Suspense
function LoadingScreen() {
  return (
    <div className="min-h-screen bg-primary p-8 flex items-center justify-center">
      <div className="text-4xl font-bold bubble-text text-accent animate-bounce-cartoon">
        Loading...
      </div>
    </div>
  );
}
