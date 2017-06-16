const findIndex = require('lodash/findIndex');

describe('findIndex', () => {
  it('should support property predicate', () => {
    expect(findIndex(['a', 'da', 'c'], ['length', 2])).toEqual(1);
  });

  it('should support object predicate', () => {
    expect(findIndex([
      {
        name: 'Alex',
        vip: false
      },
      {
        name: 'Bob',
        vip: true
      }
    ], 'vip')).toEqual(1);
  });
});