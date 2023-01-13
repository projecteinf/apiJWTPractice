const express = require('express')
const { JsonWebTokenError } = require('jsonwebtoken')
const router = express.Router()


const userController = require('../Controllers/user.js')

router.get('/', userController.getUsers)

router.post('/createUser', userController.createUser) 
router.post('/login', userController.login) 
router.post('/refreshToken', userController.refreshToken)
router.delete('/logout',userController.logout)

router.get('/auth',userController.validateToken,userController.authenticated)



module.exports = router
