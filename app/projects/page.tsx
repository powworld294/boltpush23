'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StickyQuoteButton from '@/components/StickyQuoteButton';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Commercial Office Renovation',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'commercial-office',
    description: 'Complete asbestos removal for a 10-story office building renovation.',
  },
  {
    title: 'Residential Property Survey',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'residential-survey',
    description: 'Comprehensive survey and management plan for historic residential property.',
  },
  {
    title: 'Public Sector School Project',
    category: 'Public Sector',
    image: 'https://images.pexels.com/photos/159213/school-building-windows-architecture-159213.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'school-project',
    description: 'Safe removal of asbestos during school modernization program.',
  },
  {
    title: 'Industrial Warehouse Clearance',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'warehouse-clearance',
    description: 'Large-scale asbestos abatement for warehouse conversion project.',
  },
  {
    title: 'Hospital Wing Refurbishment',
    category: 'Public Sector',
    image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'hospital-refurbishment',
    description: 'Sensitive asbestos removal in operational healthcare facility.',
  },
  {
    title: 'Heritage Building Restoration',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'heritage-restoration',
    description: 'Careful asbestos management in Grade II listed building.',
  },
  {
    title: 'Retail Park Development',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'retail-development',
    description: 'Pre-demolition asbestos survey and removal for new retail development.',
  },
  {
    title: 'Council Housing Estate',
    category: 'Public Sector',
    image: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'housing-estate',
    description: 'Ongoing management program for local authority housing.',
  },
  {
    title: 'Apartment Complex Survey',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    slug: 'apartment-survey',
    description: 'Comprehensive surveying across 50-unit residential development.',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Public Sector'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyQuoteButton />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Our <span className="text-gold">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Delivering excellence across residential, commercial, and public sector projects
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <AnimatedSection>
          <SectionHeading
            subtitle="Portfolio"
            title="Recent Work"
            centered
          />
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our portfolio of successfully completed projects across various sectors. Each project demonstrates our commitment to safety, quality, and client satisfaction.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ProjectCard {...project} delay={0} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section background="gray">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Looking for Proven Expertise?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Our portfolio demonstrates our capability to deliver complex asbestos projects safely and efficiently. Get in touch to discuss your requirements.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Footer />
    </div>
  );
}
