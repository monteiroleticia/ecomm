const { describe, it } = require('@jest/globals');
const request = require('supertest');
const app = require('../src/app.js');

let id;
describe('POST /api/payments', () => {
  it('should submit a payment', async () => {
    const response = await request(app)
      .post('/api/payments')
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

describe('GET /api/payments/:id', () => {
  it('should return a payment found by its id', async () => {
    await request(app)
      .get(`/api/payments/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PATCH /api/payments/:id', () => {
  it('should update a payment status', async () => {
    await request(app)
      .patch(`/api/payments/${id}`)
      .send({ status: 'CANCELADO' })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });

  it('shouldnt confirm a cancelled payment', async () => {
    await request(app)
      .patch(`/api/payments/${id}`)
      .send({ status: 'CONFIRMADO' })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(400);
  });
});
