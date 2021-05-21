'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.server);

describe('Validator Test', () => {
  it('server errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
    expect(response.query).toBeFalsy();
    expect(response.error).toBeDefined();
  });

  it('search query error', async () => {
    const response = await request.get('/person?name=omar');
    expect(response.body).toStrictEqual({name: 'omar'});
    expect(response.status).toEqual(200);
  });
});