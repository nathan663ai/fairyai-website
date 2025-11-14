import React, { useEffect } from 'react';

const AccountDeletePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Delete Your Account
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We're sad to see you go. Here's everything you need to know about deleting your FairyAI account.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Subscription Warning */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6">
            <p className="text-amber-900 font-semibold mb-3">
              ⚠️ Important: Subscription Warning
            </p>
            <p className="text-amber-800 mb-3">
              Deleting your account does NOT cancel your App Store or Google Play subscription. You must cancel your subscription separately to avoid future charges:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-amber-800">
              <li><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → FairyAI → Cancel Subscription</li>
              <li><strong>Android:</strong> Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → FairyAI → Cancel Subscription</li>
            </ul>
          </div>

          {/* How to Delete */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">🗑️ How to Delete Your Account</h2>
            <p className="text-neutral-700 mb-4">
              You can delete your FairyAI account directly from the app:
            </p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
              <ol className="list-decimal ml-5 space-y-2 text-neutral-700">
                <li>Open the FairyAI app</li>
                <li>Go to <strong>Settings</strong></li>
                <li>Select <strong>Privacy & Data</strong></li>
                <li>Tap <strong>Delete Account</strong> (shown in red)</li>
                <li>Read the warnings carefully and confirm</li>
                <li>Enter your password to verify it's you</li>
                <li>Tap the final delete confirmation</li>
              </ol>
            </div>
          </div>

          {/* Can't Access App */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">📧 Can't Access the App?</h2>
            <p className="text-neutral-700 mb-4">
              If you can't access the app for any reason, you can request account deletion by email:
            </p>
            <div className="bg-soft-blue-50 border border-soft-blue-200 rounded-lg p-5">
              <p className="text-neutral-700 mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:legal@fairyai.co.uk?subject=Account%20Deletion%20Request&body=Hi%20FairyAI%20team,%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0AAccount%20email:%20%0A%0AThank%20you."
                  className="text-soft-blue-600 hover:underline font-medium"
                >
                  legal@fairyai.co.uk
                </a>
              </p>
              <p className="text-neutral-600 text-sm mb-0">
                Please include your account email address in your request so we can verify your identity.
              </p>
            </div>
          </div>

          {/* What Gets Deleted */}
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">📊 What Gets Deleted</h2>
            <p className="text-neutral-700 mb-4">
              When you delete your account, the following will be permanently removed after the 30-day grace period:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-neutral-700">
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
          <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">⏱️ 30-Day Grace Period</h2>
            <p className="text-neutral-700 mb-4">
              We understand that sometimes deletions are accidental. Here's what happens:
            </p>
            <ul className="list-disc ml-6 space-y-3 text-neutral-700 mb-4">
              <li>
                <strong className="text-neutral-900">Immediately:</strong> Your account is deactivated and you can no longer log in
              </li>
              <li>
                <strong className="text-neutral-900">Days 1-30:</strong> Your data is retained but inaccessible. You can email{' '}
                <a href="mailto:legal@fairyai.co.uk" className="text-soft-blue-600 hover:underline">legal@fairyai.co.uk</a> to recover your account
              </li>
              <li>
                <strong className="text-neutral-900">After 30 days:</strong> All your data is permanently deleted from our servers and cannot be recovered
              </li>
            </ul>
            <p className="text-neutral-600 text-sm">
              <strong>Note:</strong> This grace period is for your protection and is required by data protection laws.
            </p>
          </div>

          {/* Having Issues */}
          <div className="bg-soft-green-50 border border-soft-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">💬 Having Issues? Talk to Us First</h2>
            <p className="text-neutral-700 mb-4">
              Before you delete your account, we'd love to help resolve any issues you're experiencing. Most problems can be fixed quickly:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-neutral-700 mb-5">
              <li>Not happy with story quality? We can adjust settings</li>
              <li>Concerned about billing? We can help clarify charges</li>
              <li>App not working properly? We can troubleshoot</li>
              <li>Privacy concerns? We can explain what data we collect</li>
            </ul>
            <a
              href="mailto:support@fairyai.co.uk?subject=%5BFairyAI%20Support%5D&body=Hi%20FairyAI%20team,%0A%0AI'm%20considering%20deleting%20my%20account%20because:%0A%0A%0AThanks!"
              className="inline-block bg-soft-green-500 hover:bg-soft-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Support Instead
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountDeletePage;
