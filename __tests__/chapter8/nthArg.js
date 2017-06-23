const nthArg = require('lodash/nthArg');

describe('nthArg', () => {
  it('should create a function that returns the nth argument', () => {
    let func = nthArg(2);
    expect(func(1, 2, 3)).toEqual(3);
  });
});