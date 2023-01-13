const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const router = express.Router()


const  { 
    createUser,
    getUsers,
    login,
    refreshToken,
    logout,
    authenticated,
    validateToken
} = require('../Controllers/user.js')

router.get('/', getUsers)

router.post('/createUser', createUser) 
router.post('/login', login) 
router.post('/refreshToken', refreshToken)
router.delete('/logout',logout)

router.get('/auth',validateToken,authenticated)



module.exports = router
