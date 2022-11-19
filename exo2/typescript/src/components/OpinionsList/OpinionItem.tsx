import React, { useContext } from 'react';
import { OpinionContextType, Opinion } from "../../@types/opinion";
import opinionsContext from "../../contexts/opinionsContext";

type Props = {
    opinion: Opinion;
}

const OpinionItem: React.FC<Props> = ({opinion}) => {

    const { voteForOpinion } = useContext(opinionsContext) as OpinionContextType;

    const handleClick = (): void => {
        voteForOpinion(opinion.id)
    }

    return (
        <div>
            <span className="label">
                { opinion.label }
            </span>
            &nbsp;:&nbsp; 
            <span className="score">
                { opinion.score }
            </span>
            &nbsp;
            <button onClick={handleClick}>
                Vote
            </button>
        </div>
    );
}

export default OpinionItem;
