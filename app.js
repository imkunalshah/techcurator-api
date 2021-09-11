const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const connectDB = require('./config/database');

//load env vars
// dotenv.config({path:'./.env'});

//connectDB
connectDB();

//routes
const questions = require("./api/questions/questions.router");

const app = express();

// body-parser

app.use(express.json());

//mount routes
app.get('/',(req,res, next) => {
    res.redirect(307,'/api/v1/techCurators/getQuestions');
});
app.use('/api/v1/techCurators',questions);

//Dev logging middleware

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled promise rejections

process.on('unhandledRejection',(err,promise) =>{
    console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(()=> process.exit(1));
});
