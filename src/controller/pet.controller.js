const express = require("express")
const Pets = require("../model/pet.model");

const router = express.Router();

router.post("/create", async (req, res) => {
    try {
        let pet = await Pets.create(req.body)
        return res.status(201).send(pet)

    } catch (er) {
        return res.status(400).send(er.message)
    }
})


router.get("/all", async (req, res) => {
    try {
        let pets = await Pets.find().lean().exec()
        return res.status(200).send(pets)

    } catch (er) {
        return res.status(500).send(er.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        let pets = await Pets.findById(req.params.id).lean().exec()
        return res.status(200).send(pets)

    } catch (er) {
        return res.status(500).send(er.message)
    }
})







module.exports = router;
