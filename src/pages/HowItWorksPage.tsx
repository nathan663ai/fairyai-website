import React, { useRef } from 'react';
import { Palette, Zap, Wand2, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
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
      description: "Stories, narration, and songs in native-quality audio."
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
                      Read together or play narration. Continue into multi-chapter books.
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

          {/* Desktop Grid - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                {/* Icon in circular container */}
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                  <img
                    src={feature.imageSrc}
                    alt={feature.title}
                    loading="lazy"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel - Hidden on desktop */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
              {features.map((feature, index) => (
                <div key={index} className="flex-shrink-0 w-64 snap-start">
                  <Card className="text-center p-6 h-full">
                    {/* Icon in circular container */}
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        loading="lazy"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
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
            {/* Swipe Hint */}
            <p className="text-center text-sm text-neutral-500 mt-2 flex items-center justify-center gap-1">
              <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </section>

      {/* How Character Wizard Works - Simplified */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Character Wizard
            </h2>
            <p className="text-lg text-neutral-600">
              Two ways to create characters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Character */}
            <Card className="p-8 bg-gradient-to-br from-soft-blue-50 to-white">
              <div className="mb-4">
                <Zap className="w-10 h-10 text-soft-blue-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                Quick Character
              </h3>
              <p className="text-neutral-700 mb-4">
                Describe in one sentence. Create instantly.
              </p>
              <p className="text-sm text-neutral-600">
                Perfect when you just want to start the story.
              </p>
            </Card>

            {/* Full Wizard */}
            <Card className="p-8 bg-gradient-to-br from-soft-green-50 to-white">
              <div className="mb-4">
                <Palette className="w-10 h-10 text-soft-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                Full Wizard
              </h3>
              <p className="text-neutral-700 mb-4">
                Step-by-step builder. Add traits, abilities, generate custom images (~60 seconds).
              </p>
              <p className="text-sm text-neutral-600">
                Choose from Fantasy, Adventure, Animal, or Modern character types.
              </p>
            </Card>
          </div>

          {/* Coming Soon Note */}
          <div className="mt-8 p-6 bg-gradient-to-r from-fairy-purple-50 to-soft-blue-50 rounded-xl border-l-4 border-fairy-purple-400">
            <p className="font-semibold text-neutral-900 mb-2">Coming Soon:</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
              <div>Create from photos or drawings</div>
              <div>Choose-your-own-path stories</div>
              <div>Record your own narrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Creation - Simplified */}
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Story Creation
            </h2>
            <p className="text-lg text-neutral-600">
              Choose your level of control
            </p>
          </div>

          <div className="space-y-6">
            {/* Quick Story */}
            <Card className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Zap className="w-12 h-12 text-fairy-gold-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                    Quick Story
                  </h3>
                  <p className="text-lg text-neutral-700 mb-3">
                    Pick age group. Describe what you want in one sentence. Done.
                  </p>
                  <p className="text-sm text-neutral-600">
                    Perfect for weeknight bedtimes when you just need a story fast.
                  </p>
                </div>
              </div>
            </Card>

            {/* Story Wizard */}
            <Card className="p-8 bg-gradient-to-br from-white to-soft-blue-50">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Wand2 className="w-12 h-12 text-soft-blue-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                    Story Wizard
                  </h3>
                  <p className="text-lg text-neutral-700 mb-4">
                    Full control when you have more time:
                  </p>
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-700">
                    <div>• Select characters (one or many)</div>
                    <div>• Choose theme and setting</div>
                    <div>• Pick moral lesson</div>
                    <div>• Add optional plot hints</div>
                    <div>• Select age group and language</div>
                    <div>• Choose length and perspective</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Continuation */}
            <Card className="p-8 bg-gradient-to-br from-soft-green-50 to-white border-2 border-soft-green-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <BookOpen className="w-12 h-12 text-soft-green-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-3 text-neutral-900">
                    Continue Into Books
                  </h3>
                  <p className="text-lg text-neutral-700 mb-4">
                    Stories don't end. Continue them night after night:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-1">Quick Continue</p>
                      <p className="text-sm text-neutral-600">2 taps, instant next chapter</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-neutral-900 mb-1">Advanced Continue</p>
                      <p className="text-sm text-neutral-600">Add characters, change tone, guide plot</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mt-4">
                    Stories auto-group into books of 5 chapters with "Play All" narration.
                  </p>
                </div>
              </div>
            </Card>
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
