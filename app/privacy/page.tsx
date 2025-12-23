import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export const metadata = {
  title: 'Privacy Policy | Pow Asbestos Ltd',
  description: 'Privacy policy for Pow Asbestos Ltd. Learn how we collect, use, and protect your personal information.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Section background="white" className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Pow Asbestos Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Information We Collect</h2>
              <h3 className="text-2xl font-heading font-bold mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company name and job title</li>
                <li>Project details and requirements</li>
                <li>Payment and billing information</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-2xl font-heading font-bold mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process your enquiries and quotes</li>
                <li>Communicate with you about projects and services</li>
                <li>Improve our website and services</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Service providers who assist our business operations</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Regulatory authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under data protection law, you have rights including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your information</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Email: info@powasbestos.co.uk<br />
                Phone: +44 1234 567890<br />
                Address: 123 Construction Road, London, UK, SW1A 1AA
              </p>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
