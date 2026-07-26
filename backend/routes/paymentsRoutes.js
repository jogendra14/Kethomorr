const express = require('express');
const { verify } = require('jsonwebtoken');
const {createOrder, verifyPayment} = require('../controller/paymentController.js');

const router = express.Router();

router.post("/order", createOrder);
router.post("/verify", verifyPayment);

module.exports = router;