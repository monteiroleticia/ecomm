import orders from '../models/Order.js';

class OrderController {

    static submitOrder = (req, res) => {
        let Order = new orders(req.body);

        Order.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            } else {
                res.status(201).send(order.toJSON())
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