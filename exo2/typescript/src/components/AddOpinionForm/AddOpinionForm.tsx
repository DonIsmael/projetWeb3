import React, { useContext, useState } from 'react';
import { OpinionContextType, Opinion } from "../../@types/opinion";
import opinionsContext from "../../contexts/opinionsContext"


const AddOpinionForm = () => {

  const { addOpinion } = useContext(opinionsContext) as OpinionContextType;
  
  // WE DO NOT USE A CONTAINER HERE
  // THIS STATE IS REALLY BELONGING TO THIS COMPONENT ONLY
  // We could have decided otherwise. The decision is up to you. 
  const [label, setLabel] = useState<string>("")


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addOpinion(label);
    setLabel("");
  }

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const newValue = e.target.value;
    setLabel(newValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleLabelChange} value={label} />
      <button type="submit">
        Add Opinion
      </button>
    </form>
  );
}

export default AddOpinionForm;
