const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Teacher', TeacherSchema); 