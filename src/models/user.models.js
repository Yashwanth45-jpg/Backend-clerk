const mongoose = require('mongoose');

// Define the structure of the User document
const userSchema = new mongoose.Schema({
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    // You can add any other fields you want to store here
    createdAt: { type: Date, default: Date.now }
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

// Export the model so other files can use it
module.exports = User;