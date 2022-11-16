import React, { useState } from 'react'
import Person from "../Person/Person"
import Gender from '../Person/Gender'




const App = () => {

  const [persons, setPersons] = useState<Person[]>([])
  const [newName, setNewName] = useState<string>("");
  const [newNumber, setNewNumber] = useState<number>(0);
  const [newGender, setNewGender] = useState<Gender>(Gender.MAN);


  const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewNumber(+event.target.value)
  }

  const handleGenderChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    const target = event.target as HTMLSelectElement;
    console.log(target.value);
    if(target.value === "MAN")
    setNewGender(Gender.MAN)
    if(target.value === "WOMAN")
    setNewGender(Gender.WOMAN)
    else
    setNewGender(Gender.NONE)
    
  }

  const handleAddPerson = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const noteObject = new Person(newName,newNumber,newGender);
        console.log(noteObject)
    setPersons(persons.concat(noteObject));
    setNewName("");
    setNewNumber(0);
    setNewGender(Gender.MAN);
  };

 
  return (
    <div>
      <h2>Add a new</h2>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}  />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>

        <div>
        <select id="gender" onChange={handleGenderChange}>
            <option value={Gender.MAN}>MAN</option>
            <option value={Gender.WOMAN}>WOMAN</option>
            <option value={Gender.NONE}>NONE</option>
          </select>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => person.render())}
  
    </div>
  )

}

export default App