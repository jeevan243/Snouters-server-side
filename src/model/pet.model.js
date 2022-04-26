
const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

    image: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    capacity: { type: String, required: true },
    costperday: { type: String, required: true },
    verified: { type: String, required: true },
    rating: { type: String, required: true }

},
    {
        versionKey: false,
        timestamps: true
    }
)
const Pets = mongoose.model("pet", petSchema)

module.exports = Pets