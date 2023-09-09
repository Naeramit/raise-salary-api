const { query } = require("../model/index");

exports.getUserByUsername = async (username) => {
  const rows = await query(
    `SELECT * FROM USERS WHERE username = '${username}'`
  );
  return rows[0];
};

exports.getUserById = async (id) => {
  const rows = await query(`SELECT * FROM USERS WHERE id = '${id}'`);
  return rows[0];
};
