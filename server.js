const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true });

// User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Registration endpoint
app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).send('User already registered.');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({ email, password: hashedPassword });
    await user.save();

    res.send('Registration successful');
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('Invalid email or password.');
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send('Invalid email or password.');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'secretkey');
    res.json({ token });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
