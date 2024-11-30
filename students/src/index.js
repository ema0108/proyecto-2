const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3002, () => console.log('Students service running on port 3002'));
