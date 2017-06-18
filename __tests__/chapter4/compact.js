const compact = require('lodash/compact');

describe('compact', () => {
  it('should remove falsy elements', () => {
    expect(compact([1, null, false, 2])).toEqual([1, 2]);
  });
});