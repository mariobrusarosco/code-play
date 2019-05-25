// This code tests node inheritance using node's Event Emiiter
const utils = require('util')
const Emitter = require('events')

// Creates our custom object that will receive an inheritance
function MyObject() {
  this.greeting = `Hello World from 'MyObject'`
}

// Apply the inheritance
utils.inherits(MyObject, Emitter)

// After the inheritance, creates a new method via Prototype
MyObject.prototype.greet = function(greetTerm) {
  // Displays the property defined inside the Constructor of MyObject
  console.log(this.greeting)
  // Emit an event that will be attached later on. this.emit is possbile because of the later inheritance
  this.emit('emitGreet', greetTerm)
}

// Creates an instance
const greet1 = new MyObject()

// Attach a custom event 'emitGreet'
greet1.on('emitGreet', function(data) {
  console.log(`Hello world from Node's Emitter event. Additional info: ${data}`)
})

// greet is gonna call a greet() method,
// inside of it will call the emitGreet callback
// and pass aditional data
greet1.greet('i am the danger')




