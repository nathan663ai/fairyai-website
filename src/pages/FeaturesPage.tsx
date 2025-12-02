import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, BookOpen, Sparkles, Music, Shield, Globe, Gift, Star, Check } from 'lucide-react';
import DownloadButtons from '../components/ui/DownloadButtons';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';
import Card from '../components/ui/Card';

const FeaturesPage: React.FC = () => {
  const coreFeatures = [
    {
      icon: Palette,
      title: 'Persistent Characters',
      description: 'Build once, use forever. Traits, abilities, and custom images that work across all stories.',
      link: '/how-it-works'
    },
    {
      icon: BookOpen,
      title: 'Stories & Chapters',
      description: 'Quick Story or Story Wizard. Continue into multi-chapter books with 2-tap continuation.',
      link: '/how-it-works'
    },
    {
      icon: Sparkles,
      title: 'Fairy Corner',
      description: 'Classic tales, daily AI stories, nursery rhymes. 2 always free for guests.',
      link: '/how-it-works'
    },
    {
      icon: Music,
      title: 'Songs & Narration',
      description: '4 voices, 12 languages, bedtime pacing. Custom songs with lyrics from your stories.',
      link: '/how-it-works'
    },
    {
      icon: Shield,
      title: 'Built-In Safety',
      description: 'Age-based filters, content screening, no PII logging. Safe for ages 2-12.',
      link: null
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: '12 languages with native-quality narration. Stories, songs, and audio.',
      link: null
    }
  ];

  const whyDifferent = [
    {
      number: '01',
      title: 'Characters That Matter',
      text: 'Not random AI slop. Persistent characters with real abilities and traits that shape every story.'
    },
    {
      number: '02',
      title: 'Stories That Continue',
      text: 'Turn any story into multi-chapter books. Quick 2-tap continue or full control mode.'
    },
    {
      number: '03',
      title: 'Production Quality',
      text: 'Native-quality narration in 12 languages. Custom songs with real melodies. Professional cover art.'
    },
    {
      number: '04',
      title: 'Built For Families',
      text: 'Age-smart filters, transparent pricing, offline downloads. No ads, no social features, no surprises.'
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Features & Pricing
          </h1>
          <p className="text-xl text-neutral-600">
            Everything you need for magical bedtimes, and nothing you don't.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Everything Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">
                <feature.icon className="w-12 h-12 text-soft-blue-600" strokeWidth={1.5} />
              </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-700 mb-4">
                  {feature.description}
                </p>
                {feature.link && (
                  <Link to={feature.link} className="text-soft-blue-600 hover:text-soft-blue-700 text-sm font-medium">
                    Learn more →
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different - Simplified */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why FairyAI is Different
            </h2>
            <p className="text-lg text-neutral-600">
              Not just another AI story app
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyDifferent.map((item, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-neutral-700">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Simplified */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-600">
              Pay only for what you create. No lock-in, no hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-gradient-to-br from-white to-soft-blue-50 border-2 border-soft-blue-200">
              <div className="mb-4">
                <Gift className="w-10 h-10 text-soft-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                Free Forever
              </h3>
              <p className="text-neutral-700 mb-6">
                Try FairyAI with no credit card required
              </p>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>6 free Fairy Dust to start</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>7-day Fairy Corner trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>2 classic tales + 2 nursery rhymes (always free)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Browse as guest (no signup needed)</span>
                </li>
              </ul>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 text-white border-2 border-soft-blue-400">
              <div className="mb-4">
                <Star className="w-10 h-10 text-fairy-gold-200" strokeWidth={1.5} fill="currentColor" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                Premium Plans
              </h3>
              <p className="text-soft-blue-50 mb-6">
                Monthly Fairy Dust allocations
              </p>
              <ul className="space-y-3 text-white mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-200 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Unlimited characters & stories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-200 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Full Fairy Corner access</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-200 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Narration in 12 languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-200 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Custom songs with lyrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-200 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Offline PDF & MP3 downloads</span>
                </li>
              </ul>
              <p className="text-sm text-soft-blue-100">
                Flexible plans from £6.99/month. See app for details.
              </p>
            </Card>
          </div>

          {/* Pricing Note */}
          <div className="mt-8 p-6 bg-neutral-50 rounded-xl text-center">
            <p className="text-neutral-700">
              <strong>What's Fairy Dust?</strong> Our creative currency. Use it to generate stories, characters, narration, songs, and images. No subscriptions required—top up only when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Start Your Free Trial
          </h2>
          <p className="text-lg text-soft-blue-50 mb-8">
            6 free Fairy Dust + 7 days of Fairy Corner access. No credit card required.
          </p>
          <DownloadButtons variant="light" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
