const zipWith = require('lodash/zipWith');

describe('zipWith', () => {
  it('should use iteratee to combine arrays', () => {
    let result = zipWith(['Alex', 'Bob'], [30, 28],
      (name, age) => name + '\'s age is ' + age
    );
    expect(result).toEqual(["Alex's age is 30", "Bob's age is 28"]);
  });
});