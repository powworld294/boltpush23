'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, FileCheck, GraduationCap, Briefcase, ClipboardCheck, HardHat, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StickyQuoteButton from '@/components/StickyQuoteButton';
import Button from '@/components/Button';

const services = [
  {
    id: 'abatement',
    icon: Shield,
    title: 'Asbestos Abatement',
    description: 'Professional removal and disposal of asbestos-containing materials',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Licensed asbestos removal',
      'Safe encapsulation services',
      'Air monitoring and clearance testing',
      'Proper waste disposal and documentation',
      'Minimal disruption to operations',
      'Full regulatory compliance',
    ],
    details: 'Our asbestos abatement services are carried out by fully licensed and trained professionals using the latest equipment and techniques. We follow strict safety protocols to ensure the protection of building occupants, our team, and the environment. Every project is completed with comprehensive documentation and air clearance certificates.',
  },
  {
    id: 'management',
    icon: Briefcase,
    title: 'Asbestos Management',
    description: 'Comprehensive management programs for long-term safety',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Asbestos register development',
      'Management plan creation',
      'Regular monitoring and inspections',
      'Risk assessment updates',
      'Staff training and awareness',
      'Regulatory compliance support',
    ],
    details: 'Our management services help you fulfill your duty to manage asbestos in accordance with the Control of Asbestos Regulations. We develop tailored management plans, maintain asbestos registers, and provide ongoing support to ensure your property remains safe and compliant.',
  },
  {
    id: 'surveying',
    icon: FileCheck,
    title: 'Asbestos Surveying',
    description: 'Detailed surveys to identify and assess asbestos materials',
    image: 'https://images.pexels.com/photos/5989936/pexels-photo-5989936.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Management surveys (Type 2)',
      'Refurbishment surveys (Type 3)',
      'Demolition surveys (Type 3)',
      'Re-inspection surveys',
      'UKAS accredited analysis',
      'Comprehensive reporting',
    ],
    details: 'Our UKAS accredited surveyors conduct thorough inspections to identify all asbestos-containing materials. We provide detailed reports with clear recommendations, photographs, and asbestos register information to help you make informed decisions about your property.',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Industry-certified training programs for all levels',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Asbestos awareness training',
      'Duty to manage training',
      'Licensed contractor courses',
      'Supervisor training',
      'Refresher courses',
      'Bespoke training programs',
    ],
    details: 'We offer a comprehensive range of asbestos training courses designed to meet the needs of building managers, contractors, and anyone who may encounter asbestos in their work. All our courses are delivered by experienced professionals and meet current regulatory requirements.',
  },
  {
    id: 'compliance',
    icon: ClipboardCheck,
    title: 'Compliance & H&S',
    description: 'Expert guidance on regulations and safety standards',
    image: 'https://images.pexels.com/photos/5582591/pexels-photo-5582591.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Regulatory compliance audits',
      'Health & safety consultancy',
      'Policy development',
      'Documentation review',
      'Best practice guidance',
      'Expert witness services',
    ],
    details: 'Our compliance specialists provide expert guidance to ensure your organization meets all relevant asbestos regulations. We conduct thorough audits, develop policies and procedures, and offer ongoing support to maintain the highest health and safety standards.',
  },
  {
    id: 'project-management',
    icon: HardHat,
    title: 'Project Management',
    description: 'End-to-end coordination of complex asbestos projects',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200',
    features: [
      'Full project planning and coordination',
      'Contractor selection and management',
      'Budget control and reporting',
      'Timeline management',
      'Quality assurance',
      'Stakeholder communication',
    ],
    details: 'Our experienced project managers oversee every aspect of your asbestos project, from initial planning through to completion. We coordinate all activities, manage contractors, ensure compliance, and keep you informed throughout the process.',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyQuoteButton />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Services"
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
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive asbestos solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading
              subtitle="What We Do"
              title="Complete Asbestos Solutions"
              centered
            />
            <p className="text-gray-600 leading-relaxed">
              From initial surveys to complete removal and ongoing management, we provide a full range of asbestos services designed to keep your property safe, compliant, and protected.
            </p>
          </div>
        </AnimatedSection>

        {services.map((service, index) => (
          <div key={service.id} id={service.id}>
            <Section background={index % 2 === 0 ? 'white' : 'gray'} className="py-16">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {index % 2 === 0 ? (
                  <>
                    <AnimatedSection>
                      <div className="relative h-[500px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                      <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-gold" />
                      </div>
                      <h2 className="text-4xl font-heading font-bold mb-4">{service.title}</h2>
                      <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                      <p className="text-gray-600 leading-relaxed mb-8">{service.details}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                        Enquire About This Service
                      </Button>
                    </AnimatedSection>
                  </>
                ) : (
                  <>
                    <AnimatedSection delay={0.2}>
                      <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-gold" />
                      </div>
                      <h2 className="text-4xl font-heading font-bold mb-4">{service.title}</h2>
                      <p className="text-xl text-gray-600 mb-6">{service.description}</p>
                      <p className="text-gray-600 leading-relaxed mb-8">{service.details}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                        Enquire About This Service
                      </Button>
                    </AnimatedSection>

                    <AnimatedSection>
                      <div className="relative h-[500px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </AnimatedSection>
                  </>
                )}
              </div>
            </Section>
          </div>
        ))}
      </Section>

      <Section background="black" className="text-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss your requirements and receive a tailored solution.
            </p>
            <Button variant="secondary" size="lg" onClick={() => window.location.href = '/contact'}>
              Request a Quote
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      <Footer />
    </div>
  );
}
