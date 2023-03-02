import express from 'express';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

router
  .post('/api/orders', OrderController.submitOrder)
  .get('/api/orders', OrderController.listOrders)
  .patch('/api/orders/:id', OrderController.payOrder);

export default router;
