if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
}
else {
  console.log('test env const', process.env.TEST)
  module.exports = require('./dev')
}
