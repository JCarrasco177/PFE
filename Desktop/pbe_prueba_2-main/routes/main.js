const express = require('express')
const router = express.Router();
const main = require('../cotrollers/MainController')
const users = require('../cotrollers/UsersController')
const topic = require('../cotrollers/TopicController')
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
router.post('/users/getCars',users.getCars)
router.post('/users/getCarById',users.getCarById)
router.post('/users/createCar',users.createCar)
router.delete('/users/deleteCar',users.deleteCar)
router.post('/users/updateCar',users.updateCar)

router.post('/users/getMarcaById', users.getMarcaById)
router.post('/users/getCarModeloById', users.getCarModeloById)
router.post('/users/getCarPatenteById', users.getCarPatenteById)
//TopicController
router.post('/createTopic', topic.createTopic)
router.post('/readTopic', topic.readTopic)
router.post('/updateTopic', topic.updateTopic)
router.post('/deleteTopic', topic.deleteTopic)
    



module.exports = router;