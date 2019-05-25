// Events - Custom Emiiter
const CustomEmmiter = require('./CustomEmmiter')

// Mocking a 'ready' event
const AppController = new CustomEmmiter()

AppController.on('ready', () => console.log('App is ready'))

setTimeout(() => {
  AppController.emit('ready')
}, 3000);

// Events - Node Emiiter
require('./node-inheritance')
