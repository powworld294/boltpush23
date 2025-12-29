'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ConversionClient from './ConversionClient';

export default function ThankYou() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Thank you</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
              Your submission has been processed successfully. We will be in touch shortly.
            </p>
            <Link
              href="/"
              className="inline-block bg-gold hover:bg-gold-dark text-black font-bold px-6 py-3 rounded"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <ConversionClient value={1} currency="GBP" />

      <Footer />
    </div>
  );
}
