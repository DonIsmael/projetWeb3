export interface Opinion {
    id: string;
    label: string;
    score: number;
}

export type OpinionContextType = {
    sortedOpinions: Opinion[];
    voteForOpinion: (id: string) => void;
    addOpinion: (label: string) => void;
    reset: () => void;
}