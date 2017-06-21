const memoize = require('lodash/memoize');

describe('memoize', () => {
  it('should memoize function results', () => {
    function fib(n) {
      if (n <= 0) {
        return 0;
      }
      if (n === 1) {
        return 1;
      }
      return fib(n - 1) + fib(n - 2);
    }

    fib = memoize(fib);
    expect(fib(10)).toEqual(55);
  });
});