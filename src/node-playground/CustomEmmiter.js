function CustomEmitter() {
  this.events = {}
}

CustomEmitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || []
  this.events[type].push(listener)

}

CustomEmitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(listener => {
      listener()
    });
  }
}

module.exports = CustomEmitter


