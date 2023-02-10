const express = require('express')
const routes = require('./routes/index.js.js')

const app = express();
app.use(express.json())
routes(app);


module.exports = apps