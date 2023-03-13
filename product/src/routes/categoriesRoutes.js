import express from 'express';
import passport from 'passport';
import CategoryController from '../controllers/categoriesController.js';

const router = express.Router();

const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/api/categories', CategoryController.listCategories)
  .post('/api/admin/categories', authenticateBearer, CategoryController.addCategory)
  .get('/api/categories/:id', CategoryController.fetchCategoryById)
  .put('/api/admin/categories/:id', authenticateBearer, CategoryController.updateCategory)
  .delete('/api/admin/categories/:id', authenticateBearer, CategoryController.deleteCategory)
  .patch('/api/admin/categories/:id', authenticateBearer, CategoryController.activateCategory);

export default router;
