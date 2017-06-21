const mapValues = require('lodash/mapValues');

describe('mapValues', () => {
  it('should transform property values', () => {
    let result = mapValues(
      {a: 'hello', b: 'world'},
      str => str + ' rocks');
    expect(result).toEqual({a: 'hello rocks', b: 'world rocks'});  
  });
});