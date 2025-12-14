import { VocabItem, GossipItem, PoliceItem, RoleItem } from './types';

export const VOCAB_DATA: VocabItem[] = [
  { word: "Nasty/Disturbing", synonym: "Unpleasant", context: "Bilbo hates adventures." },
  { word: "Amusing", synonym: "Funny/Entertaining", context: "Gandalf finds Bilbo funny." },
  { word: "Clever", synonym: "Smart/Intelligent", context: "Wizards are very clever." },
];

export const GOSSIP_DATA: GossipItem[] = [
  { speaker: "Gandalf", direct: "I am looking for someone.", reported: "He said he was looking for someone.", rule: "Present Cont. → Past Cont." },
  { speaker: "Bilbo", direct: "We do not want any adventures.", reported: "Bilbo said they did not want any adventures.", rule: "Present Simple → Past Simple" },
  { speaker: "Gandalf", direct: "You have changed, Bilbo.", reported: "He said Bilbo had changed.", rule: "Present Perfect → Past Perfect" },
  { speaker: "Gandalf", direct: "I shall inform the others.", reported: "He said he would inform the others.", rule: "Future (Shall) → Would" },
  { speaker: "Gandalf", direct: "Do you mean good morning?", reported: "He asked if he meant good morning.", rule: "Question: Yes/No → If/Whether" },
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
  { title: "The Gandalf (Salesperson)", desc: "You are an intense guest. You want to sell a trip to Mars. You won't take no for an answer.", iconType: 'sales' },
  { title: "The Bilbo (Host)", desc: "You just want to eat plov and relax. You are polite but you refuse everything.", iconType: 'host' },
  { title: "The Spy (Reporter)", desc: "Listen to the conversation. Later, report exactly what they said to the class.", iconType: 'spy' },
];