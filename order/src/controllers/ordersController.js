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
}

export default OrderController 