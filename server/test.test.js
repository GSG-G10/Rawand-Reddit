const request = require('supertest');
const app = require('../server/app');

test('test main route /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    // eslint-disable-next-line no-unused-vars
    .end((err, res) => {
      if (err) return done(err);
      return done();
    });
});

test('test post route /', (done) => {
    request(app)
      .get('/post')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test main route /', (done) => {
    request(app)
      .post('/post-data')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  
  test('test post route /', (done) => {
    request(app)
      .get('/sign-in')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test post route /', (done) => {
    request(app)
      .post('/sign-in')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('test post route /', (done) => {
    request(app)
      .get('/sign-up')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test post route /', (done) => {
    request(app)
      .post('/sign-up')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });


  test('test post route /', (done) => {
    request(app)
      .get('/form-add')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test checkUser route /', (done) => {
    request(app)
      .get('/check-user')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test logout route /', (done) => {
    request(app)
      .get('/logout')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  test('test delete route /', (done) => {
    request(app)
      .get('/delete')
      .expect(200)
      .expect('Content-Type', /html/)
      // eslint-disable-next-line no-unused-vars
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  