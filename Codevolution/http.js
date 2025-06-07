const http = require('node:http')

const server = http.createServer((req, res) => {
    let superHero = {
        firstName: 'Tony',
        lastName: 'Clark'
    }
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.writeHead(200, {'Content-Type': 'application/json'})
    // res.end('Hello Ajit!')
    res.end(JSON.stringify(superHero))
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})