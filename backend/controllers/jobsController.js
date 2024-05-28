const asyncHandler = require('express-async-handler');
const Jobs = require('../models/jobsModel');

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Jobs.find({});
  if (jobs) {
    return res.status(200).json(jobs);
  }
  res.status(404).json({ message: 'No jobs found' });
});

const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const job = await Jobs.findById({ id });
  if (job) {
    return res.status(200).json(job);
  }
  res.status(404).json({ message: 'Job not found' });
  throw new Error('Job not found');
});

const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, salary, description } = req.body;

  if (!title || !company || !location || !salary || !description) {
    res.status(400);
    throw new Error('Please provide all the required details');
  }
  const newPosting = await Jobs.create({
    title,
    company,
    location,
    salary,
    description,
  });
  if (!newPosting) {
    res.status(400);
    throw new Error('Invalid job data');
  }
  res.status(201).json(newPosting);
});

module.exports = { getJobs, getJobById, createJob };
