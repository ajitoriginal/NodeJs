// const add = require('./add')
// console.log('Hello from index.js')
// const sum = add(1,4)
// console.log('sum:', sum)

const path = require("path")

console.log(`dirname: ${__dirname}`)
console.log(`filename: ${__filename}`)

console.log(`path basename dirname: ${path.basename(__dirname)}`)
console.log(`path basename filename: ${path.basename(__filename)}`)

console.log(`path extname dirname: ${path.extname(__dirname)}`)
console.log(`path extname filename: ${path.extname(__filename)}`)

console.log('path parse filename:', path.parse(__filename))

console.log('path format parse filename:', path.format(path.parse(__filename)))

console.log('path isAbsolute filename:', path.isAbsolute(__filename))
console.log('path isAbsolute filename:', path.isAbsolute('./data.json'))

console.log('path join:', path.join('folder1', 'folder2', 'index.html'))
console.log('path join:', path.join(__dirname, 'text.js'))

console.log('path resolve:', path.resolve('folder1', 'folder2', 'index.html'))
console.log('path resolve:', path.resolve('/folder1', 'folder2', 'index.html'))
console.log('path resolve:', path.resolve('/folder1', '//folder2', 'index.html'))
console.log('path resolve:', path.resolve('/folder1', '//folder2', '../index.html'))
console.log('path resolve:', path.resolve(__dirname, 'text.js'))
