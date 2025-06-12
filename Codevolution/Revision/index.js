const SuperHero = require("./super-hero")

const batman = new SuperHero("Batman")
console.log(batman.getName())
batman.setName("Bruce Wayne")
console.log(batman.getName())

const superman = new SuperHero("Superman")
console.log(superman.getName())

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
