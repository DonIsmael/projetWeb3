import React, { useContext } from 'react';
import countersContext from "../../contexts/opinionsContext"
import { OpinionContextType } from "../../@types/opinion";

const ResetButton = () => {

  const { reset } = useContext(countersContext) as OpinionContextType;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    reset();
  }

  return (
    <button onClick={handleClick}>
        Reset opinions
    </button>
  );
}

export default ResetButton;
