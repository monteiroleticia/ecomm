import Order from '../models/Order.js';

class OrderController {
  static submitOrder = (req, res) => {
    const newOrder = { ...req.body, status: 'REALIZADO', orderDate: Date() };
    const order = new Order(newOrder);

    order.save((err, createdOrder) => {
      if (err) {
        res.status(500).json('Não foi possível completar seu pedido');
      } else {
        res.status(201).send(createdOrder.toJSON());
      }
    });
  };

  static listOrders = (req, res) => {
    Order.find((err, orders) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(orders);
    });
  };

  static payOrder = (req, res) => {
    const { id } = req.params;
    const { paymentId } = req.body;

    Order.findByIdAndUpdate(id, { $set: { status: 'PAGO', paymentId } }, (err) => {
      if (!err) {
        res.status(200).send({ message: 'Pagamento realizado' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default OrderController;
