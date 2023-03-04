import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/orders', () => {
  it('should list all orders', async () => {
    await request(app)
      .get('/api/orders')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /api/orders', () => {
  it('should sub an order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        client: {
          name: 'Aparecida Silva',
          id: '27897509874857984',
        },
        deliveryAddress: {
          street: 'rua seis',
          number: '150',
          complement: '',
          zipCode: '08450000',
          city: 'santos',
          state: 'SP',
        },
        items: [],
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    id = response.body._id;
  });
});

describe('PATCH /api/orders', () => {
  it('should confirm a payment to an order', async () => {
    await request(app)
      .patch(`/api/orders/${id}`)
      .send({
        paymentId: '1',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});
