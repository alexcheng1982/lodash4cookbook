const bindKey = require('lodash/bindKey');

describe('bindKey', () => {
  it('should bind the correct this value', () => {
    let obj = {
      fixed: 100,
      sum: function(a, b) {
        return this.fixed + a + b;
      },
    };
    let add100 = bindKey(obj, 'sum');
    expect(add100(3, 4)).toEqual(107);

    let add103 = bindKey(obj, 'sum', 3);
    expect(add103(4)).toEqual(107);

    obj.sum = function(a, b) {
      return this.fixed + a + b + 100;
    }
    expect(add100(3, 4)).toEqual(207);
  });
});