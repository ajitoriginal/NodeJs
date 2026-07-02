// Every module in Node.js gets wrapped in an IIFE before getting loaded

// IIFE helps keep top-level variables scoped to the module rather than the global object

// The IIFE that wraps every module contains 5 parameters which pretty important for the
// functioning of a module
// (function (exports, require, module, __filename, __dirname) {
//     const superHero = 'Batman'
//     console.log(superHero)
// })()