const http = require('node:http')
const fs = require('node:fs')
const server = http.createServer((req, res) => {
    let superHero = {
        firstName: 'Tony',
        lastName: 'Clark'
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    // res.writeHead(200, {'Content-Type': 'application/json'})
    // const file = fs.readFileSync('./index.html', 'utf-8')
    // fs.createReadStream('./index.html').pipe(res)
    fs.createReadStream(__dirname + '/index.html').pipe(res)
    // res.end(file)
    // res.end(JSON.stringify(superHero))
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})