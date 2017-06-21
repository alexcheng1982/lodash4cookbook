const defaultsDeep = require('lodash/defaultsDeep');

describe('defaultsDeep', () => {
  it('should assign default properties recursively', () => {
    let result = defaultsDeep({a: {b: 1}}, {a: {b: 2, c: 2}});
    expect(result).toEqual({a: {b: 1, c: 2}});
  });
});