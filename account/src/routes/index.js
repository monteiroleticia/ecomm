import express from 'express';
import accounts from './accountsRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: 'usuarios'});
    });

app.use(
    express.json(),
    accounts
    )
}

export default routes;