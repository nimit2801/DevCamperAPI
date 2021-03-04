'use strict'

// Includes
const express = require('express');
const colors = require('colors');
const app = express();
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const logger = require('./middleware/logger');

// Loads env vars
dotenv.config({ path: './config/config.env' });

//app.use(logger);

const PORT = process.env.PORT || 5000;

app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow);
});