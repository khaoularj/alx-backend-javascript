const Utils = {
  calculateNumber: function (type, a, b) {
    const roundedNum1 = Math.round(a);
    const roundedNum2 = Math.round(b);

    switch (type) {
      case 'SUM':
        return roundedNum1 + roundedNum2;
      case 'SUBTRACT':
        return roundedNum1 - roundedNum2;
      case 'DIVIDE':
        if (roundedNum2 === 0) {
          return 'Error';
        }
        return roundedNum1 / roundedNum2;
      default:
        throw new Error('Invalid operation type');
    }
  }
};

module.exports = Utils;
