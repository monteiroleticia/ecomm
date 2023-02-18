import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
    .post('/api/admin/orders', OrderController.submitOrder)

export default router;