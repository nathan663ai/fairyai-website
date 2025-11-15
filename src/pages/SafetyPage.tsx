import React from 'react';
import DownloadButtons from '../components/ui/DownloadButtons';

const SafetyPage: React.FC = () => {
  const neverDo = [
    {
      title: 'No ads or trackers',
      description: 'We make money from subscriptions, not advertising. No analytics that follow your child, no third-party tracking pixels.'
    },
    {
      title: 'No selling data to third parties',
      description: 'Your family\'s data stays with us. We never sell, rent, or share personal information with advertisers or data brokers.'
    },
    {
      title: 'No storing unnecessary personal information',
      description: 'We only keep what\'s needed to run the service: email, password (hashed), subscription status. No addresses, no phone numbers, no detailed profiles.'
    },
    {
      title: 'We never require photos of your child',
      description: 'Characters are designed to be created from imagination, traits and parent-approved images. You control what goes in.'
    }
  ];

  const activelyEnforce = [
    {
      title: 'Age-based content filters',
      description: 'Every story passes through filters that block violence, fear, explicit content, and substances, tailored to each age group (2-3, 4-6, 7-9, 10-12, 12+).'
    },
    {
      title: 'Age-appropriate word counts and themes',
      description: 'Toddlers get 400-word stories with comfort themes. Teens get 2000-word stories with complex morals. Vocabulary and concepts adapt automatically.'
    },
    {
      title: 'Rate limiting and abuse protection',
      description: 'Per-user, per-IP, per-operation limits prevent abuse. You cannot accidentally rack up huge bills or flood the system.'
    },
    {
      title: 'Input length limits and file size restrictions',
      description: 'Text inputs are capped. File uploads have a 16MB limit. These prevent malicious use and keep the service stable for everyone.'
    },
    {
      title: 'Secure passwords and browser protection',
      description: 'Passwords are encrypted (never stored in plain text). Every page uses browser security features that block malicious scripts and force secure connections.'
    },
    {
      title: 'Soft deletion with recovery window',
      description: 'When you delete your account, we keep it for 30 days in case you change your mind. After that, it\'s permanently removed.'
    },
    {
      title: 'No PII in logs',
      description: 'Our error logging doesn\'t capture personally identifiable information, IP addresses, or sensitive request bodies.'
    }
  ];

  const yourControls = [
    {
      title: 'Transparent Fairy Dust economy',
      description: 'All costs are shown upfront. If generation fails, you get refunded automatically. No hidden fees, no surprise charges.'
    },
    {
      title: 'Full account deletion anytime',
      description: 'Delete your account from the app. Stories, characters, songs: all gone (after the 30-day recovery window).'
    },
    {
      title: 'Language, notification, and marketing preferences',
      description: 'Turn off marketing emails, push notifications, or story update alerts from the Settings screen.'
    },
    {
      title: 'Export and download your stories and audio',
      description: 'Download stories and audio files to keep offline. No lock-in.'
    },
    {
      title: 'No lock-in, no hidden fees',
      description: 'Cancel your subscription anytime. Your existing Fairy Dust stays until you use it or it expires monthly.'
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <svg className="w-16 h-16 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Safety isn't a feature. It's the foundation.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600">
            You're trusting us with bedtime. Here's exactly what we do (and don't do) to earn that trust.
          </p>
        </div>
      </section>

      {/* What We Never Do */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Never Do
            </h2>
            <p className="text-lg text-neutral-600">
              These aren't just policies. They're hard lines we won't cross.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {neverDo.map((item, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-red-600">✗</span>
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Actively Enforce */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <svg className="w-16 h-16 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Actively Enforce
            </h2>
            <p className="text-lg text-neutral-600">
              Technical safeguards running 24/7 to keep FairyAI safe and stable.
            </p>
          </div>

          <div className="space-y-6">
            {activelyEnforce.map((item, index) => (
              <div key={index} className="bg-white border-2 border-soft-green-200 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="text-soft-green-600">✓</span>
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Controls */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <svg className="w-16 h-16 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Your Controls
            </h2>
            <p className="text-lg text-neutral-600">
              You're in charge. Here's what you can control from the app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {yourControls.map((item, index) => (
              <div key={index} className="bg-soft-blue-50 border-2 border-soft-blue-200 rounded-xl p-6">
                <h3 className="font-semibold text-xl text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
            Built on modern infrastructure
          </h2>
          <p className="text-lg text-neutral-700 mb-8 text-center">
            FairyAI runs on industry-leading AI models and secure cloud infrastructure. We use:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">Secure hosting</h3>
              <p className="text-sm text-neutral-700">Enterprise-grade cloud with automatic backups and encryption</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">Modern AI models</h3>
              <p className="text-sm text-neutral-700">Industry-leading systems for stories, images, narration, and music</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="mb-3 flex justify-center">
                <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">Reliable performance</h3>
              <p className="text-sm text-neutral-700">Async processing, circuit breakers, and automatic error recovery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl text-neutral-800 leading-relaxed mb-6 italic">
            "We're parents building for parents. If we wouldn't use it with our kids, we don't ship it."
          </p>
          <p className="text-lg text-neutral-600">
            Nathan, Dad & Founder
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Safety You Can Trust, Stories They'll Love
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Download FairyAI and experience bedtime stories built with your family's safety at the core. Start free today.
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;
