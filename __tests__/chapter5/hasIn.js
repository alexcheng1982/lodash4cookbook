const hasIn = require('lodash/hasIn');

function A() {
  this.a = function() {};
}

A.prototype.b = function() {};

describe('hasIn', () => {
  it('should check existence of inherited properties', () => {
    expect(hasIn(new A(), 'b')).toBe(true);
  });
});