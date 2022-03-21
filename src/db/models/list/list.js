const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskScheme = new Schema({
  fio: String,
  doctor: String,
  date: Date,
  complaint: String 
});

module.exports = Task = mongoose.model('tasks', taskScheme);



