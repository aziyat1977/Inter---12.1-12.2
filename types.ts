
export interface TranslationSet {
  ru: string;
  uz: string;
}

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
  translations: TranslationSet; // Added translations
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
  translations: TranslationSet; // Added translations
  examples: GrammarExampleItem[];
}

export interface StageProps {
  isActive: boolean;
  onComplete?: () => void;
}

// --- NEW QUIZ TYPES ---

export interface MasterTestQuestion {
  question: string; // The prompt text e.g. "I sleep until noon" -> He said he ____ until noon.
  options: string[];
  answer: string;
}

export interface GapFillItem {
  direct: string;
  start: string;
  answer: string; // correct value
  end?: string; // optional suffix
}

export interface QuizCategory {
  title: string;
  context: string;
  grammarInfo: {
    rule: string;
    form: string;
    exampleDirect: string;
    exampleReported: string;
  };
  test: MasterTestQuestion[];
  exercises: {
    title: string;
    items: GapFillItem[];
  }[];
}
