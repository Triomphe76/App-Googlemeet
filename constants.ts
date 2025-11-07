import { UserProfile, Match, ClubEvent, Message } from './types';

export const PROFILES_DATA: UserProfile[] = [
  {
    id: 1,
    name: 'Chloé & Marc',
    age: 32,
    bio: 'Couple explorateur à la recherche de nouvelles aventures. Aimons les dîners, le vin et les soirées qui sortent de l\'ordinaire.',
    images: [
      'https://picsum.photos/seed/couple1/800/1200',
      'https://picsum.photos/seed/couple1b/800/1200',
    ],
    tags: ['Couple', 'Débutant', 'Soirées'],
    distance: 5,
    isVerified: true,
  },
  {
    id: 2,
    name: 'Juliette',
    age: 28,
    bio: 'Femme fatale avec un esprit libre. J\'adore danser et rencontrer des gens ouverts d\'esprit. Qui veut me rejoindre ?',
    images: [
      'https://picsum.photos/seed/woman1/800/1200',
      'https://picsum.photos/seed/woman1b/800/1200',
    ],
    tags: ['Femme seule', 'Expérimentée', 'Danse'],
    distance: 12,
    isVerified: false,
  },
  {
    id: 3,
    name: 'Alexandre',
    age: 35,
    bio: 'Homme respectueux et curieux. Je cherche à élargir mes horizons en bonne compagnie. L\'élégance et l\'humour sont essentiels.',
    images: [
      'https://picsum.photos/seed/man1/800/1200',
    ],
    tags: ['Homme seul', 'Respectueux', 'Humour'],
    distance: 8,
    isVerified: true,
  },
   {
    id: 4,
    name: 'Léa & Thomas',
    age: 29,
    bio: 'Jeune couple dynamique et joueur. Nous sommes nouveaux ici et très excités à l\'idée de découvrir ce monde.',
    images: [
      'https://picsum.photos/seed/couple2/800/1200',
      'https://picsum.photos/seed/couple2b/800/1200',
      'https://picsum.photos/seed/couple2c/800/1200',
    ],
    tags: ['Couple', 'Nouveau', 'Jovial'],
    distance: 2,
    isVerified: false,
  },
];

export const MATCHES_DATA: Match[] = [
  {
    id: 1,
    name: 'Chloé & Marc',
    avatar: 'https://picsum.photos/seed/couple1/200/200',
    lastMessage: 'On a adoré votre profil ! Hâte de discuter.',
    timestamp: '10:42',
    unread: true,
    isVerified: true,
  },
  {
    id: 2,
    name: 'Alexandre',
    avatar: 'https://picsum.photos/seed/man1/200/200',
    lastMessage: 'Super, merci ! On se tient au courant.',
    timestamp: 'Hier',
    unread: false,
    isVerified: true,
  },
  {
    id: 3,
    name: 'Sophie',
    avatar: 'https://picsum.photos/seed/sophie/200/200',
    lastMessage: 'La soirée de samedi était incroyable !',
    timestamp: 'Mardi',
    unread: false,
    isVerified: false,
  },
];

export const MESSAGES_DATA: Message[] = [
    {id: 1, sender: 'them', text: 'Salut ! On a adoré votre profil, très intrigant :)', timestamp: '10:30'},
    {id: 2, sender: 'me', text: 'Bonjour Chloé et Marc ! Merci, le vôtre aussi. Vous avez l\'air d\'un couple très sympa.', timestamp: '10:32'},
    {id: 3, sender: 'them', text: 'Merci ! On est assez nouveaux dans ce milieu, on cherche à faire de belles rencontres.', timestamp: '10:35'},
    {id: 4, sender: 'me', text: 'C\'est une excellente démarche. N\'hésitez pas si vous avez des questions.', timestamp: '10:38'},
    {id: 5, sender: 'them', text: 'On a adoré votre profil ! Hâte de discuter.', timestamp: '10:42'},
];


export const EVENTS_DATA: ClubEvent[] = [
  {
    id: 1,
    name: 'Nuit Vénitienne Masquée',
    location: 'Le Boudoir Secret, Paris',
    date: 'Samedi 28 Octobre',
    description: 'Une soirée élégante où le mystère et la séduction sont rois. Masque obligatoire, tenue de soirée exigée.',
    image: 'https://picsum.photos/seed/event1/800/600',
  },
  {
    id: 2,
    name: 'Pool Party Fluo',
    location: 'Villa d\'Azur, Nice',
    date: 'Vendredi 3 Novembre',
    description: 'Plongez dans une ambiance électrique au bord de la piscine. Maillots de bain et accessoires fluo de rigueur.',
    image: 'https://picsum.photos/seed/event2/800/600',
  },
  {
    id: 3,
    name: 'Atelier Tantra pour Couples',
    location: 'Le Cocon Zen, Lyon',
    date: 'Dimanche 5 Novembre',
    description: 'Explorez la connexion et l\'intimité à travers des exercices guidés dans un cadre bienveillant.',
    image: 'https://picsum.photos/seed/event3/800/600',
  },
];