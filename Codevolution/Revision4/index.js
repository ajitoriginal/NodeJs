
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
// const buffer = new Buffer.from('Vishwas', 'utf-8')

// buffer.write("Code")
// buffer.write("Codevolution")
// console.log("buffer: ", buffer)
// console.log("buffer.toString(): ", buffer.toString())
// console.log("buffer.toJSON(): ", buffer.toJSON())
// ================================================================================================

// =============================== 25-Asynchronous JavaScript.js ==================================

// ================================================================================================

// ================================ 26-fs Module.js ===============================================
// const fs = require('node:fs')
// // const fileContent = fs.readFileSync('./file.txt')
// console.log('first')
// fs.readFile('./file.txt', 'utf-8', (error, data) => {
//     if (error) throw error
//     console.log('data: ', data)
// })
// console.log('second')

// const fileContent = fs.readFileSync('./file.txt', 'utf-8')
// console.log('fileContent: ', fileContent)
// console.log('third')

// fs.writeFileSync('./greet.txt', 'Hello babes')
// fs.writeFile('./greet.txt', '\nHello cutie', {flag : 'a'}, (err) => {
//     if (err) throw err
//     console.log('File written')
// })
// ================================================================================================

// ================================== 27-fs Promise Module.js =====================================
// const fs = require('node:fs/promises')

// console.log('first')
// fs.readFile('file.txt', 'utf-8')
// .then(data => console.log('data: ', data))
// .catch(err => console.error(err))
// console.log('second')

// console.log('first')
// async function readFile() {
//     try {
//         console.log('second')
//         const data = await fs.readFile('file.txt', 'utf-8')
//         console.log('data: ', data)
//     } catch (err) {
//         console.error(err)
//     }
// }

// console.log('third')

// readFile()
// console.log('forth')
// ================================================================================================

// ============================= 28-Streams.js ====================================================
// const fs = require("node:fs")
// const readableStream = fs.createReadStream("./file.txt", {encoding: "utf-8"})
// const readableStream = fs.createReadStream("./file.txt", {encoding: "utf-8", highWaterMark : 2})
// const writeableStream = fs.createWriteStream("./file2.txt")
// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeableStream.write(chunk)
// })
// ================================================================================================

// ==================================== 29-Pipes.js ===============================================
// const fs = require("node:fs")
// const readableStream = fs.createReadStream("./file.txt", {encoding: "utf-8"})
// const writeableStream = fs.createWriteStream("./file2.txt")
// readableStream.pipe(writeableStream)

// ================================================================================================

// =================================== 31-Creating a Node Server.js ===============================
// const http = require("node:http")

// const PORT = 3000

// const server = http.createServer((req, res) => {
//     console.log("req: ", req)
//     console.log(Object.keys(req).length)
   
//     res.writeHead(200, {"Content-Type": "text/plain"})
//     res.end("Hello buddies!")
// })

// server.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`)
// })
// ================================================================================================

// ==================================== 32-JSON Response.js =======================================
// const http = require("node:http")

// const PORT = 3000

// const server = http.createServer((req, res) => {
//     // console.log("req: ", req)
//     // console.log(Object.keys(req).length)
//     const superHero = {
//         firstName : "Tony",
//         lastName : "Stark"
//     }
//     // res.writeHead(200, {"Content-Type": "text/plain"})
//     res.writeHead(200, {"Content-Type": "application/json"})
//     // res.end("Hello buddies!")
//     const stringify = JSON.stringify(superHero)
//     const parse = JSON.parse(stringify)
//     res.end(JSON.stringify(superHero))
//     console.log("stringify: ", stringify )
//     console.log("parse: ", parse )
// })

// server.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`)
// })

// ================================================================================================