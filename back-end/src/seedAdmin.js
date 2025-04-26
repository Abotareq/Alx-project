const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const adminUser = {
  username: 'superadmin',
  email: 'superadmin@admin.com',
  // password: 'admin',
  isAdmin: true
};

async function seedAdmin() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb+srv://panther221b:mohamed22@cluster0.wxx41gh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ 
      $or: [
        { email: adminUser.email },
        { username: adminUser.username }
      ]
    });

    if (existingAdmin) {
      console.log('Admin user already exists. Removing...');
      await User.deleteOne({ _id: existingAdmin._id });
      console.log('Existing admin removed');
    }

    // Create admin user
    console.log('Creating admin user...');
    const admin = new User({
      username: adminUser.username,
      email: adminUser.email,
      // password: 'admin',
      isAdmin: true
    });

    await admin.save();
    console.log('Admin user created successfully');
    console.log('Admin credentials:');
    console.log('Email:', adminUser.email);
    console.log('Password: admin');
    console.log('isAdmin:', admin.isAdmin);

    // Verify the user was saved
    const savedAdmin = await User.findOne({ email: adminUser.email });
    console.log('Verification - Found admin in database:', !!savedAdmin);
    if (savedAdmin) {
      console.log('Admin details from database:');
      console.log('Email:', savedAdmin.email);
      console.log('Username:', savedAdmin.username);
      console.log('isAdmin:', savedAdmin.isAdmin);
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    console.error('Error details:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    await mongoose.connection.close();
    process.exit(1);
  }
}

seedAdmin(); 