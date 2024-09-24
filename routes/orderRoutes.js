const express = require('express');
const {
  addOrderItems,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addOrderItems); // Create a new order
router.get('/:id', protect, getOrderById); // Get order by ID
router.get('/', protect, admin, getOrders); // Get all orders (Admin only)
router.put('/:id/pay', protect, updateOrderToPaid); // Update order to paid
router.put('/:id/deliver', protect, admin, updateOrderToDelivered); // Update order to delivered

module.exports = router;
