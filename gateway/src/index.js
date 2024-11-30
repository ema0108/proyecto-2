const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Routes for microservices
app.use('/auth', (req, res) => {
    axios({
        method: req.method,
        url: `http://localhost:3001${req.url}`,
        data: req.body,
    }).then(response => res.json(response.data))
      .catch(err => res.status(err.response?.status || 500).send(err.response?.data || 'Error'));
});

app.use('/students', (req, res) => {
    axios({
        method: req.method,
        url: `http://localhost:3002${req.url}`,
        data: req.body,
    }).then(response => res.json(response.data))
      .catch(err => res.status(err.response?.status || 500).send(err.response?.data || 'Error'));
});

// Healthcheck
app.get('/health', (req, res) => {
    res.json({ gateway: "running", services: { auth: true, students: true } });
});

// Start server
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
