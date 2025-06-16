const http = require("node:http")

const PORT = 8080
const server = http.createServer((req, res) => {
    const superHero = {
        name: "Ajit",
        age: 28
    }
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.writeHead(200, {'Content-Type': 'application/json'})
    // res.write("<h1>Hello Ajit Ji</h1>")
    res.write(JSON.stringify(superHero))
    res.end()
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})