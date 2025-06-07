const http = require('node:http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello Ajit!')
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})