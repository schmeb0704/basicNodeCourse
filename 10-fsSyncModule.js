const {readFileSync, writeFileSync} = require("fs") // runs code line by line, blocking code. could be time consuming. Node will not be able to do other tasks if it's not done with the task yet

console.log("start")
const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")

console.log(first)
console.log(second)


writeFileSync("./content/third.txt", `This is created using writeFileSync. Combinig text from first and second. Result: ${first} ${second}`) // creates a file if it does not exist, and overwrites the file if it exists

writeFileSync("./content/third.txt", "\n I am just appending this line, not overwriting the whole file", {flag: "a"})

console.log("done with task")
console.log("starting with next task")


