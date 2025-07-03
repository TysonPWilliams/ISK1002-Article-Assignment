const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true }
});

module.exports = mongoose.model('Course', CourseSchema); 