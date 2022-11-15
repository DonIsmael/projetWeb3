import React, { useContext } from 'react';
import countersContext from "../../contexts/countersContext"
import { CounterContextType } from '../../types/counter';


const OkButton = () => {

  const { increaseOkScore } = useContext(countersContext) as CounterContextType;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    increaseOkScore();
  }

  return (
    <button onClick={handleClick}>
      increase ok
    </button>
  );
}

export default OkButton;
