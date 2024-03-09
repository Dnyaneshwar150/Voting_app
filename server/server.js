// Import required packages
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import colors from 'colors';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/User.routes.js';
import candidateRouter from './routes/Candidate.routes.js';

// Create express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Define port
const port = process.env.PORT || 8080;

// Connect to MongoDB
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

// Middleware
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/candidate', candidateRouter);

// Handle preflight requests
app.options('*', cors());

// Start server
app.listen(port, () => {
    console.log(`App running on port: ${port}`.bgCyan.white);
});
