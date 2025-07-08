const SuperHero = require('./super-hero')
const batman = new SuperHero('Batman')
console.log(batman.getName())
batman.setName('Bruce')
console.log(batman.getName())

const superman = new SuperHero('Superman')
console.log(superman.getName())


// require('./batman')
// require('./superman')

// const add = require('./add')
// console.log("Hello Mr. Ajit")
// const sum = add(1,2)
// console.log(sum)

