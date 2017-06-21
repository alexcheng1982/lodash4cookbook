const merge = require('lodash/merge');

describe('merge', () => {
  it('should assign properties recursively', () => {
    let result = merge({a: {b: 1}}, {a: {c: 2}});
    expect(result).toEqual({a: {b: 1, c: 2}});
  });
});