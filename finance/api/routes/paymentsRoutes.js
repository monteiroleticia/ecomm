const { Router } = require('express')
const PaymentsController = require('../controllers/paymentsController.js')

const router = Router();

router
    .post('/api/admin/payments', PaymentsController.submitPayment)
    .get('/api/admin/payments/:id', PaymentsController.getPayment)
    .patch('/api/admin/payments/:id', PaymentsController.updateStatus)

module.exports = router;