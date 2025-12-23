import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  company: string;
  content: string;
  rating: number;
}

export default function TestimonialCard({ name, company, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 p-8 border-l-4 border-gold">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed mb-6 italic">"{content}"</p>
      <div>
        <p className="font-heading font-bold text-black">{name}</p>
        <p className="text-sm text-gray-600">{company}</p>
      </div>
    </div>
  );
}
