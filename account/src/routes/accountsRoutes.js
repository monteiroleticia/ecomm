import express from 'express';
import AccountController from '../controllers/accountsController.js';

const router = express.Router();

router
    .get('/api/admin/accounts', AccountController.listAccounts)
    .post('/api/admin/accounts', AccountController.addAccount)
    .get('/api/admin/accounts/:id', AccountController.fetchAccountById)
    .put('/api/admin/accounts/:id', AccountController.updateAccount)
    .delete('/api/admin/accounts/:id', AccountController.deleteAccount)

export default router;