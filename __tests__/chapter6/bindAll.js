const bindAll = require('lodash/bindAll');

describe('bindAll', () => {
  it('should bind all methods', () => {
    let obj = {
      fixed: 100,
      sum: function(a, b) {
        return this.fixed + a + b;
      },
    };
    bindAll(obj);
    expect(obj.sum(3, 4)).toEqual(107);
  });
});