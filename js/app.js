// app.js
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./UserController');
app.use('/user', UserController);

module.exports = app;