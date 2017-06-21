const set = require('lodash/set');

describe('set', () => {
  it('should set property value by path', () => {
    let obj = {
      a: 1,
    };
    let result = set(obj, 'a', 2);
    expect(result).toEqual({a: 2});

    result = set(obj, 'b.c', 'hello');
    expect(result).toEqual({a: 2, b: {c: 'hello'}});

    result = set(obj, 'a.d', 'world');
    expect(result).toEqual({a: {d: 'world'}, b: {c: 'hello'}});
  });
});