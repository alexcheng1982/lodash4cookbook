const overArgs = require('lodash/overArgs');

describe('overArgs', () => {
  it('should modify arguments', () => {
    let add = (x, y) => x +y;
    let func1 = value => value + 1;
    let func2 = value => value * 2;
    let newfunc = overArgs(add, func1, func2);
    expect(newfunc(1, 2)).toEqual(6);
  });
});