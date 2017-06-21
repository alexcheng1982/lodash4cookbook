const invertBy = require('lodash/invertBy');

describe('invertBy', () => {
  it('should merge values into arrays', () => {
    let object = {'a': true, 'b': false, 'c': true};
    expect(invertBy(object)).toEqual({true: ['a', 'c'], false: ['b']});
  });

  it('should support iteratee functions', () => {
    let object = {'a': true, 'b': false, 'c': true};
    let result = invertBy(object, val => `g_${val}`);
    expect(result).toEqual({g_true: ['a', 'c'], g_false: ['b']});
  });
});