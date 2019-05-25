const path = require('path')

module.exports = () => ({
	entry: [
	  '@babel/polyfill',
	  './src/index.js'
	],
  resolve: {
    // alias: {
    //   "boilerplate-features": path.resolve('src','boilerplate-features')
    // },
    modules: [
			path.resolve('node_modules'),
      path.resolve('src'),
    ]
  }
})
