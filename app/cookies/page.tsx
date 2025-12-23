import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export const metadata = {
  title: 'Cookies Policy | Pow Asbestos Ltd',
  description: 'Learn about how Pow Asbestos Ltd uses cookies on our website.',
};

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Section background="white" className="pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-heading font-bold mb-6">Cookies Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics and track website usage</li>
                <li>To remember your preferences</li>
                <li>To improve user experience</li>
                <li>To understand how visitors interact with our site</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Types of Cookies We Use</h2>

              <h3 className="text-2xl font-heading font-bold mb-3">Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-3">Performance Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us improve how our website works.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-3">Functionality Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies allow the website to remember choices you make (such as your language preference) and provide enhanced, more personal features.
              </p>

              <h3 className="text-2xl font-heading font-bold mb-3">Analytics Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                We use analytics cookies to understand how visitors interact with our website. This information helps us improve our content and user experience.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party services that set cookies on our website, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Google Analytics for website traffic analysis</li>
                <li>Social media platforms for sharing content</li>
                <li>Map services for location information</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                These third parties have their own privacy policies and cookie policies.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>

              <h3 className="text-2xl font-heading font-bold mb-3">Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>

              <h3 className="text-2xl font-heading font-bold mb-3">Impact of Blocking Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                Please note that if you choose to block cookies, some features of our website may not function properly, and your user experience may be affected.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Cookie Lifespan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies may be session cookies (deleted when you close your browser) or persistent cookies (remain on your device for a set period or until you delete them).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our business practices. Please check this page periodically for updates.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Email: info@powasbestos.co.uk<br />
                Phone: +44 1234 567890<br />
                Address: 123 Construction Road, London, UK, SW1A 1AA
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold mb-4">Useful Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For more information about cookies and how to manage them, visit:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>www.aboutcookies.org</li>
                <li>www.allaboutcookies.org</li>
                <li>Information Commissioner's Office (ICO) website</li>
              </ul>
            </section>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
