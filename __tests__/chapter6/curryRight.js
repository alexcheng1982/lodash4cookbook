const curryRight = require('lodash/curryRight');
const concat = require('lodash/concat');

describe('curryRight', () => {
  it('should support function currying', () => {
    let array = [];
    let addToArray = (a, b, c) => array = concat([], a, b, c);
    
    curryRight(addToArray, 3)(1)(2)(3);
    expect(array).toEqual([3, 2, 1]);

    curryRight(addToArray, 3)(1, 2)(3);
    expect(array).toEqual([3, 1, 2]);
  });
});