const express = require('express')
const router = express.Router();
const main = require('../cotrollers/MainController')
const users = require('../cotrollers/UsersController')
//verbos REST -> GET, POST, PUT, PATCH y DELETE.


//MainController
router.get('/hola',main.helloWorld)
router.post('/getName',main.getName)
router.post('/getFullName',main.getFullName)
router.post('/sumarDosNumeros',main.sumarDosNumeros)
router.put('/putName',main.putName)
router.patch('/patchName',main.patchName)
router.delete('/deleteName',main.deleteName)
router.post('/reverse',main.reverse)
//UsersController
router.post('/users/getUsers',users.getUsers)
router.post('/users/searchUser',users.searchUser)
router.post('/users/getUserById',users.getUserById)
router.post('/users/createUser',users.createUser)
router.post('/users/getUserNameById', users.getUserNameById)
router.post('/users/getUserLastNameById', users.getUserLastNameById)
router.post('/users/getUserEmailById', users.getUserEmailById)
router.post('/users/getUserWebPageById', users.getUserWebPageById)
router.post('/users/getUserDataById', users.getUserDataById)




module.exports = router;