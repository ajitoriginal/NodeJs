const EventEmitter = require("node:events")
class PizzaShop extends EventEmitter{
    constructor() {
        super()
        this.orderNumber = 0
    }

    order(size, topping) {
        this.orderNumber++
        this.emit("order", size, topping)
    }

    displayOrderNumber() {
        console.log(`Current order number : ${this.orderNumber}`)
    }
}

module.exports = PizzaShop