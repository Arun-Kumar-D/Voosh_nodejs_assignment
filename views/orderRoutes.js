const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/add-order', orderController.addOrder);
router.get('/get-order', orderController.getOrder);

module.exports = router;
