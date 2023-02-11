const db = require('../models');

 class PaymentsController {

    static async submitPayment(req, res) {
      const payment = {...req.body, status: 'CRIADO'}
      try {
        const {id, status} = await db.Payments.create(payment);
        return res.status(201).json({id, status});
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async getPayment(req, res) {
      const {id} = req.params;
      try {
        const payment = await db.Payments.findOne({
          where: { id: Number(id) },
          attributes: ['id', 'amount', 'cardholder', 'cardNumber', 'expDate', 'status', 'createdAt', 'updatedAt']
        })
        return res.status(200).json(payment)
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }
 }

 module.exports = PaymentsController;