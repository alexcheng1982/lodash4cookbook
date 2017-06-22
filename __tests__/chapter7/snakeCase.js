const snakeCase = require('lodash/snakeCase');

describe('snakeCase', () => {
  it('should generate snake case strings', () => {
    let result = snakeCase('this is an example');
    expect(result).toEqual('this_is_an_example');
  });
});