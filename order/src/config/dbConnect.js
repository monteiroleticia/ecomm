import mongoose from 'mongoose'


mongoose.connect('mongodb://admin:secret@mongo:27017/ecomm-order?authSource=admin');

let db = mongoose.connection;

export default db;