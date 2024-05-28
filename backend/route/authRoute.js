const express = require('express');
const router = express.Router();
const {
  registerUser,
  //   loginUser,
  //   getUserProfile,
  //   updateUserProfile,
  //   deleteUser,
} = require('../controllers/authController');

router.route('/register').post(registerUser);
// router.route('/login').post(loginUser);
// router.route('/profile').get(getUserProfile);
// router.route('/profile/:id').put(updateUserProfile).delete(deleteUser);

module.exports = router;
