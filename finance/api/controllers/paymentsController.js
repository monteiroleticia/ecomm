const db = require('../models');

 class PaymentsController {

    static async submitPayment(req, res) {
      const payment = {...req.body, status: 'CRIADO'}
      try {
        const {id, status} = await db.Payment.create(payment);
        return res.status(201).set('Location', `/payments/${id}`).json({id, status});
      } catch (error) {
        return res.status(500).json(error.message)
      }
    }

    static async getPayment(req, res) {
      const {id} = req.params;
      try {
        const payment = await db.Payment.findOne({
          where: {id: Number(id)},
          attributes: ['id', 'amount', 'cardholder', 'cardNumber', 'expDate', 'status', 'createdAt', 'updatedAt']
        })
        return res.status(200).json(payment)
      } catch (error) {
        return res.status(404).json(error.message)
      }
    }

    static async updateStatus(req, res) {
      const {id} = req.params; 
      try {
        const payment = await db.Payment.findOne( {where: {id: Number(id)}});
        if (payment.status === 'CRIADO'){
          await db.Payment.update(req.body, {where: {id: Number(id)}});
          const updatedPayment = await db.Payment.findOne( {where: {id: Number(id)}});
         return res.status(200).json(updatedPayment)
        } else {
          return res.status(400).json('Não é possível realizar essa operação')
        }
      } catch (error) {
        return res.status(500).json(error.message);
    }}
 }

 module.exports = PaymentsController;