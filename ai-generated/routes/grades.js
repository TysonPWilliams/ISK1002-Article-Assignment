const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');
const Enrollment = require('../models/Enrollment');

// Get all grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find().populate({
      path: 'enrollment',
      populate: ['student', 'course']
    });
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single grade
router.get('/:id', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id).populate({
      path: 'enrollment',
      populate: ['student', 'course']
    });
    if (!grade) return res.status(404).json({ error: 'Grade not found' });
    res.json(grade);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a grade
router.post('/', async (req, res) => {
  try {
    const { enrollment, grade } = req.body;
    // Optionally, check if enrollment exists
    const enrollmentExists = await Enrollment.findById(enrollment);
    if (!enrollmentExists) {
      return res.status(400).json({ error: 'Invalid enrollment ID' });
    }
    const newGrade = new Grade({ enrollment, grade });
    await newGrade.save();
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a grade
router.put('/:id', async (req, res) => {
  try {
    const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!grade) return res.status(404).json({ error: 'Grade not found' });
    res.json(grade);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a grade
router.delete('/:id', async (req, res) => {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);
    if (!grade) return res.status(404).json({ error: 'Grade not found' });
    res.json({ message: 'Grade deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 