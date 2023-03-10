const {createReadStream} = require("fs") // reads files in chunks

const stream = createReadStream("./content/big.txt", {highWaterMark: 90000, /*encoding: "utf-8"*/})

// default size of chunks is 64kb
// usually the last chunk is the remainder
// adding the {highWaterMark: (size)} param to createReadStream controls the size of the chunks
// adding the {encoding: (encoding style)} param to createReadStream controls the encoding mode of the file



stream.on("data", result => {
    console.log(result);
})

stream.on("error", result => {
    console.log(result);
})