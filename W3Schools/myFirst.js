const http = require('http')
const dt = require('./myFirstModule')
const url = require('url')

//demo_basic_server
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('Hello World!')
//     res.end()
// }).listen(8080)

//demo_date_time
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('The date and time is: ' + dt.myDateTime())
//     res.end()
// }).listen(8080)

//demo_http_url
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write(req.url)
//     res.end()
// }).listen(8080)

//demo_querystring
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    const q = url.parse(req.url, true).query
    const text = q.year + ' ' + q.month
    res.end(text)
}).listen(8080)