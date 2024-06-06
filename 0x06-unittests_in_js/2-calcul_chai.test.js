const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('should return 0 for -1.4 and 1.4', () => {
      expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('should return 2 for 1.5 and 0.4', () => {
      expect(calculateNumber('SUBTRACT', 1.5, 0.4)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it('should return Error for 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid operation type', () => {
      expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error);
    });
  });
});
