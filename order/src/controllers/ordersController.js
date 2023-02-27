import orders from '../models/Order.js';

class OrderController {

    static submitOrder = (req, res) => {
        const newOrder = {...req.body, status: "REALIZADO", orderDate: Date()};
        const order = new orders(newOrder)


        order.save((err, newOrder) => {
            if(err) {
                res.status(500).json('Não foi possível completar seu pedido')
            } else {
                res.status(201).send(newOrder.toJSON())
            }
        })
    }

    static listOrders = (req, res) => {
        orders.find((err, orders) => {
            res.status(200).json(orders)
        }) 
    }

    static payOrder = (req, res) => {
        const {id} = req.params;
        const {paymentId} = req.body;

        orders.findByIdAndUpdate(id, {$set: {status: "PAGO", paymentId: paymentId}}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Pagamento realizado'})
              } else {
                res.status(500).send({message: err.message})
              }
        })
    }
}

export default OrderController 