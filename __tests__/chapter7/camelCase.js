const camelCase = require('lodash/camelCase');

describe('camelCase', () => {
  it('should generate camel case strings', () => {
    let result = camelCase('this is an example');
    expect(result).toEqual('thisIsAnExample');
  });
});