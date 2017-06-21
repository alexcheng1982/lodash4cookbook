const bind = require('lodash/bind');

describe('bind', () => {
  it('should bind the correct this value', () => {
    function sum(a, b) {
      return this.fixed + a + b;
    }
    let obj = {
      fixed: 100,
    };
    let add100 = bind(sum, obj);
    expect(add100(3, 4)).toEqual(107);

    let add103 = bind(sum, obj, 3);
    expect(add103(4)).toEqual(107);
  });
});