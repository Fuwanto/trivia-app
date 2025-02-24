import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`cartoon-border bg-background rounded-xl p-8 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
