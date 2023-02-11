const { Router } = require('express')
const PaymentsController = require('../controllers/paymentsController.js')

const router = Router();

router
    .post('/payments', PaymentsController.submitPayment)
    .get('/payments/:id', PaymentsController.getPayment)
    
module.exports = router;