import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
    .post('/api/admin/orders', OrderController.submitOrder)
    .get('/api/admin/orders', OrderController.listOrders)

export default router;