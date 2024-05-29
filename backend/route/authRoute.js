const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  getUserById,
  //   getUserProfile,
  //   updateUserProfile,
  //   deleteUser,
} = require('../controllers/authController');

router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
// router.route('/profile').get(getUserProfile);
// router.route('/profile/:id').put(updateUserProfile).delete(deleteUser);

module.exports = router;
