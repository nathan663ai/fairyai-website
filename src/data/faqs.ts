export interface FAQ {
  question: string;
  answer: string;
  hasLink?: boolean;
  hasEmail?: boolean;
}

export const faqs: FAQ[] = [
  {
    question: "What if I don't like a generated story?",
    answer: "You'll need to generate a new story, which will cost Fairy Dust again. However, if generation fails due to a technical issue (timeout, API error, etc.), you'll receive an automatic refund. We recommend using the Story Wizard for more control over the output."
  },
  {
    question: "Can I edit stories after creation?",
    answer: "No, you can't edit stories directly. However, you can continue any story into a new chapter for just 1 Fairy Dust. Each continuation remembers the previous chapters and maintains continuity. Stories are automatically grouped into chapter books in your library."
  },
  {
    question: "Do my stories expire?",
    answer: "No! All your generated stories, characters, and songs are stored permanently. You can access them anytime from your library. Only your monthly Fairy Dust allocation expires at the end of each billing cycle, but purchased Dust top-ups never expire."
  },
  {
    question: "Can siblings share one account?",
    answer: "Not yet. FairyAI currently uses single-user accounts. Child profiles are planned for Q1 2026, which will allow multiple children per parent account with separate libraries and preferences. For now, each child needs their own account."
  },
  {
    question: "What happens if generation fails?",
    answer: "If a story, character, song, or narration fails to generate due to a technical error, you'll receive an automatic Fairy Dust refund within seconds. The system detects failures (timeouts, API errors, invalid outputs) and refunds you immediately. No support ticket needed."
  },
  {
    question: "Can I print or download stories?",
    answer: "Yes! You can download stories as PDFs and narrations as MP3 files for offline use. Perfect for printing bedtime stories, saving favourites, or listening during car rides without internet. All your content is yours to keep."
  },
  {
    question: "Is my child's data safe? How do you handle privacy?",
    answer: "Absolutely. FairyAI is COPPA-compliant and takes data privacy seriously. We never sell your data to third parties, never use your child's information for advertising, and all data is encrypted in transit and at rest. Stories are generated using age-appropriate AI models with strict content filters. You can delete your account and all associated data at any time with a simple request. See our Privacy Policy for full details.",
    hasLink: true
  },
  {
    question: "How does FairyAI ensure content is age-appropriate?",
    answer: "Every story, character, and song is generated using age-specific AI models with built-in content filters. When you select your child's age (2-3, 4-6, 7-9, 10-12, or 12+), FairyAI automatically adjusts vocabulary, sentence complexity, and themes. All generated content is screened to prevent inappropriate topics, violence, or scary elements. Our Fairy Corner library is curated by our team to ensure every classic story is suitable for young children."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time from the app settings with no cancellation fees. Your subscription remains active until the end of your current billing period, and you keep access to all your generated stories, characters, and songs forever, even after cancelling. Any purchased Dust top-ups never expire and remain available to use anytime."
  },
  {
    question: "Can I use stories offline once they're generated?",
    answer: "Yes! Once you generate a story, it's saved to your library and available offline for reading. You can also download narrations as MP3 files to your device for offline listening during car rides, flights, or anywhere without internet. PDFs can be downloaded for printing physical copies."
  },
  {
    question: "How long does it take to generate a story, character, or song?",
    answer: "Stories generate in 30-60 seconds depending on length and complexity. Characters take about 60 seconds to generate with custom artwork. Songs (with lyrics and music) take approximately 2-3 minutes. Narrations add an extra 30-45 seconds. All generation times may vary slightly based on server load, but you'll see a progress indicator while content is being created."
  },
  {
    question: "What happens when I run out of Fairy Dust?",
    answer: "You can still access all your existing stories, characters, and songs in your library. You just won't be able to generate new content until your next monthly refill or until you purchase a Dust top-up (Sprinkle, Pouch, or Chest). The Fairy Corner library of 100+ classic stories remains fully accessible regardless of your Dust balance. Top-ups never expire, so you can stock up anytime."
  },
  {
    question: "How do persistent characters work?",
    answer: "When you create a character (2 Dust), it's saved to your character library with all traits, abilities, and artwork. You can then use this character in unlimited stories at no extra cost: just the normal 1 Dust story fee. The AI remembers the character's personality, appearance, and backstory across all stories, creating true continuity. Characters can appear together in the same story, and you can build a whole cast over time."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 7-day free trial (6 Fairy Dust + access to Fairy Corner) so you can try FairyAI risk-free before subscribing. If you're not satisfied with a paid subscription, contact us at support@fairyai.co.uk within 7 days of your first charge for a full refund. After that, subscription fees are non-refundable, but you can cancel anytime to prevent future charges.",
    hasEmail: true
  }
];
