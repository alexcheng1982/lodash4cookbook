const map = require('lodash/map');
const users = require('../data/users.json');

describe('map with iteratees', () => {
  it('should map with an iteratee function', () => {
    let result = map([1, 2, 3], n => n * 3);
    expect(result).toEqual([3, 6, 9]);
  });

  it('should map with iteratee shorthands', () => {
    let result = map(users, {name: 'Alex'});
    expect(result).toEqual([true, false, false]);

    result = map(users, ['name', 'Alex']);
    expect(result).toEqual([true, false, false]);

    result = map(users, 'name');
    expect(result).toEqual(['Alex', 'Bob', 'Mary']);
  });
});