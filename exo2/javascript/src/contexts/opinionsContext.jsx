import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [opinions, setOpinions] = useState([]);

  const voteForOpinion = (id) => {
    const index = opinions.findIndex((opinion) => opinion.id === id);

    if (index === -1) {
      console.warn("opinion with provided id does not exist", id);
      return;
    }

    const opinion = opinions[index];

    const newOpinion = {
      ...opinion, // ici on récupère tout les attributs de l'objet sauf ceux qu'on modifie
      score: opinion.score + 1,
    };

    const newOpinions = [...opinions];

    newOpinions[index] = newOpinion;
    setOpinions(newOpinions);
  };

  const addOpinion = (label) => {
    const newOpinion = {
      id: uuid(),
      label: label,
      score: 1,
    };
    console.log(newOpinion);
    const newOpinions = opinions.concat(newOpinion);
    setOpinions(newOpinions);
  };

  const reset = () => {
    setOpinions([]);
  };

  const sortedOpinions = opinions.sort((a, b) => b.score - a.score);

  const exposedValue = {
    sortedOpinions,
    voteForOpinion,
    addOpinion,
    reset,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };

export default Context;
