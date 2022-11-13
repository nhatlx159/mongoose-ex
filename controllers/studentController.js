const { findById } = require('../models/studentModel')
const Student = require('../models/studentModel')
const studentController = {
    getStudentById: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id)
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addstudent: async (req, res) => {
        try {
            const data = {
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                studyFee: req.body.studyFee,
                GPA: req.body.gpa
            }
            const user = new Student(data)
            const resData = await user.save()
            res.status(200).json(resData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    registerCourse: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id)
            student.class.push({
                className: req.body.className,
                classId: req.body.classId
            })
            await student.save()
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    editStudent: async (req, res) => {
        try {
            const current_data = await Student.findById(req.params.id)
            const data = {
                fullname: req.body.fullname || current_data.fullname,
                birthday: req.body.birthday || current_data.birthday,
                studyFee: req.body.studyFee || current_data.studyFee,
                GPA: req.body.gpa || current_data.GPA,
                class: req.body.class || current_data.class
            }
            const student = await Student.findByIdAndUpdate(req.params.id, data)
            await student.save()
            res.status(200).json("Update student successfully!!!!")
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = studentController
