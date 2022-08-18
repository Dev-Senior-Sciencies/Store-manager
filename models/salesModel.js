const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT SP.sale_id AS saleId,
    date, SP.product_id AS productId, SP.quantity
    FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS SS
    ON SP.sale_id = SS.id ORDER BY SP.sale_id ASC`;
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const data = `SELECT date, SP.product_id AS productId, SP.quantity
  FROM StoreManager.sales_products AS SP
  INNER JOIN StoreManager.sales AS SS
  ON SP.sale_id = SS.id
  WHERE SP.sale_id = ? ORDER BY SP.sale_id ASC;`;
  const [query] = await connection.execute(data, [id]);
  return query;
};

const addSale = async (name) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (name) VALUES (?)', [name],
  );

  return query;
};

/* const updateSaleModels = async (id, inset) => {
  const [query] = `UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE sale_id = ?
  AND product_id = ?`;

  inset.forEach(async ({ saleId, quantity }) => {
    await connection.execute(query, [quantity, id, saleId]);    
  });
  
  const result = {
    saleId: id,
    itemsUp: inset,
  };

  return result;
}; */

const deleteSale = async (id) => {
  const query = `DELETE FROM StoreManager.sales
  WHERE id = ?`;

  const [{ affectedRows }] = await connection.execute(query, [id]);

  return affectedRows;
};

module.exports = {
  getAllSales,
  getById,
  addSale,
/*   updateSaleModels, */
  deleteSale,
};
