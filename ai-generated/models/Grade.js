const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
  enrollment: { type: mongoose.Schema.Types.ObjectId, ref: 'Enrollment', required: true },
  grade: { type: String, required: true }, // e.g., A, B, C, etc.
  dateAssigned: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grade', GradeSchema); 