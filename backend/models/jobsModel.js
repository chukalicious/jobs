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
  postedOnDate: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
    },
  },
});

module.exports = mongoose.model('Job', jobSchema);
