const reverse = require('lodash/reverse');

describe('reverse', () => {
  it('should reverse arrays', () => {
    let array = ['a', 'b', 'c'];
    let result = reverse(array);
    expect(result).toEqual(['c', 'b', 'a']);
    expect(array).toEqual(['c', 'b', 'a']);
  });
});