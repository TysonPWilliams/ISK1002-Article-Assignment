import { Router } from "express";
import Student from "../models/student.js";

const router = Router();

// Get all students
router.get('/student', async (req, res) => {
    try {
         
        const students = await Student.find()
        if (!students || students.length === 0) {
            return res.status(404).send({ message: "No students exist in database"})
        }

        return res.send(students)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

// Get a single student
router.get('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id
        const student = await Student.findById(studentId)
        if (!student) {
            return res.status(404).send({ error: "No student exists with that ID"})
        }

        return res.send(student)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.post('/student', async (req, res) => {
    try {
        const bodyData = req.body
        const newStudent = await Student.create(bodyData)

        return res.status(201).send(newStudent)
        
    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.put('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id
        const bodyData = req.body

        let student = await Student.findById(studentId)
        if (!student) {
            return res.status(404).send({ error: "No student found with that ID"})
        }

        student = await Student.findByIdAndUpdate(
            studentId,
            bodyData,
            { new: true }
        )

        return res.send(student)


    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.delete('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id

        const student = await Student.findById(studentId)
        if (!student) {
            return res.status(404).send({ error: "No student exists with that ID"})
        }

        const deletedStudent = await Student.findByIdAndDelete(studentId)

        return res.status(204).send()

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

export default router