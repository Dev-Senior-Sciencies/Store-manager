const {
  getAllProducts,
  getById,
  getByName,
  getByUpdate,
  getByDelete,
} = require('../models/productsModel');

const getAllProductsServices = async () => {
  const data = await getAllProducts();
  return data;
};

const getByIdProductServices = async (id) => {
  const [data] = await getById(id);
  return data;
};

const getByNameProductServices = async (name) => {
  const nameProduct = await getByName(name);
  return nameProduct;
};

const sendByUpdateProductServices = async (id, name) => {
  const data = await getByUpdate(id, name);
  return data;
};

const deleteProductServices = async (id) => {
  const [data] = await getById(id);
  
  if (!data) {
    throw new Error('Product not found');
  }

  const result = await getByDelete(id);
  
  return result;
};

module.exports = {
  getAllProductsServices,
  getByIdProductServices,
  getByNameProductServices,
  sendByUpdateProductServices,
  deleteProductServices,
};