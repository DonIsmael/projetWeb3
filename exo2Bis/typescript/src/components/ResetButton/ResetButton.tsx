import React, { useContext } from 'react';
import countersContext from "../../contexts/opinionsContext"
import { OpinionContextType, Opinion } from "../../@types/todo";
import opinionsContext from "../../contexts/opinionsContext";

const ResetButton = () => {

  const { reset } = useContext(countersContext) as OpinionContextType;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
