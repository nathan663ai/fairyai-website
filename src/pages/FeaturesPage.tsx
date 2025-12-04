import React from 'react';
import { Check, Gift, Star } from 'lucide-react';
import DownloadButtons from '../components/ui/DownloadButtons';
import FAQAccordion from '../components/sections/FAQAccordion';
import { faqs } from '../data/faqs';
import Card from '../components/ui/Card';

// Feature cards with images
const createFeatures = [
  {
    imageSrc: '/images/features/build-characters.png',
    title: 'Persistent Characters',
    description: 'Build once, use forever. Traits, abilities, and custom images that work across all stories.'
  },
  {
    imageSrc: '/images/features/story-wizard.png',
    title: 'Stories & Chapters',
    description: 'Quick Story or Story Wizard. Continue into multi-chapter books with 2 tap continuation.'
  },
  {
    imageSrc: '/images/features/fairy-corner.png',
    title: 'Fairy Corner',
    description: 'Classic tales, daily AI stories, nursery rhymes. 2 always free for guests.'
  },
  {
    imageSrc: '/images/features/custom-songs.png',
    title: 'Songs & Narration',
    description: '4 voices, 12 languages, bedtime pacing. Custom songs with lyrics from your stories.'
  },
  {
    imageSrc: '/images/features/age-smart.png',
    title: 'Built In Safety',
    description: 'Age based filters, content screening, no PII logging. Safe for ages 2 to 12.'
  },
  {
    imageSrc: '/images/features/languages.png',
    title: 'Multi Language',
    description: '12 languages with native quality narration. Stories, songs, and audio.'
  }
];

// Why different points
const whyDifferent = [
  {
    number: '01',
    title: 'No Sign Up Required',
    text: 'Browse Fairy Corner, listen to stories, explore the app. Create an account only when you want to build your own content.'
  },
  {
    number: '02',
    title: 'Characters That Matter',
    text: 'Not random AI output. Persistent characters with real abilities and traits that shape every story.'
  },
  {
    number: '03',
    title: 'Stories That Continue',
    text: 'Turn any story into multi-chapter books. Quick 2 tap continue or full control mode.'
  },
  {
    number: '04',
    title: 'Production Quality',
    text: 'Native quality narration in 12 languages. Custom songs with real melodies. Professional cover art.'
  },
  {
    number: '05',
    title: 'Built For Families',
    text: 'Age smart filters, transparent pricing, offline downloads. No ads, no social features, no surprises.'
  }
];

// Coming soon features
const comingSoonFeatures = [
  {
    title: 'Family Sharing',
    description: 'Share your library across multiple devices and family members.'
  },
  {
    title: 'Reading Together Mode',
    description: 'Highlighted text that follows along as stories are narrated.'
  },
  {
    title: 'Character Voice Cloning',
    description: 'Create unique voices for your characters using safe AI voice synthesis.'
  },
  {
    title: 'Story Templates',
    description: 'Pre-built story structures for common themes like bedtime, holidays, and life lessons.'
  },
  {
    title: 'Collaborative Stories',
    description: 'Let siblings or friends add their characters to shared adventures.'
  },
  {
    title: 'Print Your Books',
    description: 'Order professionally printed copies of your favourite stories.'
  }
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                Features & Pricing
              </h1>
              <p className="text-xl text-neutral-600">
                Everything you need for magical bedtimes, and nothing you don't.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/images/fairy-wand.png"
                alt="FairyAI mascot"
                className="w-48 md:w-64 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              What You Can Create
            </h2>
            <p className="text-lg text-neutral-600">
              All included in every plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {createFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-700">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
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
            {whyDifferent.slice(0, 4).map((item, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
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

          {/* Fifth item centered below */}
          <div className="mt-8 max-w-xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {whyDifferent[4].number}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-neutral-900">
                    {whyDifferent[4].title}
                  </h3>
                  <p className="text-neutral-700">
                    {whyDifferent[4].text}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-600">
              Pay only for what you create. Top up at any time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <Card className="p-8 bg-gradient-to-br from-white to-soft-blue-50 border-2 border-soft-blue-200">
              <div className="mb-4">
                <Gift className="w-10 h-10 text-soft-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                Free to Start
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
                  <span>7 day Fairy Corner trial</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>2 classic tales + 2 nursery rhymes (always free)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Browse as guest (no sign up needed)</span>
                </li>
              </ul>
            </Card>

            {/* Pay As You Go */}
            <Card className="p-8 bg-amber-50 border-2 border-fairy-gold-500">
              <div className="mb-4">
                <Star className="w-10 h-10 text-fairy-gold-500" strokeWidth={1.5} fill="currentColor" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                Pay As You Go
              </h3>
              <p className="text-neutral-600 mb-6">
                From £2.39 for 50 Fairy Dust
              </p>
              <ul className="space-y-3 text-neutral-700 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Top up at any time from the app</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>No subscriptions required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Managed securely by App Store & Google Play</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span>Dust never expires</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-600">
                Larger packs available with better value. See app for details.
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

      {/* Coming Soon */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600">
              Features we're working on
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-white/80 border border-neutral-200">
                <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Welcome */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-soft-blue-100 via-white to-soft-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            We'd Love Your Feedback
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            FairyAI is built by parents, for parents. If there's a feature you'd love to see, or something that could work better, we want to hear about it.
          </p>
          <a
            href="mailto:hello@fairyai.app"
            className="inline-flex items-center gap-2 bg-fairy-gold-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-fairy-gold-600 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
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
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Start Your Free Trial
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            6 free Fairy Dust + 7 days of Fairy Corner access. No credit card required.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
