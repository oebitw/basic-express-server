'use strict';

const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.server);

describe('Server Test', () => {
  it('invalid routes', async () => {
    const res = await request.get('/foo');
    expect(res.status).toEqual(404);
  });

  it('valid routes', async () => {
    const res = await request.get('/');
    expect(res.status).toEqual(200);
  });

});