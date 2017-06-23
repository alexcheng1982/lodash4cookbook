const lt = require('lodash/lt');
const lte = require('lodash/lte');

describe('lt', () => {
  it('should compare values', () => {
    expect(lt(10, 1)).toBe(false);
    expect(lt(1, 10)).toBe(true);
    expect(lte(5, 5)).toBe(true);
  });
});