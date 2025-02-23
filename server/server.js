const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { createUsersTable } = require('./models/userModel');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Ensure DB table exists
createUsersTable();

// Use routes
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});