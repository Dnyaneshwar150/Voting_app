import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import colors from "colors"

const connectDB = async () => {
      try {
           const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
           console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`.bgMagenta.white)
      } catch (error) {
            console.log(`MongoDB connection error ${error}`.bgRed.white);
            process.exit(1)
      }
}

export default connectDB

const mongoose = require('mongoose');
require('dotenv').config();

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

module.exports = db;
