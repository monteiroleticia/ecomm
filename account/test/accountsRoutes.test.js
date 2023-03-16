import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/accounts', () => {
  it('should list all accounts', async () => {
    await request(app)
      .get('/api/accounts')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /api/accounts', () => {
  it('should add a new account', async () => {
    const response = await request(app)
      .post('/api/accounts')
      .send({
        name: 'Maria Santos',
        email: 'maria@email.com',
        password: 'Kk123#12',
        CPF: '55797103052',
        address: {
          street: 'rua seis',
          number: '150',
          complement: '',
          zipCode: '08450000',
          city: 'santos',
          state: 'SP',
        },
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    id = response.body._id;
  });
});

describe('GET /api/accounts/:id', () => {
  it('should return a account found by its id', async () => {
    await request(app)
      .get(`/api/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /api/accounts/:id', () => {
  it('should update a account', async () => {
    await request(app)
      .put(`/api/accounts/${id}`)
      .send({
        name: 'Maria dos Santos',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/accounts/:id', () => {
  it('should delete a account', async () => {
    await request(app)
      .delete(`/api/accounts/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
