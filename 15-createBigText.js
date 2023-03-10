const {writeFileSync} = require("fs")

for(let i = 0; i < 100000; i++){
    writeFileSync("./content/big.txt", `random text ${i} \n`, {flag: "a"})
}