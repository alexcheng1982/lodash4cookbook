const kebabCase = require('lodash/kebabCase');

describe('kebabCase', () => {
  it('should generate kebab case strings', () => {
    let result = kebabCase('this is an example');
    expect(result).toEqual('this-is-an-example');
  });
});