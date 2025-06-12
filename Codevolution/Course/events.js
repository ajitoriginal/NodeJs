const BurgerShop = require('./burger-shop')
const DrinkMachine = require('./drink-machine')

const burgerShop = new BurgerShop()
const drinkMachine = new DrinkMachine()
burgerShop.on('order', (size, flavour) => {
    console.log(`Order received! Backing a ${size} size burger with ${flavour} flavour`)
    drinkMachine.serveDrink(size)

})
burgerShop.order('large', 'cheesy')
burgerShop.displayOrderNumber()
burgerShop.order('small', 'spicy')
burgerShop.displayOrderNumber()



// const EventEmitter = require('node:events')

// const emitter = new EventEmitter()

// emitter.on('order-burger', (size, flavour, quantity) => {
//     console.log(`Order received! Baking ${quantity} ${size} burger with ${flavour} flavour`)
// })

// emitter.on('order-burger', () => {
//     console.log(`Order received! Another event listener`)
// })

// console.log('Do work before event occurs')

// emitter.emit('order-burger', 'large', 'cheesy', '3')