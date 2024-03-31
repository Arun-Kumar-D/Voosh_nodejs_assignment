const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  subTotal: Number,
  phoneNumber: Number
});

module.exports = mongoose.model('Order', orderSchema);
