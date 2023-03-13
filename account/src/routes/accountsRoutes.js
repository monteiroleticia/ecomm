import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';

const router = express.Router();

const authenticateLocal = passport.authenticate('local', { session: false });
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/api/accounts', authenticateBearer, AccountController.listAccounts)
  .post('/api/accounts', AccountController.addAccount)
  .get('/api/accounts/:id', AccountController.fetchAccountById)
  .put('/api/accounts/:id', authenticateBearer, AccountController.updateAccount)
  .delete('/api/accounts/:id', authenticateBearer, AccountController.deleteAccount)
  .post('/api/accounts/login', authenticateLocal, AccountController.accountLogin)
  .post('/api/accounts/logout', authenticateBearer, AccountController.accountLogout);

export default router;
