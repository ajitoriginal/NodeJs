const fs = require("node:fs/promises")
console.log('console before readFile Promise Async')
async function readFile() {
    try {
        let data = await fs.readFile("./file.txt", "utf-8")
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}
readFile()
console.log('console after readFile Promise Async')
// console.log('console before readFile Promise')
// fs.readFile("./file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))
// console.log('console after readFile Promise')

// const fs = require("node:fs")
// console.log("console before readFileSync")
// const fileContent = fs.readFileSync("./file.txt", "utf-8")
// console.log(fileContent)
// console.log("console after readFileSync")
// console.log("console before readFile")
// fs.readFile("./file2.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })
// console.log("console after readFile")
// console.log("console before writeFileSync")
// fs.writeFileSync("./greet.txt", "Hello from greet file")
// console.log("console after writeFileSync")
// console.log("console before writeFile")
// fs.writeFile("./greet2.txt", "Hello from greet file 2 ", {flag: "a"}, (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log("file written successfully in writeFile")
//     }
// })
// console.log("console after writeFile")

// const buffer = new Buffer.from("Vishwas")
// buffer.write("Codevolution")
// console.log(buffer)
// console.log(buffer.toJSON())
// console.log(buffer.toString())

// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")
// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large", "mashroom")
// pizzaShop.displayOrderNumber()




// const EventEmitter = require("node:events")
// const emitter = new EventEmitter()
// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
// })
// emitter.on("order-pizza", (size) => {
//     if(size === "large") {
//         console.log(`Serving complimentary drink`)
//     }
// })
// console.log('before event emits')
// emitter.emit("order-pizza", "large", "mashroom")
// console.log('after event emits')

// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// function greetAjit(greetFn) {
//     const name = 'Ajit'
//     greet(name)
// }

// greetAjit(greet)

// const path = require("node:path")
// console.log(__dirname)
// console.log(__filename)
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))
// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))
// console.log(path.parse(__dirname))
// console.log(path.parse(__filename))
// console.log(path.format(path.parse(__dirname)))
// console.log(path.format(path.parse(__filename)))
// console.log(path.isAbsolute(__dirname))
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))
// console.log('///////////////////////////////////////////////')
// console.log(path.join("folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "index.html"))
// console.log(path.join("/folder1", "//folder2", "../index.html"))
// console.log(path.join(__dirname, "data.json"))
// console.log('///////////////////////////////////////////////')
// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))

// const data = require('./data.json')
// console.log(data.name)
// console.log(data.address)
// console.log(data.address.city)

// const {add, subtract} = require('./math')
// const math = require('./math')
// const {add, subtract} = math
// console.log(add(2,3))
// console.log(subtract(2,3))
// console.log(math.add(2,3))
// console.log(math.subtract(2,3))

// const SuperHero = require('./super-hero')
// const batman = new SuperHero('Batman')
// console.log(batman.getName())
// batman.setName('Bruce')
// console.log(batman.getName())

// const superman = new SuperHero('Superman')
// console.log(superman.getName())


// require('./batman')
// require('./superman')

// const add = require('./add')
// console.log("Hello Mr. Ajit")
// const sum = add(1,2)
// console.log(sum)

