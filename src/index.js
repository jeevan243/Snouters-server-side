const express = require("express");
const connect = require("./configs/db");
const cors = require('cors')
require("dotenv").config()
const { getUsers, register, login } = require("./controller/auth.controller");

const petController = require("./controller/pet.controller")



const port = process.env.PORT || 5000
const app = express();
app.use(cors())
app.use(express.json());


app.get("/", async (req, res) => {
    try {
        return res.send("Server is live now")
    } catch (error) {
        return res.send(error.message)
    }
})

//register
app.post("/register", register);
app.get("/userdata", getUsers)
app.post("/login", login);

app.use("/pets", petController)



app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log(`Server Running On Port ${port}`)
    } catch (er) {
        console.log(er.message)
    }
})