const http = require("node:http")

const PORT = 8080
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Hello Ajit Ji</h1>")
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})