'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Link from 'next/link';

export default function StickyQuoteButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gold hover:bg-gold-dark text-black font-bold py-4 px-6 rounded-full shadow-2xl flex items-center gap-3 transition-colors duration-200"
        >
          <FileText className="w-5 h-5" />
          <span className="hidden sm:inline">Request Quote</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
