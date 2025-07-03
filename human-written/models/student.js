import { Schema, model } from "mongoose";


const studentSchema = new Schema({
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
    dateOfBirth: {
        type: String,
        required: true,
        match: [
            /^\d{2}-\d{2}-\d{4}$/,
            'Date of birth must be in DD-MM-YYYY format'
        ]
    },
    enrollmentDate: {
        type: String,
        required: true,
        match: [
            /^\d{2}-\d{2}-\d{4}$/,
            'Enrollment date must be in DD-MM-YYYY format'
        ]
    }
})

const Student = model('Student', studentSchema)

export default Student;