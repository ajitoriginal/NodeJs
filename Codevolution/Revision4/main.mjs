// import add from './math-esm.mjs'
// const sum = add(2, 4)
// console.log(sum)

// import addFn from './math-esm.mjs'
// const sum = addFn(3, 4)
// console.log(sum)

// import math from './math-esm.mjs'
// const sum = math.add(2, 4)
// const deduction = math.subtract(2, 4)
// console.log(sum)
// console.log(deduction)

// import * as mathFn from './math-esm.mjs'
import {add, subtract} from './math-esm.mjs'
// const {add, subtract} = mathFn
// const sum = mathFn.add(2, 4)
// const deduction = mathFn.subtract(2, 4)
const sum = add(2, 4)
const deduction = subtract(2, 4)
console.log(sum)
console.log(deduction)