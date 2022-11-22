import React from "react";

const Person = ({ person }) => (
  <p>
    {person.name} : {person.number} {person.genre}
  </p>
);

export default Person;
