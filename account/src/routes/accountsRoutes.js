import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';

const router = express.Router();
const authenticateLocal = passport.authenticate('local', { session: false });

router
  .get('/api/admin/accounts', AccountController.listAccounts)
  .post('/api/admin/accounts', AccountController.addAccount)
  .get('/api/accounts/:id', AccountController.fetchAccountById)
  .put('/api/admin/accounts/:id', AccountController.updateAccount)
  .delete('/api/admin/accounts/:id', AccountController.deleteAccount)
  .post('/api/accounts/login', authenticateLocal, AccountController.accountLogin);

export default router;
