const map = require('lodash/map');
const bind = require('lodash/bind');

describe('this binding', () => {
  it('should bind to this', () => {
    const obj = {
      val: 10,
      add: function(n) {
        return this.val + n;
      }
    };
    let result = map([1, 2, 3], bind(obj.add, obj));
    expect(result).toEqual([11, 12, 13]);
  });
});