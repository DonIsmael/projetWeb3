import React, { useContext } from 'react';
import countersContext from "../../contexts/countersContext"
import { CounterContextType } from '../../types/counter';


const BadButton = () => {

  const { increaseBadScore } = useContext(countersContext) as CounterContextType; 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    increaseBadScore();
  }

  return (
    <button onClick={handleClick}>
      increase bad
    </button>
  );
}

export default BadButton;
