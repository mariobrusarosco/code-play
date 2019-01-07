if(process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
}
else {
  console.log('process.env.TEST:', process.env.TEST)
  module.exports = require('./dev')
}
