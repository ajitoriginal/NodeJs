const EventEmitter = require('node:events')

const emitter = new EventEmitter()

emitter.on('order-burger', (size, flavour, quantity) => {
    console.log(`Order received! Baking ${quantity} ${size} burger with ${flavour} flavour`)
})

emitter.on('order-burger', () => {
    console.log(`Order received! Another event listener`)
})

console.log('Do work before event occurs')

emitter.emit('order-burger', 'large', 'cheesy', '3')