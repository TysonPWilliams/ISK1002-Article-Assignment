import { Router } from "express";
import Grade from "../models/grade.js";

const router = Router();

// Get all grades
router.get('/grade', async (req, res) => {
    try {

        const grades = await Grade.find()
        if (!grades || grades.length === 0) {
            return res.status(404).send({ message: "No grades exist in database" })
        }

        return res.send(grades)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

// Get a single grade
router.get('/grade/:id', async (req, res) => {
    try {
        const gradeId = req.params.id
        const grade = await Grade
            .findById(gradeId)
            .populate({
                path: 'enrollmentId',
                populate: [
                    {
                        path: 'studentId',
                        select: 'firstName lastName'
                    },
                    {
                        path: 'courseId',
                        select: 'courseName'
                    }
                ]
            })
        if (!grade) {
            return res.status(404).send({ error: "No grade exists with that ID" })
        }

        return res.send(grade)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.post('/grade', async (req, res) => {
    try {
        const bodyData = req.body
        const newGrade = await Grade.create(bodyData)

        return res.status(201).send(newGrade)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.put('/grade/:id', async (req, res) => {
    try {
        const gradeId = req.params.id
        const bodyData = req.body

        let grade = await Grade.findById(gradeId)
        if (!grade) {
            return res.status(404).send({ error: "No grade found with that ID" })
        }

        grade = await Grade.findByIdAndUpdate(
            gradeId,
            bodyData,
            { new: true }
        )

        return res.send(grade)


    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.delete('/grade/:id', async (req, res) => {
    try {
        const gradeId = req.params.id

        const grade = await Grade.findById(gradeId)
        if (!grade) {
            return res.status(404).send({ error: "No grade exists with that ID" })
        }

        const deletedGrade = await Grade.findByIdAndDelete(gradeId)

        return res.status(204).send()

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

export default router