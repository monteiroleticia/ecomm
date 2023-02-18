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

}

export default OrderController 