'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-48">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-128 h-128">
              <Image
                src="/pow_asbestos.jpg"
                alt="Pow Asbestos Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl font-heading font-bold text-black">Pow Asbestos</span>
              <p className="text-sm text-gray-600">Property Services</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:01202 001771" className="flex items-center gap-2 text-black hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Us</span>
            </a>
            <Button variant="primary" size="sm" onClick={() => window.location.href = '/contact'}>
              Request Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-lg font-medium text-black hover:text-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:01202 001771"
                  className="flex items-center gap-2 text-black hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">01202 001771</span>
                </a>
                <Button variant="primary" className="w-full" onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/contact';
                }}>
                  Request Quote
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
