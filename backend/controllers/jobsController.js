const asyncHandler = require('express-async-handler');
const Jobs = require('../models/jobsModel');

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Jobs.find();
  if (jobs) {
    return res.status(200).json(jobs);
  }
  res.status(404).json({ message: 'No jobs found' });
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Jobs.findOne({ _id: req.params.id });
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

const updateJob = asyncHandler(async (req, res) => {
  const job = await Jobs.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  const { title, company, location, salary, description } = req.body;

  const updatedJob = await Jobs.findByIdAndUpdate(
    req.params.id,
    {
      title,
      company,
      location,
      salary,
      description,
    },
    { new: true }
  );

  if (!updatedJob) {
    res.status(400);
    throw new Error('Invalid job data');
  }
  res.status(201).json(updatedJob);
});

module.exports = { getJobs, getJobById, createJob, updateJob };
