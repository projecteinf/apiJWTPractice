const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getUsers,
} = require('../Controllers/user.js')

router.get('/', getUsers)

router.post('/createUser', createUser) 


module.exports = router
