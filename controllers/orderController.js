const Order = require('../models/order');

exports.addOrder = async (req, res) => {
  try {
    const { userId, subTotal, phoneNumber } = req.body;
    const order = new Order({ userId, subTotal, phoneNumber });
    await order.save();
    res.status(201).json({ message: 'Order added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const userId = req.query.userId;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
