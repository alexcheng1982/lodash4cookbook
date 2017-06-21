const defaults = require('lodash/defaults');

describe('defaults', () => {
  it('should set default values', () => {
    let result = defaults({a: 1}, {b: 2}, {a: 3});
    expect(result).toEqual({a: 1, b: 2});

    result = defaults({a: 1}, {b: 2}, {b: 3});
    expect(result).toEqual({a: 1, b: 2});
  });
});