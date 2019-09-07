const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  habit: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  }
}, { 
  timestamps: true
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
