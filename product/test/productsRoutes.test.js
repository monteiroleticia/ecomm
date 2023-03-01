import { describe, it } from '@jest/globals';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/products', () => {
  it('should list all products', async () => {
    await request(app)
      .get('/api/products')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

let id;
describe('POST /api/admin/products', () => {
  it('should add a new product', async () => {
    const response = await request(app)
      .post('/api/admin/products')
      .send({
        name: 'Notebook Samsung',
        description: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6" FHD, W11 Cinza',
        slug: 'notebook-samsung',
        price: 3523.00,
        quantity: 1,
        category: 'INFORMÁTICA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(201);

    id = response.body._id;
  });
});

describe('GET /api/products/:id', () => {
  it('should return a product found by its id', async () => {
    await request(app)
      .get(`/api/products/${id}`)
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('PUT /api/admin/products', () => {
  it('should update a product', async () => {
    const response = await request(app)
      .put(`/api/admin/products/${id}`)
      .send({
        name: 'Notebook Samsung',
        description: 'Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6" FHD, W11 Cinza',
        slug: 'notebook-samsung',
        price: 3803.00,
        quantity: 5,
        category: 'INFORMÁTICA',
      })
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);
  });
});

describe('DELETE /api/products/:id', () => {
  it('should delete a product', async () => {
    await request(app)
      .delete(`/api/admin/products/${id}`)
      .set('Accept', 'application/json')
      .expect(204);
  });
});
