import { CharacterType, CharacterTemplate } from './types';

/** Defines the top-level application config. */
const config = {
  siteName: 'OddsOnCompliance.com',
  siteDescription: 'Talk to Santa Eric.',
  siteUrl: 'https://oddsoncompliance.com',
  githubUrl: 'https://github.com/fixie-ai/hisanta.ai',
  referralUrl: 'https://playbook.oddsoncompliance.com',
  footerText: 'A Holiday Experiment by ',
  availableCharacters: [
    {
      characterId: 'santa',
      name: 'Santa Eric',
      image: 'eric3.png',
      bio: "It's Eric!.",
      location: 'South Florida',
      ringtone: '/sounds/jinglebells.mp3',
      agentId: 'c34e5ce1-ab08-4db7-8180-45c48c689f85',
      voiceId: 'l6xRqLljNaZMMDK7gmvl',
    },
    {
      characterId: 'mrs-claus',
      name: 'Mrs. Claus',
      image: 'mrs-claus-hdpi.png',
      bio: "Santa's wife",
      location: "Santa's House",
      ringtone: '/sounds/deckthehalls.mp3',
      agentId: '339f7e31-4d7e-461b-8d75-6afad87224de',
      voiceId: 'ePzPl7sij9imLmib0Hvd',
    },
    {
      characterId: 'rudolf',
      name: 'Rudolph',
      image: 'rudolf-hdpi.png',
      bio: 'Rudolph, the red-nosed reindeer.',
      location: "Santa's Stables",
      agentId: '7fbf92b7-7348-4025-8eaf-0c3207fe089f',
      voiceId: 'e9qncEcV5lKJHWC16xAR',
      ringtone: '/sounds/grandma.mp3',
    },
    {
      characterId: 'elfie',
      name: 'Elfie',
      image: 'elfie-hdpi.png',
      bio: "They are one of Santa's top helpers.",
      location: "Santa's Workshop",
      ringtone: '/sounds/twelvedays.mp3',
      agentId: 'ab882fa5-286f-41fc-85d9-2b3f5ebbc023',
      voiceId: '3zdD5uMcIVtKzAQocDHU',
    },
    {
      characterId: 'badsanta',
      name: 'Santa Eric',
      image: 'eric3.png',
      bio: "It's Santa Eric!",
      location: 'South Florida',
      ringtone: '/sounds/jinglebells.mp3',
      agentId: '74a49096-21c2-41f0-8106-3b183a975027',
      voiceId: 'l6xRqLljNaZMMDK7gmvl',
      bad: true,
    },
    {
      characterId: 'grouch',
      name: 'The Grouch',
      image: 'the-grouch-hdpi.png',
      bio: "It's The Grouch.",
      location: 'Mountain Hideaway',
      ringtone: '/sounds/grinch.mp3',
      agentId: '1e6b4faa-ba1d-444f-b23e-cf64ef680e32',
      voiceId: '9hxup5dlD3lL0Wrr9zXK',
      bad: true,
    },
    {
      characterId: 'karen',
      name: 'Karen Claus',
      image: 'bad-mrs-claus.png',
      bio: 'Married to Bad Santa and ready to give the world a piece of her mind.',
      location: 'Complaining to the Manager',
      ringtone: '/sounds/jinglebells.mp3',
      agentId: '7e11f5fa-6779-416c-b688-3478ccb5e142',
      voiceId: 'joL5nBmTAhATqjDe5Upd',
      bad: true,
    },
    {
      characterId: 'badelfie',
      name: 'Bad Elfie',
      image: 'bad-elfie.png',
      bio: 'A maligned elf who is so over you and Christmas.',
      location: "Santa's Complaint Department",
      ringtone: '/sounds/jinglebells.mp3',
      agentId: '0829fcb7-07ac-42a5-9b84-05294402ff63',
      voiceId: '3zdD5uMcIVtKzAQocDHU',
      bad: true,
    },
  ],
};
export default config;

/** Return metadata associated with the given character. */
export function getCharacter(characterId: string): CharacterType | null {
  return config.availableCharacters.find((obj) => obj.characterId === characterId) ?? null;
}

export const characterTemplates: CharacterTemplate[] = [
  {
    templateId: 'penguin',
    image: 'penguin-hdpi.png',
    voiceId: '3zdD5uMcIVtKzAQocDHU',
    names: ['Pengly', 'Bebop', 'Mr. Feet', 'Dipstick', 'Icee'],
    bios: [
      'A penguin who loves to dance.',
      'A penguin who loves to eat fish.',
      'A penguin who loves to swim.',
      'A penguin who loves to slide.',
    ],
    greetings: ["Hi, I'm {name}. Merry Christmas!"],
    ringtone: '/sounds/jinglebells.mp3',
  },
];

export function getTemplate(templateId: string): CharacterTemplate | null {
  return characterTemplates.find((obj) => obj.templateId === templateId) ?? null;
}
