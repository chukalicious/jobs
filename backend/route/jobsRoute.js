const express = require('express');
const router = express.Router();
const {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobsController');

router.route('/').get(getJobs).post(createJob);
router.route('/:id').get(getJobById).put(updateJob).delete(deleteJob);

module.exports = router;
