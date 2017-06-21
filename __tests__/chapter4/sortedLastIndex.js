const sortedLastIndex = require('lodash/sortedLastIndex');
const sortedLastIndexBy = require('lodash/sortedLastIndexBy');

describe('sortedLastIndex', () => {
  it('should find the last insert index', () => {
    expect(sortedLastIndex([1, 2, 4], 3)).toEqual(2);
    expect(sortedLastIndex([1, 2, 2, 5, 5], 4)).toEqual(3);
  });

  it('should find the last insert index using iteratee', () => {
    let users = {
      'alex': {
        age: 20
      },
      'bob': {
        age: 40
      },
      'david': {
        age: 30
      }
    };
    let result = sortedLastIndexBy(
      ['alex', 'bob'],
      'david',
      name => users[name].age);
    expect(result).toEqual(1);  
  });
});