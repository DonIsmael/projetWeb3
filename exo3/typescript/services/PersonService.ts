import { NextFunction, Request, Response } from 'express';
import personsEntries from '../data/person';
import { PersonEntry } from '../types';
import persons from '../models/person';


const getPersons = (): Array<PersonEntry> => {
  console.log("Persons entiers -> ", personsEntries);
  return personsEntries;
}


const getAllPersons = (req: Request, res: Response, next: NextFunction) => {
  persons.find({})
  .then(person => res.json(person))
  .catch(err => next(err))
  console.log("method : GET -> get all persons")
};



const createPerson = (req: Request, res: Response, next: NextFunction) => {
  
  const body = req.body;
  const person = new persons(body)
  person.save().then(result => {
    res.json(result)
  })
    .catch(err => next(err))


    console.log("method : POST -> create person")

};

const findPersonById = (req: Request, res: Response, next: NextFunction) => {


  persons.findById(req.params.id).then(person => {
    if (person) {
      res.json(person)
    } else {
        console.log("not found this person");
      }
  }).catch(err => next(err))

  console.log("GET -> find by id");


};

const deletePerson = (req: Request, res: Response, next: NextFunction) => {
  persons.findByIdAndRemove(req.params.id).then(result => {
    if (result) {
      res.json(result)
    } else {
     console.log("not found")
    }
  })
    .catch(err => next(err))

    console.log("method : DELETE -> delete a person")
}


const updatePerson = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body
  // Check body
  
  // Update
  const person = {
    name: body.name,
    number : body.number
  }
  persons.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      if (updatedPerson) {
        res.json(updatedPerson)
      } else {
        console.log("person not found for update");
        }
    })
    .catch(error => next(error))


    console.log("method : UPDATE -> update a person")

}

export default {
  getPersons,
  getAllPersons,
  createPerson,
  findPersonById,
  deletePerson,
  updatePerson,
};




