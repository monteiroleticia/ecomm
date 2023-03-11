import express from 'express';
import dotenv from 'dotenv';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
// eslint-disable-next-line no-unused-vars
import LocalStrategy from './helpers/auth.js';

db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
  console.log('conexão com o banco feita com sucesso');
});

dotenv.config();

const app = express();
app.use(express.json());
routes(app);

export default app;
