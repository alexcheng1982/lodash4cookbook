const partialRight = require('lodash/partialRight');
const concat = require('lodash/concat');

describe('partialRight', () => {
  it('should apply function arguments', () => {
    let array = [];
    let addToArray = (a, b, c) => array = concat([], a, b, c);
    let func = partialRight(addToArray, 1, 2);
    func(3);
    expect(array).toEqual([3, 1, 2]);
  });
});