// Modules - encapsulated code - you can choose which parts of the code you want to share
// modules let you split your code to different files

const {john, peter} = require("./4-namesForLesson3")
const {sayHi, addTwo} = require("./5-functionsForLesson3")


sayHi("sean")
sayHi(john)
sayHi(peter)
console.log(addTwo(25))
