const defer = require('lodash/defer');

describe('defer', () => {
  it('should defer the execution', done => {
    let update = () => done();
    defer(update);
  });
});