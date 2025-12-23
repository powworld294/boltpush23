'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Target, Users, Award, CheckCircle, Heart, Lightbulb } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import StickyQuoteButton from '@/components/StickyQuoteButton';
import Button from '@/components/Button';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize the safety of our team, clients, and the environment in every project we undertake.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality service and maintaining industry-leading standards.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty, building lasting relationships based on trust.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously adopt the latest technologies and methodologies to improve our services.',
  },
];

const team = [
  {
    name: 'Michael Harrison',
    position: 'Managing Director',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'With over 20 years in the asbestos industry, Michael leads our strategic direction and client relationships.',
  },
  {
    name: 'Sarah Chen',
    position: 'Operations Director',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Sarah oversees all operational aspects, ensuring seamless project delivery and regulatory compliance.',
  },
  {
    name: 'David Roberts',
    position: 'Technical Director',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'David brings extensive technical expertise and leads our surveying and testing operations.',
  },
  {
    name: 'Emma Thompson',
    position: 'Health & Safety Manager',
    image: 'https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Emma ensures all projects meet the highest safety standards and regulatory requirements.',
  },
];

const certifications = [
  'HSE Licensed',
  'UKAS Accredited',
  'ISO 9001:2015',
  'ISO 14001:2015',
  'ISO 45001:2018',
  'ARCA Member',
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyQuoteButton />

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Team at work"
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
              About <span className="text-gold">Pow Asbestos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Industry-leading asbestos specialists committed to safety, compliance, and excellence
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionHeading
              subtitle="Our Story"
              title="15 Years of Excellence"
            />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2008, Pow Asbestos Ltd has grown from a small specialist team to become one of the UK's most trusted asbestos management companies. Our journey has been built on a foundation of technical excellence, unwavering commitment to safety, and deep respect for our clients and the communities we serve.
              </p>
              <p>
                We understand that dealing with asbestos requires not only technical expertise but also careful planning, clear communication, and meticulous attention to detail. Our comprehensive range of services covers every aspect of asbestos management, from initial surveys and risk assessments to complete removal and ongoing management programs.
              </p>
              <p>
                Today, we work with residential clients, commercial businesses, public sector organizations, and construction firms across the UK. Our reputation has been earned through consistent delivery of exceptional service, maintaining the highest safety standards, and building long-term relationships based on trust and reliability.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative h-[600px]">
              <Image
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Company history"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              subtitle="Mission & Vision"
              title="Our Purpose & Direction"
              centered
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 border-l-4 border-gold">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide safe, compliant, and professional asbestos services that protect people, property, and the environment. We are dedicated to exceeding industry standards and client expectations through technical excellence, innovation, and unwavering commitment to safety.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 border-l-4 border-gold">
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the UK's most trusted and respected asbestos management company, recognized for our technical expertise, commitment to safety, and the lasting relationships we build with our clients. We aim to set the standard for excellence in our industry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Section>

      <Section background="white">
        <AnimatedSection>
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            centered
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 text-center"
            >
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <AnimatedSection>
          <SectionHeading
            subtitle="Our Team"
            title="Meet The Experts"
            centered
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeading
              subtitle="Accreditations"
              title="Certified & Compliant"
              centered
            />
            <p className="text-center text-gray-600 mb-12">
              We hold all necessary accreditations and certifications to operate at the highest industry standards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 flex items-center gap-4"
              >
                <CheckCircle className="w-8 h-8 text-gold flex-shrink-0" />
                <span className="font-heading font-bold text-lg">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="black" className="text-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Work With Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Partner with a team that combines experience, expertise, and a commitment to excellence.
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
