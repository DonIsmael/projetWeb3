import React, { useState, useEffect } from 'react'

import AddPerson from "../AddPerson/AddPerson"
import Person from "../Person/Person"
import PersonsAPI from "../../services/persons"



const App = () => {

  const [persons, setPersons] = useState([])

  const initialLoad = () => {
    PersonsAPI
      .getAll()
      .then(persons => setPersons(persons))
      .catch(error => console.warn(error))
  }
  useEffect(initialLoad, [])

  const createPerson = (person) => {
    PersonsAPI
      .create(person)
      .then(createdPerson => setPersons([...persons, createdPerson]))
  }
 
  return (
    <div>
      <h2>Add a new</h2>
      <AddPerson createPerson={createPerson} />
      <h2>Numbers</h2>
      {persons.map(person => <Person key={person.id} person={person} />)}
    </div>
  )

}

export default App