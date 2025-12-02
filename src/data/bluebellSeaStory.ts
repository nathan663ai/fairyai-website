// The Marvelous Murmurs of Bluebell Sea - AI-Generated Story
// Available in 12 languages with varying narrations and songs

export interface Narrator {
  id: string;
  name: string;
  duration: number;
  audioUrl: string;
}

export interface Song {
  id: string;
  title: string;
  style: string;
  url: string;
  duration: number;
  coverUrl: string;
}

export interface BluebellSeaStoryData {
  id: string;
  title: string;
  languageCode: string;
  type: string;
  slug: string;
  imageUrl: string;
  content: string;
  narrators: Narrator[];
  songs: Song[];
}

const bluebellSeaContentEnGB = `Once upon a giggly bedtime in the squiggly-wiggly waters of the Bluebell Sea, there lived a forgetful octopus named **Olive**. Olive had eight twisty arms, two forgetful eyeballs, and one very important job. She was the official Message-Deliverer of Coral Kingdom. That meant every time King Fishy sent a royal message, Olive zipped and zoomed to deliver it—well, unless she got distracted by a passing bubble or a wiggly worm.

One bright morning, **King Fishy** waggled his glittery fins and called out, "Olive, quick! Deliver this scroll to Queen Shelley of Pearl Palace. Tell her it is for the Grand Seaweed Picnic, not the Grand Seaweed Pickle!"

Olive's eyes grew wide. "Picnic, not pickle. Picnic, not pickle," she chanted as she wrapped the scroll in her arm. Off she swirled, repeating her chant so she would not muddle it up.

But on her way, a speedy school of giggle-guppies zipped past. "Race you to the reef!" they squeaked. Olive couldn't resist. She joined the guppies in a wiggly-waggly race, arms flapping, scroll spinning, and soon, "Picnic, not pickle," turned into "Pickle-nic, not stickle."

By the time Olive reached the pearly gates of Queen Shelley's palace, she puffed, "Special scroll for the Grand Seaweed Pickle! No, Picnic! Or is it Pickle-nic?" She handed over the scroll, looking just as confused as a crab in a conga line.

Queen Shelley read the scroll and blinked. "A Grand Seaweed Pickle? Oh, how… unusual! But if King Fishy wants it, we shall have it! Prepare the biggest jar! Gather the sourest seaweed! Alert the royal cucumbers!"

Meanwhile, in the Coral Kingdom, King Fishy was busy tucking napkins into his collar. He imagined baskets of crispy seaweed sandwiches and sweet seaberry tarts. Suddenly, **Sir Bubbles the Seahorse** darted in, eyes popping. "Your Majesty! There's a parade of sea cucumbers heading for Pearl Palace! And everyone's carrying jars!"

King Fishy blinked. "Jars? For a picnic?"

Back in Pearl Palace, Queen Shelley's cooks squished, squashed, and squelched giant heaps of seaweed into jars. The royal trumpets boomed, "Presenting! The Grand Seaweed Pickle!" The sea cucumbers lined up, ready to be pickled. The guppies brought vinegar. Even the jellyfish wore chef hats.

Olive arrived just in time to see Queen Shelley balancing a mountain of jars, looking puzzled but determined. "Welcome, King Fishy!" she called. "We hope you're ready for a tart treat!"

King Fishy arrived, sniffed the air, and made a face like a fish who'd bitten a lemon. "Where are the sandwiches? Where are the tarts?"

Queen Shelley held up a jar. "But, my dear Fishy, you asked for a pickle. A Grand Seaweed Pickle!"

King Fishy blinked. "No, I wanted a picnic, not a pickle!"

Olive's arms wiggled and wobbled. "Oh, I got my words all twisty! Picnic, pickle, pickle-nic! It's all my fault," she admitted, her cheeks turning a bashful blue.

Just then, the guppies burst out laughing. "Pickle-nic! Pickle-nic! What a silly snack!" The jellyfish jiggled with giggles. Even the royal cucumbers did a wobbly dance.

King Fishy began to chuckle. Queen Shelley snorted in a very regal way. "Well," she said, "since we have jars, and snacks, and a whole sea of silliness, why not have the first ever Grand Seaweed Pickle-nic?"

Everyone cheered! Olive's arms spun with delight. Out came the tart seaweed pickles, the salty sandwiches, and the sweetest seaberry tarts you could imagine.

They sat together on coral cushions, munching and crunching, giggling every time someone said "Pickle-nic." Olive promised to always double-check her words, and King Fishy promised to bring extra napkins—just in case.

As the waves swished softly and the giggles faded to gentle snickers, everyone felt just a little bit closer, a little bit sillier, and a whole lot happier.

Tonight's thought: Honesty is important—even if it leads to a pickle-nic!

THE END`;

export const bluebellSeaStoryEnGB: BluebellSeaStoryData = {
  id: "17bf65eb-6d82-4144-a3fa-8c2c65e63c4e",
  title: "The Marvelous Murmurs of Bluebell Sea",
  languageCode: "en-GB",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentEnGB,
  narrators: [
    {
      id: "echo",
      name: "Echo",
      duration: 271,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-GB/echo.mp3"
    },
    {
      id: "nova",
      name: "Nova",
      duration: 277,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-GB/nova.mp3"
    },
    {
      id: "onyx",
      name: "Onyx",
      duration: 273,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-GB/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 271,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-GB/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "singalong",
      title: "The Forgetful Octopus",
      style: "singalong",
      url: "https://musicfile.api.box/YjRjMTVjM2UtMzU2NC00YmZkLThiN2YtMWU2ODk3NDIzYzBh.mp3",
      duration: 188,
      coverUrl: "https://musicfile.api.box/YjRjMTVjM2UtMzU2NC00YmZkLThiN2YtMWU2ODk3NDIzYzBh.jpeg"
    },
    {
      id: "epic_adventure",
      title: "The Forgetful Octopus",
      style: "epic_adventure",
      url: "https://musicfile.api.box/NGMyYWM0MDEtNmUwZC00NDcyLTllYmYtOTgwZDVjMjlmMmJk.mp3",
      duration: 146,
      coverUrl: "https://musicfile.api.box/NGMyYWM0MDEtNmUwZC00NDcyLTllYmYtOTgwZDVjMjlmMmJk.jpeg"
    },
    {
      id: "magical_pop_rock",
      title: "The Forgetful Messenger",
      style: "magical_pop_rock",
      url: "https://musicfile.api.box/MzU3MzhmM2UtMWI2MS00YWQ0LWI3NzItOWJkNWFmMGViNTdk.mp3",
      duration: 157,
      coverUrl: "https://musicfile.api.box/MzU3MzhmM2UtMWI2MS00YWQ0LWI3NzItOWJkNWFmMGViNTdk.jpeg"
    },
    {
      id: "enchanted_synth_pop",
      title: "The Forgetful Octopus",
      style: "enchanted_synth_pop",
      url: "https://musicfile.api.box/ZTM0MTIyMTctOGJhMC00NmNmLTgxZDQtZDk3Yzc4M2ZiYjA1.mp3",
      duration: 172,
      coverUrl: "https://musicfile.api.box/ZTM0MTIyMTctOGJhMC00NmNmLTgxZDQtZDk3Yzc4M2ZiYjA1.jpeg"
    }
  ]
};

const bluebellSeaContentEnUS = `One bright morning, **King Fishy** waggled his glittery fins and called out, "Olive, quick! Deliver this scroll to Queen Shelley of Pearl Palace. Tell her it is for the Grand Seaweed Picnic, not the Grand Seaweed Pickle!"

Olive's eyes grew wide. "Picnic, not pickle. Picnic, not pickle," she chanted as she wrapped the scroll in her arm. Off she swirled, repeating her chant so she would not muddle it up.

But on her way, a speedy school of giggle-guppies zipped past. "Race you to the reef!" they squeaked. Olive couldn't resist. She joined the guppies in a wiggly-waggly race, arms flapping, scroll spinning, and soon, "Picnic, not pickle," turned into "Pickle-nic, not stickle."

By the time Olive reached the pearly gates of Queen Shelley's palace, she puffed, "Special scroll for the Grand Seaweed Pickle! No, Picnic! Or is it Pickle-nic?" She handed over the scroll, looking just as confused as a crab in a conga line.

Queen Shelley read the scroll and blinked. "A Grand Seaweed Pickle? Oh, how… unusual! But if King Fishy wants it, we shall have it! Prepare the biggest jar! Gather the sourest seaweed! Alert the royal cucumbers!"

Meanwhile, in the Coral Kingdom, King Fishy was busy tucking napkins into his collar. He imagined baskets of crispy seaweed sandwiches and sweet seaberry tarts. Suddenly, **Sir Bubbles the Seahorse** darted in, eyes popping. "Your Majesty! There's a parade of sea cucumbers heading for Pearl Palace! And everyone's carrying jars!"

King Fishy blinked. "Jars? For a picnic?"

Back in Pearl Palace, Queen Shelley's cooks squished, squashed, and squelched giant heaps of seaweed into jars. The royal trumpets boomed, "Presenting! The Grand Seaweed Pickle!" The sea cucumbers lined up, ready to be pickled. The guppies brought vinegar. Even the jellyfish wore chef hats.

Olive arrived just in time to see Queen Shelley balancing a mountain of jars, looking puzzled but determined. "Welcome, King Fishy!" she called. "We hope you're ready for a tart treat!"

King Fishy arrived, sniffed the air, and made a face like a fish who'd bitten a lemon. "Where are the sandwiches? Where are the tarts?"

Queen Shelley held up a jar. "But, my dear Fishy, you asked for a pickle. A Grand Seaweed Pickle!"

King Fishy blinked. "No, I wanted a picnic, not a pickle!"

Olive's arms wiggled and wobbled. "Oh, I got my words all twisty! Picnic, pickle, pickle-nic! It's all my fault," she admitted, her cheeks turning a bashful blue.

Just then, the guppies burst out laughing. "Pickle-nic! Pickle-nic! What a silly snack!" The jellyfish jiggled with giggles. Even the royal cucumbers did a wobbly dance.

King Fishy began to chuckle. Queen Shelley snorted in a very regal way. "Well," she said, "since we have jars, and snacks, and a whole sea of silliness, why not have the first ever Grand Seaweed Pickle-nic?"

Everyone cheered! Olive's arms spun with delight. Out came the tart seaweed pickles, the salty sandwiches, and the sweetest seaberry tarts you could imagine.

They sat together on coral cushions, munching and crunching, giggling every time someone said "Pickle-nic." Olive promised to always double-check her words, and King Fishy promised to bring extra napkins—just in case.

As the waves swished softly and the giggles faded to gentle snickers, everyone felt just a little bit closer, a little bit sillier, and a whole lot happier.

Tonight's thought: Honesty is important—even if it leads to a pickle-nic!

THE END`;

export const bluebellSeaStoryEnUS: BluebellSeaStoryData = {
  id: "9f8fd17e-9155-4382-84f4-a94c80eb8e4a",
  title: "The Marvelous Murmurs of Bluebell Sea",
  languageCode: "en-US",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentEnUS,
  narrators: [
    {
      id: "echo",
      name: "Echo",
      duration: 246,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-US/echo.mp3"
    },
    {
      id: "nova",
      name: "Nova",
      duration: 245,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-US/nova.mp3"
    },
    {
      id: "onyx",
      name: "Onyx",
      duration: 234,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-US/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 247,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/en-US/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "singalong",
      title: "The Forgetful Octopus",
      style: "singalong",
      url: "https://musicfile.api.box/MDRjNzVmZjAtYjAzOC00MDBiLWFmMmUtZTM2YjQ1ZGQ0ZmEz.mp3",
      duration: 187,
      coverUrl: "https://musicfile.api.box/MDRjNzVmZjAtYjAzOC00MDBiLWFmMmUtZTM2YjQ1ZGQ0ZmEz.jpeg"
    },
    {
      id: "epic_adventure",
      title: "The Forgetful Octopus",
      style: "epic_adventure",
      url: "https://musicfile.api.box/MWJhNzU5MWQtYTk4OS00ZGIwLWE3MDYtZWUwOWZiOTA1MTQ0.mp3",
      duration: 164,
      coverUrl: "https://musicfile.api.box/MWJhNzU5MWQtYTk4OS00ZGIwLWE3MDYtZWUwOWZiOTA1MTQ0.jpeg"
    },
    {
      id: "magical_pop_rock",
      title: "The Forgetful Octopus",
      style: "magical_pop_rock",
      url: "https://musicfile.api.box/MDFmNTViZTYtNGY2Yi00NDQ5LWI1NTEtMmZiMzYwYmQzNDMx.mp3",
      duration: 240,
      coverUrl: "https://musicfile.api.box/MDFmNTViZTYtNGY2Yi00NDQ5LWI1NTEtMmZiMzYwYmQzNDMx.jpeg"
    },
    {
      id: "enchanted_synth_pop",
      title: "The Forgetful Octopus",
      style: "enchanted_synth_pop",
      url: "https://musicfile.api.box/NzJlYjE3NmQtOTFkNC00OTM5LTk5NTctZjIzYWNkYzY1MmNk.mp3",
      duration: 183,
      coverUrl: "https://musicfile.api.box/NzJlYjE3NmQtOTFkNC00OTM5LTk5NTctZjIzYWNkYzY1MmNk.jpeg"
    }
  ]
};

const bluebellSeaContentDE = `Es war einmal an einem kichernden Gute-Nacht-Abend in den wuschel-wackeligen Wassern des Bluebell Sea, da lebte ein vergesslicher Oktopus namens **Olive**. Olive hatte acht windige Arme, zwei vergessliche Äuglein und einen sehr wichtigen Auftrag. Sie war die offizielle Botschafterin des Korallen-Königreichs. Das bedeutete: Jedes Mal, wenn King Fishy eine königliche Nachricht schickte, flitzte Olive los, um sie zu überbringen — na ja, es sei denn, sie ließ sich von einer vorbeischwimmenden Blase oder einem wackeligen Wurm ablenken.

Eines hellen Morgens wedelte **King Fishy** mit seinen glitzernden Flossen und rief: „Olive, schnell! Bring dieses Schriftstück an Queen Shelley vom Pearl Palace. Sag ihr, es ist für das große Seetang-Picknick, nicht für das große Seetang-Pickle!"

Olives Augen wurden ganz rund. „Picknick, nicht Pickle. Picknick, nicht Pickle," summte sie, während sie das Schriftstück in einen ihrer Arme wickelte. Fort wirbelte sie, und sie sagte ihren Spruch immer wieder, damit sie sich nicht verhaspeln würde.

Aber auf dem Weg rauschte eine flinke Schule kichernder Guppys vorbei. „Wettlauf bis zum Riff!" piepsten sie. Olive konnte nicht widerstehen. Sie machte mit den Guppys ein wuschel-wackeliges Rennen, Arme schlackerten, das Schriftstück drehte sich — und bald wurde aus „Picknick, nicht Pickle" ein „Pickle-nic, nicht Stickle."

Als Olive die perlmuttfarbenen Tore des Pearl Palace erreichte, schnaufte sie: „Sondernachricht für das große Seetang-Pickle! Nein, Picknick! Oder war's Pickle-nic?" Sie reichte das Schriftstück und sah genauso verwirrt aus wie eine Krabbe in einer Conga-Linie.

Queen Shelley las das Schriftstück und blinzelte. „Ein Großes Seetang-Pickle? Oh, wie… ungewöhnlich! Aber wenn King Fishy das wünscht, dann machen wir das! Bereitet das größte Glas vor! Sammelt den sauersten Seetang! Benachrichtigt die königlichen Gurken!"

Unterdessen stopfte King Fishy im Korallen-Königreich gerade Servietten in seinen Kragen. Er stellte sich Körbe mit knusprigen Seetang-Sandwiches und süßen Seebeerentörtchen vor. Plötzlich sauste **Sir Bubbles the Seahorse** herbei, die Augen ganz groß. „Eure Majestät! Eine Parade von Meeresgurken zieht zum Pearl Palace! Und alle tragen Gläser!"

King Fishy blinzelte. „Gläser? Für ein Picknick?"

Im Pearl Palace zerquetschten, pressten und quetschten Queen Shelleys Köche riesige Berge Seetang in Gläser. Die königlichen Trompeten schmetterten: „Vorhang auf! Das große Seetang-Pickle!" Die Meeresgurken stellten sich in Reih und Glied, bereit zum Einlegen. Die Guppys brachten Essig. Sogar die Quallen trugen Kochmützen.

Olive kam gerade noch rechtzeitig an, um Queen Shelley zu sehen, wie sie einen Berg Gläser balancierte — verwirrt, aber fest entschlossen. „Willkommen, King Fishy!" rief sie. „Wir hoffen, ihr seid bereit für einen pikanten Genuss!"

King Fishy kam an, roch in die Luft und machte ein Gesicht wie ein Fisch, der in eine Zitrone gebissen hat. „Wo sind die Sandwiches? Wo sind die Törtchen?"

Queen Shelley hielt ein Glas hoch. „Aber, mein lieber Fishy, du hast doch nach einem Pickle gefragt. Ein großes Seetang-Pickle!"

King Fishy blinzelte. „Nein, ich wollte ein Picknick, kein Pickle!"

Olives Arme wackelten und zitterten. „Oh, ich habe meine Worte ganz verknotet! Picknick, Pickle, Pickle-nic! Das ist alles meine Schuld," gab sie zu, und ihre Wangen wurden schüchtern blau.

In diesem Moment brachen die Guppys in Gelächter aus. „Pickle-nic! Pickle-nic! Was für ein lustiger Snack!" Die Quallen wackelten vor Kichern. Sogar die königlichen Gurken tanzten ein schiefes Tänzchen.

King Fishy fing an zu kichern. Queen Shelley schnaufte auf sehr königliche Weise. „Nun," sagte sie, „da wir Gläser haben, und Snacks, und ein ganzes Meer voller Albernheiten — warum nicht das allererste große Seetang-Pickle-nic feiern?"

Alle jubelten! Olives Arme wirbelten vor Freude. Heraus kamen die würzigen Seetang-Pickles, die salzigen Sandwiches und die süßesten Seebeerentörtchen, die man sich nur vorstellen konnte.

Sie saßen zusammen auf Korallenkissen, knabberten und knusperten, und jedes Mal, wenn jemand „Pickle-nic" sagte, kicherten sie. Olive versprach, ihre Worte künftig immer doppelt zu prüfen, und King Fishy versprach, extra Servietten mitzubringen — nur für alle Fälle.

Als die Wellen leise schwappsten und das Kichern zu sanftem Schmunzeln wurde, fühlten sich alle ein bisschen näher, ein bisschen alberner und ganz schön glücklich.

Gedanke für heute Abend: Ehrlichkeit ist wichtig — auch wenn sie zu einem Pickle-nic führt!

ENDE`;

export const bluebellSeaStoryDE: BluebellSeaStoryData = {
  id: "99090a70-d2e9-40d6-acc8-0b1a5adaad4a",
  title: "Die wundersamen Murmeln des Bluebell Sea",
  languageCode: "de",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentDE,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 289,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/de/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 312,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/de/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "Die Botschaften des Oktopus",
      style: "epic_adventure",
      url: "https://musicfile.api.box/NjNiMTNhNDktN2FlNC00ZjUzLTgwOWYtNzY0ZmU1OWQ5OGNl.mp3",
      duration: 199,
      coverUrl: "https://musicfile.api.box/NjNiMTNhNDktN2FlNC00ZjUzLTgwOWYtNzY0ZmU1OWQ5OGNl.jpeg"
    }
  ]
};

const bluebellSeaContentES = `Había una vez, en una hora de dormir llena de risitas y en las aguas torcidas y juguetonas del Mar Campanilla, vivía un pulpo despistado llamado **Olive**. Olive tenía ocho brazos enroscados, dos ojitos que se le olvidaban las cosas y un trabajo muy importante. Era la Mensajera oficial del Reino de Coral. Eso quería decir que cada vez que **King Fishy** enviaba un mensaje real, Olive se lanzaba y zumbaba para llevarlo—bueno, a menos que se distrajera con una burbuja que pasaba o un gusanito revoloteando.

Una mañana brillante, **King Fishy** agitó sus aletas brillantes y gritó: "¡Olive, rápido! Lleva este pergamino a Queen Shelley del Palacio Perla. Dile que es para el Gran Picnic de Algas, ¡no para el Gran Pepinillo de Algas!"

Los ojos de Olive se agrandaron. "Picnic, no pepinillo. Picnic, no pepinillo," canturreó mientras envolvía el pergamino con un brazo. Se puso en marcha, repitiendo su frase para no liarla.

Pero en el camino, un banco veloz de guppys risueños pasó zumbando. "¡A quien llegue primero al arrecife!" chillaron. Olive no se pudo resistir. Se unió a los guppys en una carrera torpe y ondulante, brazos aleteando, pergamino girando, y pronto, "Picnic, no pepinillo," se convirtió en "Pepinic, no picnillo."

Cuando Olive llegó a las puertas perladas del palacio de Queen Shelley, resopló: "¡Pergamino especial para el Gran Pepinillo de Algas! No, ¡Picnic! ¿O Pepinic?" Entregó el pergamino, con la misma cara de despiste que un cangrejo en una conga.

Queen Shelley leyó el pergamino y parpadeó. "¿Un Gran Pepinillo de Algas? ¡Vaya… qué curioso! Pero si King Fishy lo quiere, ¡pues lo tendremos! ¡Preparad la mayor alacena! ¡Reunid las algas más ácidas! ¡Alertad a los pepinos reales!"

Mientras tanto, en el Reino de Coral, King Fishy se entretenía metiendo servilletas en su cuello. Se imaginaba cestas llenas de crujientes sándwiches de algas y dulces tartaletas de baya marina. De repente, **Sir Bubbles the Seahorse** apareció disparado, los ojos como platos. "¡Majestad! ¡Hay un desfile de pepinos de mar rumbo al Palacio Perla! ¡Y todos llevan frascos!"

King Fishy parpadeó. "¿Frascos? ¿Para un picnic?"

En el Palacio Perla, las cocineras de Queen Shelley aplastaban, prensaban y enfrascaron montones gigantes de algas. Las trompetas reales tronaron: "¡Presentando! ¡El Gran Pepinillo de Algas!" Los pepinos de mar se alinearon, listos para ser encurtidos. Los guppys trajeron vinagre. Incluso las medusas llevaban gorros de chef.

Olive llegó justo a tiempo para ver a Queen Shelley equilibrando una montaña de frascos, con cara de confusión pero muy resuelta. "¡Bienvenido, King Fishy!" llamó. "¡Esperamos que traigas ganas de merienda salada!"

King Fishy olfateó el aire y puso cara de pez que se ha comido un limón. "¿Dónde están los sándwiches? ¿Dónde están las tartaletas?"

Queen Shelley levantó un frasco. "Pero, mi querido Fishy, ¡pediste un pepinillo! ¡Un Gran Pepinillo de Algas!"

King Fishy parpadeó. "¡No, quería un picnic, no un pepinillo!"

Los brazos de Olive se agitaron y temblaron. "¡Ay, he enredado mis palabras! Picnic, pepinillo, pepinic… ¡todo es culpa mía!" admitió, con las mejillas poniéndose de un azul vergonzoso.

En ese momento, los guppys estallaron en carcajadas. "¡Pepinic! ¡Pepinic! ¡Qué merienda más divertida!" Las medusas se movían a ritmo de risa. Incluso los pepinos reales hicieron un bailecillo tambaleante.

King Fishy empezó a reír. Queen Shelley soltó un bufido muy señorial que sonó a risa también. "Pues," dijo, "ya que tenemos frascos, bocados y un mar entero de tonterías, ¿por qué no hacemos el primer Gran Pepinic de Algas?"

¡Todos aplaudieron! Los brazos de Olive dieron vueltas de alegría. Salieron los pepinillos de algas ácidos y sabrosos, los sándwiches salados y las tartaletas de baya marina más dulces que puedas imaginar.

Se sentaron juntos en cojines de coral, mordisqueando y crujienteando, riéndose cada vez que alguien decía "Pepinic." Olive prometió que siempre revisaría sus palabras dos veces, y King Fishy prometió traer servilletas extra—por si acaso.

Mientras las olas susurraban suavemente y las risitas se convertían en sonrisas tranquilas, todos se sintieron un poquito más cerca, un poquito más alegres y muchíiiisimo más felices.

Pensamiento para esta noche: La honestidad es importante—¡incluso si termina en un pepinic!

FIN`;

export const bluebellSeaStoryES: BluebellSeaStoryData = {
  id: "cec79f43-841a-4a2f-98d0-040450a13f15",
  title: "Los maravillosos susurros del Mar Campanilla",
  languageCode: "es",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentES,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 285,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/es/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 299,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/es/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "El Pulpo Mensajero",
      style: "epic_adventure",
      url: "https://musicfile.api.box/NzI2ZmUwYTctMjJlOC00MzM4LTk3YTEtODQ2YjY0NzhiOWNh.mp3",
      duration: 227,
      coverUrl: "https://musicfile.api.box/NzI2ZmUwYTctMjJlOC00MzM4LTk3YTEtODQ2YjY0NzhiOWNh.jpeg"
    }
  ]
};

const bluebellSeaContentFR = `Un matin lumineux, **King Fishy** agita ses nageoires scintillantes et s'écria : « Olive, vite ! Porte ce parchemin à Queen Shelley du Palais Perle. Dis-lui que c'est pour le Grand Pique-nique d'Algues, pas pour le Grand Cornichon d'Algues ! »

Les yeux d'Olive s'écarquillèrent. « Pique-nique, pas cornichon. Pique-nique, pas cornichon, » elle le répéta en enroulant le parchemin autour d'un bras. Puis elle s'élança, en chantonnant pour ne pas se tromper.

Mais en chemin, une bande de guppys rieurs passa en trombe. « On fait la course jusqu'au récif ! » piaillèrent-ils. Olive ne put résister. Elle se joignit aux guppys dans une course toute ondulante, ses bras battant l'eau, le parchemin qui tournoyait, et bientôt « Pique-nique, pas cornichon » devint « Cornichon-nique, pas… » et puis tout se mélangea.

Quand Olive arriva aux portes nacrées du palais de Queen Shelley, elle souffla : « Parchemin spécial pour le Grand Cornichon d'Algues ! Non, Pique-nique ! Ou Cornichon-nique ? » Elle tendit le parchemin en ayant l'air aussi perdue qu'un crabe dans une conga.

Queen Shelley lut le parchemin et cligna des paupières. « Un Grand Cornichon d'Algues ? Oh, comme c'est… surprenant ! Mais si King Fishy le veut, nous le ferons ! Préparez le plus grand bocal ! Rassemblez les algues les plus acides ! Avertissez les concombres royaux ! »

Pendant ce temps, au Royaume de Corail, King Fishy arrangeait ses serviettes dans son col. Il s'imaginait des paniers de petites tartines d'algues croustillantes et des tartelettes aux baies marines. Soudain, **Sir Bubbles the Seahorse** entra en trombe, les yeux écarquillés. « Majesté ! Une parade de concombres de mer se dirige vers le Palais Perle ! Et tout le monde porte des bocaux ! »

King Fishy cligna des yeux. « Des bocaux ? Pour un pique-nique ? »

Au Palais Perle, les cuisiniers de Queen Shelley écrasaient, pressaient et tassés des montagnes d'algues dans des bocaux. Les trompettes royales tonnèrent : « Présentation ! Le Grand Cornichon d'Algues ! » Les concombres de mer se rangèrent, prêts à être marinés. Les guppys apportèrent le vinaigre. Même les méduses portaient des petits toques de chef.

Olive arriva juste à temps pour voir Queen Shelley tenir une montagne de bocaux, l'air un peu perplexe mais très décidée. « Bienvenu, King Fishy ! » appela-t-elle. « Nous espérons que tu es prêt pour une friandise acidulée ! »

King Fishy huma l'air et fit une grimace comme un poisson qui aurait croqué dans un citron. « Où sont les tartines ? Où sont les tartelettes ? »

Queen Shelley leva un bocal. « Mais, mon cher Fishy, tu as demandé un cornichon. Un Grand Cornichon d'Algues ! »

King Fishy cligna des yeux. « Non, je voulais un pique-nique, pas un cornichon ! »

Les bras d'Olive se mirent à gigoter et à vaciller. « Oh, j'ai tout embrouillé ! Pique-nique, cornichon, cornichon-nique ! C'est ma faute, » avoua-t-elle, ses joues prenant une teinte bleue timide.

À ce moment-là, les guppys éclatèrent de rire. « Cornichon-nique ! Cornichon-nique ! Quelle drôle de collation ! » Les méduses se mirent à gigoter en riant. Même les concombres royaux firent une petite danse toute bancale.

King Fishy se mit à rire doucement. Queen Shelley poussa un petit reniflement tout à fait royal. « Eh bien, » dit-elle, « puisque nous avons des bocaux, des friandises et toute une mer de folie douce, pourquoi ne pas inventer le tout premier Grand Cornichon-nique d'Algues ? »

Tout le monde applaudit ! Les bras d'Olive tournoyèrent de joie. On déposa les cornichons d'algues acidulés, les tartines salées et les tartelettes aux baies marines les plus sucrées qu'on pût imaginer.

Ils s'assirent ensemble sur des coussins de corail, croquant et croquant, riant à chaque fois que quelqu'un disait « Cornichon-nique ». Olive promit de toujours vérifier deux fois ses mots, et King Fishy promit d'apporter des serviettes en rab—juste au cas où.

Pendant que les vagues chantaient doucement et que les rires se transformaient en petits gloussements, tout le monde se sentit un peu plus proche, un peu plus fou-fou, et beaucoup plus heureux.

La pensée du soir : L'honnêteté est importante—même si elle mène à un cornichon-nique !

FIN`;

export const bluebellSeaStoryFR: BluebellSeaStoryData = {
  id: "00d8d84a-59c0-4692-95eb-29ce27bda23e",
  title: "Les Merveilleux Murmures de la Mer des Jacinthes",
  languageCode: "fr",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentFR,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 244,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/fr/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 259,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/fr/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "L'Octopus Oublié",
      style: "epic_adventure",
      url: "https://musicfile.api.box/NmFiNGVkYjUtYjBkZS00NzZlLWFjOGUtNmMxZDJlNjFiNzJk.mp3",
      duration: 103,
      coverUrl: "https://musicfile.api.box/NmFiNGVkYjUtYjBkZS00NzZlLWFjOGUtNmMxZDJlNjFiNzJk.jpeg"
    }
  ]
};

const bluebellSeaContentIT = `C'era una volta, in una notte piena di risatine e sogni, nelle acque tutte mosse del Mare di Bluebell, un polpo smemorato di nome **Olive**. Olive aveva otto bracciolini attorcigliati, due occhietti sempre distratti e un lavoro molto importante. Era la Consegna-Ufficiale dei Messaggi del Regno di Corallo. Questo voleva dire che ogni volta che **King Fishy** mandava un messaggio reale, Olive sfrecciava e nuotava per consegnarlo—beh, a meno che non si distraesse per una bolla di passaggio o un vermicello che si muoveva.

Una mattina luminosa, **King Fishy** agitò le sue pinne glitterose e chiamò: "Olive, in fretta! Porta questo rotolo a Queen Shelley del Palazzo Perla. Dille che è per il Grande Pic-nic di Alghe, non per il Grande Sottaceto di Alghe!"

Gli occhi di Olive si spalancarono. "Pic-nic, non sottaceto. Pic-nic, non sottaceto," canticchiò mentre avvolgeva il rotolo con un braccio. Via nuotò, ripetendo il ritornello così non si sarebbe confusa.

Ma sulla strada, un branco veloce di pesciolini ridarella sfrecciò vicino. "A chi arriva prima alla barriera corallina!" squittirono. Olive non poté resistere. Corse con i pesciolini in una gara tutta mossa, braccia che sbattevano, rotolo che girava, e presto "Pic-nic, non sottaceto" si trasformò in "Sottaceto-nic, non stickle."

Quando Olive arrivò ai cancelli perlati del palazzo di Queen Shelley, soffiò affannata: "Rotolo speciale per il Grande Sottaceto di Alghe! No, Pic-nic! O forse Sottaceto-nic?" Consegnò il rotolo, con l'aria confusa come un granchio in una conga.

Queen Shelley lesse il rotolo e sbatté le palpebre. "Un Grande Sottaceto di Alghe? Oh, che… strano! Ma se King Fishy lo vuole, lo faremo! Preparate il vaso più grosso! Radunate le alghe più aspre! Avvisate i cetriolini reali!"

Nel frattempo, nel Regno di Corallo, King Fishy si stava sistemando i tovaglioli nel colletto. Immaginava ceste di croccanti panini di alghe e dolcetti di bacche marine. All'improvviso, **Sir Bubbles the Seahorse** strisciò dentro con gli occhi spalancati. "Maestà! Sta arrivando una parata di cetriolini verso il Palazzo Perla! E tutti portano vasi!"

King Fishy sbatté le ciglia. "Vasi? Per un pic-nic?"

Al Palazzo Perla, i cuochi di Queen Shelley schiacciavano, spremavano e frullavano montagne di alghe dentro vasi. Le trombe reali tuonarono: "Presentiamo! Il Grande Sottaceto di Alghe!" I cetriolini si misero in fila, pronti per essere messi sottaceto. I pesciolini portarono l'aceto. Perfino le meduse indossavano cappellini da chef.

Olive arrivò giusto in tempo per vedere Queen Shelley mentre reggeva una montagna di vasi, aria perplessa ma decisa. "Benvenuto, King Fishy!" chiamò. "Speriamo che tu sia pronto per una sorpresa aspra!"

King Fishy annusò l'aria e fece una smorfia come un pesce che ha morso un limone. "Dov'erano i panini? Dov'erano i dolcetti?"

Queen Shelley alzò un vaso. "Ma, caro Fishy, tu hai chiesto un sottaceto. Un Grande Sottaceto di Alghe!"

King Fishy sbatté le palpebre. "No, volevo un pic-nic, non un sottaceto!"

Gli otto braccetti di Olive si mossero tutto intorno, tremanti. "Oh, ho confuso le parole! Pic-nic, sottaceto, Sottaceto-nic! È tutta colpa mia," ammise, con le guance che le diventavano di un azzurro timido.

Proprio in quel momento, i pesciolini scoppiarono a ridere. "Sottaceto-nic! Sottaceto-nic! Che snack buffo!" Le meduse si mossero tutte ridacchiando. Anche i cetriolini reali fecero una danza tutta ondeggiante.

King Fishy cominciò a ridacchiare. Queen Shelley rise con un piccolo snort davvero regale. "Ecco," disse, "visto che abbiamo i vasi, gli snack e un mare di sciocchezze, perché non fare il primo Grandissimo Sottaceto-nic?"

Tutti urlarono di gioia! Gli otto braccetti di Olive girarono felici. Vennero fuori i sottaceti di alghe asprissimi, i panini salati e i dolcissimi tartufi di bacche marine che poteste immaginare.

Si sedettero tutti insieme su cuscini di corallo, sgranocchiando e schioccando, ridendo ogni volta che qualcuno diceva "Sottaceto-nic." Olive promise che avrebbe sempre ricontrollato le sue parole, e King Fishy promise di portare tovaglioli in più—giusto per sicurezza.

Mentre le onde sussurravano piano e le risatine si facevano più morbide, tutti si sentirono un po' più vicini, un po' più buffi e tanto, tanto più felici.

Il pensiero della sera: L'onestà è importante—anche se conduce a un Sottaceto-nic!

FINE`;

export const bluebellSeaStoryIT: BluebellSeaStoryData = {
  id: "212e1b61-1d16-46d6-8089-003373c38254",
  title: "I Meravigliosi Mormorii del Mare di Bluebell",
  languageCode: "it",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentIT,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 291,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/it/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 303,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/it/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "Il Polpo Dimenticone",
      style: "epic_adventure",
      url: "https://musicfile.api.box/OGY5ZTQxZjctMDhjNS00OGVjLWJjMGUtY2I3NGVlODQ0ZTJi.mp3",
      duration: 160,
      coverUrl: "https://musicfile.api.box/OGY5ZTQxZjctMDhjNS00OGVjLWJjMGUtY2I3NGVlODQ0ZTJi.jpeg"
    }
  ]
};

const bluebellSeaContentJA = `むかしむかし、ブルーベル海のぐにゃぐにゃした水のなかで、忘れんぼうのタコ、**Olive** がくらしていました。**Olive** には8本のくるくるしたあし、うっかりしやすい2つのめ、そしてとてもたいせつなおしごとがありました。サンゴの王国の公式メッセージおとどけやさんだったのです。つまり、**King Fishy** 王さまが王室の伝言を出すたびに、**Olive** はぴゅーっとはこんでいくのです。…でも、たまに通りがかりのシャボン玉やくねくねしたミミズに気をとられることもありました。

あるあかるいあさ、**King Fishy** はキラキラ光るヒレをふりふりして、こういいました。「Olive、早く！この巻物をパール宮の **Queen Shelley** に届けて。グランド・シーウィード・ピクニックのためだって、グランド・シーウィード・ピクルスじゃないよ！」

**Olive** のめはまんまるになりました。「ピクニック、ピクルスじゃない。ピクニック、ピクルスじゃない」そうとなえながら、巻物を腕にくるりと包みました。くるくる回りながら出発です。まちがえないように、何度もくちずさんで。

でも、道の途中で、ぴゅんぴゅんはやい笑いグッピーの群れがびゅーっと通りすぎました。「さんごまでかけっこしよう！」とチチチと鳴きます。**Olive** はがまんできません。グッピーたちといっしょにくねくねとかけっこをして、腕をバタバタ、巻物はくるくる。気づけば「ピクニック、ピクルスじゃない」が「ピクルニック、スティックル」みたいにへんてこになっていました。

やっとのことで **Queen Shelley** のパールの門に着いたとき、**Olive** ははあはあと息をしていいました。「グランド・シーウィード・ピクルスのための特別な巻物をお届けします！ちがう、ピクニック！それともピクルニック？」と、まるでコンガラインのカニみたいにまよった顔で巻物を手渡しました。

**Queen Shelley** は巻物を読んで、ぱちりとまばたきしました。「グランド・シーウィード・ピクルス？まあ…めずらしいわ！でも、**King Fishy** がそう言うなら、作りましょう！いちばん大きなビンを用意して！すっぱーい海藻を集めて！王室のキュウリたちに知らせて！」

そのころサンゴの王国では、**King Fishy** はナプキンをえりに入れるのに夢中で、ぱりぱりの海藻サンドイッチやあまいシーベリーのタルトを想像していました。すると、**Sir Bubbles the Seahorse** がびゅんと飛び込んできて、めをまんまるにして言いました。「陛下！パレードみたいに海キュウリたちがパール宮へ向かっています！みんなビンを持ってるんです！」

**King Fishy** はきょとん。「ビン？ピクニックのためのビン？」

パール宮では、**Queen Shelley** のコックさんたちがどろどろ、ぎゅっぎゅっ、にゅるにゅると山ほどの海藻をビンにつめていました。王室のトランペットが「発表！グランド・シーウィード・ピクルス！」と鳴りひびきます。海キュウリたちはつるっと並び、ピクルスにされるじゅんびばっちり。グッピーたちはお酢を持ってきて、くらげまでシェフ帽をかぶっています。

そこへ**Olive** が到着。**Queen Shelley** がビンの山をバランスよく持って、しかもなんだか困った顔でがんばっているのを見ました。「ようこそ、**King Fishy**！」と**Queen Shelley** は言いました。「すっぱいごちそうのじゅんびはできていますよ！」

**King Fishy** は空気のにおいをくんくんして、レモンをかじった魚みたいな顔になりました。「サンドイッチはどこ？タルトはどこ？」

**Queen Shelley** はビンをひとつ持ち上げて言いました。「だって、あなたがピクルスを頼んだのよ、グランド・シーウィード・ピクルス！」

**King Fishy** は目をぱちぱち。「ちがうよ、ピクニックを頼んだんだよ、ピクルスじゃないって！」

**Olive** のあし（腕）がふにゃふにゃゆれてしまいました。「ああ、ことばをぐちゃぐちゃにしちゃった！ピクニック、ピクルス、ピクルニック！ぜんぶ私のせいだ」と、顔が照れてうっすら青くなりました。

そのとき、グッピーたちがどっとわらい出しました。「ピクルニック！ピクルニック！なんておかしなおやつ！」くらげもぷるぷる笑い、王室のキュウリたちまでゆらゆらダンス。

すると、**King Fishy** もクスクス笑いだしました。**Queen Shelley** はとても王らしく「ふんっ」と笑いました。「さあ、ビンもあるし、おやつもあるし、ここはひとつ、はじめてのグランド・シーウィード・ピクルニック、…いや、ピクルニックにしましょう！」

みんなで「ばんざーい！」。**Olive** のあしはよろこびでくるくる回りました。すっぱくてタルトみたいな海藻のピクルス、しょっぱいサンドイッチ、そしてびっくりするほどあまいシーベリーのタルトがならびました。

さんごのクッションにすわって、カリカリむしゃむしゃ、だれかが「ピクルニック」って言うたびにみんなでゲラゲラ笑いました。**Olive** はこれからはことばを2回はんにんするってちかい、**King Fishy** はよけいなナプキンをいっぱい持ってくるってちかいました—いちおうね。

波がやさしくすいすい、笑い声がすこしずつこもごもになっていくころ、みんなはちょっぴり近づいて、ちょっぴりへんてこで、ずっともっとしあわせな気もちになりました。

今夜のことば：正直はたいせつだよ — たとえそれがピクルニックにつながっても、ピクルスにつながってもね！

おしまい`;

export const bluebellSeaStoryJA: BluebellSeaStoryData = {
  id: "5d993ec8-fd29-4216-ae03-f1beeebcadc6",
  title: "ブルーベル海のふしぎなささやき",
  languageCode: "ja",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentJA,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 301,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/ja/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 328,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/ja/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "忘れん坊のタコの冒険 (The Forgetful Octopus's Adventure)",
      style: "epic_adventure",
      url: "https://musicfile.api.box/MjJjMjRkMTItNGU0Ny00OGE2LTljNzQtMjkxNDZjZDUwNzA4.mp3",
      duration: 144,
      coverUrl: "https://musicfile.api.box/MjJjMjRkMTItNGU0Ny00OGE2LTljNzQtMjkxNDZjZDUwNzA4.jpeg"
    }
  ]
};

const bluebellSeaContentKO = `옛날옛날, 블루벨 바다의 물결이 까르르 웃는 잠자리 시간에, 깜빡깜빡 잘하는 문어 한 마리가 살았어요. 이름은 **Olive**였지요. Olive에게는 팔이 여덟 개나 있었고, 까먹기 쉬운 눈도 두 개, 그리고 아주아주 중요한 일이 하나 있었어요. 바로 산호 왕국의 공식 전갈 배달원이었던 거예요. 그래서 King Fishy가 왕실 전갈을 보낼 때마다 Olive는 삽싸르르 달려가 전해 주었답니다—물론 지나가는 물방울이나 흔들흔들 벌레를 보면 정신이 팔릴 때도 있었지만요.

어느 화창한 아침, **King Fishy**가 반짝이는 지느러미를 흔들며 외쳤어요. "Olive, 얼른! 이 두루마리를 진주 궁전의 Queen Shelley에게 전해 줘. Grand Seaweed Picnic을 위한 거라고 말해줘. Grand Seaweed Pickle이 아니라고!"

Olive의 눈이 동그랗게 커졌어요. "피크닉이지, 피클 아니야. 피크닉이지, 피클 아니야." 그녀는 두루마리를 팔에 둘둘 감으며 중얼거렸어요. 헷갈리지 않으려고 말이에요.

하지만 가는 길에, 까르르 웃는 구피 떼가 쏜살같이 스쳐 지나갔어요. "산호초까지 경주하자!" 그들이 찍찍대며 외쳤지요. Olive는 저항할 수 없었어요. 팔을 펄럭이며 구피들과 함께 흔들흔들 경주를 했고, 두루마리는 빙글빙글 돌았어요. 그러다 보니 "피크닉이지, 피클 아니야"가 어느새 "피클-닉이지, 스틱 아니야"처럼 되어 버렸어요.

Olive가 Queen Shelley의 진주로 된 성문에 도착했을 때는 헐떡거리고 있었어요. "왕의 특별 전갈입니다. Grand Seaweed Pickle! 아니, Picnic! 아냐, 피클-닉?" 그녀는 게가 콩가 라인에 선 것처럼 어리둥절한 얼굴로 두루마리를 건넸어요.

Queen Shelley는 두루마리를 읽고는 눈을 깜빡였어요. "그랜드 해초 장아찌라니? 어쩐지… 이상하구나! 하지만 King Fishy가 원한다면 우리도 해보지요! 가장 큰 단지를 준비해요! 가장 시큼한 해초를 모아오라! 왕실 오이들에게 알리시오!"

한편 산호 왕국에서는 King Fishy가 냅킨을 깃에 끼워 넣고 있었어요. 그는 바삭한 해초 샌드위치와 달콤한 바다열매 타르트를 상상했지요. 그때 **Sir Bubbles the Seahorse**가 쏜살같이 달려와 눈이 동그랗게 튀어나오며 말했어요. "전하! 진주 궁전으로 단지들을 들고 가는 오이 행렬이 있어요!"

King Fishy는 깜짝 놀라 눈을 깜박였어요. "단지요? 소풍을 위해서 단지라니?"

진주 궁전에서는 Queen Shelley의 요리사들이 커다란 해초 더미를 눌러 눌러 단지에 담고 있었어요. 왕실 나팔이 요란하게 울렸지요. "선보입니다! 그랜드 해초 장아찌!" 해오이(해오이 대신 바다오이)는 줄을 지어 장아찌가 될 준비를 했고, 구피들은 식초를 가져왔어요. 심지어 해파리들도 요리사 모자를 썼답니다.

Olive는 딱 맞춰 도착해서 Queen Shelley가 단지 산을 균형 있게 쌓고 있는 모습을 보고서야 어리둥절하면서도 단호한 표정을 보았어요. "King Fishy님, 환영해요! 새콤달콤한 간식을 준비했답니다!"

King Fishy는 공기를 킁킁 맡다가, 마치 레몬을 베어 문 물고기처럼 얼굴을 찌푸렸어요. "샌드위치는 어디 있지? 타르트는 어디 있어?"

Queen Shelley는 단지를 하나 들며 말했어요. "전하, 전하께서 장아찌를 부탁하셨잖아요. 그랜드 해초 장아찌라구요!"

King Fishy는 눈을 껌뻑였어요. "아니요, 저는 피크닉을 원했어요. 장아찌가 아니라요!"

Olive의 팔은 이리저리 꿈틀거렸어요. "아, 제가 말을 몹시 뒤섞었어요! 피크닉, 피클, 피클-닉! 전부 제 잘못이에요," 그녀는 수줍게 얼굴을 파란빛으로 물들였어요.

그러자 구피들이 까르르 웃음을 터뜨렸어요. "피클-닉! 피클-닉! 정말 웃긴 간식이야!" 해파리들도 깔깔거렸고 심지어 왕실 오이들도 비틀비틀 춤을 추었어요.

King Fishy도 웃음을 참지 못하고 킬킬 웃기 시작했어요. Queen Shelley는 아주 왕실스럽게 킥킥 웃음을 내뿜었지요. "자," 그녀가 말했어요, "이미 단지도 있고 간식도 있고 웃음바다도 있으니, 첫 번째 그랜드 해초 피클-닉을 열어볼까요?"

모두가 환호했어요! Olive의 팔은 기쁨으로 빙글돌았고, 새콤한 해초 장아찌, 짭짤한 샌드위치, 그리고 상상할 수 있는 가장 달콤한 바다열매 타르트가 줄줄이 나왔어요.

모두 산호 쿠션에 둘러앉아 바삭바삭 우적우적 먹으며, 누군가 "피클-닉"이라고 말할 때마다 까르르 웃었어요. Olive는 앞으로 말을 두 번 확인하겠다고 약속했고, King Fishy는 혹시 몰라 냅킨을 더 많이 챙겨오겠다고 약속했지요.

파도가 살랑살랑 흔들리고 웃음이 잔잔해질 무렵, 모두가 조금 더 가까워지고, 조금 더 엉뚱해지고, 훨씬 더 행복해진 기분이었어요.

오늘 밤의 생각: 정직은 중요해요—피클-닉으로 이어지더라도요!

끝`;

export const bluebellSeaStoryKO: BluebellSeaStoryData = {
  id: "f036722a-23a8-4bae-8fcb-dab40bc263a2",
  title: "블루벨 바다의 신기한 속삭임",
  languageCode: "ko",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentKO,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 292,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/ko/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 300,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/ko/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "The Whimsical Octopus Messenger",
      style: "epic_adventure",
      url: "https://musicfile.api.box/YmI1ZmRkYzQtZTJkYi00ZTE1LWE2N2QtNWMyZjMwMzFmZmU1.mp3",
      duration: 205,
      coverUrl: "https://musicfile.api.box/YmI1ZmRkYzQtZTJkYi00ZTE1LWE2N2QtNWMyZjMwMzFmZmU1.jpeg"
    }
  ]
};

const bluebellSeaContentNL = `Er was eens, op een giechelend bedtijdmoment in de kronkel-kronkelige wateren van de Bluebell Sea, een vergeetachtige octopus genaamd **Olive**. Olive had acht kronkelende armen, twee vergeetachtige oogjes en één heel belangrijke taak. Ze was de officiële Bericht-bezorger van het Koraalkoninkrijk. Dat betekende dat telkens wanneer King Fishy een koninklijk bericht stuurde, Olive flitsend en zwemmend het kwam bezorgen—nou ja, tenzij ze werd afgeleid door een voorbijdrijbelend bubbelletje of een wiebelend wormpje.

Op een heldere ochtend wiebelde **King Fishy** met zijn glinsterende vinnen en riep: "Olive, snel! Breng dit perkament naar Queen Shelley van het Parelpaleis. Zeg haar dat het voor de Grote Zeewierpicknick is, niet de Grote Zeewieraugurk!"

Olive's ogen werden groot. "Picknick, niet augurk. Picknick, niet augurk," neuriede ze terwijl ze het perkament in een arm waaide. Weg draaide ze, haar rijmpje herhalend zodat ze het niet door elkaar zou halen.

Maar onderweg zoefde een snelle school giechelguppies voorbij. "Wedstrijdje naar het rif!" piepten ze. Olive kon het niet laten. Ze deed mee aan de kronkel-kronkel race met de guppies, armen flapperend, perkament draaiend, en al snel veranderde "Picknick, niet augurk" in "Pickle-nic, niet stickle."

Toen Olive bij de parelpoorten van Queen Shelley's paleis kwam, hijgde ze: "Speciaal perkament voor de Grote Zeewieraugurk! Nee, Picknick! Of was het Pickle-nic?" Ze overhandigde het perkament, en keek net zo verward als een krab in een conga-lijn.

Queen Shelley las het perkament en knipperde. "Een Grote Zeewieraugurk? Oh, wat… bijzonder! Maar als King Fishy het wil, dan maken we het! Bereid de grootste pot voor! Verzamel het zuurste zeewier! Waarschuw de koninklijke komkommers!"

Ondertussen was King Fishy in het Koraalkoninkrijk druk bezig om servetten in zijn kraag te stoppen. Hij stelde manden met krokante zeewiersandwiches en zoete zeebessentaarten voor zich. Plotseling dook **Sir Bubbles the Seahorse** naar binnen, met grote ogen. "Majesteit! Er is een optocht van zeekomkommers op weg naar het Parelpaleis! En iedereen draagt potten!"

King Fishy knipperde. "Potten? Voor een picknick?"

In het Parelpaleis pletsten, kneusden en pruttelden de koks bergen zeewier in potten. De koninklijke trompetten loeiden: "Aanwezig! De Grote Zeewieraugurk!" De zeekomkommers stonden klaar om ingelegd te worden. De guppies brachten azijn. Zelfs de kwal droeg een koksmuts.

Olive kwam net op tijd aan om Queen Shelley te zien balanceren op een berg potten, er verward maar vastberaden uitziend. "Welkom, King Fishy!" riep ze. "We hopen dat u klaar bent voor een zuur hapje!"

King Fishy rook aan de lucht en trok een gezicht alsof hij op een citroen beet. "Waar zijn de broodjes? Waar zijn de taarten?"

Queen Shelley hield een pot omhoog. "Maar, lieve Fishy, jij vroeg om een augurk. Een Grote Zeewieraugurk!"

King Fishy knipperde. "Nee, ik vroeg om een picknick, niet om een augurk!"

Olive's armen wiebelden en wobbelden. "Oh, ik heb mijn woorden helemaal in de knoop gezet! Picknick, augurk, pickle-nic! Het is allemaal mijn schuld," gaf ze toe, haar wangetjes verlegen blauw kleurend.

Op dat moment barstten de guppies in lachen uit. "Pickle-nic! Pickle-nic! Wat een gek hapje!" De kwallen wiebelden van het lachen. Zelfs de koninklijke komkommers deden een wankeldansje.

King Fishy moest ook lachen. Queen Shelley snorde op een hele statige manier. "Wel," zei ze, "nu we potten hebben, en hapjes, en een hele zee vol gekkigheid, waarom niet de allereerste Grote Zeewier Pickle-nic houden?"

Iedereen juichte! Olive's armen draaiden van blijdschap. Daar kwamen de zure zeewieraugurken, de zoute sandwiches en de zoetste zeebessentaarten die je je maar kon voorstellen.

Ze gingen samen op koraalkussens zitten, knabbelden en krakten, en giechelden elke keer als iemand "Pickle-nic" zei. Olive beloofde haar woorden voortaan altijd twee keer te checken, en King Fishy beloofde extra servetten mee te nemen—voor het geval dat.

Terwijl de golven zachtjes zwiepten en de giechels langzaam in zachte snikjes veranderden, voelde iedereen zich een beetje dichterbij, een beetje zotter, en een héél stuk gelukkiger.

Denkje van vanavond: Eerlijkheid is belangrijk—evenals het leidt tot een pickle-nic!

EINDE`;

export const bluebellSeaStoryNL: BluebellSeaStoryData = {
  id: "1409b872-15a7-4a08-8c6c-8ddc148200d6",
  title: "De wonderlijke gefluister van de Bluebell Sea",
  languageCode: "nl",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentNL,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 258,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/nl/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 273,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/nl/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "De Vergeetachtige Octopus",
      style: "epic_adventure",
      url: "https://musicfile.api.box/YzQ1MTI4YzctZTQzMi00ZTlmLTlmMGQtYmY1NzA4NjRiYjIz.mp3",
      duration: 210,
      coverUrl: "https://musicfile.api.box/YzQ1MTI4YzctZTQzMi00ZTlmLTlmMGQtYmY1NzA4NjRiYjIz.jpeg"
    }
  ]
};

const bluebellSeaContentPL = `Dawno, dawno temu, w czasie chichoczącej pory na dobranoc, w kręcąco-falujących wodach Błękitnego Morza mieszkała zapominalska ośmiornica o imieniu **Olive**. Olive miała osiem skręconych ramion, dwoje zapominalskich oczek i jedno bardzo ważne zadanie. Była oficjalną Roznosicielką Wiadomości Królestwa Koralowego. To znaczyło, że ilekroć King Fishy wysyłał królewską wiadomość, Olive śmigała i pędziła, by ją dostarczyć — no chyba że rozpraszał ją mijający bąbelek albo ruchliwy robaczek.

Pewnego jasnego poranka **King Fishy** zamachał swoimi błyszczącymi płetwami i zawołał: „Olive, szybko! Dostarcz ten zwitek do Queen Shelley z Pałacu Perłowego. Powiedz jej, że to na Wielki Morszczynowy Piknik, a nie na Wielką Morszczynową Kiszonkę!"

Oczy Olive zrobiły się wielkie. „Piknik, nie kiszonka. Piknik, nie kiszonka," powtarzała sobie, owijając zwitek jednym ramieniem. I ruszyła w drogę, powtarzając hasło, żeby się nie pomylić.

Ale po drodze przeleciała szybka ławica chichoczących gupików. „Wyścig do rafy!" piszczały. Olive nie potrafiła się powstrzymać. Dołączyła do gupików w kręconym wyścigu, ramionami machając, zwitek kręcąc, i wkrótce „Piknik, nie kiszonka" zamieniło się w „Kiszo-piknik, nie coś innego".

Kiedy Olive dotarła do perłowych wrót pałacu Queen Shelley, dyszała: „Specjalny zwitek na Wielką Morszczynową Kiszonkę! Nie, Piknik! A może Kiszo-piknik?" Podała zwitek, wyglądając tak zagubiona jak krab na korowodzie.

Queen Shelley przeczytała wiadomość i mrugnęła. „Wielka Morszczynowa Kiszonka? Och, jak... niezwykłe! Ale jeśli King Fishy tego chce, to tak będzie! Przygotujcie największy słoik! Zbierajcie najkwaśniejsze morszczyny! Ogłoście królewskie ogórki!"

Tymczasem w Królestwie Koralowym King Fishy poprawiał serwetkę przy kołnierzu. Wyobrażał sobie koszyki z chrupiącymi morszczynowymi kanapkami i słodkimi tartami z morskich jagód. Nagle **Sir Bubbles the Seahorse** wpadł, oczy jak spodki. „Wasza Wysokość! Idzie parada morskich ogórków w stronę Pałacu Perłowego! I wszyscy niosą słoiki!"

King Fishy mrugnął. „Słoiki? Na piknik?"

W Pałacu Perłowym kucharze Queen Shelley ugniatali, tłukli i wrzucali wielkie sterty morszczyn do słoików. Królewskie trąby zagrały: „Prezentujemy! Wielką Morszczynową Kiszonkę!" Morskie ogórki ustawiły się równo, gotowe do kisiwa. Gupiki przywiozły ocet. Nawet meduzy założyły czapki kucharskie.

Olive dotarła w samą porę, by zobaczyć Queen Shelley balansującą na stosie słoików, wyglądającą zmieszanie, ale zdeterminowaną. „Witaj, King Fishy!" zawołała. „Mamy nadzieję, że jesteś gotowy na kwaśny przysmak!"

King Fishy podreptał nosem i zrobił minę ryby, która przygryzła cytrynę. „Gdzie są kanapki? Gdzie są tarty?"

Queen Shelley uniosła słoik. „Ależ, mój drogi Fishy, prosiłeś o kiszonkę. Wielką Morszczynową Kiszonkę!"

King Fishy mrugnął. „Nie, chciałem piknik, nie kiszonkę!"

Ramiona Olive drgały i kołysały się. „Och, pomieszały mi się słowa! Piknik, kiszonka, kiszo-piknik! To moja wina," przyznała, rumieniąc się na niebiesko ze wstydu.

W tej samej chwili gupiki wybuchnęły śmiechem. „Kiszo-piknik! Kiszo-piknik! Co za śmieszna przekąska!" Meduzy zareagowały falując i chichocząc. Nawet królewskie ogórki wykonały kręconego taniec.

King Fishy zaczął chichotać. Queen Shelley prychnęła w bardzo dostojny sposób. „Cóż," powiedziała, „skoro mamy słoiki, przekąski i całe morze radości, to czemu nie urządzić pierwszego w historii Wielkiego Morszczynowego Kiszo-pikniku?"

Wszyscy zawołali „Hurra!" Ramiona Olive zakręciły się z radości. Pojawiły się kwaśne morszczynowe kiszonki, słone kanapki i najsłodsze tarty z morskich jagód, jakie tylko można sobie wyobrazić.

Usiedli razem na koralowych poduszkach, chrupiąc i mlaskając, chichocząc za każdym razem, kiedy ktoś powiedział „Kiszo-piknik." Olive obiecała, że zawsze będzie sprawdzać swoje słowa dwa razy, a King Fishy obiecał przynieść zapas serwetek — na wszelki wypadek.

Gdy fale kołysały miękko, a chichy zamieniały się w ciche chichoty, wszyscy poczuli się trochę bliżej siebie, trochę bardziej śmieszni i dużo, dużo szczęśliwsi.

Dzisiejsza myśl na dobranoc: Szczerość jest ważna — nawet jeśli prowadzi do kiszo-pikniku!

KONIEC`;

export const bluebellSeaStoryPL: BluebellSeaStoryData = {
  id: "d7b0ca0f-98b6-4ce9-a7e1-a62d5379fb01",
  title: "Cudowne Szepty Błękitnego Morza",
  languageCode: "pl",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentPL,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 280,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/pl/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 306,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/pl/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "Zapominalna Ośmiornica",
      style: "epic_adventure",
      url: "https://musicfile.api.box/MDRiNTVlMWQtZWJlZi00MzE3LTllMjYtNmNkYzgyMGU5ZTk2.mp3",
      duration: 184,
      coverUrl: "https://musicfile.api.box/MDRiNTVlMWQtZWJlZi00MzE3LTllMjYtNmNkYzgyMGU5ZTk2.jpeg"
    }
  ]
};

const bluebellSeaContentPT = `Era uma hora de dormir cheia de risadinhas nas águas enroladas do Mar das Campainhas Azuis. Lá vivia um polvo esquecido chamado **Olive**. Olive tinha oito braços torcidinhos, dois olhinhos distraídos e um trabalho muito importante. Ela era a Mensageira Oficial do Reino dos Corais. Sempre que o Rei Fishy enviava uma mensagem real, Olive zumbia e nadava para a entregar—bem, a menos que se distraísse com uma bolha a passar ou um verme que fazia cócegas.

Numa manhã brilhante, **King Fishy** abanou as barbatanas com brilho e chamou: "Olive, depressa! Entrega este pergaminho à Rainha Shelley do Palácio da Pérola. Diz-lhe que é para o Grande Piquenique de Algas, não para o Grande Picles de Algas!"

Os olhos de Olive arregalaram-se. "Piquenique, não picles. Piquenique, não picles," foi o que ela repetiu enquanto enrolava o pergaminho no braço. Partiu a rodopiar, a repetir a cantilena para não se baralhar.

Mas no caminho passou um cardume rápido de guppies risonhos. "Corrida até o recife!" piaram eles. Olive não resistiu. Juntou-se aos guppies numa corrida rebolante, braços a bater, pergaminho a rodopiar e, de repente, "Piquenique, não picles," virou "Picles-nique, não pic-nicles."

Quando Olive chegou aos portões perolados do Palácio da Rainha Shelley, arfou: "Pergaminho especial para o Grande Picles de Algas! Não, Piquenique! Ou será Picles-nique?" Entregou o pergaminho com um ar tão confuso quanto um caranguejo numa conga.

A Rainha Shelley leu o pergaminho e piscou. "Um Grande Picles de Algas? Oh, que… curioso! Mas se o Rei Fishy pediu, faremos! Preparem o frasco mais grande! Juntem as algas mais ácidas! Avisem os pepinos reais!"

Entretanto, no Reino dos Corais, King Fishy puxava o guardanapo para dentro da gola. Ele imaginou cestos cheios de sandes crocantes de algas e tartes doces de maracujinha do mar. De repente, **Sir Bubbles o Cavalo-marinho** entrou a esvoaçar, os olhos arregalados. "Majestade! Há uma parada de pepinos do mar a caminho do Palácio da Pérola! E toda a gente traz frascos!"

King Fishy piscou. "Frascos? Para um piquenique?"

No Palácio da Pérola, as cozinheiras da Rainha esmagavam, amassavam e espremiam montes de algas para encher frascos. As trombetas reais tocaram alto: "Apresentamos! O Grande Picles de Algas!" Os pepinos do mar alinharam-se, prontos a ser conservados. Os guppies trouxeram vinagre. Até as águas-vivas usavam chapéus de chef.

Olive chegou a tempo de ver a Rainha Shelley equilibrar uma montanha de frascos, com um ar confuso mas decidido. "Bem-vindo, King Fishy!" ela chamou. "Esperamos que esteja pronto para uma gulodice azeda!"

King Fishy cheirou o ar e fez uma cara como de peixe que mordeu um limão. "Onde estão as sandes? Onde estão as tartes?"

A Rainha Shelley levantou um frasco. "Mas, meu querido Fishy, tu pediste um picles. Um Grande Picles de Algas!"

King Fishy piscou. "Não, eu queria um piquenique, não um picles!"

Os braços de Olive abanaram e tremularam. "Oh, troquei as palavras todas! Piquenique, picles, picles-nique! Foi tudo culpa minha," confessou ela, corando num azul tímido.

Nesse momento, os guppies rebentaram em gargalhadas. "Picles-nique! Picles-nique! Que lanche engraçado!" As águas-vivas tremeram de tanto rir. Até os pepinos reais deram uns passinhos bambos.

King Fishy começou a rir baixinho. A Rainha Shelley soltou um risinho muito régio. "Pois bem," disse ela, "já que temos frascos, petiscos e um mar inteiro de alegria, porque não fazer o primeiro Grande Picles-nique de todos?"

Todos aplaudiram! Os braços de Olive giraram de felicidade. Saíram os picles azedinhos de algas, as sandes salgadas e as tartes de maracujinha mais doces que se podia imaginar.

Sentaram-se juntos em almofadas de coral, a mastigar e a crocantar, rindo-se sempre que alguém dizia "Picles-nique." Olive prometeu que sempre iria confirmar as palavras duas vezes, e King Fishy prometeu trazer guardanapos extra—só por precaução.

Enquanto as ondas sussurravam baixinho e as risadinhas se transformavam em suspiros suaves, todos se sentiram um bocadinho mais próximos, um bocadinho mais parvos e muito, muito mais felizes.

O pensamento de hoje: A honestidade é importante—mesmo que leve a um picles-nique!

FIM`;

export const bluebellSeaStoryPT: BluebellSeaStoryData = {
  id: "e22b9756-988c-493b-92da-db5649bab760",
  title: "Os Maravilhosos Murmúrios do Mar das Campainhas Azuis",
  languageCode: "pt",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentPT,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 273,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/pt/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 284,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/pt/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "O Polvo Mensageiro",
      style: "epic_adventure",
      url: "https://musicfile.api.box/YTQ3Zjk1MTUtODk5NS00OTk2LWE0OWEtZTZhY2Q5NDU3N2M2.mp3",
      duration: 142,
      coverUrl: "https://musicfile.api.box/YTQ3Zjk1MTUtODk5NS00OTk2LWE0OWEtZTZhY2Q5NDU3N2M2.jpeg"
    }
  ]
};

const bluebellSeaContentZH = `从前，在蓝铃海那弯弯扭扭、咯咯笑的睡前时光里，住着一只健忘的章鱼，名字叫 **Olive**。Olive 有八只弯弯的手臂，两只爱走神的眼睛，和一份很重要的工作。她是珊瑚王国的官方送信员。只要 King Fishy 一发出王室信件，Olive 就会嗖嗖地去送——当然，前提是她没有被路过的泡泡或一条扭动的小虫子分心。

有一天清晨，**King Fishy** 摆动着闪闪的鳍，喊道："Olive，快！把这封卷轴送到珍珠宫的 Queen Shelley。告诉她这是给盛大的海藻野餐的，不是给盛大的海藻腌菜的！"

Olive 的眼睛睁得大大的，"野餐，不是腌菜。野餐，不是腌菜，"她一边念一边把卷轴裹好。她转呀转地出发，反复念着，生怕说错。

可是在路上，一群飞快的咯咯小孔雀鱼（giggle-guppies）呼啸而过。"到珊瑚礁赛跑吧！"它们吱吱叫。Olive 挡不住诱惑，加入了它们的扭扭赛跑，手臂拍打着，卷轴在空中转来转去。不一会儿，"野餐，不是腌菜"就变成了"腌菜-餐，不是……"（Pickle-nic 的趣味念法）。

当 Olive 到了 Queen Shelley 宫殿那珍珠般的门口，她一身气喘吁吁地说："给盛大的海藻腌菜的特别卷轴！不对，是野餐！还是腌菜-餐？"她把卷轴递上，像参加一场螃蟹恰恰舞的螃蟹一样糊涂。

Queen Shelley 展开卷轴，眨了眨眼。"盛大的海藻腌菜？哦……真是特别！不过既然 King Fishy 想要，我们就准备吧！把最大的罐子拿来！找最酸的海藻！通知王室小黄瓜们！"

与此同时，在珊瑚王国里，King Fishy 正忙着把餐巾塞到衣领里，想像着脆脆的海藻三明治和香甜的海莓挞。突然，**Sir Bubbles the Seahorse** 冲进来，眼睛都要掉出来了。"陛下！有一队海黄瓜正朝珍珠宫游来！每个人都带着罐子！"

King Fishy 眨眨眼："罐子？是为了野餐吗？"

回到珍珠宫，Queen Shelley 的厨师们把一堆又一堆的海藻捏、压、挤，装进了罐子里。王室喇叭轰鸣："呈上！盛大的海藻腌菜！"海黄瓜排队，准备被腌制。小孔雀鱼们带来了醋。甚至水母们也戴上了厨师帽。

Olive 来到时，正好看到 Queen Shelley 平衡着一座罐子山，神情又困惑又坚决。"欢迎你，King Fishy！"她喊道，"我们准备好了酸酸的招待！"

King Fishy 一闻，做了个像咬到柠檬的鱼脸。"三明治在哪里？挞在哪里？"

Queen Shelley 举起一个罐子："可亲爱的 Fishy，你是要腌菜的呀，盛大的海藻腌菜！"

King Fishy 眨巴眨巴眼："不，我要的是野餐，不是腌菜！"

Olive 的手臂摇摇晃晃。"哦，我把词儿都弄乱了！野餐、腌菜、腌菜-餐！都是我的错，"她承认，脸颊害羞地变成了蓝色。

就在这时，小孔雀鱼们开始大笑。"腌菜-餐！腌菜-餐！多好笑的点心！"水母也跟着一晃一晃地笑。连王室小黄瓜们也跳起了摇摇舞。

King Fishy 也咯咯笑了起来。Queen Shelley 用很有气度的方式轻轻嗤嗤一笑。"既然我们已经有了罐子、有了点心，外加一片好笑的海洋，为什么不办第一次盛大的海藻腌菜-野餐呢？"

大家欢呼！Olive 的手臂欢快地旋转起来。酸酸的海藻腌菜端出来了，咸咸的三明治也有了，和你能想象到的最甜的海莓挞。

他们坐在珊瑚垫上，一起咬呀嚼呀，每当有人说"腌菜-餐"就咯咯笑。Olive 答应以后一定要把话再确认一遍，King Fishy 也答应多带餐巾——以防万一。

随着海浪轻轻拍打，笑声慢慢变成轻轻的嗤嗤声，大家感觉更亲近一些，也更有点儿傻气，但最重要的是更快乐了——心里和谐又温暖。

今晚的想法：诚实很重要——即使它会变成一个腌菜-餐！

完`;

export const bluebellSeaStoryZH: BluebellSeaStoryData = {
  id: "2d074d78-9ab3-454d-87b3-ca68940a7bb9",
  title: "蓝铃海的奇妙小低语",
  languageCode: "zh",
  type: "ai",
  slug: "the-marvelous-murmurs-of-bluebell-sea-413164b8",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/cover.jpg",
  content: bluebellSeaContentZH,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 307,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/zh/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 296,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the-marvelous-murmurs-of-bluebell-sea-413164b8/narrations/zh/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "忘记的章鱼",
      style: "epic_adventure",
      url: "https://musicfile.api.box/OWRjZDMwNjEtZDQ2Ny00OWVkLTk2ZjctYjI4NGQ0MjcxMTIy.mp3",
      duration: 209,
      coverUrl: "https://musicfile.api.box/OWRjZDMwNjEtZDQ2Ny00OWVkLTk2ZjctYjI4NGQ0MjcxMTIy.jpeg"
    }
  ]
};
