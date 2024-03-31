const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./views/userRoutes');
const orderRoutes = require('./views/orderRoutes');

const app = express();
dotenv.config();
const { PORT, DB_USER, DB_PASSWORD, SECRET_KEY } = process.env;
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.hlq59cn.mongodb.net/?retryWrites=true&w=majority`;

// MongoDB Connection
mongoose.connect(dbURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

// Routes
app.use('/', userRoutes);
app.use('/', orderRoutes);

// Start server
app.listen(PORT || 3006, () => {
  console.log(`Server is running on port ${PORT}`);
});
