const intersection = require('lodash/intersection');
const intersectionBy = require('lodash/intersectionBy');
const intersectionWith = require('lodash/intersectionWith');

describe('intersection', () => {
  it('should support interaction', () => {
    let result = intersection([1, 2], [3, 2, 1], [1]);
    expect(result).toEqual([1]);
  });

  it('should support interactionBy', () => {
    let result = intersectionBy(
      [{'name': 'Alex'}, {'name': 'Bob'}], [{'name': 'Alex'}],
      'name');
    expect(result).toEqual([{'name': 'Alex'}]);
  });

  it('should support interactionWith', () => {
    let result = intersectionWith([{'name': 'Bob'}], [{'name': 'Tim'}],
      (v1, v2) => v1.name.length == v2.name.length);
    expect(result).toEqual([{'name': 'Bob'}]);  
  });
});