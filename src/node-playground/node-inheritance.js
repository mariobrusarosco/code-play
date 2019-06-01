// This code tests node inheritance using node's Event Emiiter
const utils = require('util')
const Emitter = require('events')

// Creates our custom object that will receive an inheritance

// --------- OLD JS versions

function MyObject() {
  // This line will call the Constructor of Emitter and pass 'this' as argument
  // writting .call(this)...is the same as .call(MyObject) ...so you're invoking Emitter and passing all its methods and properties to MyObject...THIS IS LIKE CALLING super() IN CLASS SYNTAX
  Emitter.call(this)
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


// --------- Same code above but with ES6
class MyObject2 extends Emitter {
  constructor() {
    super()
    this.greeting = `Hello World from 'MyObject2'`
  }
}

// Apply the inheritance
utils.inherits(MyObject2, Emitter)

// After the inheritance, creates a new method via Prototype
MyObject2.prototype.greet = function(greetTerm) {
  // Displays the property defined inside the Constructor of MyObject
  console.log(this.greeting)
  // Emit an event that will be attached later on. this.emit is possbile because of the later inheritance
  this.emit('emitGreet', greetTerm)
}

// Creates an instance
const greet2 = new MyObject2()

// Attach a custom event 'emitGreet'
greet2.on('emitGreet', function(data) {
  console.log(`Hello world from Node's Emitter event. Additional info: ${data}`)
})

// greet is gonna call a greet() method,
// inside of it will call the emitGreet callback
// and pass aditional data
greet2.greet('i am the one who knocks')
