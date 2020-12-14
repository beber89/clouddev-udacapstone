import app from './app';
import chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Feed API', () => {
  it('should return 5 objects ', () => {
    return chai.request(app).get('/api/v0/feed/')
      .then(res => {
        expect(res.body.count).to.eql(5);
      })
  });
  it('should return object with caption "here" ', () => {
    return chai.request(app).get('/api/v0/feed/2')
      .then(res => {
        expect(res.body.caption).to.eql("here");
      })
  });
});