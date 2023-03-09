import mongoose from 'mongoose';

mongoose.set('runValidators', true);

mongoose.connect('mongodb://admin:secret@mongo:27017/ecomm-product?authSource=admin');

const db = mongoose.connection;

export default db;
