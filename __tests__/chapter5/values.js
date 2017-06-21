const values = require('lodash/values');
const valuesIn = require('lodash/valuesIn');

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.size = function() {
  return this.width * this.height;
};

describe('values', () => {
  it('should get properties values', () => {
    let rect = new Rectangle(10, 5);
    expect(values(rect)).toEqual([10, 5]);
    expect(valuesIn(rect)).toEqual([10, 5, Rectangle.prototype.size]);
  });
});