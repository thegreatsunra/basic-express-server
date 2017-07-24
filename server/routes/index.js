const items = require('./items')

module.exports = (app) => {
  app.use('/api/items', items)
}
