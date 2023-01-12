const express = require('express')
const router = express.Router()

const  { 
    createUser,
    getUsers,
    login,
    refreshToken,
} = require('../Controllers/user.js')

router.get('/', getUsers)

router.post('/createUser', createUser) 
router.post('/login', login) 
router.post('/refreshToken', refreshToken)

module.exports = router
