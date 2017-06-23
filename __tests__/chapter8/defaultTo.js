const defaultTo = require('lodash/defaultTo');

describe('defaultTo', () => {
  it('should return the default value', () => {
    expect(defaultTo(null, 'hello')).toEqual('hello');

    let getPort = () => null;
    let port = defaultTo(getPort(), 8080);
    expect(port).toEqual(8080);
  });
});