import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
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

  const journeySteps = [
    {
      number: 1,
      title: 'Your Child Starts the Magic',
      description: 'They choose their hero, dream up an adventure, or pick from our daily ideas.',
      imageSrc: '/images/how-it-works/step-1-starts-magic.png'
    },
    {
      number: 2,
      title: 'FairyAI Listens and Learns',
      description: 'Our system remembers their favourite characters, themes, and style, growing smarter with every story.',
      imageSrc: '/images/how-it-works/step-2-listens-learns.png'
    },
    {
      number: 3,
      title: 'The Story Studio Begins',
      description: 'Behind the scenes, FairyAI blends imagination with gentle storytelling rules to keep every tale kind, calm, and age perfect.',
      imageSrc: '/images/how-it-works/step-3-story-studio.png'
    },
    {
      number: 4,
      title: 'Specialists Bring It to Life',
      description: 'Different creative engines handle each part: one writes, one paints, one sings, one tells the tale, all working together seamlessly.',
      imageSrc: '/images/how-it-works/step-4-specialists.png'
    },
    {
      number: 5,
      title: 'The Story Comes Alive',
      description: "Within moments, your child's world appears, complete with custom art, voices, and songs that make every story unique.",
      imageSrc: '/images/how-it-works/step-5-comes-alive.png'
    },
    {
      number: 6,
      title: 'Safe, Stored, and Always Theirs',
      description: "Every creation is saved securely in your family's own library, ready to revisit, replay, or continue anytime.",
      imageSrc: '/images/how-it-works/step-6-safe-stored.png'
    }
  ];

  return (
    <div className="pt-16 bg-white">
      <SEO
        title="How It Works - FairyAI"
        description="See how FairyAI creates personalised bedtime stories in 3 simple steps. Choose characters, set the scene, and let AI create magical stories with narration and songs."
        canonical="/how-it-works"
      />
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
                  <div className="aspect-[9/16] w-full rounded-t-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Z9znR7MYhYs"
                      title="Character Creation How-To"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
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

      {/* The FairyAI Journey */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              The FairyAI Journey
            </h2>
            <p className="text-lg text-neutral-600">
              From imagination to bedtime magic in moments
            </p>
          </div>

          {/* Desktop: Zigzag Layout */}
          <div className="hidden lg:block relative">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.number} className="relative">
                  {/* Step Row */}
                  <div className={`flex items-center gap-8 ${isEven ? '' : 'flex-row-reverse'} mb-8`}>
                    {/* Image Side */}
                    <div className="w-1/2 flex justify-center">
                      <div className="relative">
                        {/* Number Badge */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10">
                          {step.number}
                        </div>
                        {/* Image */}
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-xl overflow-hidden">
                          <img
                            src={step.imageSrc}
                            alt={step.title}
                            loading="lazy"
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text Side */}
                    <div className={`w-1/2 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                      <div className={`max-w-sm ${isEven ? 'text-left' : 'text-right'}`}>
                        <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Curved Arrow to Next Step */}
                  {index < journeySteps.length - 1 && (
                    <div className={`flex ${isEven ? 'justify-end pr-24' : 'justify-start pl-24'} -mt-4 mb-4`}>
                      <svg
                        className={`w-16 h-16 text-fairy-gold-400 ${isEven ? '' : 'scale-x-[-1]'}`}
                        viewBox="0 0 64 64"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M8 8 C 32 8, 56 32, 56 56"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="4 4"
                        />
                        <path
                          d="M48 48 L 56 56 L 48 56"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="lg:hidden space-y-8">
            {journeySteps.map((step, index) => (
              <div key={step.number} className="text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-fairy-gold-500 rounded-full text-white text-lg font-bold shadow-lg mb-4">
                  {step.number}
                </div>

                {/* Image */}
                <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-lg overflow-hidden mb-4">
                  <img
                    src={step.imageSrc}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                {/* Title and Description */}
                <h3 className="font-display text-xl font-semibold mb-2 text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow to Next Step */}
                {index < journeySteps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <svg className="w-8 h-8 text-fairy-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="text-center mt-12">
            <p className="text-lg text-neutral-700 italic">
              "FairyAI isn't just AI — it's a whole story studio built around your child's imagination."
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 md:py-12 bg-white">
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
      <section className="py-8 md:py-12 bg-neutral-50">
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

        </div>
      </section>

      {/* Curious about technical details */}
      <section className="py-8 md:py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold text-white text-xl mb-2">
            Curious about the technical details?
          </p>
          <p className="text-neutral-300 mb-6">
            We're happy to chat about how FairyAI works under the hood.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-fairy-gold-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-fairy-gold-600 hover:shadow-lg transition-all"
          >
            Contact Us →
          </a>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 md:py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
            Ready to Start?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Free Fairy Dust + 7 days of Fairy Corner. No credit card required.
          </p>
          <DownloadButtons variant="gradient" />
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
