// User.js
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
mongoose.model('Vendor', UserSchema);
module.exports = mongoose.model('Vendor');
