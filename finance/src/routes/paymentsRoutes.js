const { Router } = require('express');
const passport = require('passport');
const PaymentsController = require('../controllers/paymentsController.js');

const authenticateBearer = passport.authenticate('bearer', { session: false });

const router = Router();

router
  .post('/api/payments', authenticateBearer, PaymentsController.submitPayment)
  .get('/api/payments/:id', authenticateBearer, PaymentsController.getPayment)
  .patch('/api/payments/:id', authenticateBearer, PaymentsController.updateStatus);

module.exports = router;
