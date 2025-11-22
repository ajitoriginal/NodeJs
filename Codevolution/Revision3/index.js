// const addFn = require('./add.js')
// console.log("Hello from index.js")
// console.log(addFn(2,3))

// require('./batman')
// require('./superman')
// const superHero = require('./super-hero.js')
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// const newSuperHero = require('./super-hero.js') //this will be ignored by the first import
// console.log(newSuperHero.getName())

const SuperHero = require("./super-hero.js")
const batman = new SuperHero("Batman")
console.log(batman.getName())
batman.setName("Bruce")
console.log(batman.getName())

const superman = new SuperHero("Superman")
console.log(superman.getName())
superman.setName("Clark")
console.log(superman.getName())

console.log(batman.getName())