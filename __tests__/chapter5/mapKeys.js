const mapKeys = require('lodash/mapKeys');

describe('mapKeys', () => {
  it('should transform property keys', () => {
    let result = mapKeys(
      {a: 'hello', b: 'world'},
      (val, key) => 'key_' + key);
    expect(result).toEqual({'key_a': 'hello', 'key_b': 'world'});  
  });
});