const defaults = require('lodash/defaults');

describe('defaults', () => {
  it('should merge configs', () => {
    let userConf = {
      val1: 1,
    };

    let sysConf1 = {
      val1: 2,
      val2: 4,
    };

    let sysConf2 = {
      val2: 5,
      val3: 6
    };

    let result = defaults(userConf, sysConf1, sysConf2);
    expect(result).toEqual({val1: 1, val2: 4, val3: 6});
  });
});