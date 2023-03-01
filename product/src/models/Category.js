import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        nome: {
                type: String,  
                required: true,
                minLength: 3, 
                match: /^[A-Za-z][A-Za-z0-9 -]*$/ 
        },
        status: {
            type: String,
            required: true,
            enum: ['ATIVA', 'INATIVA']
        }
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;