import React, { useState, useEffect } from 'react'

import AddPerson from "../AddPerson/AddPerson"
import Person from "../Person/Person"
import PersonsAPI from "../../services/persons"



const App = () => {
  return (
    <div>
      <h2>Add a new</h2>
      <AddPerson  />
    </div>
  )

}

export default App