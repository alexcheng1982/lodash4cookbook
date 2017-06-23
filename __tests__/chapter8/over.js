const over = require('lodash/over');
const size = require('lodash/size');
const partialRight = require('lodash/partialRight');
const indexOf = require('lodash/indexOf');

describe('over', () => {
  it('should invoke functions over the arguments', () => {
    let func = over(size, partialRight(indexOf, 'h'));
    expect(func('hello')).toEqual([5, 0]);
  });
});