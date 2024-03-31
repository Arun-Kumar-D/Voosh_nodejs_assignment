const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/add-user', userController.registerUser);
router.post('/login-user', userController.loginUser);
router.post('/add-order', userController.addOrder);
router.get('/get-order', userController.getUserOrders);

module.exports = router;


