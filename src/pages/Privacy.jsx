import { Link } from 'react-router-dom';
import getIcon from '../utils/iconUtils';

function Privacy() {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 sticky top-0 z-10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <DatabaseIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-surface-800 dark:text-white">DropVault</span>
            </Link>
            <Link to="/" className="btn btn-outline py-2 px-4 text-sm">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 pb-4 border-b border-surface-200 dark:border-surface-700">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-surface-700 dark:text-surface-300">
            <section>
              <p className="mb-4">Last Updated: May 10, 2024</p>
              <p>
                This Privacy Policy describes how DropVault ("we", "our", or "us") collects, uses, and discloses your 
                personal information when you visit, use our services, or otherwise interact with us. Please read this 
                policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Information We Collect
              </h2>
              <div className="space-y-3">
                <p>
                  We collect several types of information from and about users of our platform, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <span className="font-medium text-surface-800 dark:text-surface-200">Personal Information:</span> Name, email address, phone number, billing 
                    address, and payment information when you register for an account or subscribe to our services.
                  </li>
                  <li>
                    <span className="font-medium text-surface-800 dark:text-surface-200">Usage Data:</span> Information about how you use our platform, including 
                    your login history, files accessed, storage usage, and features used.
                  </li>
                  <li>
                    <span className="font-medium text-surface-800 dark:text-surface-200">Device Information:</span> Information about the device you use to 
                    access our services, including IP address, browser type, operating system, and device identifiers.
                  </li>
                  <li>
                    <span className="font-medium text-surface-800 dark:text-surface-200">Content:</span> The files, documents, and other content you store, 
                    upload, or share using our services.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                How We Use Your Information
              </h2>
              <div className="space-y-3">
                <p>We use the information we collect for various purposes, including to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and complete transactions</li>
                  <li>Send you technical notices, updates, security alerts, and administrative messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Personalize your experience and deliver content relevant to your interests</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include encryption 
                of data at rest and in transit, regular security assessments, access controls, and employee training.
              </p>
              <p className="mt-3">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission 
                over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. When determining the retention period, we take into 
                account the nature of the information, the potential risk of harm from unauthorized use or disclosure, the purposes for 
                which we process the data, and applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Your Rights and Choices
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>The right to access, update, or delete your information</li>
                <li>The right to rectification if your information is inaccurate or incomplete</li>
                <li>The right to object to our processing of your personal information</li>
                <li>The right to request that we restrict the processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our platform and hold certain information. 
                Cookies are files with a small amount of data that may include an anonymous unique identifier. They are sent to 
                your browser from a website and stored on your device.
              </p>
              <p className="mt-3">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
                do not accept cookies, you may not be able to use some portions of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Third-Party Services
              </h2>
              <p>
                Our platform may contain links to third-party websites or services that are not owned or controlled by us. We have 
                no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
                websites or services. We encourage you to review the privacy policies of any third-party websites or services that 
                you visit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
              </p>
              <p className="mt-3">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are 
                effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at: <a href="mailto:privacy@dropvault.com" className="text-primary hover:text-primary-600 transition-colors">privacy@dropvault.com</a>
              </p>
            </section>
          </div>
        </div>
        <div className="pb-16"></div>
      </div>
    </div>
  );
}

// Icon declarations
const DatabaseIcon = getIcon("Database");
const ArrowLeftIcon = getIcon("ArrowLeft");

export default Privacy;