const rearg = require('lodash/rearg');
const concat = require('lodash/concat');

describe('rearg', () => {
  it('should re-arrange arguments', () => {
    let array = [];
    let addToArray = (a, b, c) => array = concat([], a, b, c);

    let func = rearg(addToArray, 0, 1, 2);
    expect(func(1, 2, 3)).toEqual([1, 2, 3]);

    func = rearg(addToArray, 2, 1, 0);
    expect(func(1, 2, 3)).toEqual([3, 2, 1]);

    func = rearg(addToArray, 2, 1);
    expect(func(1, 2, 3)).toEqual([3, 2, 3]);
  });
});