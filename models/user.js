const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  password: Number
});

module.exports = mongoose.model('User', userSchema);
