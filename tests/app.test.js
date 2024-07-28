const app = require('./app');

describe('App', () => {
  it('returns "Hello World" for the single endpoint', (done) => {
    const request = require('supertest')(app);
    request
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/plain/)
      .expect('Hello World')
      .end(done);
  });
});