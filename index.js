const express = require('express')
const { Client } = require('pg')
const client = new Client({
  database: 'testdb'
})
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8080

async function db() {
  await client.connect()

  const res = await client.query('SELECT * from test_table')
  console.log(res.rows) // Hello world!
  await client.end()
}

app.use(express.static('public'))

app.listen(port)
console.log('Magic happens on port ' + port)
