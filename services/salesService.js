const {
  getAllSales,
  getById,
  addSale,
 /*  updateSaleModels, */
  deleteSale,
} = require('../models/salesModel');

/* const {
  getAllProducts,
} = require('../models/productsModel'); */

const getAllSalesServices = async () => {
  const data = await getAllSales();
  return data;
};

const getByIdSalesServices = async (id) => {
  const data = await getById(id);
  return data;
};

const addSaleService = async (name) => {
  const nameSale = await addSale(name);
  return nameSale;
};

/* const updateSaleService = async (id, inset) => {
  const mySale = await getById(id);

  const products = await getAllProducts();

  const productIds = products.map(({ id: saleId }) => saleId);

  if (await isValidSale(inset, productIds)) {
    const res = await isValidSale(inset, productIds);
    
    return res;
  }

  if (mySale.length < 1) {
    return { code: 404, result: { message: 'Sale not found' } };
  }

  const editGetSale = await updateSaleModels(id, inset);
  console.log(editGetSale);
  return { code: 200, result: editGetSale };
}; */

const deleteSaleService = async (id) => {
  const sale = await getById(id);

  if (sale.length < 1) {
    return { code: 404, result: { message: 'Sale not found' } };
  }

  await deleteSale(id);

  return { code: 204 };
};

module.exports = {
  getAllSalesServices,
  getByIdSalesServices,
  addSaleService,
/*   updateSaleService, */
  deleteSaleService,
};
