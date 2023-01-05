const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getUsers,
    login,
} = require('../Controllers/user.js')

router.get('/', getUsers)

router.post('/createUser', createUser) 
router.post('/login', login) 

module.exports = router
