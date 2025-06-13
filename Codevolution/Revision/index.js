const PizzaShop = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on("order", (size, flavour) => {
    console.log(`Order received! Baking a ${size || 'standard'} pizza with flavour ${flavour || 'default'}`)
    drinkMachine.serveDrink(size)

})

pizzaShop.order("large", "corn")
pizzaShop.displayOrderNumber()
pizzaShop.order()
pizzaShop.displayOrderNumber()

// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, flavour) => {
//     console.log(`Order received! Baking a ${size} pizza with flavour ${flavour}`)
// })

// emitter.on("order-pizza", (size) => {
//     if(size === "large") {
//         console.log(`Serving complimentary drink`)
//     }
// })

// console.log("before event occurs")
// emitter.emit("order-pizza", "large", "cheese")

// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// function greetAjit(greetFn) {
//     const name = "Ajit"
//     greetFn(name)
// }

// greetAjit(greet)

//greetAjit is HigherOrderFunction
//greet is callback function

// const path = require("node:path")

// console.log(__dirname)
// console.log(__filename)

// returns last portion of the path
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))

// returns extension of the path
// console.log(path.extname(__dirname))
// console.log(path.extname(__filename))

// returns an object contains some properties of the path
// console.log(path.parse(__dirname))
// console.log(path.parse(__filename))

// returns a string of path
// console.log(path.format(path.parse(__dirname)))
// console.log(path.format(path.parse(__filename)))

// returns whether a path is absolute or not
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// join all arguments together and normalize the resulting path
// console.log(path.join("folder1", "folder2", "file1.txt"))
// console.log(path.join("/folder1", "folder2", "file1.txt"))
// console.log(path.join("/folder1", "//folder2", "file1.txt"))
// console.log(path.join("folder1", "//folder2", "../file1.txt"))
// console.log(path.join("/folder1", "//folder2", "../file1.txt"))
// console.log(path.join("folder1", "folder2", "../file1.txt"))
// console.log(path.join(__dirname, "myfile.html"))

// resolves a sequence of paths or path segments into an abosolute path
// console.log(path.resolve("folder1", "folder2", "file1.txt"))
// console.log(path.resolve("/folder1", "folder2", "file1.txt"))
// console.log(path.resolve("/folder1", "//folder2", "file1.txt"))
// console.log(path.resolve("folder1", "//folder2", "../file1.txt"))
// console.log(path.resolve("/folder1", "//folder2", "../file1.txt"))
// console.log(path.resolve("folder1", "folder2", "../file1.txt"))
// console.log(path.resolve(__dirname, "myfile.html"))

// console.log("Hello Ajit Ji")


// const data = require("./data.json")
// console.log(data.name)
// console.log(data)
// const math = require("./math")

// console.log(math.add(2, 3))
// console.log(math.subtract(2, 3))

// const {add, subtract} = math
// console.log(add(2, 3))
// console.log(subtract(2, 3))

// const SuperHero = require("./super-hero")

// const batman = new SuperHero("Batman")
// console.log(batman.getName())
// batman.setName("Bruce Wayne")
// console.log(batman.getName())

// const superman = new SuperHero("Superman")
// console.log(superman.getName())

// const superHero = require("./super-hero")
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// const newSuperHero = require("./super-hero")
// console.log(newSuperHero.getName())
// require("./batman")
// require("./superman")

// const addFn = require("./add")

// console.log('Hello from index.js')
// const sum = addFn(1, 2)
// const sum2 = addFn(3, 2)
// console.log(sum)
// console.log(sum2)
