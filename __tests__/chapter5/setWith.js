const setWith = require('lodash/setWith');

describe('setWith', () => {
  it('should set property value using functions', () => {
    let obj = {
      a: {
        b: 1,
      },
    };
    let result = setWith(
      obj, 'a.b', 2,
      value => JSON.stringify(value)
    );
    expect(result).toEqual({a: '{"b":1}'});
  });
});