const isValidSale = async (getSale, productIds) => {
  if (!getSale.every(({ productId }) => productId !== undefined)) {
    return { code: 400, result: { message: '"productId" is required' } };
  }

  if (!getSale.every(({ productId }) => productIds.includes(productId))) {
    return { code: 404, result: { message: 'Product not found' } };
  }

  if (!getSale.every(({ quantity }) => quantity !== undefined)) {
    return { code: 400, result: { message: '"quantity" is required' } };
  }

  if (!getSale.every(({ quantity }) => quantity >= 1)) {
    return {
      code: 422,
      result: { message: '"quantity" must be greater than or equal to 1' },
    };
  }
};

module.exports = { isValidSale };