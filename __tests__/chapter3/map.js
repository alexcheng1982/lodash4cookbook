const map = require('lodash/map');

describe('map', () => {
  it('should support arrays', () => {
    expect(map([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);
  });

  it('should support predicate syntax', () => {
    const users = [
      {
        name: 'Alex',
      },
      {
        name: 'Bob',
      }
    ];
    expect(map(users, 'name')).toEqual(['Alex', 'Bob']);
    expect(map(users, {name: 'Alex'})).toEqual([true, false]);
  });
});