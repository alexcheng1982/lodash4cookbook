const sortedIndex = require('lodash/sortedIndex');
const sortedIndexBy = require('lodash/sortedIndexBy');

describe('sortedIndex', () => {
  it('should find the insert index', () => {
    expect(sortedIndex([1, 2, 4], 3)).toEqual(2);
    expect(sortedIndex([1, 2, 2, 5, 5], 4)).toEqual(3);
  });

  it('should find the insert index using iteratee', () => {
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
    let result = sortedIndexBy(
      ['alex', 'bob'],
      'david',
      name => users[name].age);
    expect(result).toEqual(1);  
  });
});