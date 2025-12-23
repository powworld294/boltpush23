import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  delay?: number;
}

export default function ProjectCard({ title, category, image, slug, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-black"
    >
      <Link href={`/projects/${slug}`}>
        <div className="relative h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-gold text-sm font-medium mb-2 uppercase tracking-wider">{category}</p>
          <h3 className="text-2xl font-heading font-bold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
