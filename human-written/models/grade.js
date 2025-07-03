import { Schema, model } from "mongoose";

const gradeSchema = new Schema({
    enrollmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: true
    },
    gradeValue: {
        type: String,
        enum:
        {
            values: ['A', 'B', 'C', 'D', 'E', 'F'],
            message: "The grade value must be either A, B, C, D, E or F"
        },
        required: true
    },
    gradeDate: {
        type: String,
        match: [
            /^\d{2}-\d{2}-\d{4}$/,
            'Enrollment date must be in DD-MM-YYYY format'
        ],
        required: true
    }
})

const Grade = model('Grade', gradeSchema);

export default Grade;