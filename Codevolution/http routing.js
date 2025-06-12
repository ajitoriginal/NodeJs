const http = require('node:http')
const fs = require('node:fs')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Home page')
    } else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('About page')
    } else if(req.url === '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({firstName: 'Ajit', lastName: 'Singh'}))
    } else {
        res.writeHead(400)
        res.end('Page not found')
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})