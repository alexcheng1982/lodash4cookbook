const mergeWith = require('lodash/mergeWith');
const isArray = require('lodash/isArray');

describe('mergeWith', () => {
  it('should assign properties recursively using functions', () => {
    let source = {a: {b: [1]}};
    let target = {a: {b: [2, 3]}};
    let result = mergeWith(source, target, (targetValue, sourceValue) => {
      if (isArray(targetValue)) {
          return targetValue.concat(sourceValue).join();
      }
    });
    expect(result).toEqual({a: {b: '1,2,3'}});
  });
});