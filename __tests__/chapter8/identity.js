const identity = require('lodash/identity');

describe('identity', () => {
  it('should return the first argument', () => {
    expect(identity(1)).toEqual(1);
  });
});