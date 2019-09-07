require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Habit = require('../lib/models/Habit');

describe('test for routes for this god dam sack of sHIT that i wont ever finish', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
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

  // it('can get some habits', async() => {

  //   return request(app)
  //     .get('api/v1/habits')
  //     .then(res => {
  //       const habitJSON = JSON.parse(JSON.stringify(habit1));
  //     })
  // });

});
