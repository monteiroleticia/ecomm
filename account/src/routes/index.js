import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';
import accounts from './accountsRoutes.js';

const require = createRequire(import.meta.url);
const swaggerDocument = require('../../swagger/account.json');

const routes = (app) => {
  app.use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

  app.use(
    express.json(),
    accounts,
  );
};

export default routes;
