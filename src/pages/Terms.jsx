import { Link } from 'react-router-dom';
import getIcon from '../utils/iconUtils';

const Terms = () => {
  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-900">
      <div className="container-custom py-12 md:py-16">
        {/* Header with navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="flex items-center group">
            <ArrowLeftIcon className="w-5 h-5 mr-2 text-primary transition-transform group-hover:-translate-x-1" />
            <span className="text-primary font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center">
            <span className="text-surface-500 dark:text-surface-400 text-sm">Last Updated: June 15, 2023</span>
          </div>
        </div>

        {/* Main content */}
        <div className="card p-8 md:p-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text">Terms of Service</h1>
          
          <p className="text-surface-600 dark:text-surface-300 mb-8">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the 
            DropVault service operated by DropVault Inc. ("us", "we", "our").
          </p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">1. Acceptance of Terms</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                  you may not access the service.
                </p>
                <p className="text-surface-700 dark:text-surface-300">
                  These Terms apply to all visitors, users, and others who access or use our service.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">2. Accounts & Registration</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  When you create an account with us, you must provide accurate, complete, and current information at all times. 
                  Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our service.
                </p>
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  You are responsible for safeguarding the password that you use to access the service and for any activities or actions 
                  under your password.
                </p>
                <p className="text-surface-700 dark:text-surface-300">
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any 
                  breach of security or unauthorized use of your account.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">3. Content & User Files</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  Our service allows you to upload, store, share, and otherwise make available certain information, text, graphics, 
                  or other material ("Content"). You are responsible for the Content that you upload to the service, including its 
                  legality, reliability, and appropriateness.
                </p>
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  By uploading Content, you grant us the right to store, process, and display your Content solely for the purpose 
                  of providing the service to you. We do not claim ownership of your Content.
                </p>
                <p className="text-surface-700 dark:text-surface-300">
                  You represent and warrant that you own or have the necessary rights to use and authorize us to use all patent, 
                  trademark, trade secret, copyright or other proprietary rights in and to any and all Content.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">4. Prohibited Uses</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  You agree not to use the service to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-surface-700 dark:text-surface-300 mb-3">
                  <li>Upload, share, or distribute any Content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, or otherwise objectionable</li>
                  <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                  <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                  <li>Upload, share, or distribute any Content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party</li>
                </ul>
                <p className="text-surface-700 dark:text-surface-300">
                  We reserve the right to terminate your access to the service immediately, without prior notice, if we determine in our sole discretion 
                  that you have violated these Terms.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">5. Intellectual Property</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  The service and its original content (excluding Content provided by users), features, and functionality are and will remain 
                  the exclusive property of DropVault Inc. and its licensors. The service is protected by copyright, trademark, and other 
                  laws of both the United States and foreign countries.
                </p>
                <p className="text-surface-700 dark:text-surface-300">
                  Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of DropVault Inc.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">6. Limitation of Liability</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  In no event shall DropVault Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, 
                  incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-surface-700 dark:text-surface-300 mb-3">
                  <li>Your access to or use of or inability to access or use the service</li>
                  <li>Any conduct or content of any third party on the service</li>
                  <li>Any content obtained from the service</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
                <p className="text-surface-700 dark:text-surface-300">
                  This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, 
                  even if we have been advised of the possibility of such damage.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">7. Changes to Terms</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300 mb-3">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any 
                  changes by posting the new Terms on this page.
                </p>
                <p className="text-surface-700 dark:text-surface-300">
                  Your continued use of the service after any such changes constitutes your acceptance of the new Terms. If you do not agree 
                  to any of these terms or any future version of the Terms, do not use or access (or continue to access) the service.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">8. Governing Law</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300">
                  These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its 
                  conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of 
                  those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions 
                  of these Terms will remain in effect.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-surface-800 dark:text-surface-100">9. Contact Us</h2>
              <div className="pl-4 border-l-2 border-primary-200 dark:border-primary-800">
                <p className="text-surface-700 dark:text-surface-300">
                  If you have any questions about these Terms, please contact us at <a href="mailto:legal@dropvault.com" className="text-primary hover:underline">legal@dropvault.com</a>.
                </p>
              </div>
            </section>
          </div>
          
          {/* Footer with accept button */}
          <div className="mt-12 text-center">
            <Link to="/" className="btn btn-primary px-6 py-3">
              I Accept the Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icon declarations
const ArrowLeftIcon = getIcon("ArrowLeft");

export default Terms;