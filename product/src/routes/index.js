import express from 'express';
import categories from './categoriesRoutes.js';
import products from './productsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/product.json' assert {type: 'json'};

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve)
     .get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(
    express.json(),
    categories,
    products
    )
}

export default routes;