const conforms = require('lodash/conforms');
const conformsTo = require('lodash/conformsTo');
const partialRight = require('lodash/partialRight');
const gt = require('lodash/gt');

describe('conforms', () => {
  it('should check the object conformance', () => {
    let func = conforms({
      name: name => name.length > 3,
      age: partialRight(gt, 18),
    });
    expect(func({
      name: 'Alex',
      age: 30,
    })).toBe(true);
    expect(func({
      name: 'Bob',
      age: 30,
    })).toBe(false);

    expect(conformsTo({
      name: 'Alex',
    }, {
      name: name => name.length > 3,
    })).toBe(true);
  });
});