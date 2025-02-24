import Card from "./Card";
import { QuestionState } from "../types/trivia";

type Props = {
  question: QuestionState;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: string | undefined;
  questionNr: number;
  totalQuestions: number;
};

export default function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}: Props) {
  return (
    <Card className="max-w-2xl mx-auto">
      {/* Encabezado con información de la categoría y el número de pregunta */}
      <div className="mb-6 flex justify-between items-center text-secondary">
        <span className="font-bold bubble-text">
          Category: {question.category}
        </span>
        <span className="font-bold bubble-text">
          Question: {questionNr}/{totalQuestions}
        </span>
      </div>

      {/* Texto de la pregunta */}
      <h2
        className="text-2xl mb-8 font-bold text-center bubble-text text-accent"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      {/* Contenedor de respuestas en grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {answers.map((answer) => {
          // Definición de estilos base para cada botón
          const baseStyles =
            "cartoon-border p-4 text-center text-accent font-bold transition-all duration-200";
          // Si no se seleccionó respuesta, se aplican efectos hover; de lo contrario, se deshabilita el cursor
          const hoverStyles = !userAnswer
            ? "bg-primary hover:bg-secondary hover:translate-x-1 hover:translate-y-1"
            : "cursor-not-allowed";
          // Si la respuesta coincide con la respuesta del usuario, se resalta; sino, se aplica el estilo por defecto
          const answerStyles =
            userAnswer === answer
              ? "bg-accent text-foreground scale-105"
              : "bg-foreground text-background";

          return (
            <button
              key={answer}
              onClick={callback}
              value={answer}
              disabled={!!userAnswer}
              className={`${baseStyles} ${hoverStyles} ${answerStyles}`}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </Card>
  );
}
