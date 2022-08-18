const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

const prod = [
  { id: 1, name: 'Prod 1' },
  { id: 2, name: 'Prod 2' },
  { id: 3, name: 'Prod 3' }
]


describe('List or Products Model', () => {
  before(async () => {
    const execute = [prod];
    
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })
  it('Request method return array Models', async () => {
    const response = await productsModel.getAllProducts();
    expect(response).to.be.a('array');
  })
  it('Return id services property Models', async () => {
    const [response] = await productsModel.getAllProducts();
    expect(response).to.be.a.property('id');
  })
});