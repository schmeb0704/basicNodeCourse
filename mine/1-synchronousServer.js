const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        return res.end("Home Page")
    }

    if(req.url === "/about"){
        // BLOCKING CODE this literally blocks all the users. It not only blocks the code for the certain user that requests it, it slows everyone down
        
        for(let i = 0; i < 1000; i++){
            for(let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        return res.end("About Page")
    }

    res.end("Error Page")
})

server.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})