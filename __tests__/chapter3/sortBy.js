const sortBy = require('lodash/sortBy');

describe('sortBy', () => {
  it('should support simple sort', () => {
    expect(sortBy([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('should support function predicates', () => {
    let result = sortBy([-3, 2, 1], val => Math.abs(val));
    expect(result).toEqual([1, 2, -3]);
  });

  it('should support multiple conditions', () => {
    const users = [
      {
        name: 'David',
        age: 28,
      },
      {
        name: 'Alex',
        age: 30,
      },
      {
        name: 'Bob',
        age: 28,
      }
    ];
    let result = sortBy(users, 'age', 'name');
    expect(result[0].name).toEqual('Bob');
    expect(result[1].name).toEqual('David');
    expect(result[2].name).toEqual('Alex');
  });
});