import express from 'express';
import passport from 'passport';
import OrderController from '../controllers/ordersController.js';

const router = express.Router();

const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .post('/api/orders', authenticateBearer, OrderController.submitOrder)
  .get('/api/orders', authenticateBearer, OrderController.listOrders)
  .patch('/api/orders/:id', authenticateBearer, OrderController.payOrder);

export default router;
