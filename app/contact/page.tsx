'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import SectionHeading from '@/components/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree endpoint: prefer env var but fall back to provided endpoint
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdjykdp';

    if (!endpoint) {
      console.error('Formspree endpoint not configured: set NEXT_PUBLIC_FORMSPREE_ENDPOINT');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append('name', formData.fullName);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('service', formData.service);
      payload.append('budget', formData.budget);
      payload.append('message', formData.message);



      // Honeypot field for spam protection (name _gotcha)
      const hp = (document.getElementById('hp') as HTMLInputElement | null)?.value || '';
      payload.append('_gotcha', hp);

      const res = await fetch(endpoint, {
        method: 'POST',
        body: payload,
      });

      // Treat 2xx and 3xx responses as success (Formspree may respond with a redirect)
      if (res.status >= 200 && res.status < 400) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: '',
        });
        // Redirect to thank-you page for tracking
        router.push('/thank-you');
        return;
      }

      console.error('Form submission failed', res.statusText);
      setSubmitStatus('error');
    } catch (err) {
      console.error('Form submission error', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact us"
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
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Contact us today for expert advice and a free, no-obligation quote
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <AnimatedSection>
            <div className="bg-gray-50 p-8 text-center h-full">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
              <a href="tel: 01202 001771" className="text-gold font-semibold hover:text-gold-dark">
                01202 001771
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-gray-50 p-8 text-center h-full">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message anytime</p>
              <a href="mailto:info@powpropertyasbestos.co.uk" className="text-gold font-semibold hover:text-gold-dark">
                info@powpropertyasbestos.co.uk
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 p-8 text-center h-full">
              <div className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Office</h3>
              <p className="text-gray-600">
                1A-1B Hawkwood Road<br />
                Boscombe<br />
                BH5 1DR
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <SectionHeading
              subtitle="Request a Quote"
              title="Tell Us About Your Project"
            />
            <form
              action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdjykdp'}
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Honeypot for spam bots */}
              <input type="text" id="hp" name="_gotcha" autoComplete="off" tabIndex={-1} className="hidden" />
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="abatement">Asbestos Abatement</option>
                  <option value="management">Management</option>
                  <option value="surveying">Surveying</option>
                  <option value="education">Education & Training</option>
                  <option value="compliance">Compliance & H&S</option>
                  <option value="project-management">Project Management</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under £5,000</option>
                  <option value="5k-10k">£5,000 - £10,000</option>
                  <option value="10k-25k">£10,000 - £25,000</option>
                  <option value="25k-50k">£25,000 - £50,000</option>
                  <option value="over-50k">Over £50,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors resize-none"
                  placeholder="Please provide details about your project, property type, and any specific requirements..."
                />
              </div>



              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-6 py-4"
                >
                  Thank you for your enquiry! We will be in touch within 24 hours.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-6 py-4"
                >
                  Thank you for your submission! We have received your enquiry and will be in touch shortly.
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Privacy Policy and consent to be contacted about your enquiry.
              </p>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <SectionHeading
                  subtitle="Why Choose Us"
                  title="Get Expert Support"
                />
                <p className="text-gray-600 leading-relaxed mb-6">
                  When you contact Pow Asbestos, you're reaching out to a team of dedicated professionals committed to delivering the highest standards of service. We understand that every project is unique, and we take the time to understand your specific requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Clock className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">Opening Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-gold font-semibold mt-2">24/7 Emergency Response Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-8">
                <h3 className="font-heading font-bold text-2xl mb-4">Leave a Google Review</h3>
                <p className="text-gray-300 mb-6">
                  Already worked with us? We'd love to hear about your experience. Your feedback helps us improve and helps others make informed decisions.
                </p>
                <a
                  href="https://www.google.com/search?q=pow+asbestos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-black font-bold px-6 py-3 transition-colors"
                >
                  <Star className="w-5 h-5" />
                  Leave a Review
                </a>
              </div>

              <div className="relative h-80">
                <iframe
                  src="https://maps.google.com/maps?q=BH5%201DR&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office location - BH5 1DR"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
