export interface AppContextInterface {
    goodScore: number;
    okScore: number;
    badScore: number;
}

export type CounterContextType = {
    goodScore: number;
    okScore: number;
    badScore: number;
    increaseGoodScore: () => void;
    increaseOkScore: () => void;
    increaseBadScore: () => void;
    resetAll: () => void;
};