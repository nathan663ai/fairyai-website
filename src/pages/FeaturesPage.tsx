import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesPage: React.FC = () => {
  const differentiators = [
    'Characters your child actually remembers, with traits, abilities, and visual identity that persist forever',
    'Stories that continue into full chapter books with 2-tap instant continuation or advanced mode',
    '5 age groups (2-3, 4-6, 7-9, 10-12, 12+) with vocabulary and themes that adapt automatically',
    'Stories, character images, cover art, narration in 11 languages, and songs with lyrics—full creative stack',
    '12 languages with cultural guidance, not just translation—native-quality narration',
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
            Everything you need for magical bedtime stories—and nothing you don't.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Persistent Characters</h3>
              <p className="text-neutral-700">Traits, abilities, custom images. Reuse across unlimited stories and songs.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Stories & Chapters</h3>
              <p className="text-neutral-700">Quick story or guided wizard. Continue into multi-chapter books, auto-grouped.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🧚</div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Fairy Corner</h3>
              <p className="text-neutral-700">Classic tales, AI daily stories, nursery rhymes. 2 always free for guests.</p>
              <Link to="/how-it-works" className="text-soft-blue-600 hover:underline text-sm mt-2 inline-block">
                Learn more →
              </Link>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="font-semibold text-xl text-neutral-900 mb-2">Songs & Narration</h3>
              <p className="text-neutral-700">4 voices, 11 languages, bedtime pacing. Songs with lyrics from stories/characters.</p>
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
              Not just another AI story generator. Here's what makes FairyAI stand out:
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

      {/* Fairy Dust */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-5xl mb-4">✨</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How Fairy Dust Works
            </h2>
            <p className="text-lg text-neutral-600">
              Transparent pricing. No surprise charges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">📖</div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">1 Dust</div>
                <div className="text-sm text-neutral-600">Per Story</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">👤</div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">2 Dust</div>
                <div className="text-sm text-neutral-600">Per Character</div>
              </div>

              <div className="bg-white rounded-lg p-6 text-center">
                <div className="text-3xl mb-2">🎵</div>
                <div className="text-2xl font-bold text-soft-blue-600 mb-1">3 Dust</div>
                <div className="text-sm text-neutral-600">Per Song</div>
              </div>
            </div>

            <ul className="space-y-3 text-neutral-700">
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
                {['English (UK/US)', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Dutch', 'Polish', 'Chinese', 'Japanese', 'Korean'].map((lang, i) => (
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
    </div>
  );
};

export default FeaturesPage;
