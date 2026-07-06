
// const addFn = require("./add.js")

// console.log('Hello from index.js')

// const sum = addFn(2, 3)
// console.log(sum)

// const sum2 = addFn(3, 4)
// console.log(sum2)


// ===================================== 12-Module Wrapper.js =====================================
// require('./batman.js')
// require('./superman.js')
// ================================================================================================

// ================================= 13-Module Caching.js =========================================
// const SuperHero = require('./super-hero.js')
// // console.log(superHero.getName())
// const batman = new SuperHero('Batman')
// // superHero.setName('Superman')
// console.log(batman.getName())
// batman.setName('Bruce')
// console.log(batman.getName())

// // const newSuperHero = require('./super-hero.js')
// // superHero.setName('Batman')
// const superman = new SuperHero('Superman')
// console.log(superman.getName())
// superman.setName('Clark')
// console.log(superman.getName())
// ================================================================================================

// ================================ 14-Import Export Patterns.js ==================================
// const math = require('./math.js')
// console.log(math.add(2, 3))
// console.log(math.subtract(2, 3))
// const mathFn = require('./math.js')
// console.log(mathFn.add(2, 3))
// console.log(mathFn.subtract(2, 3))
// const {add, subtract} = math
// console.log(add(2, 3))
// console.log(subtract(2, 3))
// ================================================================================================

// ================================ 17-Importing JSON and Watch Mode.js ===========================
// const data = require('./data.json')
// console.log(data)
// ================================================================================================


// ================================ 19-Path Module.js =============================================
// const path = require("node:path")
// console.log(__dirname)
// console.log(__filename)

// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join("/folder1", "/folder2", "../index.html"))
// console.log(path.join("/folder1", "folder2", "../index.html"))
// console.log(path.join(__dirname,"./data.json"))

// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "/folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve("/folder1", "/folder2", "../index.html"))
// console.log(path.resolve("/folder1", "folder2", "../index.html"))
// console.log(path.resolve(__dirname,"./data.json"))
// ================================================================================================

// ================================ 20-Callback Pattern.js =============================================
// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// function higherOrderFn(callbackFn) {
//     const name = 'Ajit'
//     callbackFn(name)
// }

// higherOrderFn(greet)
// ================================================================================================

// ======================================= 21-Events Module.js ====================================
// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()

// emitter.on('order-pizza', (size, flavour) => {
//     console.log(`Order Received, Backing a ${size} sized ${flavour} flavoured pizza!`)
// })
// emitter.on('order-pizza', (size) => {
//     if(size === 'large') console.log(`Serving complimentary drink.\n`)
// })

// console.log('Test console 1')
// // emitter.emit('order-pizza')
// emitter.emit('order-pizza', 'large', 'cheese')
// console.log('Test console 2')
// emitter.emit('order-pizza', 'medium', 'mushroom')
// console.log('Test console 3')
// ================================================================================================

// =================================== 22-Extending from Event-Emitter.js =========================
// const PizzaShop = require('./pizza-shop')
// const DrinkMachine = require('./drink-machine')

// const  pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on('order', (size, topping) => {
//     console.log(`\nOrder Received, Backing a ${size} sized ${topping} flavoured pizza!`)
//     // if(size === 'large') console.log(`Serving complimentary drink.`)
//     drinkMachine.serverDrink(size)

// })
// pizzaShop.order('large', 'cheese')
// pizzaShop.displayOrderNumber()

// pizzaShop.order('small', 'mashroom')
// pizzaShop.displayOrderNumber()


// ================================================================================================

// ================================ 24-Streams & Buffers.js =======================================
const buffer = new Buffer.from('Vishwas', 'utf-8')

// buffer.write("Code")
buffer.write("Codevolution")
console.log("buffer: ", buffer)
console.log("buffer.toString(): ", buffer.toString())
console.log("buffer.toJSON(): ", buffer.toJSON())
// ================================================================================================