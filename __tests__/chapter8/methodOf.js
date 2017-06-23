const methodOf = require('lodash/methodOf');

describe('methodOf', () => {
  it('should create a function to invoke methods', () => {
    let obj = {
      a: {
        b: () => 'b',
        c: () => 'c',
      },
    };

    let func = methodOf(obj);
    expect(func('a.b')).toEqual('b');
    expect(func('a.c')).toEqual('c');
  });
});