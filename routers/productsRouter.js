const express = require('express');
const productsController = require('../controllers/productsController');
const { isValidName } = require('../middlewares/isValidName');

const productsRouter = express.Router();

productsRouter.get('/', productsController.getAllProductsController);

productsRouter.get('/:id', productsController.getByIdProductsController);

productsRouter.post('/', isValidName, productsController.getByNameProductsController);

productsRouter.put('/:id', isValidName, productsController.updateProductsController);

productsRouter.delete('/:id', productsController.deleteProductController);

module.exports = productsRouter;