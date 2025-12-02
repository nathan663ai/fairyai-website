import React from 'react';
import { Palette, Zap, Wand2, BookOpen, Headphones, Music, Library, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayer from '../components/ui/VideoPlayer';
import DownloadButtons from '../components/ui/DownloadButtons';
import Card from '../components/ui/Card';

const HowItWorksPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Build Characters',
      description: 'Create once, use forever. Give them traits, abilities, and custom images.'
    },
    {
      icon: Zap,
      title: 'Quick Story',
      description: '2 taps for instant magic when you just need a story fast.'
    },
    {
      icon: Wand2,
      title: 'Story Wizard',
      description: 'Full control: characters, theme, moral lesson, plot hints.'
    },
    {
      icon: BookOpen,
      title: 'Continue Adventures',
      description: 'Turn any story into multi-chapter books. Quick or advanced mode.'
    },
    {
      icon: Headphones,
      title: '12 Languages',
      description: 'Stories, narration, and songs in native-quality audio.'
    },
    {
      icon: Music,
      title: 'Custom Songs',
      description: 'Turn stories into catchy songs with lyrics and melodies.'
    },
    {
      icon: Library,
      title: 'Fairy Corner',
      description: 'Classic tales, daily AI stories, nursery rhymes. 2 always free.'
    },
    {
      icon: Shield,
      title: 'Age-Smart',
      description: 'Content adapts for ages 2-12. Safe filters on everything.'
    }
  ];

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h1>
          <p className="text-xl text-neutral-600">
            Simple to start. Deep when you want it.
          </p>
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
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4">
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
      <section className="py-12 md:py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
              Everything Included
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mb-3 flex justify-center">
                  <feature.icon className="w-10 h-10 text-soft-blue-600" strokeWidth={1.5} />
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
              <div className="text-4xl mb-4">⚡</div>
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
              <div className="text-4xl mb-4">🎨</div>
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
              <div>📸 Create from photos or drawings</div>
              <div>🎮 Choose-your-own-path stories</div>
              <div>🎙️ Record your own narrations</div>
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
                <div className="text-5xl flex-shrink-0">⚡</div>
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
                <div className="text-5xl flex-shrink-0">🧙</div>
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
                <div className="text-5xl flex-shrink-0">📖</div>
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-lg text-soft-blue-50 mb-8">
            6 free Fairy Dust + 7 days of Fairy Corner. No credit card required.
          </p>
          <DownloadButtons variant="light" />
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
