const pullAll = require('lodash/pullAll');
const pullAllBy = require('lodash/pullAllBy');
const pullAllWith = require('lodash/pullAllWith');

describe('pullAll', () => {
  it('should remove elements', () => {
    let array = [1, 2, 3, 4, 5];
    let result = pullAll(array, [1, 2]);
    expect(result).toEqual([3, 4, 5]);
    expect(array).toEqual([3, 4, 5]);
  });

  it('should support pullAllBy', () => {
    let array = [{'name': 'Alex'}, {'name': 'Bob'}, {'name': 'David'}];
    let result = pullAllBy(array, [{'name': 'Alex'}], 'name');
    expect(result).toEqual([{'name': 'Bob'}, {'name': 'David'}]);
  });

  it('should support pullAllWith', () => {
    let array = ['Alex', 'Bob', 'David'];
    let result = pullAllWith(array,
      ['Mary'],
      (v1, v2) =>v1.length === v2.length);
    expect(result).toEqual(['Bob', 'David']);
  });
});