import express from 'express';
import AccountController from '../controllers/accountsController.js';

const router = express.Router();

router
    .get('/api/accounts', AccountController.listAccounts)
    .post('/api/admin/accounts', AccountController.addAccount)
    .get('/api/accounts/:id', AccountController.fetchAccountById)
    .put('/api/admin/accounts/:id', AccountController.updateAccount)
    .delete('/api/admin/accounts/:id', AccountController.deleteAccount)

export default router;