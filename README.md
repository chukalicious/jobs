# Job Postings Backend

## Description

This is the backend setup for a Jobs Postings project, providing RESTful API endpoints for job postings and user authentication. It uses Express, MongoDB, and Mongoose to manage data and provide a secure API.

## Author

Katiuska

## License

MIT

## Installation

To install the dependencies, run:

```bash
npm install
```

## Scripts

- **start**: Start the server using Node.
- **server**: Start the server using Nodemon for development.

```json
"scripts": {
  "start": "node backend/server.js",
  "server": "nodemon backend/server.js"
}
```

## Dependencies

- `bcryptjs`: ^2.4.3
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `express-async-handler`: ^1.2.0
- `jsonwebtoken`: ^9.0.2
- `mongodb`: ^6.6.1
- `mongoose`: ^8.3.4
- `nodemon`: ^3.1.0

## Server Configuration

The server is configured in `server.js` and connects to the MongoDB database. It also sets up middleware for JSON parsing, URL encoding, and CORS handling.

```javascript
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
app.use(cors({ credentials: true }));

app.use('/api/jobs', jobsRoute);
app.use('/api/users', authRoute);
app.use('/api/auth', authRoute);
app.use('/api/login', authRoute);

app.get('/', (req, res) => {
  res.send({ message: `Api is up 😊` });
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
```

## Endpoints

### Job Routes

#### Get All Jobs

**GET** `/api/jobs`

Returns a list of all job postings.

#### Get Job By ID

**GET** `/api/jobs/:id`

Returns a specific job posting by ID.

#### Create Job

**POST** `/api/jobs`

Creates a new job posting. Requires title, company, location, salary, and description.

#### Update Job

**PUT** `/api/jobs/:id`

Updates a specific job posting by ID. Requires title, company, location, salary, and description.

#### Delete Job

**DELETE** `/api/jobs/:id`

Deletes a specific job posting by ID.

### User Authentication Routes

#### Get All Users

**GET** `/api/users`

Returns a list of all users.

#### Register User

**POST** `/api/users/register`

Registers a new user. Requires name, email, and password.

#### Login User

**POST** `/api/users/login`

Logs in a user. Requires email and password.

## Requirements

- Ensure MongoDB is running and accessible.
- Create a `.env` file with the necessary environment variables (e.g., PORT, JWT_SECRET, MONGO_URI).

## Example Environment Variables

```env
PORT=8000
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongo_uri
```
