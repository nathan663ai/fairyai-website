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
      id: '067a4db2-9383-4d08-884e-d1dbad16483a',
      content: `Once upon a time, in a bright and bustling city, there lived a shiny silver robot named Robbie. Robbie lived in a cosy workshop with his inventor, Miss Tilly. Miss Tilly took good care of Robbie. She polished his metal arms every morning and tightened his bolts at night before bedtime. Robbie loved his workshop, but sometimes, he felt a little lonely.

Robbie had lots of buttons and flashing lights, and he could beep and whirr as much as he liked. But sometimes, he wished he had someone to play with. He watched birds fly past the window in pairs, and children skipping hand-in-hand on the pavement outside. Robbie wondered what it would be like to have a friend.

One sunny morning, Miss Tilly said, "Robbie, would you like to come with me to the park today?"

Robbie's eyes lit up bright blue. "Yes, please!" he beeped excitedly.

Miss Tilly packed a picnic. She tucked in some sandwiches, fruit, and a shiny red apple for herself—a shiny new battery for Robbie. Off they went to the park.

The park was full of colour and laughter. Children ran about playing tag. Dogs chased sticks across the grass. Near the big oak tree, Miss Tilly spread out their picnic blanket.

"Go and explore if you like," said Miss Tilly with a smile.

Robbie whirred over to the playground. He saw two children building a sandcastle together. He saw a group of girls spinning on the roundabout, giggling as they went round and round.

Robbie beeped shyly and rolled over to the sandpit. "Hello," he said in his best robot voice.

The two children looked up. One was called Sam and the other was called Jaya.

"Hello!" said Jaya with a grin. "Are you a real robot?"

"Yes," beeped Robbie proudly.

Sam's eyes grew wide. "Can you help us build our castle?"

Robbie nodded and used his clever claw hands to pat down the sand just right. Together, they made the tallest sandcastle in the park! They added seashells for windows and sticks for flags.

"This is fun!" said Jaya.

"It's even better with you," said Sam.

Robbie felt something new inside him—something warm and sparkly—even though he didn't have a heart like humans did.

After a while, Sam said, "Let's play hide-and-seek!"

"I've never played that before," Robbie admitted.

"It's easy!" Jaya explained. "You close your eyes and count while we hide."

Robbie turned around and closed his robot eyes (which meant he switched off his camera sensors for ten seconds). He counted out loud: "One… two… three…"

When he finished counting, Robbie beeped, "Ready or not, here I come!" He used his gentle whirring wheels to glide around the playground looking for Sam and Jaya.

He found Sam hiding behind the big slide and Jaya crouched behind the swings. Everyone cheered!

"You're really good at seeking," laughed Sam.

"I like this game," said Robbie happily.

Soon it was time for lunch. Miss Tilly called Robbie over to the picnic blanket.

"Did you have fun?" she asked as she passed him his shiny new battery.

"Yes!" said Robbie. "I made friends."

Sam and Jaya waved from across the grass. "Come play again after lunch!" they called.

After eating, Robbie hurried back to his new friends. Together they played on the swings—Jaya pushed Robbie gently so he could feel what it was like to swing back and forth under the blue sky.

Then they built paper aeroplanes from leaves and tried flying them from the top of their sandcastle tower.

As the afternoon sunshine turned golden, Jaya said softly, "We have to go home soon."

Sam nodded sadly. "Will we see you again?"

"I hope so," beeped Robbie quietly.

Jaya smiled brightly. "We come here every Saturday! Will you come too?"

"I'd like that very much," said Robbie with a happy whirr.

Just then, Sam gave Robbie a small pebble with a painted smiley face on it. "This is for you—to remember us!"

Robbie picked up the pebble carefully in his metal hand. It wasn't shiny or new like his battery, but it felt very special indeed.

When it was time to leave, Robbie waved goodbye to Sam and Jaya.

On the way home, Miss Tilly asked him gently, "Did you have a good day?"

Robbie thought about playing hide-and-seek, building castles together, swinging under the sky, and getting his special pebble from Sam.

"Yes," he beeped softly but proudly. "I made friends today."

Miss Tilly smiled kindly at him. "Friends make everything brighter."

That evening back at home, Robbie placed the smiley pebble on his bedside shelf next to his favourite screwdriver. As he powered down for bedtime mode, he remembered all the laughter and games from his wonderful day at the park.

From that day forward, every Saturday became 'Friendship Day' for Robbie—and he knew now that even robots could feel happy inside when they had friends by their side.

And so Robbie learned that friendship isn't about having buttons or bolts—it's about sharing fun times together and caring for each other in small special ways.

As night fell and stars twinkled above his workshop window, Robbie dreamed sweet dreams about all of his new adventures—with friends who would always be there when he needed them most.

Goodnight, little robot friend!`,
      context: {
        ageRange: '4-6 years',
        styleNotes: [
          'Clear narrative arc with beginning, middle, and end',
          'Character feelings expressed clearly',
          'Simple problem-solving (making friends at the park)',
        ],
        moral: 'Friends are more important than being perfect',
        length: '~8 minutes'
      }
    },
    '8-10': {
      id: '98b0e2c1-ece1-4654-8e4e-0b76c57a018a',
      content: `In the centre of a busy city, where people hurried past tall buildings and bright shops, lived a robot named Pixel. Pixel was not like the other robots who worked in offices or delivered post. Instead, he lived in the back room of Mr Singh's repair shop, surrounded by shelves cluttered with clocks, radios, and tangled wires.

Pixel was small and round, with shiny silver arms and a friendly face made of blinking blue lights. He had a button nose that glowed when he was curious—which was almost all the time. Every morning, Mr Singh would wind up his gears and say cheerfully, "Ready for another day of learning, Pixel?"

"Yes, Mr Singh!" Pixel would reply in his mechanical but cheerful voice.

Pixel loved to learn new things. He knew how to fix broken toasters and polish old watches until they sparkled like treasure. But sometimes he gazed out of the shop window at children playing in the park across the road. He saw them laughing together, sharing secrets or sweets, or helping each other up after a tumble.

One rainy afternoon, as grey clouds gathered outside and raindrops tapped on the windowpane like tiny fingers, Mr Singh gave Pixel a special task: fixing an old radio that belonged to someone very important—Mrs Potts from next door.

"Take care with this one," said Mr Singh. "Mrs Potts loves her afternoon music."

Pixel carefully opened up the radio using his tiny screwdriver fingers. Bits of wire poked out like spaghetti.

Just then, a little girl ducked into the shop to escape the rain. She had curly hair tied with ribbons and wore red wellies splattered with mud.

"Hello," she said shyly. "My name's Amira."

"Hello Amira," said Pixel politely. It was rare for children to come into the shop.

Amira's eyes widened when she saw him. "You're a robot! Can you talk?"

"Yes," said Pixel proudly. "I can talk—and fix things too."

Amira grinned and came closer. "Can I watch?"

So Amira watched as Pixel fixed Mrs Potts' radio. She asked questions about each part: "What does this bit do?" and "Why is that wire blue?" Sometimes she giggled when Pixel's nose glowed extra bright whenever he thought hard.

When he finished fixing the radio, Amira clapped her hands in delight.

"You're amazing!"

Pixel's circuits fluttered pleasantly at her words.

Suddenly Mrs Potts bustled in from next door to collect her radio. She beamed at Pixel and Amira before heading off into the rain with her precious music box under her arm.

Amira sighed happily as she watched Mrs Potts leave.

"I wish I could fix things like you," she said softly.

Pixel thought for a moment; no one had ever wished to be like him before.

"Perhaps I could teach you," he suggested hopefully.

Amira's eyes sparkled brighter than ever before. "Would you really?"

From then on, every day after school—rain or shine—Amira came to visit Pixel in Mr Singh's shop. Together they fixed broken clocks whose hands spun wildly backwards; they glued wobbly toy soldiers so they could stand tall again; they even rescued a music box that would only play half a song until they found its missing spring hiding amongst some marbles.

While they worked side by side, Amira told stories about school: about her best friend who moved away last month; about games played at breaktime; about how it felt when someone shared their crisps with her just because she'd dropped hers on the playground floor.

Sometimes Amira brought sweets from home—a chewy caramel for herself and one wrapped up just for Pixel (even though robots didn't eat sweets). She made him laugh by pretending he could taste them too: "Mmm! Delicious petrol flavour!"

One afternoon as they packed away their tools after fixing Mrs Chen's electric fan (which now spun cheerfully instead of groaning), Amira grew quiet.

"My birthday party is tomorrow," she said slowly. "There'll be games…and cake…and lots of children." Her shoulders drooped slightly as she looked at her muddy boots. "But I don't know if anyone will come…"

Pixel blinked thoughtfully: friendship was still something new to him—and parties were even more mysterious!

"I would come if I could," he said softly. "But robots aren't allowed out much…"

She smiled sadly but squeezed his hand—his metal fingers felt cool but gentle in hers.

The next day dawned bright and sunny—and right on time there was a knock on Amira's door just before her party began. On her doorstep stood Mr Singh holding a cardboard box—and inside it sat Pixel!

"I've got special permission today!" chirped Mr Singh kindly. "Pixel is here to deliver your birthday present."

Amira squealed with delight as she helped lift Pixel out onto her living room carpet where balloons bobbed overhead like colourful clouds.

Soon other children arrived—all curious about this funny little robot guest who could make his nose glow different colours—from green (curious) to pink (excited) to orange (tickled).

They played pass-the-parcel while Pixel called out instructions ("No peeking!"), built towers from blocks taller than themselves—with Pixel balancing extra pieces using steady robot hands—and even had a dance competition where everyone cheered as he wiggled his hips with mechanical precision!

When it came time for cake—chocolate sponge covered in rainbow sprinkles—Amira saved an extra slice for Pixel ("Robots eat imaginary cake!") which made him laugh so hard his blue lights twinkled like fairy lights all around them.

Later as parents collected their tired but happy children, many asked shyly if perhaps their own toys might meet such an excellent robot friend one day too. By evening only Amira and Pixel remained among crumbs and curling ribbons scattered across the floor.

"That was brilliant!" exclaimed Amira breathlessly as she hugged him gently around his shiny shoulders.

"I didn't know parties—or friendship—could feel like this." admitted Pixel quietly.

She nodded: "Me neither... But I'm glad we found out together."

As stars blinked above outside and city lights sparkled below their window, both knew something precious had begun—a real friendship forged through laughter shared repairs…and chocolate cake eaten together (even if only some friends pretended). And from that night on neither felt quite so alone again—for now both knew what it truly meant to be someone's special friend…robot or not!`,
      context: {
        ageRange: '7-9 years',
        styleNotes: [
          'Complex emotions explored (feeling different, belonging)',
          'Character growth and meaningful relationships',
          'Relatable social challenges (making friends, being included)',
        ],
        moral: 'Being different doesn\'t mean you can\'t connect with others',
        length: '~10 minutes'
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
