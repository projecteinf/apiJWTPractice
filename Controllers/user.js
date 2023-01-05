
const bcrypt = require('bcrypt');
const users = [];

const createUser = (async (req,res) => {
    const user = req.body.name
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    users.push( {user: user, password: hashedPassword})

    res.status(201).send(users)
    console.log(users)
})

const login = (async (req,res) => {
    const user = req.body.name
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(req.body.password,salt)

    
})


const getUsers = (async (req,res) => {
    res.status(201).send({"state":"OK"});
    console.log("Working!");
})


module.exports = {
    createUser,
    getUsers,
    login,
}