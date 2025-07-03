import { Schema, model } from "mongoose";

const enrollmentSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    enrollmentDate: {
        type: String,
        required: true,
        match: [
            /^\d{2}-\d{2}-\d{4}$/,
            'Enrollment date must be in DD-MM-YYYY format'
        ]
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'completed', 'dropped'],
            message: 'Status must be either "active", "completed", or "dropped".'
        },
        default: 'active',
        required: true
    }
});

const Enrollment = model('Enrollment', enrollmentSchema);

export default Enrollment;