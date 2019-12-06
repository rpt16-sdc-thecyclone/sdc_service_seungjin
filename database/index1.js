const Pool = require('pg').Pool
const pool = new Pool({
  user: 'seungjinkim',
  host: 'localhost',
  database: 'sdc',
  password: '',
  port: 5432,
})

module.exports.pool = pool;