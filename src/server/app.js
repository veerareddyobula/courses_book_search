const express = require('express');
const services = require('./service/index.js');

const app = express();

app.use('/api/find/:query/:size', services.findApiService);
app.use('/api/queries/all', services.queryApiService);
app.use('*', services.default);

module.exports = app;
