const http = require("http")

const server = http.createServer((req, res)=>{ //req is what we're getting, res is what we're sending - both are objects
    if(req.url === '/'){
        return res.end("Welcome to home page")

    } else if(req.url === '/about'){
        return res.end("Who are we?") // put return so js will stop reading till the end of the code and sending 2 responses to the same request
    }

    res.end(`
        <h1>Oops! Page not found</h1>
        <p>Can't find the page you're looking for</p>
        <a href="/">Home</a>
    `)

})

server.listen(5000)