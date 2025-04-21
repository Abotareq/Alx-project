# Database Schema Documentation

## Collections

### 1. Users Collection
```javascript
{
  _id: ObjectId,  // MongoDB automatically generates this
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

### 2. Sessions Collection
```javascript
{
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true
  },
  deviceInfo: {
    type: String
  },
  ipAddress: {
    type: String
  },
  lastActivity: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### 3. Password Reset Tokens Collection
```javascript
{
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  used: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

### 4. Login Attempts Collection
```javascript
{
  _id: ObjectId,
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  email: {
    type: String,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}
```

## Indexes

### Users Collection Indexes
```javascript
db.users.createIndex({ "email": 1 }, { unique: true })
db.users.createIndex({ "username": 1 }, { unique: true })
db.users.createIndex({ "createdAt": 1 })
```

### Sessions Collection Indexes
```javascript
db.sessions.createIndex({ "userId": 1 })
db.sessions.createIndex({ "token": 1 }, { unique: true })
db.sessions.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })
```

### Password Reset Tokens Collection Indexes
```javascript
db.passwordResetTokens.createIndex({ "userId": 1 })
db.passwordResetTokens.createIndex({ "token": 1 }, { unique: true })
db.passwordResetTokens.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })
```

### Login Attempts Collection Indexes
```javascript
db.loginAttempts.createIndex({ "userId": 1 })
db.loginAttempts.createIndex({ "email": 1 })
db.loginAttempts.createIndex({ "ipAddress": 1 })
db.loginAttempts.createIndex({ "timestamp": 1 })
```

## Setup Commands

To create the collections and indexes, run these commands in MongoDB shell:

```javascript
// Create collections
db.createCollection("users")
db.createCollection("sessions")
db.createCollection("passwordResetTokens")
db.createCollection("loginAttempts")

// Create indexes
// Users
db.users.createIndex({ "email": 1 }, { unique: true })
db.users.createIndex({ "username": 1 }, { unique: true })
db.users.createIndex({ "createdAt": 1 })

// Sessions
db.sessions.createIndex({ "userId": 1 })
db.sessions.createIndex({ "token": 1 }, { unique: true })
db.sessions.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })

// Password Reset Tokens
db.passwordResetTokens.createIndex({ "userId": 1 })
db.passwordResetTokens.createIndex({ "token": 1 }, { unique: true })
db.passwordResetTokens.createIndex({ "expiresAt": 1 }, { expireAfterSeconds: 0 })

// Login Attempts
db.loginAttempts.createIndex({ "userId": 1 })
db.loginAttempts.createIndex({ "email": 1 })
db.loginAttempts.createIndex({ "ipAddress": 1 })
db.loginAttempts.createIndex({ "timestamp": 1 })
```

## Notes

1. All collections use MongoDB's automatic `_id` field
2. Timestamps are automatically managed where specified
3. Indexes with `expireAfterSeconds: 0` will automatically delete expired documents
4. Unique indexes ensure data integrity
5. References between collections use MongoDB's ObjectId type 