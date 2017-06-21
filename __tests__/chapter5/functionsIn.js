const functionsIn = require('lodash/functionsIn');

function A() {
  this.a = function() {};
}

A.prototype.b = function() {};

describe('functionsIn', () => {
  it('should list inherited functions', () => {
    expect(functionsIn(new A())).toEqual(['a', 'b']);
  });
});