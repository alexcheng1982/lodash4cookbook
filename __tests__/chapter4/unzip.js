const unzip = require('lodash/unzip');
const unzipWith = require('lodash/unzipWith');

describe('unzip', () => {
  it('should support undo the zip operation', () => {
    let array = [[1, true, 'Alex'], [2, false, 'Bob']];
    let result = unzip(array);
    expect(result).toEqual([[1, 2], [true, false], ['Alex', 'Bob']]);

    result = unzipWith(array, (v1, v2) => v1 + v2);
    expect(result).toEqual([3, 1, "AlexBob"]);
  });
});