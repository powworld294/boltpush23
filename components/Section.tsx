import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'black';
  id?: string;
}

export default function Section({ children, className, background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    black: 'bg-black text-white',
  };

  return (
    <section id={id} className={cn('py-20 lg:py-32', backgrounds[background], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
