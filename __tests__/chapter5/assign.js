const assign = require('lodash/assign');

describe('assign', () => {
  it('should assign properties', () => {
    let source = {a: 1};
    let result = assign(source, {b: 2}, {c: 3});
    expect(result).toEqual({a: 1, b: 2, c: 3});
    expect(source).toEqual({a: 1, b: 2, c: 3});
  });
});