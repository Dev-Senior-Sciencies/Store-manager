const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productService = require('../../../services/productService');

const prod = [
  { id: 1, name: 'Prod 1' },
  { id: 2, name: 'Prod 2' },
  { id: 3, name: 'Prod 3' }
]


describe('List or Products Services', () => {
  before(async () => {
    const execute = [prod];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })
  it('Request method return array Services', async () => {
    const response = await productService.getAllProductsServices();
    expect(response).to.be.a('array');
  })
  it('Return id services property Services', async () => {
    const [response] = await productService.getAllProductsServices();
    expect(response).to.be.a.property('id');
  })
});