const asyncHandler = require('express-async-handler');
const User = require('../models/authModel');
const bcrypt = require('bcryptjs');

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });
  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }
  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
});

module.exports = { registerUser };
