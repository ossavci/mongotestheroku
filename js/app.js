// app.js
var express = require('express');
var app = express();
var db = require('./js/db');

var UserController = require('./js/UserController');
app.use('/js/user', UserController);

module.exports = app;
