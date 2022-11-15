import React, { useContext } from 'react';
import countersContext from "../../contexts/countersContext"
import { CounterContextType } from '../../types/counter';


const ResetButton = () => {

  const { resetAll } = useContext(countersContext) as CounterContextType;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    resetAll();
  }

  return (
    <button onClick={handleClick}>
      Reset scores
    </button>
  );
}

export default ResetButton;
