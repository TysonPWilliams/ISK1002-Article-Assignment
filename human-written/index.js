import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { connect } from './db.js';
import studentRoutes from './routes/student_routes.js'
import teacherRoutes from './routes/teacher_routes.js'
import courseRoutes from './routes/course_routes.js'
import enrollmentRoutes from './routes/enrollment_routes.js'
import gradeRoutes from './routes/grade_routes.js'


const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware

// Enable All CORS requests
app.use(cors());

// Set default headers
app.use(helmet())

app.use(express.json())

// Routes
app.use(studentRoutes)
app.use(teacherRoutes)
app.use(courseRoutes)
app.use(enrollmentRoutes)
app.use(gradeRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    res.status(statusCode).send(message);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connect()
});