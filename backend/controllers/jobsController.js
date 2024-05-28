const asyncHandler = require('express-async-handler');
const Jobs = require('../models/jobsModel');

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Jobs.find({});
  res.json(jobs);
});

module.exports = { getJobs };
