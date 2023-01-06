const bcrypt = require('bcrypt');
const User = require("../Model/Implementations/user.js");
const users = new Array();

const createUser = (async (req,res) => {
    const userName = req.body.name
    //const salt = await bcrypt.genSalt(10);
    
    //const hashedPassword = await bcrypt.hash(req.body.password,salt)
    
    // users.push( {user: userName, password: hashedPassword})

    const hashedPassword = await User.encrypt(req.body.password);
    users.push(new User(userName,hashedPassword));

    res.status(201).send(users)
    console.log(users)
})

const login = (async (req,res) => {
    const user = users.find( u => u.user == req.body.name);

    if (user==null) res.status(404).send("Usuari o contrasenya no vàlids");
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