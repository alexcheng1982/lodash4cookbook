const method = require('lodash/method');

describe('method', () => {
  it('should create a function to invoke methods', () => {
    let obj = {
      a: {
        b: {
          hello: () => 'hello',
        },
      },
    };

    let func = method('a.b.hello');
    expect(func(obj)).toEqual('hello');
  });
});