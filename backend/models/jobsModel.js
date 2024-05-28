const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  company: {
    type: String,
    required: [true, 'Please provide a company name'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location'],
  },
  salary: {
    type: String,
    required: [true, 'Please provide a salary'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  email: {
    type: String,
    required: true,
  },
  postedOnDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Job', jobSchema);