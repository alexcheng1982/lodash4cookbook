const startCase = require('lodash/startCase');

describe('startCase', () => {
  it('should generate start case strings', () => {
    let result = startCase('this is an example');
    expect(result).toEqual('This Is An Example');
  });
});