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

const gingerbreadContentDE = `In einem gemütlichen Backsteinhäuschen am Rand eines lebhaften Dorfes, wo Zimt und Ingwer die Morgenluft erfüllten, band sich eine alte Frau fröhlich summend ihre Schürze um.

"Heute ist ein Backtag", sagte sie zu ihrer Katze, die träge auf der Fensterbank blinzelte.

Sie rührte Mehl, Butter, Zucker und Melasse in ihrer größten Holzschüssel. Der Teig war weich und klebrig, warm von den Gewürzen. Sorgfältig rollte sie ihn aus und schnitt die perfekte Form eines Lebkuchenmanns aus.

"Dich mache ich ganz besonders", sagte sie freundlich und drückte Johannisbeeren als Augen, eine Rosine als lachenden Mund und drei Zuckerperlen als Knöpfe hinein. "So. Jetzt ab in den Ofen mit dir."

Sie schob das Blech hinein und schloss die Tür. Die Hitze flimmerte und stieg auf. Die Katze schnupperte neugierig in die Luft.

Doch gerade als der Wecker tickte—

POP!

Die Ofentür sprang auf, und heraus hüpfte der Lebkuchenmann, goldbraun und grinsend.

"Iss mich nicht!" rief er und sprang auf den Boden. "Lauf, lauf, so schnell du kannst! Du fängst mich nicht, ich bin der Lebkuchenmann!"

Und schon rannte er los—durch die Küche, an der erschrockenen Katze vorbei und hinaus in den Sonnenschein.

"Stopp!" rief die alte Frau. "Komm zurück!"

Aber der Lebkuchenmann lachte nur, während seine kleinen Keksfüße über den Gartenweg tappten.
"Ich lief vor der Frau weg, ich lauf auch vor dir!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Bald kam er an einem dicken rosa Schwein im matschigen Gehege vorbei.

"Grunz! Du riechst lecker!" quiekte das Schwein und trabte hinter ihm her.

Aber der Lebkuchenmann rief nur:
"Ich lief vor der Frau weg, ich lief vor ihrer Katze—
Vor einem Schwein lauf ich auch ratzfatz!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Er rannte über den Dorfplatz, an erschrockenen Ladenbesitzern und Körben voller Äpfel vorbei, seine kleinen Beine liefen ganz schnell.

Als Nächstes kam eine braune Kuh, die neben dem Zaun mit dem Schwanz wedelte.

"Muh! Was für ein feiner Snack du wärst", sagte sie und lief hinterher.

Aber er rief nur:
"Ich lief vor der Frau weg, der Katze und dem Schwein,
Vor dir wegzulaufen, das krieg ich schon hin!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Hinter ihm wirbelte Staub auf, als Schwein und Kuh sich der Jagd anschlossen. Ihre Hufe trommelten auf die Erde, während Kinder kicherten und zeigten.

Dann wieherte ein großes Pferd von der Wiese und galoppierte los.

"Ich fang dich im Nu!" rief es, die Hufe donnerten.

Aber der Lebkuchenmann lief nur noch schneller und sauste durch Felder aus goldenem Weizen.

"Ich lief vor ihnen allen weg, du wirst schon seh'n—
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Die Tiere schnauften und keuchten hinter ihm. Die alte Frau hatte aufgegeben, die Hände in die Hüften gestemmt, und murmelte: "Das lehrt mich, nichts mit Beinen zu backen."

Der Lebkuchenmann lachte, als er durch den Wald rannte, Blätter knackten unter seinen Füßen, Vögel flatterten davon.

Doch plötzlich stand er vor einem breiten, rauschenden Fluss. Das Wasser wirbelte dunkel und schnell, zu tief zum Waten, zu breit zum Springen.

"Oh je", sagte er und lief am Ufer auf und ab.

Da trat ein schlauer Fuchs hervor, sein Fell glänzte wie poliertes Kupfer.

"Warum so ein langes Gesicht, kleiner Keks?" fragte der Fuchs, seine Stimme war weich wie geschmolzene Butter.

"Ich muss über den Fluss", sagte der Lebkuchenmann und schaute nervös auf die Strömung. "Aber ich kann nicht schwimmen."

Die Augen des Fuchses funkelten. "Ich kann schwimmen. Spring auf meinen Schwanz, ich bring dich hinüber."

Nur einen Moment zögernd, kletterte der Lebkuchenmann auf.

Der Fuchs stieg ins kalte Wasser. Wellen glitzerten, als er vorsichtig losschwamm.

"Hinten ist es zu spritzig", sagte der Fuchs. "Kletter auf meinen Rücken."

Der Lebkuchenmann kletterte höher.

Bald reichte das Wasser bis an den Hals des Fuchses. "Am besten auf meinen Kopf", sagte er und zuckte mit den Ohren.

Der Lebkuchenmann gehorchte.

Doch das Wasser stieg weiter.

"Du wirst nass—kletter lieber auf meine Nase", flüsterte der Fuchs.

Kaum war der Lebkuchenmann auf die Nasenspitze getreten—

Schnapp!

Mit einem schnellen Kopfschlenker warf der Fuchs den Lebkuchenmann in die Luft und schluckte ihn mit einem Bissen hinunter.

Der Fluss floss weiter. Vögel zwitscherten. Und der Fuchs leckte sich die Lippen.

"Köstlich."

Kurz darauf kamen Schwein, Kuh und Pferd keuchend an.

"Wo ist er?" schnaufte das Schwein.

Der Fuchs rülpste leise. "Er ist ein bisschen matschig geworden", sagte er mit einem Augenzwinkern.

Zurück im Dorf zog die alte Frau ein neues Blech aus dem Ofen. Sie sah ihre Katze an und sagte: "Diesmal keine Beine."

Das Ende`;

export const gingerbreadStoryDE: GingerbreadStoryData = {
  id: "a438386e-642f-46f4-8805-469f484f58a5",
  title: "Der Lebkuchenmann",
  languageCode: "de",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentDE,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 299,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/de/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 323,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/de/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "Lebkuchenlauf",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/der_lebkuchenmann/de/epic_adventure.mp3",
      duration: 227.08
    },
    {
      id: "singalong",
      title: "Der Lebkuchenmann",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/der_lebkuchenmann/de/singalong.mp3",
      duration: 240
    }
  ]
};

const gingerbreadContentIT = `In una casetta di mattoni accogliente, ai margini di un villaggio vivace, dove la **cannella** e lo **zenzero** profumavano l'aria del mattino, una vecchietta si legò il grembiule canticchiando felice.

"Oggi è proprio una giornata da dolci," disse al suo gatto, che sbadigliava pigramente sul davanzale.

Mescolò farina, burro, zucchero e **melassa** nella sua ciotola di legno più grande. L'impasto era morbido e appiccicoso, caldo di spezie. Con cura, lo stese e tagliò la forma perfetta di un **omino di pan di zenzero**.

"Facciamo che tu sia speciale," disse gentile, mettendo **uvette per gli occhi**, una **uva passa per la bocca sorridente** e **tre perle di zucchero per i bottoni**. "Ecco. Ora dentro il forno."

Fece scivolare la teglia e chiuse lo sportello. Il calore tremolava e si alzava. Il gatto annusava l'aria curioso.

Ma proprio quando il timer suonò—

**POP!**

Lo sportello del forno si spalancò e saltò fuori l'**Omino di Pan di Zenzero**, dorato e sorridente.

"Non mangiarmi!" gridò, saltando sul pavimento. "**Corri, corri, più veloce che puoi! Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

E via che scappò—attraverso la cucina, oltre il gatto sorpreso, e fuori dalla porta sotto il sole.

"Fermati!" gridò la vecchietta. "Torna qui!"

Ma l'**Omino di Pan di Zenzero** rise mentre i suoi piedini di biscotto ticchettavano sul sentiero del giardino.
"**Sono scappato dalla signora, scapperò anche da te!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

Presto passò davanti a un **maialino rosa e grasso** nel suo recinto fangoso.

"Snort! Che profumino!" grugnì il maiale, correndogli dietro.

Ma l'Omino di Pan di Zenzero disse solo:
"**Sono scappato dalla signora, sono scappato dal suo gatto—
Scapperò da un maiale in un baleno!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

Corse attraverso la **piazza del villaggio**, tra negozianti stupiti e cesti di mele, con le sue gambette che si muovevano veloci.

Poi arrivò una **mucca marrone**, che agitava la coda vicino al recinto.

"Muu! Che spuntino saresti," disse, inseguendolo.

Ma lui gridò:
"**Sono scappato dalla signora, dal gatto e dal maiale,
Scappare da te? Non è niente di speciale!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

La polvere si alzava dietro di lui mentre **maiale e mucca** si univano all'inseguimento. I loro zoccoli battevano la terra e i bambini ridevano e indicavano.

Poi un **cavallo alto** nitrì dal prato e si mise a correre.

"Ti prenderò in un attimo!" gridò, galoppando forte.

Ma l'Omino di Pan di Zenzero corse ancora più veloce, zigzagando tra i campi di grano dorato.

"**Sono scappato da tutti, vedrai che posso—
Non mi prenderai, sono l'Omino di Pan di Zenzero!**"

Gli animali ansimavano dietro di lui. La vecchietta si era arresa, con le mani sui fianchi, borbottando: "Questo mi insegnerà a fare dolci con le gambe."

L'**Omino di Pan di Zenzero** rideva mentre correva nel bosco, **le foglie scricchiolavano sotto i suoi piedi**, gli uccellini volavano via spaventati.

Ma all'improvviso arrivò a un **fiume largo e impetuoso**. L'acqua girava scura e veloce, troppo profonda per passare a piedi, troppo larga per saltare.

"Oh briciole," disse, camminando avanti e indietro sulla riva.

Apparve una **volpe** lucida, con il pelo che brillava come rame lucido.

"Perché quella faccia triste, biscottino?" chiese la volpe, con voce morbida come burro fuso.

"Devo attraversare il fiume," disse l'Omino di Pan di Zenzero, guardando l'acqua con paura. "Ma non so nuotare."

Gli occhi della volpe brillarono. "Io posso. Sali sulla mia **coda**, ti porto io dall'altra parte."

L'Omino di Pan di Zenzero esitò solo un attimo, poi salì.

La volpe entrò nell'acqua fredda. **Le onde brillavano** mentre nuotava piano piano.

"Troppa acqua qui dietro," disse la volpe. "Sali sulla mia **schiena**."

L'Omino di Pan di Zenzero salì più in alto.

Presto l'acqua arrivò al collo della volpe. "Meglio che sali sulla mia **testa**," disse, muovendo le orecchie.

L'Omino di Pan di Zenzero obbedì.

Ma l'acqua salì ancora.

"Ti bagnerai—meglio salire sul mio **naso**," sussurrò la volpe.

Appena l'Omino di Pan di Zenzero mise piede sulla punta del naso della volpe—

**SNAP!**

Con un colpo veloce della testa, la volpe lanciò l'**Omino di Pan di Zenzero** in aria e **lo inghiottì in un solo boccone**.

Il fiume continuò a scorrere. Gli uccellini cinguettavano. E la volpe si leccò i baffi.

"**Delizioso.**"

Pochi istanti dopo, arrivarono **maiale, mucca e cavallo**, ansimando.

"Dov'è finito?" grugnì il maiale.

La volpe fece un piccolo ruttino. "Si è un po' inzuppato," disse con un occhiolino.

Nel villaggio, la vecchietta tirò fuori un'altra teglia dal forno. Guardò il suo gatto e disse: "Questa volta, niente gambe."

**Fine**`;

export const gingerbreadStoryIT: GingerbreadStoryData = {
  id: "6fdfa209-f1e7-4cb5-900f-62b67ede6d90",
  title: "L'Omino di Pan di Zenzero",
  languageCode: "it",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentIT,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 324,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/it/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 320,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/it/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "L'Omino Coraggioso",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/epic_adventure.mp3",
      duration: 203.68
    },
    {
      id: "singalong",
      title: "L'Omino di Pan di Zenzero",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/singalong.mp3",
      duration: 199.4
    },
    {
      id: "storytelling",
      title: "Il Biscottino Coraggioso",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/storytelling.mp3",
      duration: 166.6
    }
  ]
};

const gingerbreadContentPT = `Em uma casinha de tijolos aconchegante, na beira de uma vila animada, onde canela e gengibre perfumavam o ar da manhã, uma velhinha amarrou seu avental com um assobio alegre.

"Hoje é um bom dia para assar," disse ela ao seu gato, que piscou preguiçoso no parapeito da janela.

Ela misturou farinha, manteiga, açúcar e melaço em sua maior tigela de madeira. A massa ficou macia e grudenta, cheirando a especiarias. Com cuidado, ela abriu a massa e cortou o formato perfeito de um homem de gengibre.

"Vamos te deixar especial," disse ela com carinho, colocando groselhas para os olhos, uma uva-passa para o sorriso e três pérolas de açúcar para os botões. "Pronto. Agora para o forno você vai."

Ela colocou a assadeira e fechou a porta. O calor subiu e dançou. O gato cheirou o ar com interesse.

Mas, bem quando o timer tocou—

POP!

A porta do forno se abriu de repente, e de lá pulou o Homem de Gengibre, dourado e sorridente.

"Não me coma!" ele gritou, pulando no chão. "Corra, corra, o mais rápido que puder! Você não me pega, eu sou o Homem de Gengibre!"

E lá foi ele—pela cozinha, passando pelo gato assustado, e saindo pela porta para o sol.

"Pare!" gritou a velhinha. "Volte aqui!"

Mas o Homem de Gengibre só riu enquanto seus pezinhos de biscoito batiam pelo caminho do jardim.
"Fugi da velhinha, vou fugir de você!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

Logo ele passou por um porquinho rosa e gordo, dentro de um chiqueiro lamacento.

"Oinc! Você cheira delicioso!" grunhiu o porco, correndo atrás dele.

Mas o Homem de Gengibre só disse:
"Fugi da velhinha, fugi do gato dela—
Vou fugir de um porco rapidinho também!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

Ele disparou pela praça da vila, passando por vendedores assustados e cestos de maçãs, com suas perninhas correndo depressa.

Depois veio uma vaca marrom, balançando o rabo perto da cerca.

"Muu! Que lanchinho gostoso você seria," disse ela, trotando atrás dele.

Mas ele só gritou:
"Fugi da velhinha, do gato e do porco,
Fugir de você? Isso é pouco!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

A poeira subiu atrás dele enquanto o porco e a vaca se juntaram à perseguição. Seus cascos batiam no chão enquanto as crianças riam e apontavam.

Então um cavalo alto relinchou do campo e entrou na corrida.

"Vou te pegar rapidinho!" chamou ele, com os cascos trovejando.

Mas o Homem de Gengibre só correu mais rápido, passando por campos de trigo dourado.

"Fugi de todos eles, você vai ver—
Você não me pega, eu sou o Homem de Gengibre!"

Os animais bufavam e ofegavam atrás dele. A velhinha já tinha desistido, com as mãos na cintura, resmungando: "Isso me ensina a não assar nada com pernas."

O Homem de Gengibre riu enquanto corria pela floresta, folhas estalando sob seus pés, pássaros voando assustados.

Mas de repente, ele chegou a um rio largo e veloz. A água girava escura e rápida, fundo demais para atravessar, largo demais para pular.

"Ai, ai," disse ele, andando de um lado para o outro na beira do rio.

Saiu então uma raposa elegante, com o pelo brilhando como cobre polido.

"Por que essa carinha triste, biscoitinho?" perguntou a raposa, com voz suave como manteiga derretida.

"Preciso atravessar esse rio," disse o Homem de Gengibre, olhando nervoso para a correnteza. "Mas eu não sei nadar."

Os olhos da raposa brilharam. "Ora, eu sei. Suba no meu rabo, que eu te levo."

Hesitando só um pouquinho, o Homem de Gengibre subiu.

A raposa entrou na água fria. Ondinhas brilhavam enquanto ela nadava devagar.

"Está muito molhado aí atrás," disse a raposa. "Suba nas minhas costas."

O Homem de Gengibre subiu mais alto.

Logo a água chegou ao pescoço da raposa. "Melhor subir na minha cabeça," disse ela, mexendo as orelhas.

O Homem de Gengibre obedeceu.

Mas a água subiu de novo.

"Você vai se molhar—melhor subir no meu nariz," sussurrou a raposa.

Assim que o Homem de Gengibre pisou na pontinha do nariz da raposa—

SNAP!

Com um movimento rápido da cabeça, a raposa jogou o Homem de Gengibre para o alto e o engoliu de uma só vez.

O rio continuou a correr. Os pássaros cantaram. E a raposa lambeu os lábios.

"Delicioso."

Momentos depois, o porco, a vaca e o cavalo chegaram, ofegantes.

"Onde ele está?" arfou o porco.

A raposa deu um pequeno arroto. "Ele ficou meio molinho," disse ela, piscando.

De volta à vila, a velhinha tirou outra assadeira do forno. Ela olhou para o gato e disse: "Desta vez, sem pernas."

Fim`;

export const gingerbreadStoryPT: GingerbreadStoryData = {
  id: "2baca3bf-c6ef-4ffc-82e4-e5310789a289",
  title: "O Homem de Gengibre",
  languageCode: "pt",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentPT,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 318,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pt/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 345,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pt/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "A Fuga do Homem de Gengibre",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/epic_adventure.mp3",
      duration: 111.8
    },
    {
      id: "singalong",
      title: "O Homem de Gengibre",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/singalong.mp3",
      duration: 185.12
    },
    {
      id: "storytelling",
      title: "O Homem de Gengibre",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/storytelling.mp3",
      duration: 179.88
    }
  ]
};

const gingerbreadContentNL = `In een knus bakstenen huisje aan de rand van een druk dorp, waar kaneel en gember de ochtendlucht vulden, deed een oude vrouw haar schort om met een vrolijk deuntje.

"Vandaag is een echte bakdag," zei ze tegen haar kat, die lui knipperde op de vensterbank.

Ze roerde bloem, boter, suiker en stroop in haar grootste houten kom. Het deeg was zacht en plakkerig, warm van de kruiden. Voorzichtig rolde ze het uit en sneed de perfecte vorm van een peperkoekman.

"Laten we jou bijzonder maken," zei ze vriendelijk, terwijl ze krenten voor ogen drukte, een rozijn voor een lachende mond, en drie suikerparels als knopen. "Zo. Nu de oven in."

Ze schoof de bakplaat erin en deed de deur dicht. De hitte trilde en steeg op. De kat snoof nieuwsgierig de lucht op.

Maar precies toen de timer tikte—

POP!

De ovendeur vloog open en daar sprong de Peperkoekman naar buiten, goudbruin en grijnzend.

"Eet me niet op!" riep hij, springend op de vloer. "Ren, ren, zo snel als je kan! Je vangt me niet, ik ben de Peperkoekman!"

En weg was hij—door de keuken, langs de geschrokken kat, en de deur uit in het zonlicht.

"Stop!" riep de oude vrouw. "Kom terug!"

Maar de Peperkoekman lachte alleen maar terwijl zijn kleine koekjesvoetjes over het tuinpad tikten.
"Ik rende weg van de vrouw, ik ren weg van jou!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Al gauw kwam hij langs een dik roze varkentje in een modderige stal.

"Knor! Je ruikt heerlijk!" knorde het varkentje, terwijl hij achter hem aan draafde.

Maar de Peperkoekman riep:
"Ik rende weg van de vrouw, ik rende weg van haar kat—
Ik ren net zo snel weg van een varken als dat!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Hij rende over het dorpsplein, langs geschrokken winkeliers en manden met appels, zijn kleine beentjes gingen snel.

Toen kwam er een bruine koe, zwaaiend met haar staart bij het hek.

"Boe! Wat zou jij een lekker hapje zijn," zei ze, terwijl ze achter hem aan liep.

Maar hij riep alleen maar:
"Ik rende weg van de vrouw, de kat en het varken,
Voor jou wegrennen? Dat is niet zo zwaar!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Stof dwarrelde op achter hem terwijl het varken en de koe zich bij de achtervolging voegden. Hun hoeven bonsden op de grond terwijl kinderen giechelden en wezen.

Toen hinnikte een hoge paard uit de wei en deed mee met de achtervolging.

"Ik vang je zo!" riep hij, terwijl zijn hoeven daverden.

Maar de Peperkoekman rende alleen maar harder, zigzaggend door velden vol gouden tarwe.

"Ik rende weg van allemaal, je zult zien dat ik het kan—
Je vangt me niet, ik ben de Peperkoekman!"

De dieren hijgden en puften achter hem. De oude vrouw had het opgegeven, handen in de zij, mopperend: "Dat zal me leren om iets met beentjes te bakken."

De Peperkoekman lachte terwijl hij door het bos rende, bladeren kraakten onder zijn voeten, vogels vlogen verschrikt op.

Maar opeens kwam hij bij een brede, snel stromende rivier. Het water draaide donker en snel, te diep om door te waden, te breed om over te springen.

"O jee," zei hij, heen en weer lopend langs de oever.

Daar stapte een slanke vos naar voren, zijn vacht glansde als gepoetst koper.

"Waarom zo'n lang gezicht, klein koekje?" vroeg de vos, zijn stem glad als gesmolten boter.

"Ik moet deze rivier over," zei de Peperkoekman, terwijl hij zenuwachtig naar de stroming keek. "Maar ik kan niet zwemmen."

De ogen van de vos twinkelden. "Nou, ik kan het wel. Spring maar op mijn staart, dan draag ik je over."

Na een kort momentje twijfelen klom de Peperkoekman op.

De vos stapte het koude water in. Rimpels glinsterden terwijl hij rustig vooruit zwom.

"Te nat achteraan," zei de vos. "Klim maar op mijn rug."

De Peperkoekman klom hoger.

Al snel kwam het water tot aan de nek van de vos. "Beter dat je op mijn hoofd gaat zitten," zei hij met een wiebel van zijn oren.

De Peperkoekman deed het.

Maar het water steeg weer.

"Je wordt nat—klim maar op mijn neus," fluisterde de vos.

Zodra de Peperkoekman op het puntje van de neus van de vos stapte—

SNAP!

Met één snelle zwaai van zijn kop gooide de vos de Peperkoekman de lucht in en slikte hem in één hap door.

De rivier stroomde verder. Vogels tjilpten. En de vos likte zijn lippen.

"Heerlijk."

Even later kwamen het varken, de koe en het paard aan, hijgend.

"Waar is hij?" snakte het varkentje.

De vos boerde zachtjes. "Hij werd een beetje zompig," zei hij met een knipoog.

Terug in het dorp haalde de oude vrouw nog een bakplaat uit de oven. Ze keek naar haar kat en zei: "Deze keer geen beentjes."

Het Einde`;

export const gingerbreadStoryNL: GingerbreadStoryData = {
  id: "5d41877e-a0b8-40f8-98d3-03858e2eade0",
  title: "De Peperkoekman",
  languageCode: "nl",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentNL,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 304,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/nl/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 299,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/nl/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "De Peperkoekman",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/epic_adventure.mp3",
      duration: 223.16
    },
    {
      id: "singalong",
      title: "De Peperkoekman Liedje",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/singalong.mp3",
      duration: 155.96
    },
    {
      id: "storytelling",
      title: "De Peperkoekman",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/storytelling.mp3",
      duration: 215.28
    }
  ]
};

const gingerbreadContentPL = `W przytulnym, ceglanym domku na skraju gwarniej wioski, gdzie w powietrzu pachniało cynamonem i imbirem, stara kobieta zawiązała fartuszek z wesołym podśpiewywaniem.

"Dziś mam ochotę coś upiec," powiedziała do swojego kota, który leniwie mrugał na parapecie.

Wymieszała mąkę, masło, cukier i melasę w swojej największej drewnianej misce. Ciasto było miękkie i klejące, pachnące przyprawami. Ostrożnie rozwałkowała je i wycięła idealny kształt piernikowego ludzika.

"Zrobimy cię wyjątkowym," powiedziała życzliwie, wciskając porzeczki na oczy, rodzynkę na uśmiechniętą buzię i trzy cukrowe perełki na guziki. "Gotowe. Teraz do pieca z tobą."

Wsadziła blachę do piekarnika i zamknęła drzwiczki. Gorąco falowało i unosiło się w górę. Kot z ciekawością wąchał powietrze.

Ale gdy tylko minutnik zadzwonił—

POP!

Drzwiczki piekarnika otworzyły się z hukiem, a z nich wyskoczył Piernikowy Ludzik, rumiany i uśmiechnięty.

"Nie jedz mnie!" zawołał, zeskakując na podłogę. "Biegnij, biegnij, ile sił w nogach! Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

I pognał—przez kuchnię, obok zdziwionego kota i przez drzwi na słoneczny dwór.

"Stój!" krzyknęła staruszka. "Wróć tutaj!"

Ale Piernikowy Ludzik tylko się śmiał, gdy jego małe ciasteczkowe stópki stukały po ogrodowej ścieżce.
"Uciekłem przed kobietą, ucieknę i przed tobą!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Wkrótce minął grubą różową świnkę w błotnistej zagrodzie.

"Chrum! Pachniesz pysznie!" zachrumkała świnka, ruszając za nim.

Ale Piernikowy Ludzik tylko zawołał:
"Uciekłem przed kobietą, uciekłem przed jej kotem—
Ucieknę przed świnką równie łatwo!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Przebiegł przez rynek wioski, obok zdziwionych sklepikarzy i koszy z jabłkami, jego małe nóżki biegły bardzo szybko.

Następna była brązowa krowa, machająca ogonem przy płocie.

"Muu! Byłbyś pyszną przekąską," powiedziała, biegnąc za nim.

Ale on tylko zawołał:
"Uciekłem przed kobietą, kotem i świnką,
Uciec przed tobą? To nic trudnego!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Za nim podnosił się kurz, gdy świnka i krowa dołączyły do pościgu. Ich racice dudniły po ziemi, a dzieci śmiały się i pokazywały palcami.

Wtedy wysoki koń zarżał z łąki i ruszył w pogoń.

"Złapię cię raz-dwa!" zawołał, kopyta dudniły.

Ale Piernikowy Ludzik tylko przyspieszył, przemykając przez pola złotych zbóż.

"Uciekłem przed wszystkimi, zobaczysz, że potrafię—
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Zwierzęta sapały i dyszały za nim. Staruszka już się poddała, trzymając ręce na biodrach i mrucząc: "To mnie nauczy, żeby nie piec niczego z nogami."

Piernikowy Ludzik śmiał się, biegnąc przez las, liście szeleściły pod jego stopami, a ptaki rozlatywały się nad głową.

Ale nagle dotarł do szerokiej, szumiącej rzeki. Woda wirowała ciemna i szybka, za głęboka, by przejść, za szeroka, by przeskoczyć.

"Okruszki," powiedział, chodząc wzdłuż brzegu.

Nagle wyszedł zgrabny lis, jego futro błyszczało jak wypolerowana miedź.

"Czemu taka smutna mina, małe ciasteczko?" zapytał lis, głosem gładkim jak roztopione masło.

"Muszę przejść przez rzekę," powiedział Piernikowy Ludzik, patrząc nerwowo na nurt. "Ale nie umiem pływać."

Oczy lisa zabłysły. "Ja umiem. Wskakuj na mój ogon, a przeniosę cię na drugi brzeg."

Piernikowy Ludzik zawahał się tylko chwilę i wskoczył.

Lis wszedł do zimnej wody. Fale lśniły, gdy płynął powoli do przodu.

"Z tyłu za bardzo chlupie," powiedział lis. "Wskocz mi na grzbiet."

Piernikowy Ludzik wspiął się wyżej.

Wkrótce woda sięgała lisowi do szyi. "Lepiej wskocz mi na głowę," powiedział, poruszając uszami.

Piernikowy Ludzik posłuchał.

Ale woda podniosła się jeszcze bardziej.

"Zmokniesz—najlepiej wejdź mi na nos," wyszeptał lis.

Gdy tylko Piernikowy Ludzik stanął na czubku nosa lisa—

KŁAP!

Jednym szybkim ruchem głowy lis podrzucił Piernikowego Ludzika w powietrze i połknął go na jeden kęs.

Rzeka płynęła dalej. Ptaki ćwierkały. A lis oblizał wargi.

"Pyszne."

Chwilę później świnka, krowa i koń dobiegli, sapiąc.

"Gdzie on jest?" sapnęła świnka.

Lis cicho bekł. "Trochę się rozmokło," powiedział z mrugnięciem.

W wiosce staruszka wyjęła z pieca kolejną blachę. Spojrzała na kota i powiedziała: "Tym razem bez nóg."

Koniec`;

export const gingerbreadStoryPL: GingerbreadStoryData = {
  id: "05e75658-aa32-4f43-a4c4-bc8aaab5ee78",
  title: "Piernikowy Ludzik",
  languageCode: "pl",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentPL,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 323,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pl/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 328,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pl/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "Piernikowy Ludzik",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/epic_adventure.mp3",
      duration: 193.56
    },
    {
      id: "singalong",
      title: "Piernikowy Ludzik Tańczy",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/singalong.mp3",
      duration: 209.52
    },
    {
      id: "storytelling",
      title: "Piernikowy Ludzik",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/storytelling.mp3",
      duration: 207.4
    }
  ]
};

const gingerbreadContentZH = `在热闹村庄边上的一间温暖的砖房里，空气中飘着肉桂和姜的香味。一位老奶奶系上围裙，开心地哼着小曲。

"今天真适合烤点心。"她对窗台上懒洋洋眨眼的猫咪说。

她用最大的木碗搅拌着面粉、黄油、糖和糖浆。面团又软又黏，带着香香的味道。她小心地把面团擀平，切出一个完美的姜饼人形状。

"让你变得特别一点吧。"她温柔地说，用葡萄干做眼睛，用葡萄干做微笑的嘴巴，再用三颗糖珠做纽扣。"好了，现在进烤箱吧。"

她把烤盘推进去，关上门。热气升腾起来。猫咪好奇地闻了闻空气。

就在计时器滴答响起时——

"砰！"

烤箱门突然弹开，姜饼人跳了出来，金黄的身体，咧着大大的笑脸。

"别吃我！"他大叫着跳到地板上。"快跑，快跑，你追不上我！我是姜饼人！"

他飞快地冲出了厨房，跑过吓了一跳的猫咪，冲进了阳光下。

"停下！"老奶奶喊道，"快回来！"

可姜饼人只是笑着，小饼干脚丫在花园小路上噼啪作响。
"我能从老奶奶那儿跑掉，也能从你这儿跑掉！
快跑，快跑，你追不上我！我是姜饼人！"

很快，他跑过了猪圈里一只胖胖的粉色小猪。

"哼哼！你闻起来真香！"小猪哼哼着，跟着他跑了起来。

但姜饼人只是喊：
"我能从老奶奶那儿跑掉，也能从她的猫那儿跑掉——
我也能像这样从小猪那儿跑掉！
快跑，快跑，你追不上我！我是姜饼人！"

他冲过村子的广场，跑过吃惊的店主和一篮篮苹果，小腿飞快地跑着。

接着，一头棕色的奶牛在篱笆旁摇着尾巴。

"哞！你一定很好吃。"奶牛说着，也追了上来。

可他只是大声喊：
"我能从老奶奶、猫咪和小猪那儿跑掉，
从你这儿跑掉也不难！
快跑，快跑，你追不上我！我是姜饼人！"

小猪和奶牛也加入了追逐，尘土飞扬。孩子们咯咯笑着，指着他们。

然后，一匹高大的马在草地上嘶鸣，也追了过来。

"我很快就能抓住你！"马叫着，蹄子咚咚响。

但姜饼人跑得更快，穿过金黄的麦田。

"我能从他们全都跑掉，你看我行的——
你也追不上我，我是姜饼人！"

动物们在他身后喘着气。老奶奶已经放弃了，双手叉腰嘀咕着："以后再也不做会跑的点心了。"

姜饼人笑着跑进森林，脚下树叶咔嚓作响，鸟儿在头顶飞散。

突然，他来到了一条又宽又急的河边。水流又深又快，太深不能趟过去，太宽也跳不过去。

"哎呀，"他在河岸边来回踱步。

这时，一只光滑的狐狸走了出来，毛发像擦亮的铜一样闪闪发光。

"小饼干，为什么皱着眉头？"狐狸的声音像融化的黄油一样温柔。

"我需要过河。"姜饼人看着水流，紧张地说，"可我不会游泳。"

狐狸的眼睛闪了闪。"我会游泳。跳到我的尾巴上，我带你过去。"

姜饼人只犹豫了一下，就爬上了狐狸的尾巴。

狐狸走进冰凉的水里。水面荡起波纹，他慢慢地游着。

"尾巴后面太湿了，"狐狸说，"跳到我背上来吧。"

姜饼人爬得更高了。

很快，水已经淹到狐狸的脖子。"最好到我头上来。"狐狸甩了甩耳朵说。

姜饼人照做了。

可水又升高了。

"你会湿的——最好爬到我鼻子上。"狐狸低声说。

姜饼人刚刚踩到狐狸鼻尖——

"咔嚓！"

狐狸猛地一甩头，把姜饼人抛到空中，一口吞了下去。

河水继续流淌，鸟儿在唱歌。狐狸舔了舔嘴唇。

"真好吃。"

过了一会儿，小猪、奶牛和马气喘吁吁地赶来了。

"他去哪儿了？"小猪喘着问。

狐狸打了个小嗝，眨眨眼说："他有点湿了。"

回到村子里，老奶奶又从烤箱里拿出一盘点心。她看了看猫咪，说："这次，别做腿了。"

故事结束`;

export const gingerbreadStoryZH: GingerbreadStoryData = {
  id: "d1c73862-4957-443c-8ea5-f3fcb364dbc6",
  title: "姜饼人",
  languageCode: "zh",
  type: "classic",
  imageUrl: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",
  content: gingerbreadContentZH,
  narrators: [
    {
      id: "onyx",
      name: "Onyx",
      duration: 269,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/zh/onyx.mp3"
    },
    {
      id: "shimmer",
      name: "Shimmer",
      duration: 306,
      audioUrl: "https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/zh/shimmer.mp3"
    }
  ],
  songs: [
    {
      id: "epic_adventure",
      title: "姜饼人的逃亡",
      style: "epic_adventure",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/epic_adventure.mp3",
      duration: 213.52
    },
    {
      id: "singalong",
      title: "姜饼快跑！",
      style: "singalong",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/singalong.mp3",
      duration: 149.2
    },
    {
      id: "storytelling",
      title: "逃跑的姜饼人",
      style: "storytelling",
      url: "https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/storytelling.mp3",
      duration: 185
    }
  ]
};
