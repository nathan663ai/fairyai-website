import React, { useEffect } from 'react';
import DownloadButtons from '../components/ui/DownloadButtons';

const DeletePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
          Delete Your FairyAI Account
        </h1>
        <p className="text-lg text-neutral-600 mb-10">
          We're sad to see you go. Here's everything you need to know about deleting your FairyAI account.
        </p>

        {/* Subscription Warning */}
        <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-3 text-amber-800">
            Important: Subscription Warning
          </h2>
          <p className="mb-3 text-amber-900">
            Deleting your account does NOT cancel your App Store or Google Play subscription. You must cancel your subscription separately to avoid future charges:
          </p>
          <ul className="ml-6 text-amber-900 space-y-2 list-disc">
            <li><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → FairyAI → Cancel Subscription</li>
            <li><strong>Android:</strong> Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → FairyAI → Cancel Subscription</li>
          </ul>
        </div>

        {/* How to Delete */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900">
            How to Delete Your Account
          </h2>
          <p className="mb-4 text-neutral-700">
            You can delete your FairyAI account directly from the app:
          </p>
          <ol className="ml-6 text-neutral-700 space-y-2 list-decimal">
            <li>Open the FairyAI app</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Select <strong>Privacy & Data</strong></li>
            <li>Tap <strong>Delete Account</strong> (shown in red)</li>
            <li>Read the warnings carefully and confirm</li>
            <li>Enter your password to verify it's you</li>
            <li>Tap the final delete confirmation</li>
          </ol>
        </div>

        {/* Can't Access App */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900">
            Can't Access the App?
          </h2>
          <p className="mb-4 text-neutral-700">
            If you can't access the app for any reason, you can request account deletion by email:
          </p>
          <p className="text-neutral-700">
            <strong>Email:</strong>{' '}
            <a
              href="mailto:legal@fairyai.co.uk?subject=Account%20Deletion%20Request&body=Hi%20FairyAI%20team,%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0AAccount%20email:%20%0A%0AThank%20you."
              className="text-soft-blue-600 hover:text-soft-blue-700 underline"
            >
              legal@fairyai.co.uk
            </a>
          </p>
          <p className="text-neutral-500 text-sm mt-2">
            Please include your account email address in your request so we can verify your identity.
          </p>
        </div>

        {/* What Gets Deleted */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900">
            What Gets Deleted
          </h2>
          <p className="mb-4 text-neutral-700">
            When you delete your account, the following will be permanently removed after the 30-day grace period:
          </p>
          <ul className="ml-6 text-neutral-700 space-y-2 list-disc">
            <li>All your created stories and story history</li>
            <li>Custom characters you've created (including all 6 art styles)</li>
            <li>Generated songs and narrations</li>
            <li>Account preferences and settings</li>
            <li>Subscription and purchase history</li>
            <li>Support tickets and feedback</li>
            <li>Any remaining Fairy Dust credits</li>
          </ul>
        </div>

        {/* 30-Day Grace Period */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900">
            30-Day Grace Period
          </h2>
          <p className="mb-4 text-neutral-700">
            We understand that sometimes deletions are accidental. Here's what happens:
          </p>
          <ul className="ml-6 text-neutral-700 space-y-3 list-none">
            <li>
              <strong>Immediately:</strong> Your account is deactivated and you can no longer log in
            </li>
            <li>
              <strong>Days 1-30:</strong> Your data is retained but inaccessible. You can email{' '}
              <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:text-soft-blue-700 underline">
                legal@fairyai.co.uk
              </a>{' '}
              to recover your account
            </li>
            <li>
              <strong>After 30 days:</strong> All your data is permanently deleted from our servers and cannot be recovered
            </li>
          </ul>
          <p className="text-neutral-500 text-sm mt-4">
            <strong>Note:</strong> This grace period is for your protection and is required by data protection laws.
          </p>
        </div>

        {/* Having Issues */}
        <div className="bg-soft-green-50 border border-soft-green-300 rounded-xl p-6 mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-neutral-900">
            Having Issues? Talk to Us First
          </h2>
          <p className="mb-4 text-neutral-700">
            Before you delete your account, we'd love to help resolve any issues you're experiencing. Most problems can be fixed quickly:
          </p>
          <ul className="ml-6 text-neutral-700 space-y-2 list-disc mb-6">
            <li>Not happy with story quality? We can adjust settings</li>
            <li>Concerned about billing? We can help clarify charges</li>
            <li>App not working properly? We can troubleshoot</li>
            <li>Privacy concerns? We can explain what data we collect</li>
          </ul>
          <a
            href="mailto:support@fairyai.co.uk?subject=%5BFairyAI%20Support%5D&body=Hi%20FairyAI%20team,%0A%0AI'm%20considering%20deleting%20my%20account%20because:%0A%0A%0AThanks!"
            className="inline-block bg-soft-green-600 hover:bg-soft-green-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Contact Support Instead
          </a>
        </div>
      </main>

      {/* Download CTA */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Changed Your Mind?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            We'd love to have you back. Download FairyAI and create magical bedtime stories.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default DeletePage;
