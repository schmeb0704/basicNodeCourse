const http = require("http")

const server = http.createServer()

server.on("request", (req, res)=>{ // this makes use of the ".on" eventEmitter that is built in to http module. See 12-http for alternative syntax
    res.end("Welcome!")
})

server.listen(5000, ()=>{
    console.log("listening on port 5000");
})