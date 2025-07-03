import { connect, disconnect } from "./db.js";
import mongoose from "mongoose";
import Student from "./models/student.js";
import Teacher from "./models/teacher.js";
import Course from "./models/course.js";
import Enrollment from "./models/enrollment.js";
import Grade from "./models/grade.js";

await connect();
await mongoose.connection.dropDatabase();
console.log("Database dropped successfully.")

const students = [
    {
        firstName: "Tyson",
        lastName: "Williams",
        email: "tysonwilliams@example.com",
        dateOfBirth: "01-01-1995",
        enrollmentDate: "24-10-2024"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@example.com",
        dateOfBirth: "02-02-1996",
        enrollmentDate: "24-10-2024"
    }
]

const s = await Student.insertMany(students)
console.log("Students seeded successfully.")

const teachers = [
    {
        firstName: "John",
        lastName: "Smith",
        email: "johnsmith@example.com",
        department: "Computer Science"
    }
]

const t = await Teacher.insertMany(teachers)
console.log("Teachers seeded successfully.")

const courses = [
    {
        courseName: "Diploma of Web Developement",
        courseCode: "WEB101",
        teacherId: t[0]._id
    }
]

const c = await Course.insertMany(courses)
console.log("Courses seeded successfully.")

const enrollments = [
    {
        studentId: s[0]._id,
        courseId: c[0]._id,
        enrollmentDate: "24-10-2024",
        status: "active"
    }
]

const e =await Enrollment.insertMany(enrollments);
console.log("Enrollments seeded successfully.");

const grades = [
    {
        enrollmentId: e[0]._id,
        gradeValue: "A",
        gradeDate: "12-12-2024"
    }
]

const g = await Grade.insertMany(grades);
console.log("Grades seeded successfully.");

await disconnect();


