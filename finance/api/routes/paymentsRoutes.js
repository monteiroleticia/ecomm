const { Router } = require('express')
const PaymentsController = require('../controllers/paymentsController.js')

const router = Router();

router
    .post('/payments', PaymentsController.submitPayment)

module.exports = router;