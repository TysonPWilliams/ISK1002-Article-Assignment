import { Router } from "express";
import Teacher from "../models/teacher.js";

const router = Router();

// Get all teachers
router.get('/teacher', async (req, res) => {
    try {
         
        const teachers = await Teacher.find()
        if (!teachers || teachers.length === 0) {
            return res.status(404).send({ message: "No teachers exist in database"})
        }

        return res.send(teachers)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

// Get a single teacher
router.get('/teacher/:id', async (req, res) => {
    try {
        const teacherId = req.params.id
        const teacher = await Teacher.findById(teacherId)
        if (!teacher) {
            return res.status(404).send({ error: "No teacher exists with that ID"})
        }

        return res.send(teacher)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.post('/teacher', async (req, res) => {
    try {
        const bodyData = req.body
        const newTeacher = await Teacher.create(bodyData)

        return res.status(201).send(newTeacher)
        
    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.put('/teacher/:id', async (req, res) => {
    try {
        const teacherId = req.params.id
        const bodyData = req.body

        let teacher = await Teacher.findById(teacherId)
        if (!teacher) {
            return res.status(404).send({ error: "No teacher found with that ID"})
        }

        teacher = await Teacher.findByIdAndUpdate(
            teacherId,
            bodyData,
            { new: true }
        )

        return res.send(teacher)


    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.delete('/teacher/:id', async (req, res) => {
    try {
        const teacherId = req.params.id

        const teacher = await Teacher.findById(teacherId)
        if (!teacher) {
            return res.status(404).send({ error: "No teacher exists with that ID"})
        }

        const deletedTeacher = await Teacher.findByIdAndDelete(teacherId)

        return res.status(204).send()

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

export default router