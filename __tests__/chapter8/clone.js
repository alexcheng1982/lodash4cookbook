const clone = require('lodash/clone');
const cloneDeep = require('lodash/cloneDeep');

describe('clone', () => {
  it('should clone objects', () => {
    let object = {
      a: 1,
      b: 2,
      c: {
        d: 0,
      }
    };
    let result = clone(object);
    expect(result).toEqual(object);
    expect(result).not.toBe(object);
    expect(result.c).toBe(object.c);

    result = cloneDeep(object);
    expect(result).toEqual(object);
    expect(result).not.toBe(object);
    expect(result.c).not.toBe(object.c);
  });
});