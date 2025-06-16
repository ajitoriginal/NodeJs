const http = require("node:http")
const fs = require("node:fs")

const PORT = 8080
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    // const content = fs.readFileSync("index.html", 'utf-8')
    // res.write(content)
    // res.end()
    fs.createReadStream("./index.html").pipe(res)
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})