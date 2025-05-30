const http = require('http')
const dt = require('./myFirstModule')
const url = require('url')
const fs = require('fs')

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
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     const q = url.parse(req.url, true).query
//     const text = q.year + ' ' + q.month
//     res.end(text)
// }).listen(8080)

//demo_readfile
// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function (err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data)
//         return res.end()
//     })
// }).listen(8080)

//demo_appendfile
// http.createServer(function (req, res) {
//     if(err) throw err
//     fs.appendFile('mynewfile1.txt', 'New content', function (err, data) {
//         return res.end()
//     })
// }).listen(8080)

//demo_openfile
// http.createServer(function (req, res) {
//     fs.open('mynewfile1.txt', 'w', function (err, data) {
//         if(err) throw err
//         return res.end()
//     })
// }).listen(8080)

//demo_writefile
// http.createServer(function (req, res) {
//     fs.writeFile('mynewfile2.txt', 'My content is here!', function (err, data) {
//         if(err) throw err
//         res.write('File Created!')
//         return res.end()
//     })
// }).listen(8080)

//demo_deletefile
// http.createServer(function (req, res) {
//     fs.unlink('mynewfile2.txt', function (err, data) {
//         if(err) throw err
//         res.write('File Deleted!')
//         return res.end()
//     })
// }).listen(8080)

//demo_renamefile
http.createServer(function (req, res) {
    fs.rename('mynewfile5.txt', 'mynewfile5renamed.txt', function (err, data) {
        if(err) throw err
        res.write('File Renamed!')
        return res.end()
    })
}).listen(8080)
