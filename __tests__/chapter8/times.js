const times = require('lodash/times');

describe('times', () => {
  it('should invoke functions multiple times', () => {
    let sayHi = () => 'hi';
    expect(times(3, sayHi)).toEqual(['hi', 'hi', 'hi']);
    expect(times(3)).toEqual([0, 1, 2]);
  });
});