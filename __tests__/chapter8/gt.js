const gt = require('lodash/gt');
const gte = require('lodash/gte');

describe('gt', () => {
  it('should compare values', () => {
    expect(gt(10, 1)).toBe(true);
    expect(gt(1, 10)).toBe(false);
    expect(gte(5, 5)).toBe(true);
  });
});