const asyncHandler = require('express-async-handler');
const User = require('../models/authModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Please fill in all fields');
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('Invalid credentials');
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
      message: 'User logged in successfully!',
    });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

module.exports = { getAllUsers, registerUser, loginUser, getUserById };
