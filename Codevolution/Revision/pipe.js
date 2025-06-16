const fs = require("node:fs")

const readStream = fs.createReadStream("file.txt", {
    encoding: "utf-8",
    highWaterMark: 2
})

const writeStream = fs.createWriteStream("file2.txt")

// readStream.on("data", (chunk) => {
//     console.log(chunk)
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)