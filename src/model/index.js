const mysql = require("mysql2/promise");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "sos",
});

const query = (statement) => pool.query(`${statement}`).then(([rows]) => rows);
exports.query = query;
