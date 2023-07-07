const express = require('express');
const morgan = require('morgan');
const apostas = require('./src/routes/apostas.router');
require('./src/models/connection')

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/apostas', apostas)

module.exports = app;