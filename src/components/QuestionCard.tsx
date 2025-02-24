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
      <div className="mb-6 flex justify-between items-center text-secondary">
        <span className="font-bold bubble-text">
          Category: {question.category}
        </span>
        <span className="font-bold bubble-text">
          Question: {questionNr}/{totalQuestions}
        </span>
      </div>

      <h2
        className="text-2xl mb-8 font-bold text-center bubble-text text-accent"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="grid gap-4">
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={callback}
            value={answer}
            disabled={!!userAnswer}
            className={`cartoon-border p-4 text-left transition-all duration-200
              ${
                !userAnswer
                  ? "bg-primary hover:bg-secondary hover:translate-x-1 hover:translate-y-1"
                  : "cursor-not-allowed"
              }
              ${
                userAnswer === answer
                  ? "bg-accent text-foreground scale-105"
                  : "bg-foreground text-background"
              }`}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </Card>
  );
}
