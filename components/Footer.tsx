import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gold flex items-center justify-center">
                <span className="text-black text-2xl font-heading font-bold">P</span>
              </div>
              <div>
                <span className="text-xl font-heading font-bold">Pow Asbestos</span>
                <p className="text-xs text-gray-400">Property Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional asbestos services for residential, commercial, and public sector projects.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400">
                  About Us
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Services
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Projects
                </span>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#abatement" className="text-gray-400 hover:text-gold transition-colors">
                  Asbestos Abatement
                </Link>
              </li>
              <li>
                <Link href="/services#management" className="text-gray-400 hover:text-gold transition-colors">
                  Management
                </Link>
              </li>
              <li>
                <Link href="/services#surveying" className="text-gray-400 hover:text-gold transition-colors">
                  Surveying
                </Link>
              </li>
              <li>
                <Link href="/services#education" className="text-gray-400 hover:text-gold transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/services#compliance" className="text-gray-400 hover:text-gold transition-colors">
                  Compliance & H&S
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  1A-1B Hawkwood Road<br />
                  Boscombe, BH5 1DR
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+441202001771" className="text-gray-400 hover:text-gold transition-colors">
                  01202 001771
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@powasbestos.co.uk" className="text-gray-400 hover:text-gold transition-colors">
                  info@powasbestos.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pow Asbestos Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-gold transition-colors">
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
