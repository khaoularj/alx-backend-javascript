const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('should return 0 for -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('should return 2 for 1.5 and 0.4', () => {  // updated expected result
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.4), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it('should return Error for 1.4 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
    });
  });
});
