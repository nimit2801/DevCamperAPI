'use strict'

// Includes
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/DB');
// const logger = require('./middleware/logger');

// Loads env vars
dotenv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

// Route Files
const bootcamps = require('./routes/bootcamps');
const { connect } = require('./routes/bootcamps');

const app = express();

// Body Parser
app.use(express.json())

// Dev loggin environment
//app.use(logger);

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});


// Handle unhandledRejection promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close the server
    server.close(() => {
        console.log('server closed');
        process.exit(1);
    });
});