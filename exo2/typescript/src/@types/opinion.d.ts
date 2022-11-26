export interface Opinion { 
  id: string;
  label: string;
  score: number;
}

// on donne toutes les données à faire transiter par le provider
export type OpinionContextType = {
  sortedOpinions: Opinion[];
  voteForOpinion: (id: string) => void;
  addOpinion: (label: string) => void;
  reset: () => void;
};
