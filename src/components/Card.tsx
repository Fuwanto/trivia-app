import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md ${className}`}>
      {children}
    </div>
  );
}