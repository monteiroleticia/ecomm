import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
    {
        street: {type: String, required: true},
        number: {type: String, required: true},
        complement: {type: String},
        zipCode: {type: String, match: /^[0-9]{8}$/},
        city: {type: String, required: true},
        state: {
            type: String, 
            required: true,
            match: /^(\s*(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)?)$/
        }
    }
);

const orderSchema = new mongoose.Schema(
    {
        orderDate: {type: Date},
        client: {
            name: {
                type: String,
                required: true
            },
            id: {
                type: mongoose.Types.ObjectId,
                required: true
            }
        },
        deliveryAddress: {
            type: addressSchema,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        status: {type: String}
    }
);

const orders = mongoose.model('orders', orderSchema);
export default orders;