const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id ASC';
  const [data] = await connection.execute(query);
  return data;
};

const getById = async (id) => {
  const [query] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?',
      [id]);
  return query;
};

const getByName = async (name) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
);
  return query;
};

const getByUpdate = async (id, name) => {
  const [query] = await connection.execute(
    `UPDATE StoreManager.products 
  SET name = ? WHERE id = ?`,
    [name, id],
);
  return query;
};

const getByDelete = async (id) => {
  const [query] = await connection.execute(
    `DELETE FROM StoreManager.products
  WHERE id = ?`, [id],
);
  return query;
};

module.exports = {
  getAllProducts,
  getById,
  getByName,
  getByUpdate,
  getByDelete,
};