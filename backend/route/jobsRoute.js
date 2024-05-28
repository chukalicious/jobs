const express = require('express');
const router = express.Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
} = require('../controllers/jobsController');

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJobById).put(updateJob);

module.exports = router;
