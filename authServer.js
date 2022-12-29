// Configuració bàsica servei APIREST

require("dotenv").config()
const express = require('express')
const app = express();

app.use(express.json())

const port = process.env.TOKEN_SERVER_PORT

app.listen(port, () =>{
    console.log(`Authorization Server running on ${port} listening`)
})

// Configuració autentificació 

// Creació usuari amb ARRAY ( Cal fer-ho amb una BD!)

const bcrypt = require('bcrypt')
const users = []

app.post("/createUser", async(req,res) => {
    console.log(req);
    const user = req.body.name
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    users.push( {user: user, password: hashedPassword})

    res.status(201).send(users)
    console.log(users)
})

app.get("/createUser", async(req,res) => {
    res.status(201).send({"state":"OK"})
    console.log("Working!")
})
