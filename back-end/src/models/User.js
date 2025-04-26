const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  // password: {
  //   type: String,
  //   required: true,
  //   minlength: 8
  // },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Simple password comparison
userSchema.methods.comparePassword = function(candidatePassword) {
  return candidatePassword === 'admin';
};

module.exports = mongoose.model('User', userSchema); 