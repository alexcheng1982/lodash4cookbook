const find = require('lodash/find');
const fruits = require('../data/fruits.json');

describe('find', () => {
  it('should support function predicates', () => {
    let result = find(fruits, fruit => fruit.price <= 2);
    expect(result).toBeDefined();
    expect(result.name).toEqual('apple');
  });

  it('should support property predicates', () => {
    let result = find(fruits, 'onSale');
    expect(result).toBeDefined();
    expect(result.name).toEqual('apple');

    result = find(fruits, ['name', 'orange']);
    expect(result).toBeDefined();
    expect(result.name).toEqual('orange');
  });

  it('should support object predicates', () => {
    let result = find(fruits, {
      name: 'passion fruit',
      onSale: false,
    });
    expect(result).toBeDefined();
    expect(result.name).toEqual('passion fruit');
  });
});