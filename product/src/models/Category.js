import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        status: {type: String},
    }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;