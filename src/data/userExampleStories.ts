// User Example Stories Data Structure
// Stories created by users to showcase FairyAI's capabilities

export interface AgeVariationContext {
  ageRange: string;
  styleNotes: string[];
  moral: string;
  length: string;
}

export interface AgeVariation {
  id: string;
  content: string;
  context: AgeVariationContext;
  // Narrations and songs will be added by Nathan later
  narrations?: any[];
  songs?: any[];
}

export interface PromptDetails {
  theme?: string;
  moral?: string;
  setting?: string;
  targetAge?: string;
}

export interface UserExampleStory {
  id: string;
  title: string;
  promptType: 'simple' | 'detailed';
  promptText: string;
  promptDetails?: PromptDetails;

  // Stories by age group
  ageVariations: {
    '2-4': AgeVariation;
    '5-7': AgeVariation;
    '8-10': AgeVariation;
    '11-12': AgeVariation;
  };
}

// Robot Friendship Story (Simple Prompt Example)
export const robotFriendshipStory: UserExampleStory = {
  id: 'robot-friendship',
  title: 'A Robot Learns About Friendship',
  promptType: 'simple',
  promptText: 'A robot learns about friendship',

  ageVariations: {
    '2-4': {
      id: '60106122-ff41-452e-9d42-e8691a4c8093',
      content: `Once upon a time, in a bright blue house, lived a little robot named Beep. Beep was shiny and silver, with twinkly lights and a big, round button on his tummy. Beep loved to beep and boop all day long. But sometimes, Beep felt a little bit lonely.

One sunny morning, Beep woke up with a wiggle and a beep. "Beep beep! What will I do today?" he wondered. Beep looked out of the window and saw the birds singing in the trees. He saw the squirrels chasing each other. He saw the butterflies dancing in the garden.

"I want to play too," said Beep. "But I do not know how."

Beep rolled outside on his little wheels. He saw a small, brown puppy digging in the dirt. The puppy wagged his tail and barked. "Woof woof!"

"Hello, Puppy," said Beep. "Can I play with you?"

The puppy sniffed Beep's shiny hand. "Woof! Let's dig!" said Puppy.

Beep tried to dig with his metal hands, but the dirt was hard and cold. His hands got all muddy. "Oh no!" said Beep. "I do not like digging."

Puppy wagged his tail. "That's okay, Beep! Let's run!"

Beep tried to run, but his wheels went bumpity-bump on the grass. He rolled this way and that way. "Oh no!" said Beep. "I do not like running."

Puppy licked Beep's hand. "That's okay, Beep! Let's find someone else to play with."

Beep and Puppy went to the garden. There, they saw Bella Bunny nibbling on a carrot. Her ears were long and floppy.

"Hello, Bella Bunny," said Beep. "Can we play with you?"

Bella Bunny wiggled her nose. "Let's hop!" she said.

Beep tried to hop, but his wheels went round and round. He wobbled and wiggled, but he could not hop. "Oh no!" said Beep. "I do not like hopping."

Bella Bunny smiled. "That's okay, Beep! Let's find another friend."

Beep, Puppy, and Bella Bunny walked to the pond. Quack the Duck was splashing in the water.

"Hello, Quack," said Beep. "Can we play with you?"

Quack flapped his wings. "Let's swim!" he said.

Beep rolled to the water's edge. He put one wheel in the water. Splash! "Oh no!" said Beep. "I do not like swimming."

Quack paddled closer. "That's okay, Beep! What do you like to do?"

Beep thought and thought. His lights blinked. His button glowed. "I like to beep and boop!" he said. "I can make music with my beeps and boops."

Puppy barked. "I like music!"

Bella Bunny wiggled her ears. "Me too!"

Quack flapped his wings. "Let's all make music!"

Beep beeped and booped. Puppy barked. Bella Bunny thumped her feet. Quack quacked. Together, they made a happy song.

Beep felt happy. His lights blinked in all the colours of the rainbow. "I love playing music with my friends," he said.

Puppy wagged his tail. "You are a good friend, Beep!"

Bella Bunny nibbled her carrot. "You make us happy, Beep!"

Quack splashed in the pond. "Let's play again tomorrow!"

Beep beeped with joy. "Yes, let's play again! I love my friends!"

The sun began to set. It was time to go home.

Beep rolled back to his bright blue house. He looked up at the twinkly stars. "I learned something today," said Beep. "Friends are special. Friends help each other. Friends play together. And friends make me happy."

Beep closed his eyes. His lights turned soft and gentle. "Goodnight, friends," he whispered.

And Beep the Robot fell fast asleep, dreaming of beeps, boops, and wonderful friendship adventures.

The end.`,
      context: {
        ageRange: '2-3 years',
        styleNotes: [
          'Simple, repetitive language',
          'Bright characters and sounds (Beep! Woof! Quack!)',
          'Basic emotions and actions',
        ],
        moral: 'Friends make us happy',
        length: '~5 minutes'
      }
    },
    '5-7': {
      id: 'robot-friendship-5-7',
      content: `[Placeholder: Story content will be provided by Nathan]

This is where the version for ages 5-7 will appear, with a clear narrative arc and character feelings.`,
      context: {
        ageRange: '5-7 years',
        styleNotes: [
          'Clear narrative arc',
          'Character feelings expressed',
          'Simple problem-solving',
        ],
        moral: 'Friends are more important than rules',
        length: '~6 minutes'
      }
    },
    '8-10': {
      id: 'robot-friendship-8-10',
      content: `[Placeholder: Story content will be provided by Nathan]

This is where the version for ages 8-10 will appear, with complex emotions and character growth.`,
      context: {
        ageRange: '8-10 years',
        styleNotes: [
          'Complex emotions explored',
          'Character growth and change',
          'Relatable social challenges',
        ],
        moral: 'Being different doesn\'t mean you can\'t connect with others',
        length: '~8 minutes'
      }
    },
    '11-12': {
      id: 'robot-friendship-11-12',
      content: `[Placeholder: Story content will be provided by Nathan]

This is where the version for ages 11-12 will appear, with sophisticated themes and deeper meaning.`,
      context: {
        ageRange: '11-12 years',
        styleNotes: [
          'Sophisticated themes',
          'Internal conflict and growth',
          'Deeper meaning and nuance',
        ],
        moral: 'Vulnerability is strength, not weakness',
        length: '~10 minutes'
      }
    }
  }
};

// Dragon Heights Story (Detailed Prompt Example)
export const dragonHeightsStory: UserExampleStory = {
  id: 'dragon-afraid-heights',
  title: 'The Dragon Who Was Afraid of Heights',
  promptType: 'detailed',
  promptText: `Create a story about a young dragon named Ember who is terrified of flying, even though all dragons are supposed to soar through the sky. She lives in mountain caves and feels embarrassed that she prefers walking. One day, a tiny mouse named Pip gets trapped on a cliff ledge during a storm. Ember must face her fear to save her friend.`,
  promptDetails: {
    theme: 'Overcoming fear',
    moral: 'True courage means doing what\'s right, even when you\'re scared',
    setting: 'Misty mountain peaks and cozy caves',
    targetAge: '5-7 years'
  },

  ageVariations: {
    '2-4': {
      id: 'dragon-heights-2-4',
      content: `[Placeholder: Story content will be provided by Nathan]

Simplified version: "Ember the dragon doesn't like to fly. Flying feels scary! But when her friend needs help, Ember tries. She goes up, up, up! Ember is brave!"`,
      context: {
        ageRange: '2-4 years',
        styleNotes: [
          'Shorter sentences, repetitive phrases',
          'Focus on action, not emotion complexity',
        ],
        moral: 'Being brave helps friends',
        length: '~3 minutes'
      }
    },
    '5-7': {
      id: 'dragon-heights-5-7',
      content: `[Placeholder: Story content will be provided by Nathan]

This is the original target age for the story, with clear character emotions, problem-solving, and a satisfying resolution.`,
      context: {
        ageRange: '5-7 years (Original Target)',
        styleNotes: [
          'Character feels fear but overcomes it',
          'Clear cause and effect',
          'Friendship and bravery themes',
        ],
        moral: 'True courage means doing what\'s right, even when you\'re scared',
        length: '~6 minutes'
      }
    },
    '8-10': {
      id: 'dragon-heights-8-10',
      content: `[Placeholder: Story content will be provided by Nathan]

Expanded version with more internal conflict: Ember doesn't just fear flying—she fears disappointing her family, being different, and failing when it matters most.`,
      context: {
        ageRange: '8-10 years',
        styleNotes: [
          'More complex emotional landscape',
          'Secondary characters with depth',
          'Longer descriptive passages',
        ],
        moral: 'Courage isn\'t the absence of fear, it\'s acting despite it',
        length: '~8 minutes'
      }
    },
    '11-12': {
      id: 'dragon-heights-11-12',
      content: `[Placeholder: Story content will be provided by Nathan]

Matured version exploring identity and self-acceptance: What if who you are doesn't match who you're supposed to be? Ember's journey becomes about accepting herself, not just saving her friend.`,
      context: {
        ageRange: '11-12 years',
        styleNotes: [
          'Sophisticated themes of identity',
          'Nuanced character relationships',
          'More literary language',
        ],
        moral: 'True courage is accepting who you are, even if you\'re different',
        length: '~10 minutes'
      }
    }
  }
};
