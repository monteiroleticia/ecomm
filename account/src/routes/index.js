import express from 'express';
import accounts from './accountsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/account.json'; assert {type: 'json'};

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve)
     .get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(
    express.json(),
    accounts
    )
}

export default routes;