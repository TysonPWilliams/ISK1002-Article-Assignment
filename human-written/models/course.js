import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
    }
})

const Course = model('Course', courseSchema)

export default Course