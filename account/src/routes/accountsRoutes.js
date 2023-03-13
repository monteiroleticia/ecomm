import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';

const router = express.Router();

const authenticateLocal = passport.authenticate('local', { session: false });
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .post('/api/accounts/login', authenticateLocal, AccountController.accountLogin)
  .get('/api/accounts/logout', authenticateBearer, AccountController.accountLogout)
  .get('/api/accounts', authenticateBearer, AccountController.listAccounts)
  .post('/api/accounts', AccountController.addAccount)
  .get('/api/accounts/:id', AccountController.fetchAccountById)
  .put('/api/accounts/:id', authenticateBearer, AccountController.updateAccount)
  .delete('/api/accounts/:id', authenticateBearer, AccountController.deleteAccount);
export default router;
