import { Router } from "express";
import Enrollment from "../models/enrollment.js";

const router = Router();

// Get all enrollments
router.get('/enrollment', async (req, res) => {
    try {
         
        const enrollments = await Enrollment.find()
        if (!enrollments || enrollments.length === 0) {
            return res.status(404).send({ message: "No enrollments exist in database"})
        }

        return res.send(enrollments)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

// Get a single enrollment
router.get('/enrollment/:id', async (req, res) => {
    try {
        const enrollmentId = req.params.id
        const enrollment = await Enrollment
        .findById(enrollmentId)
        .populate({
            path: 'studentId',
            select: 'firstName lastName'
        })
        .populate({
            path: 'courseId',
            select: 'courseName'
        })
        if (!enrollment) {
            return res.status(404).send({ error: "No enrollment exists with that ID"})
        }

        return res.send(enrollment)

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.post('/enrollment', async (req, res) => {
    try {
        const bodyData = req.body
        const newEnrollment = await Enrollment.create(bodyData)

        return res.status(201).send(newEnrollment)
        
    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.put('/enrollment/:id', async (req, res) => {
    try {
        const enrollmentId = req.params.id
        const bodyData = req.body

        let enrollment = await Enrollment.findById(enrollmentId)
        if (!enrollment) {
            return res.status(404).send({ error: "No enrollment found with that ID"})
        }

        enrollment = await Enrollment.findByIdAndUpdate(
            enrollmentId,
            bodyData,
            { new: true }
        )

        return res.send(enrollment)


    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

router.delete('/enrollment/:id', async (req, res) => {
    try {
        const enrollmentId = req.params.id

        const enrollment = await Enrollment.findById(enrollmentId)
        if (!enrollment) {
            return res.status(404).send({ error: "No enrollment exists with that ID"})
        }

        const deletedEnrollment = await Enrollment.findByIdAndDelete(enrollmentId)

        return res.status(204).send()

    } catch(err) {
        return res.status(400).send({ error: err.message })
    }
})

export default router