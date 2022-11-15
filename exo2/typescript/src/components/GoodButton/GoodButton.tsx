import React, { useContext } from 'react';
import countersContext from "../../contexts/countersContext"
import { CounterContextType } from '../../types/counter';


const GoodButton = () => {

  const { increaseGoodScore } = useContext(countersContext) as CounterContextType;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    increaseGoodScore();
  }

  return (
    <button onClick={handleClick}>
      increase good
    </button>
  );
}

export default GoodButton;
