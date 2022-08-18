const {
  getAllSalesServices,
  getByIdSalesServices,
  addSaleService,
/*   updateSaleService, */
  deleteSaleService,
} = require('../services/salesService');

/* const { httpStatusCode } = require('../helpers/httpStatusCode'); */

const getAllSalesController = async (_req, res, next) => {
  try {
    const data = await getAllSalesServices();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getByIdSalesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getByIdSalesServices(id);
    if (!data || data.length < 1) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const addSaleController = async (req, res, _next) => {
  try {
    const { name } = req.body;
    const nameSale = await addSaleService(name);
    res.status(201).json({
      id: nameSale.insertId,
      name,
    });
  } catch (error) {
    return error;
  }
};

/* const updateSaleController = async (req, res) => {
  const { params: { id }, body } = req;

  const { code, result } = await updateSaleService(Number(id), body);

  res.status(code).json(result);
}; */

const deleteSaleController = async (req, res) => {
  const { id } = req.params;

  const { code, result } = await deleteSaleService(Number(id));

  res.status(code).json(result);
};

module.exports = {
  getAllSalesController,
  getByIdSalesController,
  addSaleController,
 /*  updateSaleController, */
  deleteSaleController,
};
