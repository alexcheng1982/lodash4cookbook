const flatten = require('lodash/flatten');
const flattenDeep = require('lodash/flattenDeep');
const flattenDepth = require('lodash/flattenDepth');

describe('flatten', () => {
  it('should support simple flattening', () => {
    let result = flatten([[1, 2], [3]]);
    expect(result).toEqual([1, 2, 3]);

    result = flatten([[1, 2], [[3], [4]]]);
    expect(result).toEqual([1, 2, [3], [4]]);
  });

  it('should support recursive flattening', () => {
    let result = flattenDeep([[1, 2], [[3], [4]]]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should support flattening with depth', () => {
    let result = flattenDepth([[[[1], [2]]]], 2);
    expect(result).toEqual([[1], [2]]);
  });
});