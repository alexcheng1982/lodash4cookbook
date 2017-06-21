const keys = require('lodash/keys');
const keysIn = require('lodash/keysIn');

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.size = function() {
  return this.width * this.height;
};

describe('keys', () => {
  it('should get properties names', () => {
    let rect = new Rectangle(10, 5);
    expect(keys(rect)).toEqual(['width', 'height']);
    expect(keysIn(rect)).toEqual(['width', 'height', 'size']);
  });
});