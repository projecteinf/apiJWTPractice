// Configuració bàsica servei APIREST

require("dotenv").config();
const express = require('express');
const app = express();

const user_routes = require('./Routes/user.js');

app.use(express.json());
app.use('/api/user', user_routes);

const port = process.env.TOKEN_SERVER_PORT;

app.listen(port, () =>{
    console.log(`Authorization Server running on ${port} listening`);
})
