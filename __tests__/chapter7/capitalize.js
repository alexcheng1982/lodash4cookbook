const capitalize = require('lodash/capitalize');

describe('capitalize', () => {
  it('should capitalize the first character', () => {
    expect(capitalize('hello')).toEqual('Hello');
    expect(capitalize('helloWorld')).toEqual('Helloworld');
  });
});