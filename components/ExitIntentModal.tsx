'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTA = () => {
    window.location.href = '/contact';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white z-50 shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-heading font-bold text-black">P</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wait! Before You Go...
                </h2>

                <p className="text-xl text-gray-600 mb-6">
                  Get your <span className="text-gold font-bold">FREE</span> no-obligation quote today
                </p>

                <div className="bg-gray-50 p-6 mb-8">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold text-xl">✓</span>
                      <span className="text-gray-700">Fast response within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold text-xl">✓</span>
                      <span className="text-gray-700">Competitive pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold text-xl">✓</span>
                      <span className="text-gray-700">15+ years of industry experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gold font-bold text-xl">✓</span>
                      <span className="text-gray-700">Fully licensed and insured specialists</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" onClick={handleCTA}>
                    Get My Free Quote
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleClose}>
                    Maybe Later
                  </Button>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  No spam, no obligations. Just expert advice when you need it.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
