import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      match: /^[a-zA-Z][a-zA-Z0-9.,$; ]+$/,
    },
    description: { type: String },
    slug: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9-]+$/,
    },
    price: {
      type: Number,
      min: 0,
    },
    quantity: {
      type: Number,
      min: 0,
      max: 10000,
    },
    category: { type: Array },
  },
);

const Products = mongoose.model('products', productSchema);

export default Products;
