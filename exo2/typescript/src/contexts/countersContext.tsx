import React, { useState } from "react";
import { CounterContextType } from "../types/counter";

type Props = {
    children: React.ReactNode;
}

const Context = React.createContext<CounterContextType | null>(null);

const ProviderWrapper: React.FC<Props> = ({ children }) => {

    const [goodScore, setGoodScore] = useState<number>(0);
    const [okScore, setOkScore] = useState<number>(0);
    const [badScore, setBadScore] = useState<number>(0);

    const increaseGoodScore = () => setGoodScore(goodScore+1);
    const increaseOkScore = () => setOkScore(okScore+1);
    const increaseBadScore = () => setBadScore(badScore+1);

    const resetAll = () => {
        setGoodScore(0);
        setOkScore(0);
        setBadScore(0);
    }

    const exposedValue = {
        goodScore, increaseGoodScore,
        okScore, increaseOkScore,
        badScore, increaseBadScore,
        resetAll
    }

    return (
        <Context.Provider value={exposedValue}>
            { children }
        </Context.Provider>
    )
}

export {
    Context,
    ProviderWrapper,
}

export default Context;