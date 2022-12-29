requestAnimationFrame("dotenv").config()
const express = require('express')
const app = express();

app.use(express.json())

const port = process.env.TOKEN_SERVER_PORT

app.listen(port, () =>{
    console.log(`Authorization Server running on ${port} listening`)
})