const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/index.js');
// eslint-disable-next-line no-unused-vars
const BearerStrategy = require('./helpers/auth.js');

const app = express();
app.use(express.json());
routes(app);

dotenv.config();

module.exports = app;
