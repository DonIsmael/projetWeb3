import React, { useContext } from 'react';
import { OpinionContextType, Opinion } from "../../@types/opinion";
import opinionsContext from "../../contexts/opinionsContext";
import OpinionItem from './OpinionItem';


const OpinionsList = () => {

  const { sortedOpinions } = useContext(opinionsContext) as OpinionContextType;
  

  return (
    <ul>
        { sortedOpinions.map((opinion: Opinion) => (
            <OpinionItem key={opinion.id} opinion={opinion} />
        )) }
    </ul>
  );
}

export default OpinionsList;
