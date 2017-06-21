const rest = require('lodash/rest');
const sum = require('lodash/sum');

describe('rest', () => {
  it('should collect parameters', () => {
    let func = (factor, initial, values) => factor * (initial + sum(values));
    let calculate = rest(func);
    expect(calculate(5, 10, 1, 2, 3)).toEqual(80);
  });
});