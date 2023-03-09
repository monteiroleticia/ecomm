const { describe, it } = require('@jest/globals');
const request = require('supertest');
const app = require('../api/app.js');

let id;
describe('POST /api/admin/payments', () => {
  it('should submit a payment', async () => {
    const response = await request(app)
      .post('/api/admin/payments')
      .send({
        amount: 6300,
        cardholder: 'Aparecida Ribeiro',
        cardNumber: '5468035026113019',
        expDate: '2024-08',
        cvv: '518',
      })
      .expect('content-type', /json/)
      .expect(201);

    id = response.body.id;
  });
});

describe('GET /api/admin/payments/:id', () => {
  it('should return a payment found by its id', async () => {
    await request(app)
      .get(`/api/admin/payments/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /api/admin/payments/:id', () => {
  it('should update a payment status', async () => {
    await request(app)
      .patch(`/api/admin/payments/${id}`)
      .send({ status: 'CANCELADO' })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });

  it('shouldnt confirm a cancelled payment', async () => {
    await request(app)
      .patch(`/api/admin/payments/${id}`)
      .send({ status: 'CONFIRMADO' })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(400);
  });
});
