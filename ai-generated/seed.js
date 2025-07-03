require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const Course = require('./models/Course');
const Enrollment = require('./models/Enrollment');
const Grade = require('./models/Grade');

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clear existing data
  await Promise.all([
    Student.deleteMany({}),
    Teacher.deleteMany({}),
    Course.deleteMany({}),
    Enrollment.deleteMany({}),
    Grade.deleteMany({}),
  ]);

  // Create teachers
  const teachers = await Teacher.insertMany([
    { firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com' },
    { firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com' },
  ]);

  // Create students
  const students = await Student.insertMany([
    { firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com' },
    { firstName: 'Dana', lastName: 'White', email: 'dana.white@example.com' },
  ]);

  // Create courses
  const courses = await Course.insertMany([
    { name: 'Mathematics', code: 'MATH101', description: 'Basic Math', teacher: teachers[0]._id },
    { name: 'History', code: 'HIST101', description: 'World History', teacher: teachers[1]._id },
  ]);

  // Create enrollments
  const enrollments = await Enrollment.insertMany([
    { student: students[0]._id, course: courses[0]._id },
    { student: students[1]._id, course: courses[1]._id },
    { student: students[0]._id, course: courses[1]._id },
  ]);

  // Create grades
  await Grade.insertMany([
    { enrollment: enrollments[0]._id, grade: 'A' },
    { enrollment: enrollments[1]._id, grade: 'B' },
    { enrollment: enrollments[2]._id, grade: 'A-' },
  ]);

  console.log('Database seeded!');
  mongoose.disconnect();
}

seed().catch(err => {
  console.error(err);
  mongoose.disconnect();
}); 