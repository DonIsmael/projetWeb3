import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { OpinionContextType, Opinion } from "../@types/todo";

type Props = {
    children: React.ReactNode
}

const Context = React.createContext<OpinionContextType | null>(null);
    
const ProviderWrapper: React.FC<Props> = ({ children }) => {

    const [ opinions, setOpinions] = useState<Opinion[]>([])

    const voteForOpinion = (id: string) => {
        const index = opinions.findIndex((opinion) => opinion.id === id)
        
        if(index === -1){
            console.warn("opinion with provided id does not exist", id);
            return;
        }
        
        const opinion: Opinion = opinions[index];
        
        const newOpinion: Opinion = {
            ...opinion,
            score: opinion.score + 1,
        }

        const newOpinions: Opinion[] = [
            ...opinions
        ];

        newOpinions[index] = newOpinion;
        setOpinions(newOpinions);
    }

    const addOpinion = (label: string) => {
        const newOpinion: Opinion = {
            id: uuid(),
            label: label,
            score: 1,
        }
        console.log(newOpinion);
        const newOpinions: Opinion[] = opinions.concat(newOpinion);
        setOpinions(newOpinions);
    }

    const reset = () => {
        setOpinions([])
    }

    const sortedOpinions: Opinion[] = opinions.sort( (a,b) => b.score - a.score )

    const exposedValue = {
        sortedOpinions,
        voteForOpinion,
        addOpinion,
        reset,
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