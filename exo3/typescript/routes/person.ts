import express from 'express';
import service from '../services/PersonService'

const router = express.Router();

router.get('/persons', (_req, res) => {
    res.send(service.getPersons());
  });

router.get('/allPersons' , service.getAllPersons);

router.post('/createPerson' , service.createPerson);

router.get('/:id' , service.findPersonById);


router.delete('/delete/:id' , service.deletePerson);

router.put('/update/:id' , service.updatePerson);


export default router;