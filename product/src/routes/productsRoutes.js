import express from 'express';
import ProductController from '../controllers/productsController.js';

const router = express.Router();

router
    .get('/api/products', ProductController.listProducts)
    .post('/api/admin/products', ProductController.addProduct)
    .get('/api/products/:id', ProductController.fetchProductById)
    .put('/api/admin/products/:id', ProductController.updateProduct)
    .delete('/api/admin/products/:id', ProductController.deleteProduct)

export default router;