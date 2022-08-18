const {
  getAllProductsServices,
  getByIdProductServices,
  getByNameProductServices,
  sendByUpdateProductServices,
  deleteProductServices,
} = require('../services/productService');
/* const { httpStatusCode } = require('../helpers/httpStatusCode'); */

const getAllProductsController = async (req, res, _next) => {
  try {
    const data = await getAllProductsServices();
    return res.status(200).json(data);
  } catch (error) {
    return error;
  }
};

const getByIdProductsController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const data = await getByIdProductServices(id);
    if (!data || data.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    return error;
  }
};

const getByNameProductsController = async (req, res, _next) => {
  try {
    const { name } = req.body;
    const nameProduct = await getByNameProductServices(name);
    res.status(201).json({
      id: nameProduct.insertId,
      name,
    });
  } catch (error) {
    return error;
  }
};

const updateProductsController = async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await getByIdProductServices(id);

    if (!data || data.length < 1) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await sendByUpdateProductServices(id, name);
    res.status(200).json({ id, name });
  } catch (error) {
    return error;
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProductServices(id);
    res.status(204).json(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllProductsController,
  getByIdProductsController,
  getByNameProductsController,
  updateProductsController,
  deleteProductController,
};