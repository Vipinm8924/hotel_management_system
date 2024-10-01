const mongoose = require('mongoose');

// Define the MongoDb connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'
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