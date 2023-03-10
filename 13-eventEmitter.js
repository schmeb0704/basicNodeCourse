const EventEmitter = require("events")

const customEmitter = new EventEmitter()

let count = 0

// events

customEmitter.on("response", (num)=>{
    console.log(`data ${num} recieved`);
})

customEmitter.on("push", ()=>{
    console.log(`I am pushed `);
})


// emitters

for (let i = 0; i < 10; i++){
    count++
    customEmitter.emit("response", count)
}


setTimeout(() => {
    customEmitter.emit("push")
}, 2000); 