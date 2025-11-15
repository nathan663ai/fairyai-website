import React from 'react';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            How FairyAI Works
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600">
            How FairyAI works in your family.
          </p>
        </div>
      </section>

      {/* Characters Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Create Characters That Matter
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Build characters with personality, traits, and abilities that persist across every story. Choose between two creation methods:
              </p>

              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">Character Wizard</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-soft-blue-600 mt-1">•</span>
                      <span>Step-by-step builder with character types (Fantasy, Adventure, Animal, Modern)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-blue-600 mt-1">•</span>
                      <span>Add traits, abilities, and detailed descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-blue-600 mt-1">•</span>
                      <span>Generate 3 custom images (~60 seconds), pick your favourite</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">Quick Character</h3>
                  <p className="text-neutral-700">
                    Describe your character in a sentence and create instantly. Perfect for when you just want to start the story.
                  </p>
                </div>

                <div className="border-l-4 border-soft-green-500 pl-4 py-3">
                  <p className="text-neutral-700 font-semibold mb-2">Coming Soon:</p>
                  <ul className="space-y-1 text-neutral-700">
                    <li>• Create characters from drawings or photos</li>
                    <li>• Choose-your-own-path stories</li>
                    <li>• Parents can record their own stories and messages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <ImagePlaceholder
                label="Character Creation Screenshot"
                aspectRatio="square"
                className="shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Stories That Grow Into Books
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">Quick Story</h3>
                  <p className="text-neutral-700">
                    Too tired for details? Just pick an age group and describe what you want in one sentence. Perfect for weeknight bedtimes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">Story Wizard</h3>
                  <p className="text-neutral-700 mb-3">
                    When you have more time, use the full builder to craft exactly what you want:
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-soft-green-600 mt-1">•</span>
                      <span>Select characters (one, many, or create new)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-green-600 mt-1">•</span>
                      <span>Choose theme, setting, moral lesson</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-green-600 mt-1">•</span>
                      <span>Pick age group, language (12 options), length, perspective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-green-600 mt-1">•</span>
                      <span>Add optional plot hints for extra control</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-soft-blue-200">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">Continuation Magic</h3>
                  <p className="text-neutral-700 mb-4">
                    The best part: stories don't end. Continue them night after night into multi-chapter books.
                  </p>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-soft-blue-600 mt-1">→</span>
                      <span><strong>Quick continue:</strong> 2 taps, instant next chapter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-soft-blue-600 mt-1">→</span>
                      <span><strong>Advanced continue:</strong> Add new characters, change tone, guide the plot</span>
                    </li>
                  </ul>
                  <p className="text-sm text-neutral-600 mt-4">
                    Stories auto-group into books of 5 chapters, with "Play All" narration option.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-100 rounded-lg p-4">
                <h4 className="font-semibold text-neutral-900 mb-2">Age-Intelligent Generation</h4>
                <p className="text-sm text-neutral-700">
                  5 age groups (2-3, 4-6, 7-9, 10-12, 12+). Vocabulary, themes, and word counts adapt automatically: from 400 words for toddlers to 2000 for teens.
                </p>
              </div>
            </div>

            <div className="md:order-1">
              <ImagePlaceholder
                label="Story Reader + Continue Button Screenshot"
                aspectRatio="portrait"
                className="shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fairy Corner Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Fairy Corner: Your Story Library
              </h2>
              <p className="text-lg text-neutral-700 mb-6">
                Not every night needs a custom story. Browse curated classics and daily AI stories, all with pre-narrated audio.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">Classic Fairy Tales</h3>
                    <p className="text-neutral-700">2 always free, rest included with premium. Download PDFs to read offline.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">Story of the Day</h3>
                    <p className="text-neutral-700">A new story every day in 12 languages with narration and songs. Perfect for variety.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">Nursery Rhymes</h3>
                    <p className="text-neutral-700">Audio nursery rhymes with narration. 2 always free for guests.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">Multi-Language Support</h3>
                    <p className="text-neutral-700">All Fairy Corner content available in 12 languages with native-quality narration.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-soft-blue-50 rounded-lg border-l-4 border-soft-blue-600">
                <p className="text-neutral-700 mb-3">
                  <strong>Guest Mode:</strong> Browse Fairy Corner without signing up. 2 free fairy tales + 2 free nursery rhymes to try before you subscribe.
                </p>
                <p className="text-neutral-700">
                  <strong>Free Parent Account:</strong> Sign up to get 6 free Fairy Dust + 7-day Fairy Corner trial. Try creating characters, stories, songs and narrations. No credit card required.
                </p>
              </div>
            </div>

            <div>
              <ImagePlaceholder
                label="Fairy Corner Screenshot"
                aspectRatio="portrait"
                className="shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Songs & Narration Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Add Songs & Narration
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Add audio for immersive listening, or to give yourself a break.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Narration Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 text-soft-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                Narration
              </h3>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-600 mt-1">•</span>
                  <span>4 AI voices with multiple accents (British, American, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-600 mt-1">•</span>
                  <span>12 languages with native-quality audio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-600 mt-1">•</span>
                  <span>Bedtime-optimised pacing (slower, soothing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-blue-600 mt-1">•</span>
                  <span>Generate on-demand for any story</span>
                </li>
              </ul>
            </div>

            {/* Songs Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="mb-4 flex justify-center">
                <svg className="w-12 h-12 text-soft-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-4">
                Songs
              </h3>
              <p className="text-neutral-700 mb-4">
                Create songs from your stories, characters, or classic tales. Pick style, mood, theme, and language.
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600 mt-1">•</span>
                  <span>Full lyrics and album art included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600 mt-1">•</span>
                  <span>Export as MP3 for offline listening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-soft-green-600 mt-1">•</span>
                  <span>Songs link back to source story/character</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Ages Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                12 Languages
              </h3>
              <p className="text-neutral-700 mb-4">
                Stories, narration, and songs in:
              </p>
              <div className="grid grid-cols-2 gap-3 text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>English (UK/US)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Spanish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>French</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>German</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Italian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Portuguese</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Dutch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Polish</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Chinese</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Japanese</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-soft-blue-600">✓</span>
                  <span>Korean</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 mb-4">
                Ages 2–12
              </h3>
              <p className="text-neutral-700 mb-4">
                Content adapts to each age group:
              </p>
              <div className="space-y-3">
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="font-semibold text-neutral-900">Ages 2-3:</span>
                  <span className="text-neutral-700"> ~400 words, simple vocabulary, comfort themes</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="font-semibold text-neutral-900">Ages 4-6:</span>
                  <span className="text-neutral-700"> ~700 words, early concepts, friendship themes</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="font-semibold text-neutral-900">Ages 7-9:</span>
                  <span className="text-neutral-700"> ~1000 words, problem-solving, adventure</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="font-semibold text-neutral-900">Ages 10-12:</span>
                  <span className="text-neutral-700"> ~1500 words, complex themes, character growth</span>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4">
                  <span className="font-semibold text-neutral-900">Ages 12+:</span>
                  <span className="text-neutral-700"> ~2000 words, mature vocabulary, deeper morals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Transform Bedtime?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today. 6 free Fairy Dust + 7 days of Fairy Corner access. No credit card required.
          </p>
          <DownloadButtons />
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
