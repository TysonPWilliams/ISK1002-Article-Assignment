import { Schema, model } from "mongoose";


const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
    },
    department: {
        type: String,
        required: true
    }
})

const Teacher = model('Teacher', teacherSchema)

export default Teacher;