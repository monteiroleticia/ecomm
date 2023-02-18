import orders from '../models/Order.js';

class OrderController {

    static submitOrder = (req, res) => {
        let Order = new orders({...req.body, status: 'REALIZADO'});

        Order.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Não foi possível enviar seu pedido`})
            } else {
                res.status(201).set('Location', `/api/admin/orders/${order.id}`).json(order)
            }
        })
    }

}

export default OrderController 