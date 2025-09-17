const express = require('express');
const connectdb = require('./config/db');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Connect to MongoDB
    
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;