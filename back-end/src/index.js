const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB Connection - Using specific IP with authentication
const mongoURI = 'mongodb+srv://panther221b:mohamed22@cluster0.wxx41gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  connectTimeoutMS: 10000,
  retryWrites: true,
  family: 4
};

console.log('Attempting to connect to MongoDB at IP: 172.16.239.107');
console.log('Connection URI:', mongoURI);

// Handle MongoDB connection events
mongoose.connection.on('connecting', () => {
  console.log('MongoDB: Connecting to database at 172.16.239.107...');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB: Connected successfully to database at 172.16.239.107');
  console.log('Database name:', mongoose.connection.name);
  console.log('Host:', mongoose.connection.host);
  console.log('Port:', mongoose.connection.port);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  console.error('Error name:', err.name);
  console.error('Error message:', err.message);
  console.error('Error code:', err.code);
  console.error('Error codeName:', err.codeName);
  if (err.name === 'MongooseServerSelectionError') {
    console.error('Troubleshooting tips:');
    console.error('1. Check if MongoDB is running on the target machine');
    console.error('2. Verify the IP address and port are correct');
    console.error('3. Check if MongoDB is configured to accept remote connections');
    console.error('4. Verify firewall settings');
    console.error('5. Check if authentication credentials are correct');
  }
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB: Disconnected from database at 172.16.239.107');
});

// Connect to MongoDB
mongoose.connect(mongoURI, options)
  .then(() => {
    console.log('MongoDB connection established successfully at 172.16.239.107');
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 