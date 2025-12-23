import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center', className)}>
      {subtitle && (
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl lg:text-5xl font-heading font-bold text-black">
        {title}
      </h2>
    </div>
  );
}
