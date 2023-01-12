const bcrypt = require('bcrypt');
const User = require("../Model/Implementations/User/user.js");
const Token = require('../Model/Implementations/Token/token.js')
const users = new Array();
const token = new Token();

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
    const user = users.find( u => u.name == req.body.name );
    
    if (user==null || user==undefined) res.status(404).send("Usuari o contrasenya no vàlids");
    else {
        if (await bcrypt.compare(req.body.password,user.password)) {
            const accessToken = token.generateAccessToken(({user: req.body.name}))
            const refreshToken = token.generateRefreshToken({user: req.body.name})
            console.log(token);
            res.json({accessToken: accessToken, refreshToen: refreshToken})
        }
        else {
            res.status(401).send("Password incorrect!");
        }
    }
    
    console.log(user);
    
})

const refreshToken = (async (req,res) => {
    console.log("Refresh token");
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