const os = require("os") // imports the os module

// info about current user
const user = os.userInfo()
console.log(user)

// returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()/1_000_000_000,
    freeMem: os.freemem()/1_000_000_000
}

console.log(currentOS)