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
}

export interface GingerbreadStoryData {
  id: string;
  title: string;
  languageCode: string;
  type: string;
  imageUrl: string;
  content: string;
  narrators: Narrator[];
  songs: Song[];
}

const gingerbreadContentEnGB = `In a cozy brick cottage at the edge of a bustling village, where **cinnamon** and **ginger** filled the morning air, an old woman tied on her apron with a cheerful hum.

"Today feels like a baking day," she said to her cat, who blinked lazily from the windowsill.

She stirred flour, butter, sugar, and **molasses** in her biggest wooden bowl. The dough was soft and sticky, warm with spice. Carefully, she rolled it out, cutting the perfect shape of a **gingerbread man**.

"Let's make you special," she said kindly, pressing **currants for eyes**, a **raisin for a smiling mouth**, and **three sugar pearls for buttons**. "There. Now into the oven you go."

She slid the tray in and shut the door. The heat shimmered and rose. The cat sniffed the air with interest.

But just as the timer ticked—

**POP!**

The oven door burst open, and out sprang the **Gingerbread Man**, golden-brown and grinning.

"Don't eat me!" he shouted, hopping to the floor. "**Run, run, as fast as you can! You can't catch me, I'm the Gingerbread Man!**"

And off he dashed—through the kitchen, past the startled cat, and out the door into the sunshine.

"Stop!" cried the old woman. "Come back!"

But the **Gingerbread Man** just laughed as his little cookie feet tapped along the garden path.
"**I ran from the woman, I'll run from you!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

Soon he passed a **fat pink pig** in a muddy pen.

"Snort! You smell delicious!" oinked the pig, trotting after him.

But the Gingerbread Man just called,
"**I ran from the woman, I ran from her cat—
I'll run from a pig as quick as that!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

He sprinted across the **village square**, past startled shopkeepers and baskets of apples, his little legs pumping fast.

Next came a **brown cow**, swaying her tail beside the fence.

"Moo! What a fine snack you'd make," she said, loping after him.

But he just shouted,
"**I ran from the woman, the cat, and the pig,
Running from you? That's not too big!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

Dust rose behind him as the **pig and cow** joined the chase. Their hooves pounded the earth while children giggled and pointed.

Then a **tall horse** neighed from the meadow and gave chase.

"I'll catch you in no time!" he called, hooves thundering.

But the Gingerbread Man only sped up, darting through fields of golden wheat.

"**I ran from them all, you'll see I can—
You won't catch me, I'm the Gingerbread Man!**"

The animals huffed and puffed behind him. The old woman had given up, hands on her hips, muttering, "That'll teach me to bake something with legs."

The **Gingerbread Man** laughed as he raced through the woods, **leaves crunching beneath his feet**, birds scattering overhead.

But suddenly, he came to a **wide, rushing river**. The water swirled dark and fast, too deep to wade, too wide to leap.

"Oh crumbs," he said, pacing the riverbank.

Out stepped a sleek **fox**, his coat gleaming like polished copper.

"Why the long face, little cookie?" asked the fox, his voice smooth as melted butter.

"I need to cross this river," said the Gingerbread Man, glancing nervously at the current. "But I can't swim."

The fox's eyes twinkled. "Well, I can. Hop on my **tail**, and I'll carry you across."

Hesitating only a moment, the Gingerbread Man climbed aboard.

The fox stepped into the chilly water. **Ripples shimmered** as he paddled gently forward.

"Too splashy at the back," said the fox. "Hop up onto my **back**."

The Gingerbread Man climbed higher.

Soon the water lapped at the fox's neck. "Better get on my **head**," he said with a flick of his ears.

The Gingerbread Man obeyed.

But the water rose again.

"You'll get wet—best climb on my **nose**," whispered the fox.

As soon as the Gingerbread Man stepped onto the tip of the fox's nose—

**SNAP!**

With one quick toss of his head, the fox flipped the **Gingerbread Man** into the air and **gulped him down in a single bite**.

The river flowed on. Birds chirped. And the fox licked his lips.

"**Delicious.**"

Moments later, the **pig, cow, and horse** arrived, panting.

"Where is he?" gasped the pig.

The fox gave a small burp. "He got a little soggy," he said with a wink.

Back in the village, the old woman pulled another tray from the oven. She glanced at her cat and said, "This time, no legs."

**The End**`;

export const gingerbreadStoryEnGB: GingerbreadStoryData = {
  id: "0d3e9f8b-6b7b-47de-b2ba-1c7fc4bc9fc1",
  title: "The Gingerbread Man",
  languageCode: "en-GB",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentEnGB,
  narrators: [
    {
      id: "echo",
      name: "Echo",
      duration: 304,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/echo.mp3"
    },
    {
      id: "nova",
      name: "Nova",
      duration: 307,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3"
    },
    {
      id: "onyx",
      name: "Onyx",
      duration: 295,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 307,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "rap",
      title: "Run, Run, Run!",
      style: "rap",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/rap.mp3",
      duration: 240
    },
    {
      id: "singalong",
      title: "Run, Run, As Fast As You Can",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3",
      duration: 194.08
    },
    {
      id: "storytelling",
      title: "Run Run Gingerbread Man",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/storytelling.mp3",
      duration: 228.52
    },
    {
      id: "epic_adventure",
      title: "Run Run Run",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3",
      duration: 185.44
    },
    {
      id: "magical_pop_rock",
      title: "Run, Run, Run",
      style: "magical_pop_rock",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/magical_pop_rock.mp3",
      duration: 210.28
    },
    {
      id: "enchanted_synth_pop",
      title: "Run Run Gingerbread Man",
      style: "enchanted_synth_pop",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/enchanted_synth_pop.mp3",
      duration: 188.6
    },
    {
      id: "villain_perspective",
      title: "Run Faster",
      style: "villain_perspective",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/villain_perspective.mp3",
      duration: 184.96
    }
  ]
};

export const gingerbreadStoryEnUS: GingerbreadStoryData = {
  id: "068ff71c-c5d9-496a-9bed-657fcd06cf6c",
  title: "The Gingerbread Man",
  languageCode: "en-US",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentEnGB, // Same content for both EN-GB and EN-US
  narrators: [
    {
      id: "echo",
      name: "Echo",
      duration: 304,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/echo.mp3"
    },
    {
      id: "nova",
      name: "Nova",
      duration: 307,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3"
    },
    {
      id: "onyx",
      name: "Onyx",
      duration: 295,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 307,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "rap",
      title: "Run, Run, Run!",
      style: "rap",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/rap.mp3",
      duration: 240
    },
    {
      id: "singalong",
      title: "Run, Run, As Fast As You Can",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3",
      duration: 194.08
    },
    {
      id: "storytelling",
      title: "Run Run Gingerbread Man",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/storytelling.mp3",
      duration: 228.52
    },
    {
      id: "epic_adventure",
      title: "Run Run Run",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3",
      duration: 185.44
    },
    {
      id: "magical_pop_rock",
      title: "Run, Run, Run",
      style: "magical_pop_rock",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/magical_pop_rock.mp3",
      duration: 210.28
    },
    {
      id: "enchanted_synth_pop",
      title: "Run Run Gingerbread Man",
      style: "enchanted_synth_pop",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/enchanted_synth_pop.mp3",
      duration: 188.6
    },
    {
      id: "villain_perspective",
      title: "Run Faster",
      style: "villain_perspective",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/villain_perspective.mp3",
      duration: 184.96
    }
  ]
};

const gingerbreadContentFR = `Dans un petit cottage en briques, au bord d'un village animé, où la cannelle et le gingembre parfumaient l'air du matin, une vieille dame noua son tablier en fredonnant joyeusement.

"Aujourd'hui, c'est un jour pour faire de la pâtisserie," dit-elle à son chat, qui cligna lentement des yeux sur le rebord de la fenêtre.

Elle mélangea de la farine, du beurre, du sucre et de la mélasse dans son plus grand saladier en bois. La pâte était douce et collante, chaude d'épices. Avec soin, elle l'étala et découpa la forme parfaite d'un petit bonhomme en pain d'épices.

"On va te rendre spécial," dit-elle gentiment, en pressant des groseilles pour les yeux, un raisin pour un sourire, et trois perles de sucre pour les boutons. "Voilà. Maintenant, au four !"

Elle glissa la plaque et ferma la porte. La chaleur montait et dansait. Le chat renifla l'air avec intérêt.

Mais juste quand le minuteur sonna—

POP !

La porte du four s'ouvrit d'un coup, et le Petit Bonhomme en Pain d'Épices bondit dehors, doré et souriant.

"Ne me mangez pas !" cria-t-il, sautant sur le sol. "Cours, cours, aussi vite que tu peux ! Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Et le voilà parti—à travers la cuisine, devant le chat étonné, et dehors, sous le soleil.

"Arrête !" cria la vieille dame. "Reviens !"

Mais le Petit Bonhomme en Pain d'Épices riait, ses petits pieds de biscuit tapant sur le chemin du jardin.
"J'ai échappé à la dame, je t'échapperai aussi !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Bientôt, il passa devant un gros cochon rose dans une mare de boue.

"Groin ! Tu sens drôlement bon !" grogna le cochon, trottinant derrière lui.

Mais le Petit Bonhomme en Pain d'Épices lança :
"J'ai échappé à la dame, j'ai échappé à son chat—
Je vais échapper à un cochon tout aussi vite !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Il traversa la place du village, devant les commerçants surpris et des paniers de pommes, ses petites jambes allant très vite.

Puis une vache brune, balançant sa queue près de la clôture, s'approcha.

"Meuh ! Quel bon goûter tu ferais," dit-elle, s'élançant à sa poursuite.

Mais il cria simplement :
"J'ai échappé à la dame, au chat et au cochon,
Te fuir, ce n'est pas trop long !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

La poussière s'éleva derrière lui alors que le cochon et la vache rejoignaient la course. Leurs sabots frappaient la terre, tandis que les enfants riaient et montraient du doigt.

Puis un grand cheval hennit depuis le pré et se lança à la poursuite.

"Je vais t'attraper en un rien de temps !" cria-t-il, ses sabots tonnant.

Mais le Petit Bonhomme en Pain d'Épices accéléra encore, filant à travers les champs de blé doré.

"J'ai échappé à tous, tu verras bien—
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Les animaux soufflaient et haletaient derrière lui. La vieille dame avait abandonné, les mains sur les hanches, marmonnant : "Ça m'apprendra à faire cuire quelque chose avec des jambes."

Le Petit Bonhomme en Pain d'Épices riait en courant dans la forêt, les feuilles craquant sous ses pieds, les oiseaux s'envolant au-dessus de lui.

Mais soudain, il arriva devant une large rivière rapide. L'eau tourbillonnait, sombre et rapide, trop profonde pour marcher, trop large pour sauter.

"Oh, miettes," dit-il, marchant le long de la berge.

Un renard lisse sortit de derrière un buisson, son pelage brillant comme du cuivre poli.

"Pourquoi cette mine triste, petit biscuit ?" demanda le renard, sa voix douce comme du beurre fondu.

"Je dois traverser cette rivière," dit le Petit Bonhomme en Pain d'Épices, regardant le courant avec inquiétude. "Mais je ne sais pas nager."

Les yeux du renard pétillèrent. "Moi, je peux. Grimpe sur ma queue, et je te porterai de l'autre côté."

Hésitant juste un instant, le Petit Bonhomme en Pain d'Épices monta.

Le renard entra dans l'eau froide. Des vaguelettes brillaient alors qu'il nageait doucement.

"Trop d'éclaboussures derrière," dit le renard. "Monte sur mon dos."

Le Petit Bonhomme en Pain d'Épices grimpa plus haut.

Bientôt, l'eau arriva au cou du renard. "Mieux vaut monter sur ma tête," dit-il en bougeant les oreilles.

Le Petit Bonhomme en Pain d'Épices obéit.

Mais l'eau monta encore.

"Tu vas être mouillé—grimpe sur mon nez," chuchota le renard.

Dès que le Petit Bonhomme en Pain d'Épices posa le pied sur le bout du nez du renard—

SNAP !

D'un coup de tête, le renard lança le Petit Bonhomme en Pain d'Épices en l'air et l'avala d'une seule bouchée.

La rivière continuait de couler. Les oiseaux chantaient. Et le renard se lécha les babines.

"Délicieux."

Quelques instants plus tard, le cochon, la vache et le cheval arrivèrent, tout essoufflés.

"Où est-il ?" souffla le cochon.

Le renard fit un petit rot. "Il est devenu un peu mouillé," dit-il en faisant un clin d'œil.

De retour au village, la vieille dame sortit une autre plaque du four. Elle regarda son chat et dit : "Cette fois, pas de jambes."

La Fin`;

export const gingerbreadStoryFR: GingerbreadStoryData = {
  id: "3956dc38-3102-4520-adf8-e4f41570c370",
  title: "Le Petit Bonhomme en Pain d'Épices",
  languageCode: "fr",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentFR,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 314,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/fr/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 334,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/fr/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "L'Évasion du Bonhomme en Pain d'Épices",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/epic_adventure.mp3",
      duration: 177.36
    },
    {
      id: "singalong",
      title: "Le Petit Bonhomme en Pain d'Épices",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/singalong.mp3",
      duration: 154.92
    },
    {
      id: "storytelling",
      title: "Le Petit Bonhomme",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/storytelling.mp3",
      duration: 104.96
    }
  ]
};

const gingerbreadContentES = `En una acogedora casita de ladrillo al borde de un pueblo bullicioso, donde la canela y el jengibre llenaban el aire de la mañana, una anciana se ató el delantal tarareando alegremente.

"Hoy es un buen día para hornear", le dijo a su gato, que parpadeaba perezoso en la ventana.

Mezcló harina, mantequilla, azúcar y melaza en su tazón de madera más grande. La masa era suave y pegajosa, calentita con especias. Con cuidado, la extendió y cortó la forma perfecta de un hombre de jengibre.

"Vamos a hacerte especial", dijo amablemente, poniendo grosellas para los ojos, una pasa para la boca sonriente y tres perlas de azúcar para los botones. "Listo. Ahora al horno vas."

Deslizó la bandeja y cerró la puerta. El calor subió y brilló. El gato olfateó el aire con interés.

Pero justo cuando el reloj hizo tic—

¡POP!

La puerta del horno se abrió de golpe y saltó el Hombre de Jengibre, dorado y sonriente.

"¡No me comas!" gritó, saltando al suelo. "¡Corre, corre, tan rápido como puedas! ¡No me atrapas, soy el Hombre de Jengibre!"

Y salió corriendo—por la cocina, pasando al gato sorprendido, y por la puerta hacia el sol.

"¡Detente!" gritó la anciana. "¡Vuelve aquí!"

Pero el Hombre de Jengibre solo se rió mientras sus pequeños pies de galleta sonaban en el sendero del jardín.
"¡Corrí de la señora, de ti también correré!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

Pronto pasó junto a un cerdo rosado y gordo en un corral de barro.

"¡Oinc! ¡Qué rico hueles!" gruñó el cerdo, trotando tras él.

Pero el Hombre de Jengibre solo dijo:
"¡Corrí de la señora, corrí de su gato—
De un cerdo también me escaparé!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

Corrió por la plaza del pueblo, pasando tenderos sorprendidos y cestas de manzanas, moviendo rápido sus pequeñas piernas.

Luego vino una vaca marrón, moviendo la cola junto a la cerca.

"¡Muu! Serías un buen bocadillo", dijo, siguiéndolo.

Pero él solo gritó:
"¡Corrí de la señora, del gato y del cerdo,
Correr de ti no es gran enredo!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

El polvo se levantaba detrás de él mientras el cerdo y la vaca se unían a la persecución. Sus pezuñas golpeaban la tierra mientras los niños reían y señalaban.

Entonces un caballo alto relinchó desde el prado y se unió a la carrera.

"¡Te atraparé en un instante!" llamó, galopando fuerte.

Pero el Hombre de Jengibre solo corrió más rápido, cruzando campos de trigo dorado.

"¡Corrí de todos ellos, verás que puedo—
No me atrapas, soy el Hombre de Jengibre!"

Los animales resoplaban y jadeaban detrás de él. La anciana se rindió, con las manos en la cintura, murmurando: "Eso me pasa por hornear algo con piernas".

El Hombre de Jengibre se reía mientras corría por el bosque, hojas crujiendo bajo sus pies, pájaros volando por encima.

Pero de repente, llegó a un río ancho y rápido. El agua giraba oscura y veloz, demasiado profunda para cruzar caminando, demasiado ancha para saltar.

"Oh, migas", dijo, caminando de un lado a otro en la orilla.

Salió un zorro elegante, su pelaje brillando como cobre pulido.

"¿Por qué esa carita, pequeña galleta?" preguntó el zorro, con voz suave como mantequilla derretida.

"Necesito cruzar este río", dijo el Hombre de Jengibre, mirando nervioso la corriente. "Pero no sé nadar".

Los ojos del zorro brillaron. "Bueno, yo sí. Súbete a mi cola y te llevo al otro lado".

Dudando solo un momento, el Hombre de Jengibre subió.

El zorro entró al agua fría. Las ondas brillaban mientras nadaba suavemente.

"Demasiado salpicón atrás", dijo el zorro. "Súbete a mi espalda".

El Hombre de Jengibre subió más alto.

Pronto el agua llegó al cuello del zorro. "Mejor súbete a mi cabeza", dijo moviendo las orejas.

El Hombre de Jengibre obedeció.

Pero el agua subió otra vez.

"Te mojarás—mejor sube a mi nariz", susurró el zorro.

En cuanto el Hombre de Jengibre pisó la punta de la nariz del zorro—

¡CRAC!

Con un rápido movimiento de cabeza, el zorro lanzó al Hombre de Jengibre al aire y se lo tragó de un solo bocado.

El río siguió fluyendo. Los pájaros cantaron. Y el zorro se relamió los labios.

"Delicioso."

Momentos después, llegaron el cerdo, la vaca y el caballo, jadeando.

"¿Dónde está?" preguntó el cerdo, sin aliento.

El zorro dio un pequeño eructo. "Se puso un poco blandito", dijo guiñando un ojo.

De vuelta en el pueblo, la anciana sacó otra bandeja del horno. Miró a su gato y dijo: "Esta vez, sin piernas".

Fin`;

export const gingerbreadStoryES: GingerbreadStoryData = {
  id: "fc9934d4-c542-4904-8a9d-9e6a15974ffa",
  title: "El Hombre de Jengibre",
  languageCode: "es",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentES,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 324,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/es/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 331,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/es/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "El Hombre de Jengibre",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/epic_adventure.mp3",
      duration: 197
    },
    {
      id: "singalong",
      title: "El Hombre de Jengibre",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/singalong.mp3",
      duration: 142
    },
    {
      id: "storytelling",
      title: "El Hombre de Jengibre",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/storytelling.mp3",
      duration: 157.28
    }
  ]
};
