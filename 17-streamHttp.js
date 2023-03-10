const http = require("http")
const fs = require("fs")

const server = http.createServer()

server.on("request", (req, res)=>{ 
    // const text = fs.readFileSync("./content/big.txt", "utf-8") // sends the whole file in one go. Very slow
    // res.end(text)
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8")

    fileStream.on("open", ()=>{
        fileStream.pipe(res)
    }) 

    fileStream.on("error", (err)=>{
        res.end(err)
    })

})

server.listen(3000, ()=>{
    console.log('listening on port 3000');
})