if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
}
else {
  console.log('requring: ', require('./dev'))
  module.exports = require('./dev')
}
