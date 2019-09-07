require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
});

it('can POST to create new habit', () => {
  return request(app)
    .post('/api/v1/habits')
    .send({ name: 'New Jon', description: 'play hard, party hard' })
    .then(res => {
      expect(res.body).toEqual({
        _id: expect.any(String),
        name: 'New Jon',
        description: 'play hard, party hard',
        __v: 0,
      });
    });
});
