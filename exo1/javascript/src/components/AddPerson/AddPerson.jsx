import React, { useState } from "react";
import Person from "../Person/Person";

const AddPerson = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState(0);
  const [newGenre, setNewGenre] = useState("MAN");

  const handleAddPerson = (event) => {
    event.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber,
      genre: newGenre,
      id: persons.length + 1,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber("");
    setNewGenre("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleGenderChange = (event) => {
    setNewGenre(event.target.value);
  };

  return (
    <form onSubmit={handleAddPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <select id="gender" onChange={handleGenderChange}>
          <option value="MAN">MAN</option>
          <option value="WOMAN">WOMAN</option>
          <option value="NONE">NONE</option>
        </select>
      </div>
      <div>
        <button type="submit">add</button>
      </div>

      <div>
        <h2>List of persons</h2>
        {persons.map((part) => (
          <Person person={part} />
        ))}
      </div>
    </form>
  );
};

export default AddPerson;
