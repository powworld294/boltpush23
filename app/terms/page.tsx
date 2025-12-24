import Navbar from '@/components/Navbar';
import Section from '@/components/Section';

export const metadata = {
  title: 'Terms & Conditions | Pow Asbestos Ltd',
  description: 'Terms and conditions for using Pow Asbestos Ltd services and website.',
};

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Section background="white" className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the services of Pow Asbestos Ltd, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pow Asbestos Ltd provides professional asbestos-related services including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Asbestos surveying and testing</li>
                <li>Asbestos abatement and removal</li>
                <li>Asbestos management services</li>
                <li>Training and education programs</li>
                <li>Health and safety consultancy</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                All services are provided in accordance with current UK regulations and industry standards.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Quotations and Pricing</h2>
              <p className="text-gray-600 leading-relaxed">
                All quotations are valid for 30 days from the date of issue unless otherwise stated. Prices are subject to change based on site conditions, scope changes, or unforeseen circumstances. Any variations will be discussed and agreed upon before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Client Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Providing accurate information about the property and project</li>
                <li>Ensuring safe access to all required areas</li>
                <li>Notifying occupants of scheduled works</li>
                <li>Maintaining property insurance</li>
                <li>Complying with payment terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                Payment terms are net 30 days from invoice date unless otherwise agreed. We reserve the right to charge interest on overdue accounts at a rate of 8% per annum above the Bank of England base rate. For larger projects, staged payments may be required.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Cancellation Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Cancellations must be made in writing. Cancellations made less than 48 hours before scheduled works may incur a cancellation fee of up to 50% of the quoted price to cover mobilization costs.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We maintain comprehensive professional indemnity and public liability insurance. Our liability is limited to the value of the specific service provided, except in cases of proven negligence. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Indirect or consequential losses</li>
                <li>Delays caused by factors beyond our control</li>
                <li>Inaccuracies in information provided by the client</li>
                <li>Third-party actions or omissions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All reports, documents, and materials produced by Pow Asbestos Ltd remain our intellectual property. Clients receive a license to use these materials for the specific project only. Reproduction or redistribution without permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                We treat all client information as confidential and will not disclose it to third parties without consent, except where required by law or professional regulations.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Dispute Resolution</h2>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these terms will be governed by the laws of England and Wales. We encourage resolution through discussion before pursuing formal legal action.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms and Conditions, please contact:
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Pow Property Asbestos Ltd<br />
                1A-1B Hawkwood Road<br />
                Boscombe, UK<br />
                BH5 1DR<br />
                Email: info@powpropertyasbestos.co.uk<br />
                Phone: 01202 001771
              </p>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
