const create = require('lodash/create');

describe('create', () => {
  it('should accept extra properties', () => {
    function MyObject() {
      this.val = 1;
    }

    let result = create(MyObject, {
      val: 10,
    });
    expect(result.val).toEqual(10);
  });
});