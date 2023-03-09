const {readFile, writeFile} = require("fs") // node can automatically start another task while doing the first task

console.log("start");
readFile("./content/first.txt","utf-8", (err, res)=>{
    if(err){
        console.log(err)
        return
    }
    const firstText = res
    readFile("./content/second.txt", "utf-8", (err, res)=>{
        if(err){
            console.log(err)
            return
        }
        const secondText = res
        writeFile("./content/fourthAsync.txt", `This is created using writeFile. Combining text from first and second. Result: ${firstText} ${secondText}`, (err, res)=>{
            if(err){
                console.log(err)
                return
            }
            console.log("done with this task")
            
        })
    })
})
console.log("starting next task");