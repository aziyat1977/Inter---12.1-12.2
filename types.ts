export interface VocabItem {
  word: string;
  synonym: string;
  context: string;
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

export interface StageProps {
  isActive: boolean;
  onComplete?: () => void;
}