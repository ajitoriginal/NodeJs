
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

const data = require('./data.json')
console.log(data)