const { Pool } = require('pg')

const pool = new Pool({
  database: 'testdb'
})

module.exports = {
  query: (text, params) => pool.query(text, params)
}
