import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButtons from '../components/ui/DownloadButtons';

const FeaturesPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What if I don't like a generated story?",
      answer: "You'll need to generate a new story, which will cost Fairy Dust again. However, if generation fails due to a technical issue (timeout, API error, etc.), you'll receive an automatic refund. We recommend using the Story Wizard for more control over the output."
    },
    {
      question: "Can I edit stories after creation?",
      answer: "No, you can't edit stories directly. However, you can continue any story into a new chapter for just 1 Fairy Dust. Each continuation remembers the previous chapters and maintains continuity. Stories are automatically grouped into chapter books in your library."
    },
    {
      question: "Do my stories expire?",
      answer: "No! All your generated stories, characters, and songs are stored permanently. You can access them anytime from your library. Only your monthly Fairy Dust allocation expires at the end of each billing cycle, but purchased Dust top-ups never expire."
    },
    {
      question: "Can siblings share one account?",
      answer: "Not yet. FairyAI currently uses single-user accounts. Child profiles are planned for Q1 2026, which will allow multiple children per parent account with separate libraries and preferences. For now, each child needs their own account."
    },
    {
      question: "What happens if generation fails?",
      answer: "If a story, character, song, or narration fails to generate due to a technical error, you'll receive an automatic Fairy Dust refund within seconds. The system detects failures (timeouts, API errors, invalid outputs) and refunds you immediately. No support ticket needed."
    },
    {
      question: "Can I print or download stories?",
      answer: "Yes! You can download stories as PDFs and narrations as MP3 files for offline use. Perfect for printing bedtime stories, saving favourites, or listening during car rides without internet. All your content is yours to keep."
    },
    {
      question: "Is my child's data safe? How do you handle privacy?",
      answer: "Absolutely. FairyAI is COPPA-compliant and takes data privacy seriously. We never sell your data to third parties, never use your child's information for advertising, and all data is encrypted in transit and at rest. Stories are generated using age-appropriate AI models with strict content filters. You can delete your account and all associated data at any time with a simple request. See our Privacy Policy for full details.",
      hasLink: true
    },
    {
      question: "How does FairyAI ensure content is age-appropriate?",
      answer: "Every story, character, and song is generated using age-specific AI models with built-in content filters. When you select your child's age (2-3, 4-6, 7-9, 10-12, or 12+), FairyAI automatically adjusts vocabulary, sentence complexity, and themes. All generated content is screened to prevent inappropriate topics, violence, or scary elements. Our Fairy Corner library is curated by our team to ensure every classic story is suitable for young children."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes! You can cancel your subscription at any time from the app settings with no cancellation fees. Your subscription remains active until the end of your current billing period, and you keep access to all your generated stories, characters, and songs forever, even after cancelling. Any purchased Dust top-ups never expire and remain available to use anytime."
    },
    {
      question: "Can I use stories offline once they're generated?",
      answer: "Yes! Once you generate a story, it's saved to your library and available offline for reading. You can also download narrations as MP3 files to your device for offline listening during car rides, flights, or anywhere without internet. PDFs can be downloaded for printing physical copies."
    },
    {
      question: "How long does it take to generate a story, character, or song?",
      answer: "Stories generate in 30-60 seconds depending on length and complexity. Characters take about 60 seconds to generate with custom artwork. Songs (with lyrics and music) take approximately 2-3 minutes. Narrations add an extra 30-45 seconds. All generation times may vary slightly based on server load, but you'll see a progress indicator while content is being created."
    },
    {
      question: "What happens when I run out of Fairy Dust?",
      answer: "You can still access all your existing stories, characters, and songs in your library. You just won't be able to generate new content until your next monthly refill or until you purchase a Dust top-up (Sprinkle, Pouch, or Chest). The Fairy Corner library of 100+ classic stories remains fully accessible regardless of your Dust balance. Top-ups never expire, so you can stock up anytime."
    },
    {
      question: "How do persistent characters work?",
      answer: "When you create a character (2 Dust), it's saved to your character library with all traits, abilities, and artwork. You can then use this character in unlimited stories at no extra cost: just the normal 1 Dust story fee. The AI remembers the character's personality, appearance, and backstory across all stories, creating true continuity. Characters can appear together in the same story, and you can build a whole cast over time."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a 7-day free trial (6 Fairy Dust + access to Fairy Corner) so you can try FairyAI risk-free before subscribing. If you're not satisfied with a paid subscription, contact us at support@fairyai.co.uk within 7 days of your first charge for a full refund. After that, subscription fees are non-refundable, but you can cancel anytime to prevent future charges.",
      hasEmail: true
    }
  ];

  const differentiators = [
    'Characters your child actually remembers, with traits, abilities, and visual identity that persist forever',
    'Stories that continue into full chapter books with 2-tap instant continuation or advanced mode',
    '5 age groups (2-3, 4-6, 7-9, 10-12, 12+) with vocabulary and themes that adapt automatically',
    'Stories, character images, cover art, narration in 12 languages, and songs with lyrics: full creative stack',
    '12 languages with cultural guidance, not just translation. Native-quality narration',
    'Curated classics + AI daily stories + your custom creations in Fairy Corner library',
    'Production-grade safety: age-based filters, rate limiting, abuse protection, no PII logging'
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Features Built for Families
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600">
            Everything you need for magical bedtime stories, and nothing you don't.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="w-14 h-14 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Persistent Characters</h3>
              <p className="text-neutral-700">Traits, abilities, custom images. Reuse across unlimited stories and songs.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="w-14 h-14 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Stories & Chapters</h3>
              <p className="text-neutral-700">Quick story or guided wizard. Continue into multi-chapter books, auto-grouped.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="w-14 h-14 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Fairy Corner</h3>
              <p className="text-neutral-700">Classic tales, AI daily stories, nursery rhymes. 2 always free for guests.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <svg className="w-14 h-14 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Songs & Narration</h3>
              <p className="text-neutral-700">4 voices, 12 languages, bedtime pacing. Songs with lyrics from stories/characters.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why FairyAI is Different
            </h2>
            <p className="text-lg text-neutral-600">
              What makes FairyAI different:
            </p>
          </div>

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-soft-blue-500 to-soft-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Compare
            </h2>
            <p className="text-lg text-neutral-600">
              What makes FairyAI different from other apps
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-4 font-semibold text-neutral-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-soft-blue-600 bg-soft-blue-50">FairyAI</th>
                  <th className="text-center p-4 font-semibold text-neutral-700">Generic AI Apps</th>
                  <th className="text-center p-4 font-semibold text-neutral-700">Traditional Apps</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Persistent characters with memory</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Story continuation into chapter books</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Custom narration in 12 languages</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-neutral-600">Limited</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Songs with lyrics from your stories</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Age-based content filters (5 age groups)</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-600">Basic</td>
                  <td className="text-center p-4 text-soft-green-600 font-bold text-xl">✓</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Curated classics library (Fairy Corner)</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-soft-green-600 font-bold text-xl">✓</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Offline downloads (PDF & MP3)</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                  <td className="text-center p-4 text-soft-green-600 font-bold text-xl">✓</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-neutral-900">Transparent pricing, no lock-in</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-600">Varies</td>
                  <td className="text-center p-4 text-neutral-600">Subscriptions</td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-900 font-semibold">Your child's ideas come to life</td>
                  <td className="text-center p-4 bg-soft-blue-50 text-soft-green-600 font-bold text-xl">✓</td>
                  <td className="text-center p-4 text-neutral-600">Limited</td>
                  <td className="text-center p-4 text-neutral-400">✗</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-neutral-600 italic">
              FairyAI combines the best of both worlds: personalization from AI with the safety and polish of traditional apps.
            </p>
          </div>
        </div>
      </section>

      {/* Fairy Dust */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <svg className="w-16 h-16 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How Fairy Dust Works
            </h2>
            <p className="text-lg text-neutral-600">
              Transparent pricing. No surprise charges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">1 Dust</div>
                <div className="text-sm text-neutral-600">Per Story</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">2 Dust</div>
                <div className="text-sm text-neutral-600">Per Character</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">2 Dust</div>
                <div className="text-sm text-neutral-600">Per Song</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="mb-2 flex justify-center">
                  <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">2 Dust</div>
                <div className="text-sm text-neutral-600">Add Narration</div>
              </div>
            </div>

            <ul className="space-y-3 text-neutral-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-soft-green-600">✓</span>
                <span>Monthly allocation included with premium subscription</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-green-600">✓</span>
                <span>Buy more Fairy Dust anytime if you run low</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-green-600">✓</span>
                <span>Automatic refunds if generation fails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-soft-green-600">✓</span>
                <span>Track your balance in Settings</span>
              </li>
            </ul>

            <div className="p-4 bg-white rounded-lg border-2 border-soft-blue-200">
              <p className="text-neutral-700 text-sm">
                <strong>Free to start:</strong> Create a parent account and get 6 free Fairy Dust + 7-day Fairy Corner trial. No credit card required. Guest mode also available with 2 free fairy tales + 2 free nursery rhymes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              All plans include access to all features. Pick the Dust allocation that fits your family.
            </p>
          </div>

          {/* Subscription Tiers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Free Tier */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutral-200">
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">Free</h3>
              <div className="text-3xl font-bold text-neutral-900 mb-4">£0<span className="text-base font-normal text-neutral-600">/month</span></div>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>6 Dust welcome bonus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>7-day Fairy Corner trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>No monthly refills</span>
                </li>
              </ul>
            </div>

            {/* Story Starter */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-soft-blue-200">
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">Story Starter</h3>
              <div className="text-3xl font-bold text-soft-blue-600 mb-4">£2.39<span className="text-base font-normal text-neutral-600">/month</span></div>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span><strong>20 Dust/month</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>All features unlocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>Save £4.69 on annual</span>
                </li>
              </ul>
            </div>

            {/* Dream Weaver */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-soft-green-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-soft-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                POPULAR
              </div>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">Dream Weaver</h3>
              <div className="text-3xl font-bold text-soft-green-600 mb-4">£5.99<span className="text-base font-normal text-neutral-600">/month</span></div>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span><strong>60 Dust/month</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>All features unlocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>Save £12.89 on annual</span>
                </li>
              </ul>
            </div>

            {/* Story Circle */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-neutral-200">
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">Story Circle</h3>
              <div className="text-3xl font-bold text-neutral-900 mb-4">£10.99<span className="text-base font-normal text-neutral-600">/month</span></div>
              <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span><strong>125 Dust/month</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>All features unlocked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600">✓</span>
                  <span>Save £26.89 on annual</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dust Top-Ups */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6 text-center">Fairy Dust Top-Ups</h3>
            <p className="text-center text-neutral-600 mb-6">Need more Dust? Top up anytime. <strong>Bought Dust never expires!</strong></p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-neutral-50 rounded-lg p-6 text-center border-2 border-neutral-200">
                <div className="text-2xl font-bold text-neutral-900 mb-2">15 Dust</div>
                <div className="text-lg font-semibold text-soft-blue-600 mb-3">£2.39</div>
                <div className="text-xs text-neutral-500">Fairy Dust Sprinkle</div>
              </div>

              <div className="bg-soft-green-50 rounded-lg p-6 text-center border-2 border-soft-green-300 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-soft-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  BEST VALUE
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-2">45 Dust</div>
                <div className="text-lg font-semibold text-soft-green-600 mb-3">£4.79</div>
                <div className="text-xs text-neutral-500">Fairy Dust Pouch</div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 text-center border-2 border-neutral-200">
                <div className="text-2xl font-bold text-neutral-900 mb-2">100 Dust</div>
                <div className="text-lg font-semibold text-soft-blue-600 mb-3">£10.79</div>
                <div className="text-xs text-neutral-500">Fairy Dust Chest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Ages */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">12 Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {['English (UK)', 'English (US)', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Dutch', 'Polish', 'Chinese', 'Japanese', 'Korean'].map((lang, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-700">
                    <span className="text-soft-blue-600">✓</span>
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">Ages 2–12</h3>
              <div className="space-y-3">
                {[
                  { age: '2-3', words: '~400', theme: 'Comfort, simple vocabulary' },
                  { age: '4-6', words: '~700', theme: 'Early concepts, friendship' },
                  { age: '7-9', words: '~1000', theme: 'Problem-solving, adventure' },
                  { age: '10-12', words: '~1500', theme: 'Complex themes, growth' },
                  { age: '12+', words: '~2000', theme: 'Mature vocabulary, deeper morals' }
                ].map((group, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-0">
                    <span className="font-semibold text-neutral-900">Ages {group.age}</span>
                    <span className="text-sm text-neutral-600">{group.words} words • {group.theme}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to know about FairyAI
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors text-left"
                >
                  <span className="font-semibold text-lg text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-neutral-600 flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openFAQ === index && (
                  <div className="px-6 py-5 bg-neutral-50 border-t border-neutral-200">
                    <p className="text-neutral-700 leading-relaxed">
                      {faq.hasLink ? (
                        <>
                          {faq.answer.split('See our')[0]}
                          See our <Link to="/privacy" className="text-soft-blue-600 hover:text-soft-blue-700 underline">Privacy Policy</Link> for full details.
                        </>
                      ) : faq.hasEmail ? (
                        <>
                          {faq.answer.split('contact us at')[0]}
                          contact us at <a href="mailto:support@fairyai.co.uk" className="text-soft-blue-600 hover:text-soft-blue-700 underline">support@fairyai.co.uk</a>
                          {faq.answer.split('support@fairyai.co.uk')[1]}
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Join Thousands of Families Using FairyAI
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join families creating magical bedtime moments every night. Start free: 6 Fairy Dust + 7-day Fairy Corner trial. No credit card needed.
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
