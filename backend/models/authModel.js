const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  position: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
