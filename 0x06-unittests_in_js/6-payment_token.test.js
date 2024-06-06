const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });

  it('should resolve with null when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.null;
        done();
      })
      .catch((error) => done(error));
  });
});
