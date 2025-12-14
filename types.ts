export interface VocabQuizItem {
  question: string;
  options: string[];
  answer: string;
}

export interface VocabItem {
  word: string;
  synonym: string;
  context: string;
  pronunciation: string;
  quizzes: VocabQuizItem[];
  speakingQuestions: string[];
}

export interface GossipItem {
  speaker: string;
  direct: string;
  reported: string;
  rule: string;
}

export interface PoliceItem {
  prompt: string;
  start: string;
  answer: string;
  end: string;
}

export interface RoleItem {
  title: string;
  desc: string;
  iconType: 'sales' | 'host' | 'spy';
}

export interface GrammarExampleItem {
  direct: string;
  reported: string;
}

export interface GrammarRuleItem {
  rule: string;
  examples: GrammarExampleItem[];
}

export interface StageProps {
  isActive: boolean;
  onComplete?: () => void;
}