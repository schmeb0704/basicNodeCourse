const path = require("path") //imports path

console.log(path.sep)

const filePath = path.join("\content", "subfolder", "test.txt") // returns a normalized path (string)
console.log(filePath)

const base = path.basename(filePath) // returns the last part of the path that is passed as a parameter (string)
console.log(base)

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt") // returns the absolute path of the directory you are trying to access
console.log(absolute)