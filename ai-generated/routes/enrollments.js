const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');

// Get all enrollments
router.get('/', async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('student').populate('course');
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single enrollment
router.get('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id).populate('student').populate('course');
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create an enrollment
router.post('/', async (req, res) => {
  try {
    const { student, course } = req.body;
    // Optionally, check if student and course exist
    const studentExists = await Student.findById(student);
    const courseExists = await Course.findById(course);
    if (!studentExists || !courseExists) {
      return res.status(400).json({ error: 'Invalid student or course ID' });
    }
    const enrollment = new Enrollment({ student, course });
    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update an enrollment
router.put('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.json(enrollment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete an enrollment
router.delete('/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) return res.status(404).json({ error: 'Enrollment not found' });
    res.json({ message: 'Enrollment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 