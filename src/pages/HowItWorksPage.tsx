import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from '../components/ui/VideoPlayer';
import DownloadButtons from '../components/ui/DownloadButtons';
import Card from '../components/ui/Card';

const HowItWorksPage: React.FC = () => {
  const videoCarouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (videoCarouselRef.current) {
      const scrollAmount = 340; // Card width + gap
      videoCarouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      imageSrc: '/images/features/build-characters.png',
      title: 'Build Characters',
      description: "Traits and abilities that shape your stories. Use them in as many adventures as you want."
    },
    {
      imageSrc: '/images/features/quick-story.png',
      title: 'Quick Story',
      description: "2 taps for instant magic when you just need a story fast."
    },
    {
      imageSrc: '/images/features/story-wizard.png',
      title: 'Story Wizard',
      description: "Characters, themes, morals, plot hints, and more. Full creative control."
    },
    {
      imageSrc: '/images/features/continue-adventures.png',
      title: 'Continue Adventures',
      description: "Pick up exactly where the last story ended, or start fresh anytime."
    },
    {
      imageSrc: '/images/features/languages.png',
      title: '12 Languages',
      description: "Stories, narration, and songs in native quality audio."
    },
    {
      imageSrc: '/images/features/custom-songs.png',
      title: 'Custom Songs',
      description: "Turn stories into catchy songs with lyrics and melodies."
    },
    {
      imageSrc: '/images/features/fairy-corner.png',
      title: 'Fairy Corner',
      description: "Classic tales, daily AI stories, and nursery rhymes."
    },
    {
      imageSrc: '/images/features/age-smart.png',
      title: 'Age-Smart',
      description: "Story complexity adapts to your child's age. Safe filters on everything."
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-8 md:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text - Left */}
            <div className="text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                How It Works
              </h1>
              <p className="text-xl text-neutral-600">
                Simple to start. Deep when you want it.
              </p>
            </div>

            {/* Fairy - Right */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/images/how-it-works/fairy-guide.png"
                alt="Fairy guide"
                className="h-48 md:h-64 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Demos - Carousel */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              See It In Action
            </h2>
            <p className="text-lg text-neutral-600">
              Swipe to see character creation, story reading, and Fairy Corner
            </p>
          </div>

          {/* Video Carousel */}
          <div className="relative">
            {/* Desktop Arrow - Left */}
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-700" />
            </button>

            {/* Desktop Arrow - Right */}
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-neutral-700" />
            </button>

            <div
              ref={videoCarouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4"
            >
              {/* Character Creation */}
              <div className="flex-shrink-0 w-80 snap-start">
                <Card className="p-0 overflow-hidden">
                  <VideoPlayer
                    src="/videos/character-creation-demo.mp4"
                    aspectRatio="portrait"
                    className="rounded-t-lg"
                    controls={true}
                    comingSoonText="Character Creation Demo"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                      Character Creation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Build characters with traits and abilities. Quick mode or full wizard.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Story Reader */}
              <div className="flex-shrink-0 w-80 snap-start">
                <Card className="p-0 overflow-hidden">
                  <VideoPlayer
                    src="/videos/story-reader-demo.mp4"
                    aspectRatio="portrait"
                    className="rounded-t-lg"
                    controls={true}
                    comingSoonText="Story Reader Demo"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                      Reading Stories
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Read together or play narration. Continue into chapter books.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Fairy Corner */}
              <div className="flex-shrink-0 w-80 snap-start">
                <Card className="p-0 overflow-hidden">
                  <VideoPlayer
                    src="/videos/fairy-corner-demo.mp4"
                    aspectRatio="portrait"
                    className="rounded-t-lg"
                    controls={true}
                    comingSoonText="Fairy Corner Demo"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                      Fairy Corner
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Browse classics, daily stories, and nursery rhymes. 2 always free.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            {/* Swipe Hint - Mobile Only */}
            <p className="text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 md:py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Everything Included
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  loading="lazy"
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
                <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
              {features.map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-64 snap-start">
                  <Card className="text-center p-6 h-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50">
                    <img
                      src={feature.imageSrc}
                      alt={feature.title}
                      loading="lazy"
                      className="w-16 h-16 mx-auto mb-4 object-contain"
                    />
                    <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {feature.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-neutral-500 mt-2 flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>

      {/* Behind the Magic */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Behind the Magic
            </h2>
            <p className="text-lg text-neutral-600">
              Here's what happens when you create with FairyAI
            </p>
          </div>

          {/* Four Content Type Cards - 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">

            {/* Stories */}
            <Card className="p-6 bg-gradient-to-br from-fairy-gold-50 to-white">
              <div className="flex items-start gap-4">
                <img
                  src="/images/features/continue-adventures.png"
                  alt="Stories"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                    Stories
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-neutral-700 mb-1">You provide:</p>
                    <p className="text-sm text-neutral-600">
                      Things like characters, themes, settings, age group, plot ideas... or just a single sentence and we'll handle the rest.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">We add:</p>
                    <p className="text-sm text-neutral-600">
                      Age appropriate language, story structure, character consistency, safety filters, and more.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Characters */}
            <Card className="p-6 bg-gradient-to-br from-soft-blue-50 to-white">
              <div className="flex items-start gap-4">
                <img
                  src="/images/features/build-characters.png"
                  alt="Characters"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                    Characters
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-neutral-700 mb-1">You provide:</p>
                    <p className="text-sm text-neutral-600">
                      A name and description, or go deeper with traits, abilities, personality... as much or as little as you like.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">We add:</p>
                    <p className="text-sm text-neutral-600">
                      6 unique art styles, child friendly visuals, consistent appearance across stories, and more.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Songs */}
            <Card className="p-6 bg-gradient-to-br from-soft-green-50 to-white">
              <div className="flex items-start gap-4">
                <img
                  src="/images/features/custom-songs.png"
                  alt="Songs"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                    Songs
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-neutral-700 mb-1">You provide:</p>
                    <p className="text-sm text-neutral-600">
                      Things like a song idea, music style, voice type, featured characters... or just tell us what you're feeling.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">We add:</p>
                    <p className="text-sm text-neutral-600">
                      Kid friendly framing, story context, character details, content filtering, and more.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Narrations */}
            <Card className="p-6 bg-gradient-to-br from-fairy-purple-50 to-white">
              <div className="flex items-start gap-4">
                <img
                  src="/images/features/languages.png"
                  alt="Narrations"
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-neutral-900">
                    Narrations
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-neutral-700 mb-1">You provide:</p>
                    <p className="text-sm text-neutral-600">
                      Simply pick a voice and accent.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-700 mb-1">We add:</p>
                    <p className="text-sm text-neutral-600">
                      Bedtime narrator style, steady pacing, clear pronunciation, smart chunking for longer stories, and more.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* How We Build Your Content Box */}
          <div className="bg-gradient-to-br from-fairy-gold-100 via-fairy-gold-50 to-soft-blue-50 rounded-2xl p-8 mb-8 border border-fairy-gold-200">
            <h3 className="font-display text-2xl font-semibold text-center mb-8 text-neutral-900">
              How We Build Your Content
            </h3>

            {/* Simple Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
              <div className="bg-soft-blue-500 rounded-xl px-6 py-3 shadow-md">
                <p className="font-semibold text-white text-center">Your Ideas</p>
              </div>
              <span className="text-fairy-gold-500 text-2xl font-bold">→</span>
              <div className="bg-soft-blue-500 rounded-xl px-6 py-3 shadow-md">
                <p className="font-semibold text-white text-center">Our Prompt Engine</p>
              </div>
              <span className="text-fairy-gold-500 text-2xl font-bold">→</span>
              <div className="bg-fairy-gold-500 rounded-xl px-6 py-3 shadow-md">
                <p className="font-semibold text-white text-center">AI Generation</p>
              </div>
            </div>

            <p className="text-center text-neutral-700 mb-6">
              We combine your inputs with our carefully crafted prompt system:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl px-4 py-4 text-center text-sm font-medium text-neutral-800 shadow-md border border-fairy-gold-200">
                Safety guidelines & content filters
              </div>
              <div className="bg-white rounded-xl px-4 py-4 text-center text-sm font-medium text-neutral-800 shadow-md border border-fairy-gold-200">
                Age appropriate complexity
              </div>
              <div className="bg-white rounded-xl px-4 py-4 text-center text-sm font-medium text-neutral-800 shadow-md border border-fairy-gold-200">
                Story structure & pacing
              </div>
              <div className="bg-white rounded-xl px-4 py-4 text-center text-sm font-medium text-neutral-800 shadow-md border border-fairy-gold-200">
                Style consistency
              </div>
            </div>

            <p className="text-center text-fairy-gold-600 mt-8 font-semibold text-lg">
              The result: unique, safe, personalised content every time.
            </p>
          </div>

          {/* Want to Know More CTA */}
          <div className="bg-gradient-to-r from-fairy-gold-50 to-soft-blue-50 rounded-xl p-6 text-center border border-fairy-gold-200">
            <p className="font-semibold text-neutral-900 mb-2">
              Curious about the technical details?
            </p>
            <p className="text-neutral-600 mb-4">
              We're happy to chat about how FairyAI works under the hood.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-soft-blue-600 font-semibold hover:text-soft-blue-700 transition-colors"
            >
              Contact Us →
            </a>
          </div>

        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Ready to Start?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            6 free Fairy Dust + 7 days of Fairy Corner. No credit card required.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
