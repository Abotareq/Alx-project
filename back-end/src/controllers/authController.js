const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123', // In production, use a strong password
  email: 'admin@example.com'
};

// Generate JWT Token
const generateToken = (userId, isAdmin = false) => {
  return jwt.sign({ id: userId, isAdmin }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d'
  });
};

// Admin Login Controller
exports.adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check admin credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const token = generateToken('admin-id', true);
      
      return res.json({
        message: 'Admin login successful',
        token,
        user: {
          id: 'admin-id',
          username: ADMIN_CREDENTIALS.username,
          email: ADMIN_CREDENTIALS.email,
          isAdmin: true
        }
      });
    }

    res.status(401).json({ message: 'Invalid admin credentials' });
  } catch (error) {
    res.status(500).json({ message: 'Error in admin login', error: error.message });
  }
};

// Signup Controller
exports.signup = async (req, res) => {
  try {
    const { username, email } = req.body;
    console.log('Signup attempt for email:', email);

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      console.log('User already exists:', existingUser.email);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = new User({
      username,
      email,
      // password: 'admin',
      isAdmin: false
    });

    await user.save();
    console.log('User created successfully:', email);

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '30d'
    });

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Signin Controller
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Signin attempt for email:', email);

    // Find user by email
    const user = await User.findOne({ email });
    console.log('User found:', !!user);
    
    if (!user) {
      console.log('No user found with email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = password === 'admin';
    console.log('Password match:', isMatch);
    
    if (!isMatch) {
      console.log('Password mismatch for user:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'your-secret-key', {
      expiresIn: '30d'
    });

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ message: 'Error signing in', error: error.message });
  }
}; 