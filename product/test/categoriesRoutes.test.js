import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/categories', () => {
  it('should list all categories', async () => {
    await request(app)
      .get('/api/categories')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /api/categories', () => {
  it('should add a new category', async () => {
    const response = await request(app)
      .post('/api/categories')
      .send({
        nome: 'PAPELARIA',
        status: 'ATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    id = response.body._id;
  });
});

describe('GET /api/categories/:id', () => {
  it('should return a category found by its id', async () => {
    await request(app)
      .get(`/api/categories/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /api/categories/:id', () => {
  it('should update a category', async () => {
    await request(app)
      .put(`/api/categories/${id}`)
      .send({
        nome: 'PAPELARIA',
        status: 'INATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/categories/:id', () => {
  it('should delete a category', async () => {
    await request(app)
      .delete(`/api/categories/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});

describe('PATCH /api/categories', () => {
  it('should activate a category', async () => {
    await request(app)
      .patch(`/api/categories/${id}`)
      .send({
        status: 'ATIVA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });

  it('shouldnt accept an invalid status', async () => {
    await request(app)
      .patch(`/api/categories/${id}`)
      .send({
        status: 'BOLINHO',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(500);
  });
});
