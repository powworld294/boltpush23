'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Building2, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StickyQuoteButton from '@/components/StickyQuoteButton';
import Button from '@/components/Button';

export default function ProjectDetailClient() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyQuoteButton />

      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
              Commercial Project
            </p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Commercial Office Renovation
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Completed: March 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span>10-Story Office Building</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-3xl font-heading font-bold mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  This comprehensive asbestos abatement project involved the safe removal of asbestos-containing materials from a 10-story commercial office building in central London. The building, constructed in the 1970s, required complete asbestos removal as part of a major renovation and modernization program.
                </p>
                <p>
                  The project presented unique challenges due to the building's continued partial occupancy during works. Our team implemented strict containment measures, coordinated closely with building management, and maintained comprehensive air monitoring throughout the project to ensure the safety of all building occupants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-heading font-bold mb-6 mt-12">Scope of Works</h3>
              <ul className="space-y-4">
                {[
                  'Complete asbestos survey across all 10 floors',
                  'Removal of asbestos ceiling tiles (approx. 5,000 sq ft)',
                  'Safe removal of asbestos pipe lagging',
                  'Asbestos floor tile removal and disposal',
                  'Air monitoring and clearance testing',
                  'Full documentation and certification',
                  'Coordination with other contractors',
                  'Minimal disruption scheduling',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="text-2xl font-heading font-bold mb-6 mt-12">Project Gallery</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative h-64 overflow-hidden">
                    <Image
                      src={`https://images.pexels.com/photos/${i === 1 ? '416405' : i === 2 ? '1216589' : i === 3 ? '3862130' : '5989936'}/pexels-photo-${i === 1 ? '416405' : i === 2 ? '1216589' : i === 3 ? '3862130' : '5989936'}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                      alt={`Project image ${i}`}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1">
            <AnimatedSection delay={0.4}>
              <div className="bg-gray-50 p-8 sticky top-24">
                <h3 className="text-2xl font-heading font-bold mb-6">Project Details</h3>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <p className="font-semibold text-black mb-2">Client</p>
                    <p>Major Property Development Co.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Duration</p>
                    <p>12 weeks</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Services</p>
                    <p>Surveying, Abatement, Management</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-2">Building Type</p>
                    <p>Commercial Office</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8">
                  <h4 className="font-heading font-bold text-lg mb-4">Client Testimonial</h4>
                  <p className="text-gray-600 italic mb-4">
                    "Pow Asbestos delivered an outstanding service. Their professionalism, attention to detail, and commitment to safety were evident throughout the project."
                  </p>
                  <p className="font-semibold text-black">John Davies</p>
                  <p className="text-sm text-gray-500">Project Manager</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <AnimatedSection>
          <div className="bg-white p-12 text-center max-w-4xl mx-auto border-t-4 border-gold">
            <h3 className="text-3xl font-heading font-bold mb-6">Project Outcome</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              The project was completed on schedule and within budget, with zero safety incidents. All asbestos-containing materials were successfully removed, and the building received full air clearance certification. The client was able to proceed with their renovation program on schedule, and the building now provides a safe, modern working environment for over 500 employees.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-heading font-bold text-gold mb-2">100%</p>
                <p className="text-gray-600">On-Time Completion</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-gold mb-2">Zero</p>
                <p className="text-gray-600">Safety Incidents</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-gold mb-2">5000+</p>
                <p className="text-gray-600">Sq Ft Treated</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section background="black" className="text-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Have a Similar Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us to discuss how we can help with your asbestos requirements.
            </p>
            <Button variant="secondary" size="lg" onClick={() => window.location.href = '/contact'}>
              Get In Touch
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      <Footer />
    </div>
  );
}
