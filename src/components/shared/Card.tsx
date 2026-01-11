import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${
        hover ? 'hover:shadow-xl transition-all duration-300 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
