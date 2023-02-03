import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {
                type: String,  
                required: true,
                minLength: 3, 
                match: /^[A-Za-z][A-Za-z0-9 -]*$/ 
        },
        status: {type: String}
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;