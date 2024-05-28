require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const connectDB = require('./config/db');
const jobsRoute = require('./route/jobsRoute');
const authRoute = require('./route/authRoute');

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: `http://localhost:${process.env.PORT}`,
    credentials: true,
  })
);

app.use('/api/jobs', jobsRoute);
app.use('/api/auth', authRoute);

app.get('/', (req, res) => {
  res.send({ message: `Api is up 😊` });
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
