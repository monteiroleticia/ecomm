const db = require('../models');

class PaymentsController {
  static async submitPayment(req, res) {
    const payment = { ...req.body, status: 'CRIADO' };
    try {
      const { id, status } = await db.Payment.create(payment);
      const links = [
        {
          rel: 'self',
          method: 'GET',
          href: `http://localhost:3002/api/admin/payments/${id}`,
        },
        {
          rel: 'confirmation',
          method: 'PATCH',
          status: 'CONFIRMADO',
          href: `http://localhost:3002/api/admin/payments/${id}`,
        },
        {
          rel: 'cancellation',
          method: 'PATCH',
          status: 'CANCELADO',
          href: `http://localhost:3002/api/admin/payments/${id}`,
        }];
      return res.status(201).set('Location', `api/admin/payments/${id}`).json({ id, status, links });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getPayment(req, res) {
    const { id } = req.params;
    try {
      const payment = await db.Payment.findOne({
        where: { id: Number(id) },
        attributes: ['id', 'amount', 'cardholder', 'cardNumber', 'expDate', 'status', 'createdAt', 'updatedAt'],
      });
      return res.status(200).json(payment);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async updateStatus(req, res) {
    const { id } = req.params;
    const { status, description } = req.body;
    const links = [
      {
        rel: 'self',
        method: 'GET',
        href: `http://localhost:3002/api/admin/payments/${id}`,
      },
    ];
    try {
      const payment = await db.Payment.findOne({ where: { id: Number(id) } });
      if (payment.status === 'CRIADO' && status === 'CANCELADO') {
        await db.Payment.update(req.body, { where: { id: Number(id) } });
        const updatedPayment = await db.Payment.findOne({ where: { id: Number(id) } });
        return res.status(200).json({ updatedPayment, links });
      }
      if (payment.status === 'CRIADO' && status === 'CONFIRMADO') {
        db.sequelize.transaction(async (t) => {
          await db.Payment.update({ status }, { where: { id: Number(id) } }, { transaction: t });
          const invoice = await db.Invoices.create({
            description, paymentId: id,
          }, { transaction: t });
          const updatedPayment = await db.Payment.findOne({ where: { id: Number(id) } });
          return res.status(200).json({ updatedPayment, links, invoice });
        });
      } else {
        return res.status(400).json('Não é possível realizar essa operação');
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PaymentsController;
