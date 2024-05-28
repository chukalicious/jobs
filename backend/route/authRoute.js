const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  //   getUserProfile,
  //   updateUserProfile,
  //   deleteUser,
} = require('../controllers/authController');

router.route('/').get(getAllUsers);
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
// router.route('/profile').get(getUserProfile);
// router.route('/profile/:id').put(updateUserProfile).delete(deleteUser);

module.exports = router;
