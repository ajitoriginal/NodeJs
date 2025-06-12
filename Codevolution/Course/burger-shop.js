const EventEmitter = require('node:events')

class BurgerShop extends EventEmitter {
    constructor() {
        super()
        this.orderNumber = 0
    }

    order(size, flavour) {
        this.orderNumber++
        this.emit('order', size, flavour)
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}

module.exports = BurgerShop