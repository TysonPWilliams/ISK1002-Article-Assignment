import { Router } from "express";
import Course from "../models/course.js";

const router = Router();

// Get all courses
router.get('/course', async (req, res) => {
    try {

        const courses = await Course
            .find()
            .populate({
                path: 'teacherId',
                select: 'firstName lastName'
            })

        if (!courses || courses.length === 0) {
            return res.status(404).send({ message: "No courses exist in database" })
        }

        return res.send(courses)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

// Get a single course
router.get('/course/:id', async (req, res) => {
    try {
        const courseId = req.params.id
        const course = await Course
            .findById(courseId)
            .populate({
                path: 'teacherId',
                select: 'firstName lastName'
            })
        if (!course) {
            return res.status(404).send({ error: "No course exists with that ID" })
        }

        return res.send(course)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.post('/course', async (req, res) => {
    try {
        const bodyData = req.body
        const newCourse = await Course.create(bodyData)

        return res.status(201).send(newCourse)

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.put('/course/:id', async (req, res) => {
    try {
        const courseId = req.params.id
        const bodyData = req.body

        let course = await Course.findById(courseId)
        if (!course) {
            return res.status(404).send({ error: "No course found with that ID" })
        }

        course = await Course.findByIdAndUpdate(
            courseId,
            bodyData,
            { new: true }
        )

        return res.send(course)


    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

router.delete('/course/:id', async (req, res) => {
    try {
        const courseId = req.params.id

        const course = await Course.findById(courseId)
        if (!course) {
            return res.status(404).send({ error: "No course exists with that ID" })
        }

        const deletedCourse = await Course.findByIdAndDelete(courseId)

        return res.status(204).send()

    } catch (err) {
        return res.status(400).send({ error: err.message })
    }
})

export default router