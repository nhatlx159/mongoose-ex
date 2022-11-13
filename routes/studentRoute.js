const studentController = require('../controllers/studentController')

const route = require('express').Router()

//GET
route.get('/getallstudent')
route.get('/getstudent/:id', studentController.getStudentById)

//POST
route.post('/addstudent', studentController.addstudent)
route.post('/registerCourse/:id', studentController.registerCourse)

//PATCH
route.patch('/editstudent/:id', studentController.editStudent)

module.exports = route
