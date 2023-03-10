const {readFile, writeFile} = require("fs").promises

const start = async () => {
    try{
        const first = await readFile("./content/first.txt", "utf-8")
        const third = await readFile("./content/third.txt", "utf-8")

        await writeFile("./content/usingPromises.txt", `This is created using promises. Combinig text from first and third text files. Result: ${first} ${third}`)
        console.log(first, third)
    }catch(err){
        console.log(err);
    }
}

start()






// ALTERNATIVE SYNTAX

/*
const {readFile, writeFile} = require("fs")
const util = require("util")
const readFilePromise = util.promisify(readFile) // turns a synchronous blocking code to a promise in just one line
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFilePromise("./content/first.txt", "utf-8")
        const third = await readFilePromise("./content/third.txt", "utf-8")

        await writeFilePromise("./content/madeWithPromise.txt", `This is created using promises. Combinig text from first and third text files. Result: ${first} ${third}`)
        console.log(first, third)
    }catch(err){
        console.log(err);
    }
}

start()
*/