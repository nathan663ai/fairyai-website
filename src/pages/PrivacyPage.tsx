import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="Privacy Policy - FairyAI"
        description="FairyAI privacy policy. Learn how we protect your data, what information we collect, and your rights under UK GDPR. We never sell your data."
        canonical="/privacy"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 text-center">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-neutral-500 text-sm mb-8 pb-6 border-b-2 border-neutral-200">
            Last updated: 11th August 2025
          </p>

          <div className="prose prose-neutral max-w-none">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Who We Are</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                FairyAI is operated by Rebel AI Ltd, registered in Scotland, UK (Company Number: SC839626). Contact: <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a>.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1.5 How FairyAI Works</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                FairyAI is designed for parents, guardians, and caregivers to use on their own devices to create personalised stories, characters, and songs for children ages 2-12.
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The app user is the adult, not the child. We collect data about your account and usage, not about the children who listen to or enjoy the content you create.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Information We Collect</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">We collect:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li><strong className="text-neutral-900">Account Information:</strong> Email, name, age confirmation (13+).</li>
                <li><strong className="text-neutral-900">Generated Content:</strong> Stories, characters, images, songs, narrations you create, including prompts and uploaded images.</li>
                <li><strong className="text-neutral-900">Device Information:</strong> Device type, operating system, device tokens for push notifications.</li>
                <li><strong className="text-neutral-900">Usage Data:</strong> Features used, content viewed, generation history, reading time, completion rates.</li>
                <li><strong className="text-neutral-900">Subscription Data:</strong> Transaction IDs and subscription status from App Store/Google Play (we do not receive payment card details).</li>
                <li><strong className="text-neutral-900">Technical Data:</strong> Temporary IP addresses for security and rate limiting (retained in server logs for 7 days).</li>
                <li><strong className="text-neutral-900">Uploaded Images:</strong> When using photo-to-character feature, images are processed and deleted within 24 hours.</li>
                <li><strong className="text-neutral-900">Analytics:</strong> We use PostHog to collect anonymous usage analytics to improve the app. This includes which features are used and general app performance. No personal data is collected or shared.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                <strong className="text-neutral-900">Note on Children's Information:</strong><br />
                We do not collect personal information about children. When you create content for a child (e.g., a character based on your child), you control what information is included. We recommend not including full names, exact ages, or identifying information about your child in generated content.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. How We Use Your Data</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Provide and personalise the App's features.</li>
                <li>Generate AI content based on your prompts.</li>
                <li>Send push notifications about content completion and app updates (with your permission).</li>
                <li>Manage your account, subscription, and fairy dust credits.</li>
                <li>Improve the App through internal analytics.</li>
                <li>Ensure security and prevent abuse.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                <strong className="text-neutral-900">Legal Basis for Processing (GDPR):</strong><br />
                We process your data based on:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li><strong className="text-neutral-900">Contract:</strong> To provide the services you've requested</li>
                <li><strong className="text-neutral-900">Legitimate interests:</strong> To improve our services and ensure security</li>
                <li><strong className="text-neutral-900">Consent:</strong> For push notifications and marketing (where applicable)</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Local Storage</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">The App stores on your device:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Authentication tokens</li>
                <li>User preferences (language, theme, font size)</li>
                <li>Draft content and wizard progress</li>
                <li>Cached content for offline access</li>
                <li>Onboarding status</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                This data remains on your device unless you delete the App.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Push Notifications</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">With your permission, we send notifications for:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Content generation completion</li>
                <li>Subscription and account updates</li>
                <li>New features and app updates</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                You can disable notifications in your device settings at any time.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Sharing of Data</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">We share necessary data with:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li><strong className="text-neutral-900">Supabase</strong> – Authentication and database services (UK/EU)</li>
                <li><strong className="text-neutral-900">AWS S3</strong> – Media storage (encrypted)</li>
                <li><strong className="text-neutral-900">OpenAI</strong> – Story and narration generation (prompts and content)</li>
                <li><strong className="text-neutral-900">Replicate</strong> – Character image generation (character descriptions)</li>
                <li><strong className="text-neutral-900">Suno</strong> – Song generation (song prompts)</li>
                <li><strong className="text-neutral-900">Firebase</strong> – Push notification delivery</li>
                <li><strong className="text-neutral-900">PostHog</strong> – Anonymous analytics (feature usage, app performance)</li>
                <li><strong className="text-neutral-900">App Store / Google Play</strong> – Payment processing</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We do not sell your personal data to third parties.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. International Transfers</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Your data may be processed in the UK, EU, and US by our service providers. We ensure appropriate safeguards are in place for all transfers.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Data Security</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">We use industry-standard security measures including:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Encrypted data transmission (HTTPS)</li>
                <li>Secure authentication (Supabase Auth)</li>
                <li>Encrypted media storage (AWS S3)</li>
                <li>Rate limiting and security monitoring</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Data Retention</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li><strong className="text-neutral-900">Active accounts:</strong> Data retained while account is active</li>
                <li><strong className="text-neutral-900">Deleted accounts:</strong> 30-day recovery period, then permanent deletion</li>
                <li><strong className="text-neutral-900">Server logs:</strong> 7 days (may contain IP addresses)</li>
                <li><strong className="text-neutral-900">Generated content:</strong> Deleted with account after 30-day period</li>
                <li><strong className="text-neutral-900">Uploaded images:</strong> Deleted within 24 hours of upload</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Your Rights (UK GDPR)</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and all associated data</li>
                <li>Export your data in a portable format</li>
                <li>Object to certain processing</li>
                <li>Complain to the UK Information Commissioner's Office (ICO)</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To exercise these rights, email <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a>.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Your Rights (California Residents)</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                California residents have additional rights under CCPA including the right to opt-out of data sales. We do not sell your personal data.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Children's Privacy</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>The App requires users to be 13 or older.</li>
                <li>We do not knowingly collect data from children under 13.</li>
                <li>If we discover a user is under 13, we will delete their account.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Account Deletion</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Delete your account via Settings → Privacy → Delete Account</li>
                <li>Immediate deactivation with 30-day recovery period</li>
                <li>After 30 days: permanent deletion of all data including media files</li>
                <li>Email <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a> within 30 days to recover a deleted account</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">14. Data Breach Notification</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If a breach affecting your personal data occurs, we will notify affected users via email and the UK ICO within 72 hours as required by law.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">15. Changes to This Policy</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We may update this Privacy Policy. We will notify you of significant changes via the App or email.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">16. Contact</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                <p className="text-neutral-700 leading-relaxed mb-2">For privacy questions, requests, or concerns:</p>
                <p className="text-neutral-700 leading-relaxed mb-2">
                  <strong className="text-neutral-900">Email:</strong> <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a>
                </p>
                <p className="text-neutral-700 leading-relaxed mb-2">
                  <strong className="text-neutral-900">Data Protection Officer:</strong> <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a>
                </p>
                <p className="text-neutral-700 leading-relaxed mb-0">
                  <strong className="text-neutral-900">Address:</strong> Rebel AI Ltd, Scotland, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
