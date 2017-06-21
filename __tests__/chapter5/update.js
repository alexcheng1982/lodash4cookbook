const update = require('lodash/update');

describe('update', () => {
  it('should update property values', () => {
    let obj = {
      a: 1,
    };
    let result = update(obj, 'a', n => n * 10);
    expect(result).toEqual({a: 10});
  });
});