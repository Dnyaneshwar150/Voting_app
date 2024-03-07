import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import colors from 'colors'
import cors from 'cors'
import mongoose from 'mongoose'
// const mongoose = require('mongoose');


// import connectDB from './db/index.js'
import userRouter from './routes/User.routes.js'
import candidateRouter from './routes/Candidate.routes.js'



const app = express()
dotenv.config()
const port = process.env.PORT || 8080


const mongoURL = process.env.MONGO_URI;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


//Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//Routes

app.use('/api/v1/users',userRouter)
app.use('/api/v1/candidate',candidateRouter)

app.listen(port,() => {
      console.log(`App running on port: ${port}`.bgCyan.white);
})