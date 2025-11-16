import React from 'react';
import AudioPlayer from '../components/ui/AudioPlayer';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import DownloadButtons from '../components/ui/DownloadButtons';

// Full Story Examples Data
const fullStories = [
  {
    id: 1,
    title: 'Luna the Brave Bunny',
    ageRange: '4-6 years',
    audioSrc: '/audio/stories/luna-narration.mp3',
    characterImage: '/images/characters/character1.jpg',
    fullText: `Once upon a time, in a magical forest where the trees whispered secrets and the flowers glowed with moonlight, there lived a brave little bunny named Luna. Luna had soft white fur that shimmered like starlight and the biggest, brightest eyes you'd ever seen.

One evening, as the sun was setting and painting the sky in shades of pink and gold, Luna noticed something terrible—the moon crystal that kept the forest glowing at night was missing! Without it, the forest would be dark and scary for all her friends.

"I must find the moon crystal!" Luna declared, hopping bravely toward the Deep Dark Woods where no bunny had ever ventured before. Her heart was beating fast, but she remembered what her grandmother always said: "Courage isn't about not being scared. It's about being scared and doing the right thing anyway."

As Luna hopped deeper into the woods, she met a wise old owl named Oliver. "The moon crystal," Oliver hooted thoughtfully, "was taken by the mischievous Shadow Fox. He lives in the cave at the top of Whispering Mountain. But be careful, little one—the path is full of challenges."

Luna thanked Oliver and continued her journey. She crossed the Rickety Bridge over the Giggling Stream, climbed through the Thorny Thicket (being very careful with her soft paws), and finally reached the bottom of Whispering Mountain just as the stars began to appear.

The climb was difficult, but Luna kept going, one hop at a time. At the very top, she found the Shadow Fox sitting beside the glowing moon crystal. "Why did you take it?" Luna asked bravely.

The Shadow Fox looked sad. "I was lonely," he admitted. "The crystal's light keeps me company. No one ever visits me up here." Luna's heart softened. "I'll visit you!" she promised. "And I'll bring my friends! But the forest needs the crystal to stay bright and safe. Can we share it?"

The Shadow Fox smiled for the first time in years. Together, they returned the crystal to its special place in the Heart of the Forest. And true to her word, Luna visited the Shadow Fox every week, bringing friends and showing everyone that even someone who seems scary might just be lonely and in need of kindness.

From that night on, the moon crystal shone brighter than ever, and Luna became known as the bravest bunny in all the land. And the Shadow Fox? He was never lonely again.

The End.`,
  },
  {
    id: 2,
    title: 'The Friendly Space Dragon',
    ageRange: '5-8 years',
    audioSrc: '/audio/stories/dragon-narration.mp3',
    characterImage: '/images/characters/character2.jpg',
    fullText: `Far, far away in the depths of space, between the twinkling stars and swirling galaxies, lived a dragon named Cosmo. But Cosmo wasn't like any dragon you've read about before. Instead of breathing fire, Cosmo breathed stardust that created beautiful new constellations. Instead of scales, Cosmo's body was covered in shimmering cosmic patterns that changed colours like the northern lights.

Despite being the most magnificent creature in the entire universe, Cosmo was incredibly lonely. You see, all the other space dragons lived together in the Dragon Nebula, billions of light-years away. Cosmo had wandered off to explore and had gotten completely lost.

Every day, Cosmo would fly past planets and asteroids, hoping to find someone—anyone—to talk to. But most creatures were frightened by such a large, glowing dragon floating through space.

One day, while swooping past a small blue and green planet called Earth, Cosmo noticed something unusual. A tiny rocket ship had launched into space, carrying a young astronaut named Alex who was on a mission to collect samples from a nearby asteroid.

But something had gone wrong! Alex's rocket was spinning out of control, heading straight for a dangerous meteor field. Without thinking twice, Cosmo swooped in, gently catching the rocket in a soft cloud of stardust and guiding it to safety.

"Thank you!" Alex called through the radio. "I thought I was done for! You saved my life!"

For the first time in years, someone was talking to Cosmo! The dragon's cosmic patterns glowed even brighter with happiness. "You're welcome," Cosmo said in a voice that sounded like distant galaxies singing. "I'm Cosmo. Would you... would you like to be friends?"

Alex beamed inside the helmet. "I'd love to! I've always dreamed of meeting a space dragon!"

From that day on, Cosmo and Alex became the best of friends. Alex taught Cosmo about Earth—about friendship, laughter, and what it meant to belong somewhere. Cosmo showed Alex the wonders of the universe—secret planets made of crystal, singing asteroid belts, and the most beautiful cosmic sunrises you could ever imagine.

Eventually, with Alex's help and a powerful space telescope, Cosmo found the way back to the Dragon Nebula. But Cosmo didn't forget about Earth. Every year on Alex's birthday, the whole world would look up and see the most spectacular meteor shower—Cosmo's way of saying "thank you" to the friend who showed that friendship can happen anywhere in the universe, even between a lonely space dragon and a brave young astronaut.

And they remained friends forever, proving that the greatest adventures often begin when you help someone in need.

The End.`,
  },
  {
    id: 3,
    title: 'Rocket to the Rainbow Planet',
    ageRange: '6-9 years',
    audioSrc: '/audio/stories/space-narration.mp3',
    characterImage: '/images/characters/character3.jpg',
    fullText: `In a small town on Earth, there lived twins named Maya and Marcus who were absolutely obsessed with space. They had glow-in-the-dark stars on their ceiling, telescope in their backyard, and stacks of books about planets, rockets, and galaxies piled high in their room.

One Saturday morning, while exploring their grandmother's attic, they discovered something extraordinary—an old, dusty blueprint for a real rocket ship! The blueprint was dated 1969 and signed by their great-grandfather, who had been a secret aerospace engineer.

"Do you think we could build it?" Maya whispered excitedly.
"We have to try!" Marcus replied, his eyes sparkling.

For the next three months, the twins worked in their backyard workshop (with some help from their very surprised parents). They collected parts from junkyards, used advanced physics they learned from online tutorials, and even figured out how to create a small but powerful solar-powered engine.

Finally, on the night of the harvest moon, the rocket was ready. It was painted silver and blue, with the words "Dream Chaser" painted on the side. The twins climbed aboard, strapped themselves in, and pressed the big red button.

WHOOOOSH! The rocket lifted off! Up, up, up they went, past the clouds, past aeroplanes, through the atmosphere, and into the sparkling darkness of space.

"This is incredible!" Maya shouted as they floated past satellites and space stations.
"Look!" Marcus pointed ahead. "What's that?"

In the distance, through a swirling rainbow-coloured nebula, they spotted something no telescope on Earth had ever seen—a planet that seemed to be made entirely of rainbows. It shimmered with every colour imaginable and some colours that didn't even have names yet.

Unable to resist, the twins steered their rocket toward this mysterious Rainbow Planet. As they landed gently on its surface, they discovered it was like nothing on Earth. The ground was soft and bouncy like trampolines. The trees grew upside-down with their roots in the air. And the creatures who lived there—the Chromatics—were friendly beings made of living light who could change colours based on their emotions.

The Chromatics welcomed Maya and Marcus with a spectacular light show. They learned that the Rainbow Planet was in trouble—a space storm was heading their way that could dim all their colours forever. But the Chromatics' colour-generating crystal had broken, and they couldn't create the protective shield they needed.

Maya and Marcus knew exactly what to do. Using the same problem-solving skills they'd used to build their rocket, they helped the Chromatics repair their crystal using light refraction principles and some creative engineering with materials from their ship.

When the crystal was fixed, it created the most magnificent rainbow shield anyone had ever seen. The space storm bounced harmlessly off it, and the Rainbow Planet was saved!

As a thank-you gift, the Chromatics gave the twins a small rainbow crystal of their own. "Whenever you need to remember that anything is possible if you work together and never give up on your dreams, just look at this crystal," they said.

Maya and Marcus flew their rocket safely back to Earth, landing in their backyard just before sunrise. Their parents didn't quite believe their adventure story—until they saw the rainbow crystal, which glowed softly with impossible colours.

The twins kept the crystal on their shelf, and every night before bed, they'd look at it and plan their next adventure. Because they'd learned the most important lesson of all: with curiosity, courage, and teamwork, the whole universe is yours to explore.

The End.`,
  },
];

const StoriesPage: React.FC = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Example Stories from FairyAI
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            Read complete stories created by FairyAI and hear them narrated. These are real examples of what you can create in the app.
          </p>
        </div>
      </section>

      {/* Story Examples */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {fullStories.map((story, index) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden"
            >
              {/* Story Header */}
              <div className="bg-gradient-to-r from-soft-blue-500 to-soft-green-500 p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                      {story.title}
                    </h2>
                    <span className="inline-block text-sm font-semibold text-white bg-white bg-opacity-30 px-3 py-1 rounded-full">
                      {story.ageRange}
                    </span>
                  </div>
                </div>
              </div>

              {/* Character Image & Audio Player */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-neutral-50 to-white">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {/* Character Image */}
                  <div className="md:col-span-1">
                    <ImagePlaceholder
                      label={`Character from ${story.title}`}
                      aspectRatio="square"
                      className="rounded-lg shadow-md"
                    />
                  </div>

                  {/* Audio Player */}
                  <div className="md:col-span-2 flex items-center">
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                        🎧 Listen to the Story
                      </h3>
                      <AudioPlayer
                        src={story.audioSrc}
                        title={`${story.title} - Full Narration`}
                      />
                      <p className="text-xs text-neutral-500 mt-2">
                        30-second narration sample • Full narration available in app
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Text */}
              <div className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  {story.fullText.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-neutral-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Story Footer */}
              {index === fullStories.length - 1 && (
                <div className="border-t border-neutral-200 bg-neutral-50 p-6 text-center">
                  <p className="text-sm text-neutral-600">
                    📖 This is story example #{story.id} • Create your own in the FairyAI app
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-soft-blue-600 to-soft-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Own Stories?
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-soft-blue-50">
            Download FairyAI and start creating personalised bedtime adventures for your family.
          </p>
          <p className="text-lg mb-8 font-semibold">
            6 free Fairy Dust to get started • 7-day Fairy Corner trial • No credit card required
          </p>

          <div className="mb-6">
            <DownloadButtons variant="gradient" />
          </div>

          <p className="text-sm text-soft-blue-100">
            Join thousands of families creating magical bedtime moments
          </p>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
