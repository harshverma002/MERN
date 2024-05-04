const express = require('express')
const userController = require('../controllers/userController.js')


const userRouter = express.Router()

userRouter.route('/')
.get(userController.getUser)
.put(userController.replaceUser)
.post(userController.addUser)
.delete(userController.deleteUser)

module.exports = userRouter