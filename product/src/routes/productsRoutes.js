import express from 'express';
import passport from 'passport';
import ProductController from '../controllers/productsController.js';

const router = express.Router();

const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/api/products', ProductController.listProducts)
  .post('/api/admin/products', authenticateBearer, ProductController.addProduct)
  .get('/api/products/:id', ProductController.fetchProductById)
  .put('/api/admin/products/:id', authenticateBearer, ProductController.updateProduct)
  .delete('/api/admin/products/:id', authenticateBearer, ProductController.deleteProduct);

export default router;
