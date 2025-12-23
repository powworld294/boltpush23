import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 border border-gray-200 hover:border-gold transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-black group-hover:bg-gold transition-colors duration-300 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-heading font-bold mb-4 text-black">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
