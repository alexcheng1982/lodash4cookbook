const flip = require('lodash/flip');
const concat = require('lodash/concat');

describe('flip', () => {
  it('should reverse the arguments', () => {
    let array = [];
    let addToArray = (a, b, c) => array = concat([], a, b, c);
    let func = flip(addToArray);
    expect(func(1, 2, 3)).toEqual([3, 2, 1]);
  });
});