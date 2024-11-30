const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Simulated user database
const users = [{ id: 1, email: "user@test.com", password: bcrypt.hashSync("password", 10) }];

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Health check
app.get('/health', (req, res) => res.sendStatus(200));

// Start server
app.listen(3001, () => console.log('Auth service running on port 3001'));
