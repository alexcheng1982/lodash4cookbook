const zip = require('lodash/zip');

describe('zip', () => {
  it('should group arrays', () => {
    let result = zip([1, 2], [true, false], ['Alex', 'Bob']);
    expect(result).toEqual([[1, true, 'Alex'], [2, false, 'Bob']]);
  });

  it('should group arrays with different length', () => {
    let result = zip([1, 2, 3], [true], ['Alex']);
    expect(result).toEqual([
      [1, true, 'Alex'],
      [2, undefined, undefined],
      [3, undefined, undefined]
    ]);
  });
});