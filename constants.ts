import { VocabItem, PoliceItem, RoleItem, GossipItem } from './types';

export const VOCAB_DATA: VocabItem[] = [
  { word: "Nasty", synonym: "Unpleasant", context: "Bilbo hates adventures." },
  { word: "Amusing", synonym: "Funny", context: "Gandalf finds Bilbo funny." },
  { word: "Clever", synonym: "Smart", context: "Wizards are very clever." },
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