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
      id: 'robot-friendship-2-4',
      content: `[Placeholder: Story content will be provided by Nathan]

This is where the simple version for ages 2-4 will appear, with basic language and repetitive phrases.`,
      context: {
        ageRange: '2-4 years',
        styleNotes: [
          'Simple, repetitive language',
          'Bright colors and sounds',
          'Basic emotions and actions',
        ],
        moral: 'Friends make us happy',
        length: '~3 minutes'
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
