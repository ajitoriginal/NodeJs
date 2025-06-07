const fs = require('fs')

console.log('First')
const filesContent = fs.readFileSync('./file.txt', 'utf-8')
console.log(filesContent)

console.log('Second')

fs.readFile('file.txt', 'utf-8', (error, data) => {
    if(error) {
        console.log(error)
    } else {
        console.log('readFile',data)
    }
})

console.log('Third')

fs.writeFileSync('./greet.txt', 'Hello Ajit')
fs.writeFile('./greet.txt', ' Hello Singh', {flag: "a"}, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('File written in writeFile')
    }
})

fs.appendFile('./greet.txt', ' Hello Singh', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('File written in appendFile')
    }
})

