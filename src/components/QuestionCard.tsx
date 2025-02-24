import Card from "./Card";
import { QuestionState } from "../../types/trivia";

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
      <div className="mb-4 flex justify-between items-center">
        <span className="text-gray-500">Categoría: {question.category}</span>
        <span className="text-gray-500">
          Pregunta: {questionNr}/{totalQuestions}
        </span>
      </div>

      <h2
        className="text-xl mb-6"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="grid gap-3">
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={callback}
            value={answer}
            disabled={!!userAnswer}
            className={`p-3 rounded-md text-left transition-colors
                ${!userAnswer ? "bg-blue-100 hover:bg-blue-200" : ""}
                ${userAnswer === answer ? "bg-blue-500 text-white" : ""}`}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </Card>
  );
}
