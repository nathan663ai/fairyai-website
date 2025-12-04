import React from 'react';
import { Link } from 'react-router-dom';
import DownloadButtons from '../components/ui/DownloadButtons';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';
import Card from '../components/ui/Card';

// Feature cards with images
const features = [
  {
    imageSrc: '/images/features/build-characters.png',
    title: 'Persistent Characters',
    description: 'Create once, use forever. Your characters appear consistently across every story, with the same look in every illustration.',
    link: null,
    linkText: null
  },
  {
    imageSrc: '/images/features/continue-adventures.png',
    title: 'Stories That Continue',
    description: 'Pick up exactly where you left off. The AI remembers characters, plot points, relationships, and how the last chapter ended.',
    link: null,
    linkText: null
  },
  {
    imageSrc: '/images/features/fairy-corner.png',
    title: 'Fairy Corner',
    description: 'Classic tales, nursery rhymes, and a brand new AI story every day with prose and rhyming versions, narration, and original songs.',
    link: '/stories',
    linkText: 'Browse examples →'
  },
  {
    imageSrc: '/images/features/custom-songs.png',
    title: 'Original Songs',
    description: 'Turn any story into a catchy song. 13 music styles from pop to classical, with full lyrics and vocals.',
    link: null,
    linkText: null
  },
  {
    imageSrc: '/images/features/age-smart.png',
    title: 'Age-Adaptive',
    description: 'Vocabulary, complexity, and themes adjust automatically for 5 age groups. Not just a filter, fundamentally different writing.',
    link: '/stories/examples/robot-friendship',
    linkText: 'See the difference →'
  },
  {
    imageSrc: '/images/features/languages.png',
    title: '10+ Languages',
    description: 'Stories, narration, and songs in English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Chinese, Japanese, and Korean.',
    link: null,
    linkText: null
  }
];

// Why different points
const whyDifferent = [
  {
    number: '01',
    title: 'Try Without Signing Up',
    text: "Start creating immediately with no account required. When you're ready, sign up with no commitments, no credit card, and cancel anytime."
  },
  {
    number: '02',
    title: 'Characters That Look The Same',
    text: "Our AI analyses each character image and saves a visual description. That exact description is used in every future story illustration, so your child's dragon always looks like their dragon."
  },
  {
    number: '03',
    title: 'Stories That Actually Continue',
    text: 'Not just "another story with the same characters". The AI receives the full previous chapter: plot points, relationships, discoveries, and exactly how it ended. Chapter 2 picks up naturally from Chapter 1.'
  },
  {
    number: '04',
    title: 'Fresh Content Every Day',
    text: 'Fairy Corner gets a brand new story daily with a prose version, a rhyming bedtime poem version, illustrations, narration in multiple languages, and 4 original songs. All included, no dust required.'
  },
  {
    number: '05',
    title: 'Fair Dust System',
    text: 'Monthly dust refills on your billing date. Purchased dust never expires and rolls over forever. If any generation fails, your dust is automatically refunded.'
  }
];

// Coming soon features
const comingSoonItems = [
  'Characters from drawings',
  'Record your own narration',
  'Choose-your-own-path stories',
  'Improved story prompts',
  'Visual design improvements',
  'And more...'
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Features & Pricing
              </h1>
              <p className="text-xl text-neutral-600">
                Everything families need for magical bedtimes.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/features/fairy-features.png"
                alt="Fairy guide"
                className="h-48 md:h-64 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              What You Can Create
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50"
              >
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  loading="lazy"
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900 text-center">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 text-center mb-4">
                  {feature.description}
                </p>
                {feature.link && (
                  <div className="text-center">
                    <Link to={feature.link} className="text-soft-blue-600 hover:text-soft-blue-700 text-sm font-medium">
                      {feature.linkText}
                    </Link>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Why FairyAI is Different
            </h2>
            <p className="text-lg text-neutral-600">
              More than just an AI story generator
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {whyDifferent.slice(0, 4).map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700 text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Centered 5th card */}
          <div className="max-w-xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {whyDifferent[4].number}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                    {whyDifferent[4].title}
                  </h3>
                  <p className="text-neutral-700 text-sm">
                    {whyDifferent[4].text}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-600">
              Start free. Upgrade when you're ready. Cancel anytime.
            </p>
          </div>

          {/* Subscription Tiers */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Free */}
            <Card className="p-6 text-center">
              <h3 className="font-display text-xl font-semibold mb-1 text-neutral-900">Free</h3>
              <p className="text-3xl font-bold text-neutral-900 mb-4">£0</p>
              <ul className="text-sm text-neutral-700 space-y-2 mb-4 text-left">
                <li>• 6 Fairy Dust at sign up</li>
                <li>• Fairy Corner free trial</li>
                <li>• All features included</li>
                <li>• No account required to try</li>
              </ul>
            </Card>

            {/* Story Starter - Highlighted */}
            <Card className="p-6 text-center bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 border-2 border-fairy-gold-300 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fairy-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
              <h3 className="font-display text-xl font-semibold mb-1 text-neutral-900">Story Starter</h3>
              <p className="text-3xl font-bold text-neutral-900 mb-1">£2.39<span className="text-lg font-normal">/mo</span></p>
              <p className="text-sm text-neutral-500 mb-4">or £23.99/year (save 16%)</p>
              <ul className="text-sm text-neutral-700 space-y-2 mb-4 text-left">
                <li>• 20 Fairy Dust monthly</li>
                <li>• Ad-free experience</li>
                <li>• Full Fairy Corner access</li>
              </ul>
            </Card>

            {/* Higher Tiers */}
            <Card className="p-6 text-center">
              <h3 className="font-display text-xl font-semibold mb-1 text-neutral-900">Need More?</h3>
              <p className="text-sm text-neutral-600 mb-4">For families who create more</p>
              <ul className="text-sm text-neutral-700 space-y-3 text-left">
                <li><strong>Dream Weaver</strong><br/>60 dust monthly, £5.99/mo</li>
                <li><strong>Story Circle</strong><br/>125 dust monthly, £10.99/mo</li>
              </ul>
              <p className="text-xs text-neutral-500 mt-4">Annual plans save 17-20%</p>
            </Card>
          </div>

          {/* Dust Packs - Simplified */}
          <div className="bg-neutral-50 rounded-xl p-6 mb-6 text-center">
            <p className="text-neutral-700">
              <strong>Need a top up?</strong> Dust packs available for one-time purchase. Purchased dust never expires.
            </p>
          </div>

          {/* What's Fairy Dust */}
          <div className="bg-soft-blue-50 rounded-xl p-6 text-center">
            <p className="text-neutral-700">
              <strong>What's Fairy Dust?</strong> Our creative currency. 1 dust = 1 story or continuation. 2 dust = 1 character, song, or narration.
            </p>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-4">
            All subscriptions managed securely through App Store & Google Play
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600">
              We're always building. Here's what's on the way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingSoonItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center border-2 border-fairy-gold-200 shadow-sm">
                <p className="text-neutral-800 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Welcome */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-soft-blue-50 to-fairy-gold-50 rounded-2xl p-8 text-center border border-soft-blue-100">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-fairy-gold-500 rounded-full text-white mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
              Help Us Build Something Magical
            </h3>
            <p className="text-neutral-700 mb-6">
              FairyAI is shaped by families like yours. Got an idea? Found a bug? Want something different? We'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-fairy-gold-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-fairy-gold-600 hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fairy-gold-500 focus-visible:ring-offset-2"
            >
              Share Your Feedback →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion faqs={faqs} />
      <div className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600">
            Still have questions?{' '}
            <Link to="/contact" className="text-soft-blue-600 hover:text-soft-blue-700 font-medium focus:outline-none focus-visible:underline">
              Get in touch →
            </Link>
          </p>
        </div>
      </div>

      {/* Download CTA */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Start Your Free Trial
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            6 Fairy Dust to start + Fairy Corner free trial. No credit card required.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
