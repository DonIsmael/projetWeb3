import express from "express";
import service from "../services/PersonService";

const router = express.Router();

router.get("/persons", (_req, res) => {
  res.send(service.getPersons());
});

//get All persons
router.get("/allPersons", service.getAllPersons);

//creation d'une personne
router.post("/createPerson", service.createPerson);

// trouver une personne par son ID
router.get("/:id", service.findPersonById);

// supprimer une personne par son ID
router.delete("/delete/:id", service.deletePerson);

// mettre a jour une personne par son ID
router.put("/update/:id", service.updatePerson);

export default router;
