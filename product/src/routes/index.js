import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';
import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require('../../swagger/product.json');

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));
  app.use(
    express.json(),
    categories,
    products,
  );
};

export default routes;
