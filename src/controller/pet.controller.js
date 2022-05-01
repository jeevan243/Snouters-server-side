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
        let pets = await Pets.find()
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

// price Ascending
router.get("/all/sort1", async (req, res) => {
    try {
        let pets = await Pets.find().sort({ costperday: 1 })
        return res.status(200).send(pets)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})

//price Descending
router.get("/all/sort-1", async (req, res) => {
    try {
        let pets = await Pets.find().sort({ costperday: -1 })
        return res.status(200).send(pets)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})


//verified Ascending
router.get("/all/rating1", async (req, res) => {
    try {
        let pets = await Pets.find().sort({ rating: 1 })
        return res.status(200).send(pets)
    } catch (er) {
        return res.status(500).send(er.message)
    }
})

//verified Decending
router.get("/all/rating-1", async (req, res) => {
    try {
        let pets = await Pets.find().sort({ rating: -1 })
        return res.status(200).send(pets)


    } catch (er) {
        return res.status(500).send(er.message)
    }
})
module.exports = router;
