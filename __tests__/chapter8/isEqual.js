const isEqual = require('lodash/isEqual');
const isEqualWith = require('lodash/isEqualWith');

describe('isEqual', () => {
  it('should check object equality', () => {
    let obj1 = {
      a: 1,
      b: 'hello',
    };
    let obj2 = {
      a: 1,
      b: 'hello',
    };
    expect(isEqual(obj1, obj2)).toBe(true);

    let obj3 = {
      a: 2,
      b: 'world',
    };
    let result = isEqualWith(obj1, obj3, (v1, v2) => {
      if (v1.a > 0 && v2.a > 0) {
        return true;
      }
    });
    expect(result).toBe(true);
  });
});