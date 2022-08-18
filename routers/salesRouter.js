const express = require('express');
const salesController = require('../controllers/salesController');
const { isValidSale } = require('../middlewares/isValidSale');

const salesRouter = express.Router();

salesRouter.get('/', salesController.getAllSalesController);

salesRouter.get('/:id', salesController.getByIdSalesController);

salesRouter.post('/', isValidSale, salesController.addSaleController);

/* salesRouter.put('/:id', salesController.updateSaleController); */

salesRouter.delete('/:id', salesController.deleteSaleController);

module.exports = salesRouter;
