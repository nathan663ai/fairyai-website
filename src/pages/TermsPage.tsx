import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <SEO
        title="Terms of Service - FairyAI"
        description="FairyAI terms of service. Understand your rights, content ownership, subscription terms, and usage policies for the FairyAI app."
        canonical="/terms"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 text-center">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Introduction</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the FairyAI mobile application ("the App"), operated by Rebel AI Ltd, a company registered in Scotland, UK (Company Number: SC839626) ("we", "us", "our").
              </p>
              <p className="text-neutral-700 leading-relaxed mb-4">
                By downloading, installing, or using the App, you agree to these Terms. If you do not agree, do not use the App.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Eligibility</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>You must be at least 13 years old to use the App.</li>
                <li>By creating an account, you confirm you meet this age requirement.</li>
                <li>The App itself is for personal, non-commercial use (you may not resell access to the App or use it to provide services to others).</li>
                <li>Content you generate using the App is yours to use as you wish, including for commercial purposes.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Account Registration & Security</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>You must create an account using our secure authentication provider (Supabase) to use most features.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You must notify us immediately at <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a> if you suspect unauthorised access to your account.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. AI-Generated Content</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>The App generates content (stories, images, songs, narrations) using third-party AI services (OpenAI, Replicate, and Suno).</li>
                <li>We apply automated filters to help prevent inappropriate content, but we cannot guarantee all generated content will be suitable for all audiences.</li>
                <li>You must not submit prompts that are illegal, infringing, harmful, or otherwise prohibited under these Terms.</li>
                <li>You are responsible for how you use and share generated content.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. User-Generated Content & Licence</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>You retain full ownership and rights to all content you generate using the App, including stories, characters, images, songs, and narrations.</li>
                <li>You may use, share, modify, and commercialise your generated content without restriction.</li>
                <li>By creating content through the App, you grant Rebel AI Ltd a limited, worldwide, non-exclusive, royalty-free licence solely to host, store, process, and display that content within the App as necessary to provide our services.</li>
                <li>You confirm you have all necessary rights to any content you upload to the App.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Sharing & Downloads</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>The App allows you to share and download your generated content.</li>
                <li>Once you share content externally, it is no longer under our control; you are responsible for where and how you share it.</li>
                <li>Content from the Fairy Corner (classic tales) may be subject to public domain or third-party rights. Classic tales in Fairy Corner are adapted from public domain sources. Musical arrangements are original works.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Subscriptions, Credits, and Payments</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>The App uses a credit system called "fairy dust" to access premium features.</li>
                <li>You may obtain credits via one-off purchase or auto-renewing subscription through the App Store or Google Play.</li>
                <li><strong className="text-neutral-900">Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date. You can manage or cancel your subscription in your device's account settings.</li>
                <li><strong className="text-neutral-900">Refunds:</strong> Purchases are non-refundable except where required by law or via the refund processes provided by the App Store or Google Play.</li>
                <li>Unused credits do not roll over after subscription expiry unless stated in your plan.</li>
                <li>All billing is handled by Apple or Google under their terms.</li>
                <li>Prices shown are in GBP. Actual prices may vary by region and be shown in local currency.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Prohibited Use</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">You must not:</p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Use the App for unlawful purposes or to generate harmful or infringing content.</li>
                <li>Attempt to bypass usage limits or security measures.</li>
                <li>Access or attempt to access another user's content without permission.</li>
                <li>Reverse engineer or attempt to extract the underlying AI models or prompts.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Termination of Account</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>You may delete your account at any time from Settings → Privacy → Delete Account.</li>
                <li>Upon deletion, your account is immediately deactivated and scheduled for permanent deletion after 30 days.</li>
                <li>During the 30-day period, you may contact us to recover your account.</li>
                <li>After 30 days, all your data, including generated content and media files, will be permanently deleted.</li>
                <li>Unused credits are forfeited upon account deletion.</li>
                <li>We may suspend or terminate your account if you breach these Terms.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Intellectual Property</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>The App, its code, design, and branding are the property of Rebel AI Ltd or its licensors.</li>
                <li>You may not copy, modify, distribute, or reverse-engineer any part of the App.</li>
                <li>Generated content belongs to you as outlined in Section 5.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Copyright & DMCA Policy</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                If you believe content in the App infringes your copyright, contact <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a> with:
              </p>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>Your contact details</li>
                <li>A description of the copyrighted work</li>
                <li>Details of the infringing material and where it appears in the App</li>
                <li>A statement that you have a good faith belief the use is unauthorised</li>
              </ul>
              <p className="text-neutral-700 leading-relaxed mb-4">
                We will respond in accordance with applicable law, including the DMCA.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Disclaimers</h2>
              <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
                <li>AI-generated content may contain inaccuracies, errors, or unintended material.</li>
                <li>The App is provided "as is" without warranties of any kind, to the extent permitted by law.</li>
                <li>We do not warrant that generated content will be suitable for any particular purpose.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Limitation of Liability</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Rebel AI Ltd will not be liable for any indirect, incidental, or consequential damages arising from your use of the App.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">14. Governing Law</h2>
              <p className="text-neutral-700 leading-relaxed mb-4">
                These Terms are governed by the laws of Scotland, UK. Disputes will be subject to the exclusive jurisdiction of the Scottish courts.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">15. Contact</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                <p className="text-neutral-700 leading-relaxed mb-0">
                  Email <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a> for questions regarding these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
