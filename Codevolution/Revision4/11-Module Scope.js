// - Each loaded module in Node.js is wrapped with an IIFE that provides private scoping of code
// - IIFE allows you to repeat variable or function names without any conflicts

// IIFE (Immediately Invoked Function Expression) in Node.js
// - (function () {
//     // Module code actually lives in here
// })
// - Before a module code is executed, Node.js will wrap it with a function wrapper that provides module scope
// - This saves as from having to worry about conflicting variables or functions
// - There is proper encapsulation and reusability is unaffected