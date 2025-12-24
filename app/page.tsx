'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle, Award, Shield, Star, Linkedin, Instagram, Facebook } from 'lucide-react';
import Button from '@/components/Button';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-bold">
      {count}{suffix}
    </span>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/asbestos_roof_sheet.jpg"
            alt="Asbestos roof inspection"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        </div>

        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #FFD700, #FFF4D4, #B8860B)',
                boxShadow: '0 0 15px rgba(218, 165, 32, 0.9), 0 0 30px rgba(255, 215, 0, 0.5)',
              }}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-12"
          >
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520] opacity-30 blur-3xl rounded-full animate-pulse"></div>
              <Image
                src="/pow_asbestos.jpg"
                alt="Pow Property Asbestos Logo"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span
              className="inline-block metallic-gold-text"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(218, 165, 32, 0.8)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.4))',
              }}
            >
              POW PROPERTY ASBESTOS
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 metallic-gold-text" style={{
              filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.6))',
            }}>
              All Aspects of Asbestos Abatement & Management Undertaken
            </h2>
            <div className="space-y-4 text-white text-lg md:text-xl">
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.8))'
                }} />
                Commercial & Residential Asbestos Removals
              </p>
              <p className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.8))'
                }} />
                Small One-Off Removals to Large Complex Ongoing Management Contracts
              </p>
              <p className="text-2xl font-bold mt-6 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.7))',
              }}>
                The Number 1 Choice for Asbestos Removals in the South
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="font-bold text-lg px-8 py-6 text-black relative overflow-hidden group metallic-gold"
              style={{
                border: 'none',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.6), 0 0 60px rgba(255, 215, 0, 0.3), inset 0 2px 10px rgba(255, 244, 212, 0.5)',
              }}
            >
              <span className="relative z-10 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Get Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'tel:01202001771'}
              className="font-bold text-lg px-8 py-6 relative overflow-hidden group metallic-gold-border"
              style={{
                borderWidth: '3px',
                color: '#FFD700',
                textShadow: '0 0 10px rgba(218, 165, 32, 0.8)',
                boxShadow: '0 4px 20px rgba(218, 165, 32, 0.4)',
              }}
            >
              <Phone className="w-5 h-5 mr-2" />
              <span className="relative z-10">Call Now</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative py-10 px-6 md:px-12 rounded-2xl overflow-hidden max-w-4xl mx-auto metallic-gold"
            style={{
              boxShadow: '0 20px 80px rgba(218, 165, 32, 0.7), 0 0 120px rgba(255, 215, 0, 0.5) inset, inset 0 5px 20px rgba(255, 248, 220, 0.5), inset 0 -5px 20px rgba(92, 79, 61, 0.5)',
            }}
          >
            <Phone className="w-16 h-16 mx-auto mb-4 text-black" />
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 relative z-10">
              CALL NOW FOR FREE CONSULTATION
            </h2>
            <a
              href="tel:01202001771"
              className="block text-5xl md:text-6xl font-bold text-black hover:scale-105 transition-transform my-6 relative z-10"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
            >
              01202 001771
            </a>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-black text-lg font-semibold relative z-10">
              <a href="mailto:Info@powpropertyasbestos.co.uk" className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
                Info@powpropertyasbestos.co.uk
              </a>
            </div>
            <div className="flex justify-center gap-6 mt-6 relative z-10">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-black p-3 rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-[#FFD700]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-black p-3 rounded-full hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-[#FFD700]" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-black p-3 rounded-full hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-[#FFD700]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative p-8 metallic-gold-border"
              style={{
                borderWidth: '3px',
                boxShadow: '0 10px 40px rgba(218, 165, 32, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.1)',
              }}
            >
              <div className="text-5xl font-bold mb-2 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.8))',
              }}>
                <AnimatedCounter end={2500} suffix="+" />
              </div>
              <p className="text-white text-lg">Successful Asbestos Removal Jobs</p>
              <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full metallic-gold"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, delay: 1.7 }}
                  style={{
                    boxShadow: '0 0 10px rgba(218, 165, 32, 0.8)',
                  }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative p-8 metallic-gold-border"
              style={{
                borderWidth: '3px',
                boxShadow: '0 10px 40px rgba(218, 165, 32, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.1)',
              }}
            >
              <div className="text-5xl font-bold mb-2 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.8))',
              }}>
                <AnimatedCounter end={25} suffix="+" />
              </div>
              <p className="text-white text-lg">Years Experience in Asbestos Industry</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden relative p-8 metallic-gold-border"
              style={{
                borderWidth: '3px',
                boxShadow: '0 10px 40px rgba(218, 165, 32, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.1)',
              }}
            >
              <div className="text-5xl font-bold mb-2 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.8))',
              }}>
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-white text-lg">Client Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full flex justify-center p-2 metallic-gold-border" style={{
            borderWidth: '3px',
            boxShadow: '0 5px 20px rgba(218, 165, 32, 0.6)',
          }}>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #B8860B, #FFD700, #FFF4D4)',
                boxShadow: '0 0 8px rgba(218, 165, 32, 0.9)',
              }}
            />
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose <span className="metallic-gold-text" style={{
                filter: 'drop-shadow(0 2px 8px rgba(218, 165, 32, 0.6))',
              }}>Pow Asbestos</span>?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-left">
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-l-4" style={{
                borderLeftColor: '#DAA520',
                boxShadow: '-4px 0 15px rgba(218, 165, 32, 0.3)',
              }}>
                <Award className="w-8 h-8 flex-shrink-0 mt-1" style={{
                  color: '#DAA520',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.8))',
                }} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Over 25 Years Experience</h3>
                  <p className="text-gray-700">
                    Our team has all the relevant skills, experience and qualifications required for all types of asbestos works.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-l-4" style={{
                borderLeftColor: '#DAA520',
                boxShadow: '-4px 0 15px rgba(218, 165, 32, 0.3)',
              }}>
                <MapPin className="w-8 h-8 flex-shrink-0 mt-1" style={{
                  color: '#DAA520',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.8))',
                }} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Comprehensive Coverage</h3>
                  <p className="text-gray-700">
                    Covering Bournemouth, Poole & surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-l-4" style={{
                borderLeftColor: '#DAA520',
                boxShadow: '-4px 0 15px rgba(218, 165, 32, 0.3)',
              }}>
                <Shield className="w-8 h-8 flex-shrink-0 mt-1" style={{
                  color: '#DAA520',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.8))',
                }} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Fully Qualified & Certified</h3>
                  <p className="text-gray-700">
                    All team members hold industry-leading qualifications and are continuously trained on the latest safety protocols.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg border-l-4" style={{
                borderLeftColor: '#DAA520',
                boxShadow: '-4px 0 15px rgba(218, 165, 32, 0.3)',
              }}>
                <Star className="w-8 h-8 flex-shrink-0 mt-1" style={{
                  color: '#DAA520',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.8))',
                }} />
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Flexible Service Options</h3>
                  <p className="text-gray-700">
                    From small one-off removals to large complex ongoing management contracts - we handle it all.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-black mb-8">Our Accreditations & Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center max-w-5xl mx-auto mb-16">
              <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center h-40 metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.1)',
              }}>
                <Award className="w-12 h-12 mb-2" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.9))',
                }} />
                <p className="font-bold text-center metallic-gold-text">ISO 9001</p>
              </div>
              <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center h-40 metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.1)',
              }}>
                <Award className="w-12 h-12 mb-2" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.9))',
                }} />
                <p className="font-bold text-center metallic-gold-text">ISO 14001</p>
              </div>
              <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center h-40 metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.1)',
              }}>
                <Award className="w-12 h-12 mb-2" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.9))',
                }} />
                <p className="font-bold text-center metallic-gold-text">ISO 45001</p>
              </div>
              <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center h-40 col-span-2 md:col-span-1 metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.1)',
              }}>
                <Shield className="w-12 h-12 mb-2" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.9))',
                }} />
                <p className="font-bold text-center text-sm metallic-gold-text">Protected by Peninsula</p>
              </div>
              <div className="bg-black p-6 rounded-lg flex flex-col items-center justify-center h-40 col-span-2 md:col-span-1 metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 8px 30px rgba(218, 165, 32, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.1)',
              }}>
                <CheckCircle className="w-12 h-12 mb-2" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.9))',
                }} />
                <p className="font-bold text-center text-sm metallic-gold-text">HSE Licensed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <div className="md:col-span-2">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/asbestos_removal_image.webp"
                  alt="Professional asbestos removal in progress"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-2">Professional Removal Services</h4>
                    <p className="text-white/90">Expert asbestos removal with full safety protocols</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-44 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/asbestos_sticker_pic.png"
                  alt="Asbestos warning label"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg metallic-gold-border" style={{
                borderWidth: '3px',
                boxShadow: '0 10px 40px rgba(218, 165, 32, 0.4), inset 0 0 30px rgba(255, 215, 0, 0.1)',
              }}>
                <h4 className="font-bold text-xl mb-3 metallic-gold-text" style={{
                  filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.7))',
                }}>Safety First</h4>
                <p className="text-white">All our work sites are properly labeled and secured with appropriate warning signage to ensure maximum safety.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Understanding <span className="metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 15px rgba(218, 165, 32, 0.8))',
              }}>Asbestos Types</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Knowledge is key to safety. Learn about the different types of asbestos and why professional identification and removal is essential.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden metallic-gold-border shadow-2xl" style={{
              borderWidth: '2px',
              boxShadow: '0 20px 80px rgba(218, 165, 32, 0.7), 0 0 100px rgba(255, 215, 0, 0.4)',
            }}>
              <div className="relative w-full" style={{ height: '1000px' }}>
                <Image
                  src="/ebbf3790-ee9e-4d50-91ad-babebf3c62a8.png"
                  alt="Types of Asbestos - Chrysotile, Amosite, Crocidolite, Anthophyllite"
                  fill
                  className="object-cover object-top"
                  style={{ objectPosition: 'top' }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-8 bg-gray-900 p-8 rounded-lg metallic-gold-border" style={{
              borderWidth: '3px',
              boxShadow: '0 10px 40px rgba(218, 165, 32, 0.5), inset 0 0 30px rgba(255, 215, 0, 0.1)',
            }}>
              <p className="text-white text-lg leading-relaxed">
                All six types of asbestos are hazardous and require professional handling. Our certified team has the expertise to identify, safely remove, and dispose of all asbestos types in compliance with HSE regulations. Don't risk your health - contact us for a professional assessment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work With the <span className="metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 15px rgba(218, 165, 32, 0.9))',
              }}>Best in the South</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Get your free, no obligation consultation today and discover why we're the number 1 choice for asbestos removals for commercial and residential projects across the South of England.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="text-black font-bold text-xl px-12 py-6 relative overflow-hidden group metallic-gold"
                style={{
                  border: 'none',
                  boxShadow: '0 10px 40px rgba(218, 165, 32, 0.7), 0 0 80px rgba(255, 215, 0, 0.4), inset 0 2px 15px rgba(255, 244, 212, 0.5)',
                }}
              >
                <span className="relative z-10 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Request Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = 'tel:01202001771'}
                className="font-bold text-xl px-12 py-6 metallic-gold-border"
                style={{
                  borderWidth: '3px',
                  color: '#FFD700',
                  textShadow: '0 0 10px rgba(218, 165, 32, 0.9)',
                  boxShadow: '0 5px 25px rgba(218, 165, 32, 0.5)',
                }}
              >
                <Phone className="w-6 h-6 mr-2" />
                01202 001771
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-black to-gray-900 py-12" style={{
        borderTop: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #6B5D4F, #B8860B, #DAA520, #FFD700, #FFF4D4, #FFD700, #DAA520, #B8860B, #6B5D4F) 1',
        boxShadow: 'inset 0 3px 20px rgba(218, 165, 32, 0.3)',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-xl mb-4 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.8))',
              }}>Contact Us</h3>
              <p className="text-white mb-2">Phone: 01202 001771</p>
              <p className="text-white mb-2">Email: Info@powpropertyasbestos.co.uk</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.8))',
              }}>Coverage Area</h3>
              <p className="text-white">Covering Bournemouth, Poole & surrounding areas</p>
              <p className="text-white">South of England</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4 metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 8px rgba(218, 165, 32, 0.8))',
              }}>Follow Us</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.7))',
                }}>
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.7))',
                }}>
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" style={{
                  color: '#FFD700',
                  filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.7))',
                }}>
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center" style={{
            borderTop: '1px solid transparent',
            borderImage: 'linear-gradient(90deg, transparent, #DAA520, #FFD700, #DAA520, transparent) 1',
          }}>
            <p className="text-gray-400">
              © {new Date().getFullYear()} Pow Property Asbestos. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <Link href="/privacy" className="hover:scale-105 transition-transform metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.6))',
              }}>Privacy</Link>
              <Link href="/terms" className="hover:scale-105 transition-transform metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.6))',
              }}>Terms</Link>
              <Link href="/cookies" className="hover:scale-105 transition-transform metallic-gold-text" style={{
                filter: 'drop-shadow(0 0 6px rgba(218, 165, 32, 0.6))',
              }}>Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
