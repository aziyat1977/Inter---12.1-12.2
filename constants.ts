import { VocabItem, PoliceItem, RoleItem, GossipItem, GrammarRuleItem } from './types';

export const VOCAB_DATA: VocabItem[] = [
  { 
    word: "Nasty", 
    synonym: "Unpleasant", 
    context: "Bilbo hates adventures.",
    pronunciation: "/ˈnɑː.sti/",
    quizzes: [
      {
        question: "Don't read the comments on that viral TikTok video. People are being really ___.",
        options: ["Clever", "Nasty", "Amusing"],
        answer: "Nasty"
      },
      {
        question: "I checked my bank account and saw I lost $500. It was a ___ surprise.",
        options: ["Nasty", "Clever", "Funny"],
        answer: "Nasty"
      }
    ],
    speakingQuestions: [
      "Have you ever received a nasty comment on social media? How did you react?",
      "What is a nasty habit that costs people a lot of money?",
      "Is it nasty to show off your money on Instagram, or is it normal?"
    ]
  },
  { 
    word: "Amusing", 
    synonym: "Funny / Entertaining", 
    context: "Gandalf finds Bilbo funny.",
    pronunciation: "/əˈmjuː.zɪŋ/",
    quizzes: [
      {
        question: "That streamer's reaction to losing the game was highly ___.",
        options: ["Nasty", "Amusing", "Sad"],
        answer: "Amusing"
      },
      {
        question: "My English teacher made an ___ mistake during the live class.",
        options: ["Expensive", "Amusing", "Digital"],
        answer: "Amusing"
      }
    ],
    speakingQuestions: [
      "What do you find more amusing: TikTok trends or YouTube gamers?",
      "Tell us about an amusing misunderstanding you had in English.",
      "Do you think pranks on friends are amusing or just mean?"
    ]
  },
  { 
    word: "Clever", 
    synonym: "Smart / Intelligent", 
    context: "Wizards are very clever.",
    pronunciation: "/ˈklev.ər/",
    quizzes: [
      {
        question: "She used a ___ trick to get 10k followers in one week.",
        options: ["Nasty", "Clever", "Boring"],
        answer: "Clever"
      },
      {
        question: "Investing in that skin for the game wasn't very ___. You can't sell it back.",
        options: ["Clever", "Amusing", "Loud"],
        answer: "Clever"
      }
    ],
    speakingQuestions: [
      "What is a clever way to save money while having fun?",
      "Who is the cleverest content creator you follow?",
      "Do you use any clever apps to help you learn languages?"
    ]
  },
];

export const GRAMMAR_RULES: GrammarRuleItem[] = [
  {
    rule: "Present Simple → Past Simple",
    examples: [
      { direct: "I like tea.", reported: "He said he liked tea." },
      { direct: "We live in a hole.", reported: "He said they lived in a hole." },
      { direct: "She hates loud noises.", reported: "He said she hated loud noises." }
    ]
  },
  {
    rule: "Present Continuous → Past Continuous",
    examples: [
      { direct: "I am reading a map.", reported: "He said he was reading a map." },
      { direct: "They are cooking dinner.", reported: "He said they were cooking dinner." },
      { direct: "It is raining outside.", reported: "He said it was raining outside." }
    ]
  },
  {
    rule: "Will → Would",
    examples: [
      { direct: "I will help you.", reported: "He said he would help me." },
      { direct: "It will be dangerous.", reported: "He said it would be dangerous." },
      { direct: "They will arrive soon.", reported: "He said they would arrive soon." }
    ]
  }
];

export const GOSSIP_DATA: GossipItem[] = [
  {
    speaker: "Gandalf",
    direct: "I am looking for someone to share in an adventure.",
    reported: "He said he was looking for someone to share in an adventure.",
    rule: "Present Continuous → Past Continuous"
  },
  {
    speaker: "Bilbo",
    direct: "We do not want any adventures here.",
    reported: "He said they did not want any adventures there.",
    rule: "Present Simple → Past Simple"
  },
  {
    speaker: "Gandalf",
    direct: "You will have a tale to tell.",
    reported: "He said I would have a tale to tell.",
    rule: "Future Simple → Conditional"
  },
  {
    speaker: "Bilbo",
    direct: "I can't believe this is happening!",
    reported: "He said he couldn't believe that was happening.",
    rule: "Modal Present → Modal Past"
  }
];

export const POLICE_DATA: PoliceItem[] = [
  { prompt: "Gandalf: 'I am looking for someone...'", start: "He told me he", answer: "was looking", end: "for someone." },
  { prompt: "Gandalf: 'You know my name.'", start: "He said I", answer: "knew", end: "his name." },
  { prompt: "Gandalf: 'Do you remember I belong to it?'", start: "He asked if I", answer: "remembered", end: "he belonged to it." },
  { prompt: "Gandalf: 'I shall inform the others.'", start: "He said he", answer: "would inform", end: "the others." },
  { prompt: "Gandalf: 'It will be very good for you.'", start: "He said it", answer: "would be", end: "very good for me." },
  { prompt: "Bilbo: 'We do not want any adventures here.'", start: "I told him we", answer: "did not want", end: "any adventures there." },
];

export const ROLES: RoleItem[] = [
  { title: "The Gandalf", desc: "You are an intense guest. You want to sell a trip to Mars. You won't take no for an answer.", iconType: 'sales' },
  { title: "The Bilbo", desc: "You just want to eat plov and relax. You are polite but you refuse everything.", iconType: 'host' },
  { title: "The Spy", desc: "Listen to the conversation. Later, report exactly what they said to the class.", iconType: 'spy' },
];