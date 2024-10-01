const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDb connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL;
//const mongoURL = 'mongodb://localhost:27017/hotels'

//const mongoURL = process.env.MONGODB_URL;
//const mongoURL = 'mongodb+srv://Vipinm8924:Vipinm8924@hotels.b4mzh.mongodb.net'


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

//Define event listener for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

//Export databse connection

module.exports = db;